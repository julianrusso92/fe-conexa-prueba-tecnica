async function getData() {
  const res = await fetch("http://localhost:3000/starships");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  const starships = data.results;
  return (
    <div>
      {/* <Header title="Develop. Preview. Ship. 🚀" /> */}
      <h1>Starships</h1>
      <ul>
        {starships.map((starship: any) => (
          <li key={starship.name}>{starship.name}</li>
        ))}
      </ul>
    </div>
  );
}
