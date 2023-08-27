import { Bars3Icon } from "@heroicons/react/24/outline";
import { NavProps } from "../../../global";

export default function Nav({
  navigation,
  openMobileMenu,
  mobileMenuOpen,
}: NavProps) {
  return (
    <nav
      className={`flex items-center ${
        mobileMenuOpen === true ? "justify-end" : "justify-center"
      } p-6 lg:px-8`}
      aria-label="Global"
    >
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={openMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
