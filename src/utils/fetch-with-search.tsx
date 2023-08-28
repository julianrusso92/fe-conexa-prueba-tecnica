export async function fetchWithSearch({
  page,
  search,
  resource,
}: {
  page: number;
  search: string | undefined;
  resource: string;
}) {
  let url = `${process.env.BASE_URL}/${resource}/`;

  if (search) {
    url += `?search=${search}`;
  }

  if (page) {
    url += `${search ? "&" : "?"}page=${page}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
