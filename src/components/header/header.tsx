import { Bars3Icon } from "@heroicons/react/24/outline";
import { NavigationProps } from "../../../global"; //revisar esto

//Sacar esto y ponerlo en un JSON
const navigation: NavigationProps[] = [
  { name: "People", href: "/people" },
  { name: "Films", href: "/films" },
  { name: "Planets", href: "/planets" },
  { name: "Starships", href: "/starships" },
];

export default function Header() {
  return (
    <div>
      <header className="flex justify-center items-center">
        {/* <a href="/#" className="inline-flex">
          Logo
        </a> */}
        <nav>
          <ul className="flex [&>li>a]:inline-block">
            {navigation.map((item) => (
              <li className="" key={item.name}>
                <a
                  className="hover:bg-orange-custom hover:text-gray-500 hover:rounded px-2 py-4"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* <div className="hidden lg:block">
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </div> */}
      </header>
    </div>
  );
}
