import Await from "@/components/await/await";
import SearchBar from "@/components/search-bar/search-bar";
import Link from "next/link";
import { Starships } from "../../../global";
import Card from "@/components/card/card";
import { fetchWithSearch } from "@/utils/fetch-with-search";

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const search =
    typeof searchParams.search === "string"
      ? (searchParams.search as string)
      : undefined;

  const promiseStarships: Promise<Starships> = fetchWithSearch({
    page,
    search,
    resource: "starships",
  });

  return (
    <section className="py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-y-0 gap-y-2 md:gap-x-16 px-2">
          <h1 className="text-3xl font-bold">Starships</h1>

          <div className="grow">
            <SearchBar search={search} resource="starships" />
          </div>
          <div className="flex space-x-6">
            <Await promise={promiseStarships}>
              {(data) => (
                <>
                  <Link
                    href={{
                      pathname: "/starships",
                      query: {
                        ...(search ? { search } : {}),
                        page: page > 1 ? page - 1 : 1,
                      },
                    }}
                    className={`${
                      data.previous
                        ? "rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800"
                        : "pointer-events-none opacity-50"
                    }`}
                  >
                    Previous
                  </Link>
                  <Link
                    href={{
                      pathname: "/starships",
                      query: {
                        ...(search ? { search } : {}),
                        page: page + 1,
                      },
                    }}
                    className={`${
                      data.next
                        ? "rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800"
                        : "pointer-events-none opacity-50"
                    }`}
                  >
                    Next
                  </Link>
                </>
              )}
            </Await>
          </div>
        </div>

        <Await promise={promiseStarships}>
          {(data) => (
            <div className="flex flex-wrap gap-0 md:gap-4">
              {data.results.map((starship) => (
                <Card key={starship.name}>
                  <div className="text-xl font-semibold">{starship.name}</div>
                  <div className="font-light">Model: {starship.model}</div>
                  <div className="font-light">
                    Manufacturer: {starship.manufacturer}
                  </div>
                  <Link
                    className="text-zinc-500 border border-zinc-500 hover:bg-zinc-500 hover:text-white active:bg-zinc-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none block mt-2"
                    href={{
                      pathname: `starships/${starship.name}`,
                      query: { url: starship.url },
                    }}
                  >
                    Show details
                  </Link>
                </Card>
              ))}
            </div>
          )}
        </Await>
      </div>
    </section>
  );
}
