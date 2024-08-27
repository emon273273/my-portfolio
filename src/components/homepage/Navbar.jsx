import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const[navClickColor,setnavClickColor]=useState()

  return (
    <header className="py-4 px-2 lg:pr-24">
      <nav className="relative flex justify-end items-center">
        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-black mb-1 all"></div>
          <div className="w-6 h-0.5 bg-black mb-1 all"></div>
          <div className="w-6 h-0.5 bg-black all"></div>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 list-none font-medium text-lg
        md:mr-12 ">
          <li>
            <Link href="/work"  className="font-semibold all ">
              Works
            </Link>
          </li>
          <li>
            <Link href="/blog" className="font-semibold all">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/" className="font-semiboldf all">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile menu */}
        {isMenuOpen && (
          <ul className="md:hidden absolute top-full right-0 left-0 bg-white p-4 shadow-md list-none font-medium text-lg z-10  ">
            <li className="mb-2">
              <Link href="/works" className="font-medium">Works</Link>
            </li>
            <li className="mb-2">
              <Link href="/blog" className="font-medium">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="font-medium">Contact</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
