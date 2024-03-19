import Image from "next/image";
import React from "react";

interface Rating {
  Source: string;
  Value: string;
}

interface Props {
  props: {
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
  };
}

function MovieCard({ props }: Props) {
  return (
    <section className="max-w-[80%] md:max-w-[40%] p-5 flex flex-col items-center gap-2 bg-[#414557] rounded-xl mb-5">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl">{props.Title}</h1>
        <p className="italic">{props.Year}</p>
      </div>
      <div className="flex gap-7 flex-col md:flex-row text-center md:text-start items-start">
        <div className="flex flex-col">
          <p className="border-[1px] text-center"> {props.Rated}</p>
          <Image
            src={props.Poster}
            width={600}
            height={600}
            alt={`${props.Title} poster`}
          />
          <p className="text-center italic text-sm">{props.Genre}</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-bold">
            Country: <span className=" font-normal">{props.Country}</span>
          </p>
          <p className="font-bold">
            Box Office: <span className=" font-normal">{props.BoxOffice}</span>
          </p>

          <p className="font-bold">
            Director: <span className=" font-normal"> {props.Director}</span>
          </p>
          <p className="font-bold">
            Actors: <span className=" font-normal">{props.Actors}</span>
          </p>
          <p className="italic">{props.Plot}</p>
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
          {props.Ratings.map((rating) => (
            <tr>
              <th>{rating.Source}</th>
              <th>{rating.Value}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default MovieCard;
