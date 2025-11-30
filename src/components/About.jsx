import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sec = sectionRef.current;
      if (!sec) return;

      const rect = sec.getBoundingClientRect();
      const win = window.innerHeight;

      if (rect.top < win * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { number: "52K+", label: "Marketers supercharged" },
    { number: "2M+", label: "Workflows streamlined" },
  ];

  const testimonials = [
    {
      name: "Alex Harper",
      title: "Growth Lead, AdVanta",
      quote:
        "Logica Work’s automations slashed our reporting time. Now we focus on strategy, not spreadsheets.",
      avatarBg: "bg-gray-300",
    },
    {
      name: "Taylor Singh",
      title: "Ops Director, PixelPulse",
      quote:
        "We scaled campaigns without extra hires. The AI agents just work—total game changer.",
      avatarBg: "bg-yellow-300",
    },
    {
      name: "Jordan Avery",
      title: "Head of Digital, NovaWorks",
      quote:
        "Automations let us deliver client reports 10× faster. Our clients notice the difference.",
      avatarBg: "bg-purple-300",
    },
    {
      name: "Morgan Lane",
      title: "Founder, MetricNest",
      quote:
        "From onboarding to launch, everything was seamless. Our data flows are now fully automated.",
      avatarBg: "bg-pink-300",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ✔ Fixed layout: LEFT text, RIGHT grid */}
        <div className="flex flex-row lg:flex-row lg:items-start gap-20">

          {/* LEFT SIDE (fixed width) */}
          <div className="lg:w-[420px] flex-shrink-0 space-y-16">

            {/* Heading + subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-5xl font-semibold text-[#2a2a2a] mb-6 leading-tight">
                Agencies rave. Results speak.
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-[330px]">
                Hear how digital teams win big with AI automation—straight from the source.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="space-y-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                >
                  <h3 className="text-7xl font-semibold text-[#2a2a2a] mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

      {/* RIGHT SIDE (2×2 testimonial grid) */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">

  {testimonials.map((t, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.15 }}
      className="bg-[#F5F0E6] rounded-3xl p-8 shadow-sm flex flex-col"
    >
      {/* Avatar + text */}
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-full ${t.avatarBg}`} />
        <div>
          <p className="font-semibold text-[#2a2a2a]">{t.name}</p>
          <p className="text-gray-600 text-sm">{t.title}</p>
        </div>
      </div>

      <p className="text-gray-700 text-sm leading-relaxed">
        {t.quote}
      </p>
    </motion.div>
  ))}

</div>

        </div>
      </div>
    </section>
  );
}
