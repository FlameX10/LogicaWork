


import React from "react";
import Main from '../assets/Main.jpg';

const Hero = () => {
  return (
    <section className="w-full bg-[#262626] text-white pt-20">
      <div className="max-w-7xl mx-auto px-10 py-24">
        
        {/* EXACT FLEX ROW */}
        <div className="flex flex-row items-start justify-between gap-10">

          {/* LEFT TEXT BLOCK */}
          <div className="max-w-[550px]">
            <h1
              className="font-semibold leading-[1.05]"
              style={{
                fontSize: "80px",
                letterSpacing: "-0.02em",
              }}
            >
              AI automation<br />that<br />scales agencies
            </h1>

            <p className="text-[#d1d1d1] mt-6 text-[20px] leading-[1.7]">
              We build automation workflows, AI agents, and data pipelines that
              eliminate bottlenecks and help agencies grow without adding
              headcount.
            </p>

            <div className="flex gap-4 mt-8">
              <button
                className="px-6 py-3 rounded-xl font-medium"
                style={{
                  backgroundColor: "#f3d66f",
                  color: "#000",
                }}
              >
                Book a call
              </button>

              <button className="px-6 py-3 rounded-xl font-medium border border-[#3a3a3a] text-[#dcdcdc]">
                Case studies
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE PLACEHOLDER */}
          <div className="flex justify-end w-full">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                width: "600px",
                height: "400px",
                backgroundColor: "#3a3a3a",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <img src={Main} alt="Hero Image" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
