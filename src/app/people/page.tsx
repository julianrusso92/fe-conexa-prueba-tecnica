import Image from "next/image";
import { People, PeopleResult } from "../../../global";
import Link from "next/link";
import SearchBar from "@/components/search-bar/search-bar";

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/people`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Card = ({ person }: { person: PeopleResult }) => {
  return (
    <div className="basis-1/3 p-2 hover:opacity-70 cursor-pointer">
      <div className="border border-gray-400 rounded flex">
        <Image
          src="/card-left.jpg"
          alt="background image"
          width={100}
          height={400}
        />
        <div className="m-2">
          <div className="text-xl font-semibold">{person.name}</div>
          <div className="font-light">Nacimiento: {person.birth_year}</div>
          <div className="font-light">Genero: {person.gender}</div>
          {/* <Link href={`/people/${person.url.split("/").reverse()[1]}`}> */}
          <Link
            // as={`people/${person.name}`}
            href={{
              pathname: `people/${person.name}`,
              query: { url: person.url },
            }}
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default async function Page() {
  const data: People = await getData();
  return (
    <div>
      <SearchBar />
      <div className="flex flex-wrap gap-0">
        {data.results.map((person) => (
          <Card key={person.name} person={person} />
        ))}
      </div>
    </div>
  );
}
