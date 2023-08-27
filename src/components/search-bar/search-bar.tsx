"use client";
import { useState, useRef } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState<string | null>(null);
  const debounceRef = useRef<NodeJS.Timeout>();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      console.log("debounce", e.target.value);
      setQuery(e.target.value);
    }, 500);
  };

  return (
    <>
      <label className="mr-2">Search by name</label>
      <input type="text" onChange={handleSearch} />
    </>
  );
}
