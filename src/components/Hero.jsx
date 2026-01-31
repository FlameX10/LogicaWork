


import React from "react";
import Main from '../assets/Main.jpg';

const Hero = () => {
  return (
    <>
      <style>{`
        @media (min-width: 1024px) {
          .hero-image-container {
            width: 600px !important;
            height: 400px !important;
            aspect-ratio: unset !important;
            max-width: 600px !important;
            flex-shrink: 0 !important;
          }
          .hero-wrapper {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
          }
        }
      `}</style>
      <section className="w-full bg-[#262626] text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-12 md:py-20 lg:py-24">
          
          {/* Mobile: flex-col | Desktop: flex-row */}
          <div className="hero-wrapper flex flex-col lg:flex-row lg:flex-nowrap lg:items-start lg:justify-between gap-6 md:gap-4 lg:gap-5">

            {/* LEFT TEXT BLOCK */}
            <div className="w-full lg:max-w-[550px] lg:w-[550px] lg:flex-shrink-0">
              <h1
                className="font-semibold leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-[80px]"
                style={{
                  letterSpacing: "-0.02em",
                }}
              >
                AI automation<br />that<br />scales agencies
              </h1>

              <p className="text-[#d1d1d1] mt-4 md:mt-6 text-base md:text-lg lg:text-[20px] leading-[1.7]">
                We build automation workflows, AI agents, and data pipelines that
                eliminate bottlenecks and help agencies grow without adding
                headcount.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
                <button
                  className="px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-medium text-sm md:text-base"
                  style={{
                    backgroundColor: "#f3d66f",
                    color: "#000",
                  }}
                >
                  Book a call
                </button>

                <button className="px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-medium border border-[#3a3a3a] text-[#dcdcdc] text-sm md:text-base">
                  Case studies
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE PLACEHOLDER */}
            <div className="flex justify-center lg:justify-end w-full lg:w-[600px] lg:flex-shrink-0">
              <div
                className="hero-image-container rounded-2xl overflow-hidden w-full max-w-full sm:max-w-md md:max-w-lg"
                style={{
                  backgroundColor: "#3a3a3a",
                  border: "1px solid rgba(255,255,255,0.05)",
                  aspectRatio: "3/2",
                }}
              >
                <img src={Main} alt="Hero Image" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;