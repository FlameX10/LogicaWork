import React, { useState } from "react";

const Chevron = ({ className = "inline-block ml-1 w-3 h-3" }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 7l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
        
        {/* Flex container with proper spacing */}
        <div className="relative flex items-center justify-between">

          {/* LEFT — LOGO */}
          <div
            className="flex items-center gap-3 cursor-pointer relative z-30"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-8 h-8 bg-[#2b2b2b] rounded-md flex items-center justify-center">
              <div className="w-3.5 h-3.5 bg-white rounded-sm" />
            </div>
            <span className="text-lg font-medium">LogicaWork</span>
          </div>

          {/* CENTER — DESKTOP MENU */}
          <div className=" lg:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <div className="flex items-center gap-8 text-sm text-[#d7d7d7] whitespace-nowrap">
              <button
                className="hover:text-white transition cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                About
              </button>

              <button
                className="hover:text-white transition cursor-pointer"
                onClick={() => scrollToSection("case-study")}
              >
                Blog
              </button>

              <button
                className="flex items-center gap-1 hover:text-white transition cursor-pointer"
                onClick={() => scrollToSection("contact")}
              >
                Support <Chevron />
              </button>
            </div>
          </div>

          {/* RIGHT — DESKTOP CTA */}
          <div className="hidden lg:block relative z-30">
            <button
              className="bg-[#f3d66f] text-black px-4 py-2 rounded-full font-medium hover:bg-[#e7c957] transition"
              onClick={() => scrollToSection("contact")}
            >
              Get started
            </button>
          </div>

          {/* MOBILE — HAMBURGER */}
          <div className="lg:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="lg:hidden bg-[#252525] border-t border-[#3a3a3a]">
          <div className="px-6 py-4 space-y-4">

            <button
              className="text-left text-[#d7d7d7] hover:text-white w-full"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>

            <button
              className="text-left text-[#d7d7d7] hover:text-white w-full"
              onClick={() => scrollToSection("case-study")}
            >
              Blog
            </button>

            <button
              className="text-left text-[#d7d7d7] hover:text-white w-full"
              onClick={() => scrollToSection("contact")}
            >
              Support
            </button>

            <button
              className="w-full bg-[#f3d66f] text-black py-2 rounded-full font-medium hover:bg-[#e7c957] transition"
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
