import React from "react";
// If you have lucide-react installed, uncomment this and remove the SVG chevron below
// import { ChevronDown } from "lucide-react";

const Chevron = ({ className = "inline-block ml-1 w-3 h-3" }) => (
  // tiny chevron svg that matches screenshot scale
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M6 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Navbar = () => {
  return (
    <nav className="w-full bg-[#262626] text-white border-b border-black">
      <div className="relative max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left logo */}
        <div className="flex items-center gap-3 z-20">
          <div className="w-8 h-8 bg-[#2b2b2b] rounded-md flex items-center justify-center">
            {/* stylized square icon */}
            <div className="w-3.5 h-3.5 bg-white rounded-sm" />
          </div>
          <span className="text-white text-lg font-medium">LogicaWork</span>
        </div>

        {/* Center menu - absolutely centered so it's visually centered like your screenshot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex items-center gap-8 text-sm text-[#d7d7d7]">
            <div className="flex items-center gap-1 cursor-pointer hover:text-white">
              <span className="select-none">Solutions</span>
              <Chevron />
            </div>

            <div className="cursor-pointer hover:text-white select-none">About</div>

            <div className="cursor-pointer hover:text-white select-none">Blog</div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-white select-none">
              <span>Support</span>
              <Chevron />
            </div>
          </div>
        </div>

        {/* Right CTA */}
        <div className="z-20">
          <button
            className="bg-[#f3d66f] text-black px-4 py-2 rounded-full font-medium shadow-sm hover:bg-[#e7c957] transition"
            aria-label="Get started"
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
