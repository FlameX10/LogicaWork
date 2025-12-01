import React, { useState } from "react";

const MenuIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 80;
    const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: pos, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-[#252525] text-white border-b border-black z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">

        {/* MAIN ROW */}
        <div className="flex items-center justify-between">

          {/* LOGO + NAME */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setOpen(false);
            }}
          >
            <div className="w-8 h-8 bg-[#2b2b2b] rounded-md flex items-center justify-center">
              <div className="w-3.5 h-3.5 bg-white rounded-sm" />
            </div>
            <span className="text-lg font-medium">LogicaWork</span>
          </div>

          {/* CTA + HAMBURGER */}
          <div className="flex items-center gap-4">

            {/* DESKTOP CTA */}
            <button
              className="hidden lg:block bg-[#f3d66f] text-black px-4 py-2 rounded-full font-medium hover:bg-[#e7c957] transition"
              onClick={() => scrollToSection("contact")}
            >
              Get started
            </button>

            {/* HAMBURGER — SHOW ON ALL SCREENS */}
            <button onClick={() => setOpen(!open)} className="z-50">
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* DROPDOWN — NOW SHOWS ON MOBILE + DESKTOP */}
      {open && (
        <div className="bg-[#252525] border-t border-[#3a3a3a] animate-fadeIn">
          <div className="px-6 py-6 space-y-2 max-h-[80vh] overflow-y-auto">

            <button
              className="text-left text-[#d7d7d7] hover:text-white w-full py-2 transition-colors"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setOpen(false);
              }}
            >
              Home
            </button>

            <button
              className="text-left text-[#d7d7d7] hover:text-white w-full py-2 transition-colors"
              onClick={() => scrollToSection("services")}
            >
              Services
            </button>

            <button
              className="text-left text-[#d7d7d7] hover:text-white w-full py-2 transition-colors"
              onClick={() => scrollToSection("case-study")}
            >
              Case Studies
            </button>

            <button
              className="text-left text-[#d7d7d7] hover:text-white w-full py-2 transition-colors"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>

            <button
              className="text-left text-[#d7d7d7] hover:text-white w-full py-2 transition-colors"
              onClick={() => scrollToSection("portfolio")}
            >
              Portfolio
            </button>

            <button
              className="text-left text-[#d7d7d7] hover:text-white w-full py-2 transition-colors"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>

            {/* DIVIDER */}
            <div className="border-t border-[#3a3a3a] my-4"></div>

            {/* CTA BUTTON IN MENU */}
            <button
              className="w-full bg-[#f3d66f] text-black py-3 rounded-full font-medium hover:bg-[#e7c957] transition shadow-md"
              onClick={() => scrollToSection("contact")}
            >
              Get started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
