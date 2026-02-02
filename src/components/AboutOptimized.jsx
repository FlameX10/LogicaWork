import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Award, Zap } from 'lucide-react';

export default function AboutOptimized() {
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
    { number: "500+", label: "Projects Delivered", icon: "📊" },
    { number: "50+", label: "Enterprise Clients", icon: "🏢" },
    { number: "98%", label: "Client Satisfaction", icon: "⭐" },
  ];

  const values = [
    {
      icon: Users,
      title: "Collaborative Partnership",
      description: "We work as an extension of your team, not just a vendor. Your success is our success."
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Our experienced developers deliver high-quality, scalable solutions backed by industry best practices."
    },
    {
      icon: Zap,
      title: "Innovation & Speed",
      description: "We leverage cutting-edge technologies and agile methodologies to deliver faster, smarter solutions."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechStartup Inc",
      quote: "LogicaWork transformed our outdated systems into a modern, AI-powered platform. Their team understood our vision and delivered beyond expectations.",
      avatarBg: "bg-blue-400",
    },
    {
      name: "Michael Chen",
      title: "CTO, Enterprise Solutions",
      quote: "Working with LogicaWork was a game-changer. They delivered our project on time and with exceptional code quality.",
      avatarBg: "bg-green-400",
    },
    {
      name: "Emma Rodriguez",
      title: "Director, Digital Innovation",
      quote: "Their expertise in AI integration helped us automate critical processes and reduce costs by 40%.",
      avatarBg: "bg-purple-400",
    },
    {
      name: "David Kim",
      title: "Founder, Growth Agency",
      quote: "From initial consultation to post-launch support, LogicaWork demonstrated professionalism and deep technical knowledge.",
      avatarBg: "bg-orange-400",
    },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* H1 About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            About LogicaWork: Leading AI & Software Development
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a team of experienced engineers and strategists dedicated to building intelligent software solutions that drive business growth and operational efficiency.
          </p>
        </motion.div>

        {/* Three Columns - Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <IconComponent className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-gray-900 text-white rounded-3xl p-12 md:p-16 mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Proven Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.45 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-3">
                  {stat.number}
                </div>
                <p className="text-lg text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials - H2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by startups and enterprises worldwide for delivering exceptional results.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-amber-500">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${t.avatarBg}`} />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Build Something Great?</h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how LogicaWork can help your business grow with intelligent software solutions.
          </p>
          <button className="px-8 py-4 bg-white text-amber-600 font-semibold rounded-xl hover:bg-gray-100 transition-all">
            Schedule a Consultation
          </button>
        </motion.div>

        {/* Schema Markup - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LogicaWork",
            "url": "https://logicawork.com/about",
            "description": "AI and software development company providing custom solutions for startups and enterprises",
            "image": "https://logicawork.com/logo.png",
            "telephone": "+1-XXX-XXX-XXXX",
            "foundingDate": "2020",
            "employees": {
              "@type": "Person",
              "name": "Development Team"
            }
          })}
        </script>
      </div>
    </section>
  );
}
