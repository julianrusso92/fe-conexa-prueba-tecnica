"use client";

import { useState } from "react";
import Nav from "./nav";
import DialogWrapper from "./dialog";
import { NavigationProps } from "../../../global";

const navigation: NavigationProps[] = [
  { name: "People", href: "/people" },
  { name: "Films", href: "/films" },
  { name: "Planets", href: "/planets" },
  { name: "Starships", href: "/starships" },
];
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setMobileMenuOpen(true);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <Nav
          navigation={navigation}
          openMobileMenu={openMobileMenu}
          mobileMenuOpen={mobileMenuOpen}
        />
        <DialogWrapper
          navigation={navigation}
          mobileMenuOpen={mobileMenuOpen}
          closeMobileMenu={closeMobileMenu}
        />
      </header>
    </div>
  );
}
