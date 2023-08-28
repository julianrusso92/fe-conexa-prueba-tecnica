import Await from "@/components/await/await";
import Card from "@/components/card/card";
import SearchBar from "@/components/search-bar/search-bar";
import { fetchWithSearch } from "@/utils/fetch-with-search";
import Link from "next/link";
import { Planets } from "../../../global";

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

  const promisePlanets: Promise<Planets> = fetchWithSearch({
    page,
    search,
    resource: "planets",
  });

  return (
    <section className="py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-y-0 gap-y-2 md:gap-x-16 px-2">
          {/* <div className="flex px-2 items-center justify-between gap-x-16"> */}
          <h1 className="text-3xl font-bold">Planets</h1>

          <div className="grow">
            <SearchBar search={search} resource="planets" />
          </div>
          <div className="flex space-x-6">
            <Await promise={promisePlanets}>
              {(data) => (
                <>
                  <Link
                    href={{
                      pathname: "/planets",
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
                      pathname: "/planets",
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
        {/* </div> */}

        {/* <Suspense fallback={<Skeleton />}> */}
        <Await promise={promisePlanets}>
          {(data) => (
            <div className="flex flex-wrap gap-0">
              {data.results.map((planet) => (
                // <Card key={person.name} person={person} />
                <Card key={planet.name}>
                  <div className="text-xl font-semibold">{planet.name}</div>
                  <div className="font-light">Climate: {planet.climate}</div>
                  <div className="font-light">
                    Population: {planet.population}
                  </div>
                  <Link
                    className="text-zinc-500 border border-zinc-500 hover:bg-zinc-500 hover:text-white active:bg-zinc-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none block mt-2"
                    href={{
                      pathname: `planets/${planet.name}`,
                      query: { url: planet.url },
                    }}
                  >
                    Show details
                  </Link>
                </Card>
              ))}
            </div>
          )}
        </Await>

        {/* </Suspense> */}
      </div>
    </section>
  );
}
