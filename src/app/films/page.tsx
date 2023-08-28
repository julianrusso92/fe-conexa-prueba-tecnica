import Await from "@/components/await/await";
import SearchBar from "@/components/search-bar/search-bar";
import Link from "next/link";
import { Films } from "../../../global";
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

  const promiseFilms: Promise<Films> = fetchWithSearch({
    page,
    search,
    resource: "films",
  });

  return (
    <section className="py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-y-0 gap-y-2 md:gap-x-16 px-2">
          <h1 className="text-3xl font-bold">Films</h1>

          <div className="grow">
            <SearchBar search={search} resource="films" />
          </div>
          <div className="flex space-x-6">
            <Await promise={promiseFilms}>
              {(data) => (
                <>
                  <Link
                    href={{
                      pathname: "/films",
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
                      pathname: "/films",
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

        <Await promise={promiseFilms}>
          {(data) => (
            <div className="flex flex-wrap gap-0">
              {data.results.map((film) => (
                <Card key={film.title}>
                  <div className="text-xl font-semibold">{film.title}</div>
                  <div className="font-light">Director: {film.director}</div>
                  <div className="font-light">Episode: {film.episode_id}</div>
                  <Link
                    className="text-zinc-500 border border-zinc-500 hover:bg-zinc-500 hover:text-white active:bg-zinc-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none block mt-2"
                    href={{
                      pathname: `films/${film.title}`,
                      query: { url: film.url },
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
