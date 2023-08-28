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
    <div className="flex mt-5 justify-center items-start">
      {/* <div className="basis-1/5 border border-stone-500 rounded p-1">
        <Image
          src="/card-left.jpg"
          className="rounded"
          alt="background image"
          width={1024}
          height={1024}
        />
      </div> */}
      <NavButton />
      <div className="basis-4/5 px-4">
        <h1 className="text-3xl">{planet.name}</h1>
        <ul className="">
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
