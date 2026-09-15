"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mx-auto w-full max-w-[1200] py-5 px-5">
      <div className="flex h-[55] items-center justify-between">
        <a
          href="#"
          className="text-[36px] font-semibold tracking-tight text-[#FFFFFF]"
        >
          Ilhom
        </a>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            <li>
              <a
                href="#about"
                className="text-[15px] text-[#FFFFFF] transition hover:text-[#27AE60]"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-[15px] text-[#FFFFFF] transition hover:text-[#27AE60]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-[15px] text-[#FFFFFF] transition hover:text-[#27AE60]"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[15px] text-[#FFFFFF] transition hover:text-[#27AE60]"
              >
                Contact me
              </a>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-xl text-[#FFFFFF] md:hidden"
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <nav className="">
          <ul className="flex flex-col gap-3 pt-4">
            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-xs text-[#FFFFFF]"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="text-xs text-[#FFFFFF]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-xs text-[#FFFFFF]"
              >
                Contact me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
