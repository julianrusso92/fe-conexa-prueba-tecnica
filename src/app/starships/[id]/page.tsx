import NavButton from "@/components/button/nav-button";
import { StarshipResult } from "../../../../global";

async function getData(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const starship: StarshipResult = await res.json();
  return starship;
}

const Detail = ({ starship }: { starship: StarshipResult }) => {
  return (
    <div className="flex mt-5 justify-center items-start">
      <NavButton />
      <div className="basis-4/5 px-4">
        <h1 className="text-3xl">{starship.name}</h1>
        <ul className="">
          <li className="">
            <span className="text-lg font-bold">Model:</span> {starship.model}
          </li>
          <li className="">
            <span className="text-lg font-bold">Manufacturer:</span>{" "}
            {starship.manufacturer}
          </li>
          <li className="">
            <span className="text-lg font-bold">Cost in credits:</span>{" "}
            {starship.cost_in_credits}
          </li>
          <li className="">
            <span className="text-lg font-bold">Length:</span> {starship.length}
          </li>
          <li className="">
            <span className="text-lg font-bold">Passengers:</span>{" "}
            {starship.passengers}
          </li>

          <li className="">
            <span className="text-lg font-bold">MGLT:</span> {starship.MGLT}
          </li>
          <li className="">
            <span className="text-lg font-bold">Consumables:</span>{" "}
            {starship.consumables}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default async function PersonDetail({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const url = searchParams.url;
  const starship: StarshipResult = await getData(url as string);
  return <Detail starship={starship} />;
}
