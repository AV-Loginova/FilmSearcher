"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface Rating {
  Source: string;
  Value: string;
}

interface MovieData {
  Title: string;
  Plot: string;
  Poster: string;
  Year: string;
  Rated: string;
  Genre: string;
  Runtime: string;
  Director: string;
  Actors: string;
  Country: string;
  Ratings: Rating[];
  BoxOffice: string;
  Response: string;
}

function Dynamic() {
  const movie = usePathname();
  const route = useRouter();

  const [movieData, setMovieData] = useState<MovieData | null>(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        if (!movie) return;
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=57a8c5c7&t=${movie.trim()}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie data");
        }
        const data: MovieData = await response.json();
        if (data.Response === "False") {
          route.push("/error");
        } else {
          setMovieData(data);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [movie]);

  if (!movieData) {
    return <div className="loader mx-auto md:my-[15%] my-[50%]"></div>;
  }

  return (
    <section className="max-w-[80%] md:max-w-[40%] p-5 flex flex-col items-center gap-2 bg-[#414557] rounded-xl mb-5 m-auto">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl">{movieData.Title}</h1>
        <p className="italic">{movieData.Year}</p>
      </div>
      <div className="flex gap-7 flex-col md:flex-row text-center md:text-start items-start">
        <div className="flex flex-col">
          <p className="border-[1px] text-center"> {movieData.Rated}</p>
          <Image
            src={movieData.Poster}
            width={600}
            height={600}
            alt={`${movieData.Title} poster`}
          />
          <p className="text-center italic text-sm">{movieData.Genre}</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-bold">
            Country: <span className=" font-normal">{movieData.Country}</span>
          </p>
          <p className="font-bold">
            Box Office:{" "}
            <span className=" font-normal">{movieData.BoxOffice}</span>
          </p>

          <p className="font-bold">
            Director:{" "}
            <span className=" font-normal"> {movieData.Director}</span>
          </p>
          <p className="font-bold">
            Actors: <span className=" font-normal">{movieData.Actors}</span>
          </p>
          <p className="italic">{movieData.Plot}</p>
        </div>
      </div>
      <table className="table table-pin-rows">
        <thead>
          <tr>
            <th>Source:</th>
            <th>Rating:</th>
          </tr>
        </thead>
        <tbody>
          {movieData?.Ratings?.map((rating: any, index: number) => (
            <tr key={index}>
              <th>{rating.Source}</th>
              <th>{rating.Value}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Dynamic;
