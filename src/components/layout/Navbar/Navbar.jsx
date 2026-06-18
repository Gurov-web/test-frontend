import { useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import MobileMenuToggle from "./MobileMenuToggle";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="px-4 sm:px-6 lg:px-12.5 py-4 bg-[#0E0E0E] shadow-2xl shadow-[#a0ffb910] relative">
      <NavbarDesktop />

      <div className="flex md:hidden items-center justify-between">
        <Link to="/" className="text-primary text-2xl font-bold">
          ВВ ГРУПП
        </Link>
        <MobileMenuToggle isOpen={isOpen} onClick={toggleMenu} />
      </div>

      <NavbarMobile isOpen={isOpen} closeMenu={closeMenu} />
    </header>
  );
}
