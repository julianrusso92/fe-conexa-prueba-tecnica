import NavButton from "@/components/button/nav-button";
import { PersonResult } from "../../../../global";

async function getData(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const person: PersonResult = await res.json();
  return person;
}

const Detail = ({ person }: { person: PersonResult }) => {
  return (
    <div className="flex mt-5 justify-center items-start">
      <NavButton />
      <div className="basis-4/5 px-4">
        <h1 className="text-3xl">{person.name}</h1>
        <ul className="">
          <li className="">
            <span className="text-lg font-bold">Height:</span> {person.height}
          </li>
          <li className="">
            <span className="text-lg font-bold">Mass:</span> {person.mass}
          </li>
          <li className="">
            <span className="text-lg font-bold">Hair color:</span>{" "}
            {person.hair_color}
          </li>
          <li className="">
            <span className="text-lg font-bold">Skin color:</span>{" "}
            {person.skin_color}
          </li>
          <li className="">
            <span className="text-lg font-bold">Eye color:</span>{" "}
            {person.eye_color}
          </li>

          <li className="">
            <span className="text-lg font-bold">Birth year:</span>{" "}
            {person.birth_year}
          </li>
          <li className="">
            <span className="text-lg font-bold">Gender:</span> {person.gender}
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
  const person: PersonResult = await getData(url as string);
  return <Detail person={person} />;
}
