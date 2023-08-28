"use client";
import { useRouter } from "next/navigation";
const NavButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      className="w-full text-zinc-500 border border-zinc-500 hover:bg-zinc-500 hover:text-white active:bg-zinc-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none block mt-2"
      onClick={() => router.back()}
    >
      Back
    </button>
  );
};

export default NavButton;
