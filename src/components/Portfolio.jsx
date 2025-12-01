// import React from "react";

// const Portfolio = () => {
//   const faqs = [
//     {
//       q: "What’s included with setup?",
//       a: "We handle workflow mapping, custom AI agent design, data integration, and onboarding. Every system is tailored—no one-size-fits-all.",
//     },
//     {
//       q: "How fast can we launch?",
//       a: "Most projects go live in 2–4 weeks. We keep you in the loop, every step of the way.",
//     },
//     {
//       q: "Can you connect to our tools?",
//       a: "Yes! We integrate with all major ad platforms, CRMs, and reporting tools. If it has an API, we automate it.",
//     },
//     {
//       q: "What support comes after launch?",
//       a: "You get ongoing support, performance checks, and quick updates as your needs change. We keep your automations humming.",
//     },
//   ];

//   return (
//     <section id="portfolio" className="w-full bg-[#F7F0DF] py-28 px-6">
//       <div className="max-w-7xl mx-auto flex flex-row gap-16">

//         {/* LEFT SIDE */}
//         <div>
//           <h1 className="text-5xl font-medium text-[#1b1b1b] leading-tight mb-6">
//             Your AI automation questions,<br />answered
//           </h1>

//           <p className="text-[#555] text-lg leading-relaxed mb-10 max-w-md">
//             No jargon. No fluff. Just clear, fast answers to your top automation
//             questions—so you can scale smarter, not harder.
//           </p>

//           <button className="bg-[#FFDF68] hover:bg-[#f9d859] transition-colors text-black text-lg px-10 py-4 rounded-xl">
//             Ask now
//           </button>
//         </div>

//         {/* RIGHT SIDE FAQ LIST */}
//         <div className="flex flex-col space-y-10">
//           {faqs.map((item, i) => (
//             <div key={i} className="pb-10 border-b border-[#e4dcc8]">
//               <h3 className="text-2xl font-medium text-[#1b1b1b] mb-1">
//                 {item.q}
//               </h3>
//               <p className="text-[#555] text-[17px] leading-relaxed max-w-xl">
//                 {item.a}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Portfolio;



import React from "react";

const Portfolio = () => {
  const faqs = [
    {
      q: "What's included with setup?",
      a: "We handle workflow mapping, custom AI agent design, data integration, and onboarding. Every system is tailored—no one-size-fits-all.",
    },
    {
      q: "How fast can we launch?",
      a: "Most projects go live in 2–4 weeks. We keep you in the loop, every step of the way.",
    },
    {
      q: "Can you connect to our tools?",
      a: "Yes! We integrate with all major ad platforms, CRMs, and CRMs, and reporting tools. If it has an API, we automate it.",
    },
    {
      q: "What support comes after launch?",
      a: "You get ongoing support, performance checks, and quick updates as your needs change. We keep your automations humming.",
    },
  ];

  return (
    <section id="portfolio" className="w-full bg-[#F7F0DF] py-16 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-row md:flex-row gap-8 md:gap-16">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-3xl md:text-5xl font-medium text-[#1b1b1b] leading-tight mb-4 md:mb-6">
            Your AI automation questions,<br />answered
          </h1>

          <p className="text-[#555] text-base md:text-lg leading-relaxed mb-6 md:mb-10 max-w-md">
            No jargon. No fluff. Just clear, fast answers to your top automation
            questions—so you can scale smarter, not harder.
          </p>

          <button className="bg-[#FFDF68] hover:bg-[#f9d859] transition-colors text-black text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-xl">
            Ask now
          </button>
        </div>

        {/* RIGHT SIDE FAQ LIST */}
        <div className="flex flex-col space-y-6 md:space-y-10">
          {faqs.map((item, i) => (
            <div key={i} className="pb-6 md:pb-10 border-b border-[#e4dcc8]">
              <h3 className="text-xl md:text-2xl font-medium text-[#1b1b1b] mb-1">
                {item.q}
              </h3>
              <p className="text-[#555] text-base md:text-[17px] leading-relaxed max-w-xl">
                {item.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;