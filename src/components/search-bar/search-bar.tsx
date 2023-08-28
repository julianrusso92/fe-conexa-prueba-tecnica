"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useDebounce } from "use-debounce";

export default function SearchBar({
  search,
  resource,
}: {
  search?: string;
  resource: string;
}) {
  const router = useRouter();
  const initialRender = useRef(true);
  const [text, setText] = useState<string | undefined>(search);
  const [query] = useDebounce(text, 300);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (query) {
      router.push(`/${resource}?search=${query}`);
    } else {
      router.push(`/${resource}`);
    }
  }, [query, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);

    console.log(e.target.value);
  };

  return (
    <div className="relative rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </div>
      <input
        value={text || ""}
        // placeholder="Search people"
        onChange={handleChange}
        className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
}
