"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className="mx-auto w-full max-w-[1200] px-5 py-5">
      <div className="flex h-[55] items-center justify-between">
        <button
          onClick={() => handleScroll("home")}
          className="text-[36px] font-semibold tracking-tight text-[#FFFFFF]"
        >
          Ilhom
        </button>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            <li>
              <button
                onClick={() => handleScroll("about")}
                className="text-[15px] text-[#FFFFFF] transition hover:text-[#27AE60]"
              >
                About me
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("services")}
                className="text-[15px] text-[#FFFFFF] transition hover:text-[#27AE60]"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("projects")}
                className="text-[15px] text-[#FFFFFF] transition hover:text-[#27AE60]"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="text-[15px] text-[#FFFFFF] transition hover:text-[#27AE60]"
              >
                Contact me
              </button>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-xl text-[#FFFFFF] md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            <li>
              <button
                onClick={() => handleScroll("about")}
                className="text-left text-sm text-[#FFFFFF] transition hover:text-[#27AE60]"
              >
                About me
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("services")}
                className="text-left text-sm text-[#FFFFFF] transition hover:text-[#27AE60]"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("projects")}
                className="text-left text-sm text-[#FFFFFF] transition hover:text-[#27AE60]"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="text-left text-sm text-[#FFFFFF] transition hover:text-[#27AE60]"
              >
                Contact me
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
