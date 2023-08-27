import Image from "next/image";
import { PeopleResult } from "../../../../global";

async function getData(url: string) {
  console.log("🚀 ~ file: page.tsx:5 ~ getData ~ id:", url);
  const res = await fetch(url);
  // const res = await fetch(`${process.env.BASE_URL}/people/${url}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const person: PeopleResult = await res.json();
  return person;
}

const Detail = ({ person }: { person: PeopleResult }) => {
  return (
    <div className="flex mt-5 justify-center">
      <div className="basis-1/5 border border-stone-500 rounded p-1">
        <Image
          src="/card-left.jpg"
          className="rounded"
          alt="background image"
          width={1024}
          height={1024}
        />
      </div>
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
  console.log("🚀 ~ file: page.tsx:69 ~ searchParams:", url);
  console.log("🚀 ~ file: page.tsx:69 ~ params:", params);
  // console.log(params.id);
  const person: PeopleResult = await getData(url as string);
  // console.log("🚀 ~ file: page.tsx:19 ~ person:", person);
  return <Detail person={person} />;
  return <></>;
}
