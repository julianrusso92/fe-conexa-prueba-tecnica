import Image from "next/image";
import NavButton from "@/components/button/nav-button";
import { PlanetResult } from "../../../../global";

async function getData(url: string) {
  const res = await fetch(url);
  // const res = await fetch(`${process.env.BASE_URL}/people/${url}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const planet: PlanetResult = await res.json();
  return planet;
}

const Detail = ({ planet }: { planet: PlanetResult }) => {
  return (
    <div className="flex flex-col items-center mt-5 md:flex-row md:items-start">
      <div className="w-full md:w-1/5 px-4 mb-4 md:mb-0">
        <NavButton />
      </div>
      <div className="w-full md:w-4/5 px-4">
        <h1 className="text-4xl mb-4 font-bold">Planet</h1>
        <h1 className="text-2xl font-bold">{planet.name}</h1>
        <ul className="mt-4">
          <li className="">
            <span className="text-lg font-bold">Climate:</span> {planet.climate}
          </li>
          <li className="">
            <span className="text-lg font-bold">Population:</span>{" "}
            {planet.population}
          </li>
          <li className="">
            <span className="text-lg font-bold">Diameter:</span>{" "}
            {planet.diameter}
          </li>
          <li className="">
            <span className="text-lg font-bold">Gravity:</span> {planet.gravity}
          </li>
          <li className="">
            <span className="text-lg font-bold">Orbital_period:</span>{" "}
            {planet.orbital_period}
          </li>

          <li className="">
            <span className="text-lg font-bold">Terrain:</span> {planet.terrain}
          </li>
          <li className="">
            <span className="text-lg font-bold">Rotation_period:</span>{" "}
            {planet.rotation_period}
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
  const planet: PlanetResult = await getData(url as string);
  return <Detail planet={planet} />;
}
