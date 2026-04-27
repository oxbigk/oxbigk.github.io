"use client";
import { DATA } from "@/helper/constant";
import MagneticButton from "./MagneticButton";
import { useState } from "react";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#ai", label: "AI" },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-4 md:px-6 py-5 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
        <a
          href="#"
          className="font-mono text-sm font-semibold uppercase tracking-widest hover:text-[#EB3A14] transition-colors pointer-events-auto"
        >
          {DATA.name.split(" ")[0]}
          <br />
          {DATA.name.split(" ")[1]}
        </a>
        <div className="flex items-center gap-4 md:gap-10 pointer-events-auto">
          <div className="hidden md:flex gap-8 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="font-mono text-xs uppercase tracking-widest hover:text-[#EB3A14] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <MagneticButton
            href="#contact"
            className="hidden md:flex bg-white text-black px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#EB3A14] hover:text-white transition-colors duration-200 shadow-lg items-center justify-center"
          >
            Contact
          </MagneticButton>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex flex-col justify-center items-center gap-1 w-9 h-9"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-4 h-px bg-white transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`}
            />
            <span
              className={`block w-4 h-px bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-4 h-px bg-white transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#111111]/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 md:hidden">
          {navLinks.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="font-mono text-2xl uppercase tracking-widest text-white hover:text-[#EB3A14] transition-colors"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-4 bg-[#EB3A14] text-white px-8 py-3 rounded-full font-mono text-sm font-bold uppercase tracking-widest"
          >
            Contact
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
