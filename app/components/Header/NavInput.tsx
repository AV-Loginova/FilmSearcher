"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

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

function NavInput() {
  const [input, setInput] = useState<string>("");
  const [hint, setHint] = useState<MovieData | null>(null);
  const route = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      route.push(`/${input}`);
      setInput("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (input) {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=57a8c5c7&t=${input.trim()}`
        );

        const data: MovieData = await res.json();
        setHint(data);
      }
    };
    fetchData();
  }, [input]);

  function handleClick() {
    if (hint?.Response === "True") {
      route.push(`/${hint.Title}`);
    }
  }
  return (
    <div className="flex flex-col gap-1">
      <input
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Search"
        className="input input-bordered w-[250px] md:w-auto"
      />
      <div
        onClick={handleClick}
        className={`md:bg-[#414557] bg-[#F8F8F2] md:w-[215px] w-[250px] md:text-white text-[#414557] h-[auto] rounded-[10px] p-2 
        text-center absolute ${
          hint?.Response === "True" ? "cursor-pointer	" : "cursorcursor-default"
        } top-[65px] ${input === "" && "hidden"}`}
      >
        {hint?.Response !== "False"
          ? `${hint?.Title}, ${hint?.Year}`
          : "Film not found"}
      </div>
    </div>
  );
}

export default NavInput;
