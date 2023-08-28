// import Image from "next/image";
import { PersonResult } from "../../../global";
import Link from "next/link";

const Card = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mt-2 px-2">
      <div className="border border-gray-400 rounded p-4">{children}</div>
      {/* <div className="border border-gray-400 rounded flex ">
        <div className="flex flex-col m-2 gap-y-1">{children}</div>
      </div> */}
    </div>
  );
};

export default Card;
