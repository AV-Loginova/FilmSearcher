import Image from "next/image";
import MovieCard from "./components/MovieCard";

export default async function Home() {
  const res = await fetch(`https://www.omdbapi.com/?apikey=57a8c5c7&t=Avatar`);
  const data = await res.json();
  return (
    <main className="flex flex-col items-center gap-4">
      <p className="font-bold text-4xl">The Film Searcher</p>
      <p>Find the information about your favourite movies.</p>
      <MovieCard props={data} />
    </main>
  );
}
