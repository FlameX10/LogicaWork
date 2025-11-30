// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       id="hero"
//       className="min-h-screen pt-32 md:pt-40 pb-20 px-4 bg-[#252525]"
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.div variants={itemVariants} className="mb-6">
//               <span className="inline-block px-4 py-2 bg-yellowBrand/10 border border-yellowBrand/30 rounded-full text-yellowBrand font-semibold text-sm">
//                 AI Automation for Agencies
//               </span>
//             </motion.div>

//             <motion.h1
//               variants={itemVariants}
//               className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 font-sans"
//             >
//               Automate.{" "}
//               <span className="gradient-text">Scale.</span> Win.
//             </motion.h1>

//             <motion.p
//               variants={itemVariants}
//               className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl"
//             >
//               Build automation workflows, AI agents, and data pipelines that
//               eliminate bottlenecks and help your agency grow without hiring more
//               people.
//             </motion.p>

//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col md:flex-row gap-4"
//             >
//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 0 30px rgba(255, 211, 0, 0.3)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => scrollToSection("contact")}
//                 className="bg-yellowBrand text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg w-fit"
//               >
//                 Book a Demo
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => scrollToSection("services")}
//                 className="border-2 border-yellowBrand text-yellowBrand px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellowBrand hover:text-black transition-all duration-300 w-fit"
//               >
//                 See Solutions →
//               </motion.button>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="relative"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-yellowBrand/20 to-transparent rounded-3xl blur-3xl"></div>
//             <motion.div
//               animate={{ y: [0, -15, 0] }}
//               transition={{ duration: 4, repeat: Infinity }}
//               className="relative bg-gradient-to-br from-yellowBrand to-yellow-600 rounded-3xl aspect-square flex items-center justify-center shadow-2xl border border-yellowBrand/30"
//             >
//               <div className="text-center">
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{
//                     duration: 20,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="text-7xl mb-4"
//                 >
//                   ⚙️
//                 </motion.div>
//                 <p className="text-black font-bold text-2xl">
//                   Automation Engine
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-[#262626] text-white">
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
                IMAGE HERE
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
