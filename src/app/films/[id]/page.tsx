import NavButton from "@/components/button/nav-button";
import { FilmResult } from "../../../../global";

async function getData(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const film: FilmResult = await res.json();
  return film;
}

const Detail = ({ film }: { film: FilmResult }) => {
  return (
    <div className="flex flex-col items-center mt-5 md:flex-row md:items-start">
      <div className="w-full md:w-1/5 px-4 mb-4 md:mb-0">
        <NavButton />
      </div>
      <div className="w-full md:w-4/5 px-4">
        <h1 className="text-4xl mb-4 font-bold">Film</h1>
        <h1 className="text-2xl font-bold">{film.title}</h1>
        <ul className="mt-4">
          <li className="">
            <span className="text-lg font-bold">Director:</span> {film.director}
          </li>
          <li className="">
            <span className="text-lg font-bold">Episode:</span>{" "}
            {film.episode_id}
          </li>
          <li className="">
            <span className="text-lg font-bold">Producer:</span> {film.producer}
          </li>
          <li className="">
            <span className="text-lg font-bold">Release date:</span>{" "}
            {film.release_date}
          </li>
          <li className="">
            <span className="text-lg font-bold">Opening crawl:</span>{" "}
            {film.opening_crawl}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const url = searchParams.url;
  const film: FilmResult = await getData(url as string);
  return <Detail film={film} />;
}
