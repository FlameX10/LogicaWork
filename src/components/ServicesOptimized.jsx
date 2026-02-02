import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Code, Zap, Shield, Database, BarChart3, Cpu } from 'lucide-react';

const ServicesOptimized = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sec = sectionRef.current;
      if (!sec) return;

      const rect = sec.getBoundingClientRect();
      const win = window.innerHeight;

      if (rect.top < win * 0.6 && rect.bottom > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Build modern, responsive web applications with React, Vue, or Next.js. We create fast, scalable platforms optimized for user experience and SEO.",
      technologies: "React, Next.js, Vue.js, TypeScript, Tailwind CSS"
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning Integration",
      description: "Integrate cutting-edge AI models into your applications. From NLP chatbots to predictive analytics, we implement intelligent automation solutions.",
      technologies: "Python, TensorFlow, GPT Integration, Computer Vision"
    },
    {
      icon: Database,
      title: "Backend & API Development",
      description: "Scalable server-side solutions with robust APIs, real-time data processing, and cloud infrastructure for enterprise-grade applications.",
      technologies: "Node.js, Python, PostgreSQL, MongoDB, AWS, GCP"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Improve application speed, reduce load times, and optimize databases. We ensure your software delivers lightning-fast performance across devices.",
      technologies: "CDN Optimization, Code Splitting, Caching, Database Optimization"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Implement enterprise-grade security protocols, data encryption, and compliance solutions (GDPR, HIPAA, SOC 2) to protect your users.",
      technologies: "OAuth 2.0, JWT, End-to-End Encryption, SSL/TLS, OWASP"
    },
    {
      icon: BarChart3,
      title: "Data Analytics & BI",
      description: "Transform raw data into actionable insights with custom dashboards, analytics platforms, and business intelligence solutions.",
      technologies: "Tableau, Power BI, Looker, Python Analytics, Real-time Dashboards"
    }
  ];

  const whyChoose = [
    {
      title: "Expert Development Team",
      description: "Our developers are certified professionals with 5+ years of experience building enterprise software solutions."
    },
    {
      title: "Agile Methodology",
      description: "We follow agile principles to deliver working software incrementally, ensuring flexibility and rapid feedback loops."
    },
    {
      title: "Full-Cycle Development",
      description: "From ideation and design to deployment and maintenance, we handle every phase of software development."
    },
    {
      title: "Latest Technologies",
      description: "We stay current with industry trends and implement modern tech stacks that ensure longevity and scalability."
    },
    {
      title: "Transparent Communication",
      description: "Regular updates, clear documentation, and dedicated support ensure you're always informed about project progress."
    },
    {
      title: "Post-Launch Support",
      description: "We provide 24/7 monitoring, maintenance, and optimization to keep your application running smoothly."
    }
  ];

  const processSteps = [
    { number: "01", title: "Discovery & Strategy", description: "We analyze your business goals, target audience, and technical requirements to create a detailed roadmap." },
    { number: "02", title: "Design & Planning", description: "Wireframes, prototypes, and architecture planning ensure everyone aligns before development begins." },
    { number: "03", title: "Development & Testing", description: "Our team builds your solution with continuous integration, automated testing, and quality assurance." },
    { number: "04", title: "Deployment & Launch", description: "Smooth deployment to production with monitoring, optimization, and performance tuning." },
    { number: "05", title: "Support & Evolution", description: "Ongoing maintenance, updates, and feature enhancements to keep your software competitive." }
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-16 md:py-32 px-4 md:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* H1 - Services Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Custom Software Development Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive AI and software development solutions for startups, SMBs, and enterprises. Whether you need custom web applications, mobile development, or AI integration, our expert team builds scalable, secure solutions that drive business growth.
          </p>
        </motion.div>

        {/* Services Grid - H2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Services We Offer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all border border-gray-200 hover:border-amber-300"
                >
                  <IconComponent className="w-12 h-12 text-amber-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm font-medium text-gray-700">Tech Stack:</p>
                    <p className="text-xs text-gray-600 mt-1">{service.technologies}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Problems We Solve - H2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-8">Problems We Solve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { problem: "Legacy System Modernization", solution: "We migrate outdated systems to modern architectures without disrupting operations." },
              { problem: "Slow & Unreliable Applications", solution: "Performance optimization and architectural improvements for speed and stability." },
              { problem: "Manual Process Inefficiency", solution: "AI-powered automation to reduce manual work and operational costs." },
              { problem: "Scalability Challenges", solution: "Cloud-native solutions designed to grow with your business demands." },
              { problem: "Security & Compliance Gaps", solution: "Enterprise-grade security implementation and regulatory compliance." },
              { problem: "Data Integration Issues", solution: "Unified data platforms connecting all your business systems seamlessly." }
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-lg font-semibold mb-2">{item.problem}</h3>
                <p className="text-gray-300">{item.solution}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose LogicaWork - H2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose LogicaWork
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
                className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-amber-500 transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Process - H2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Development Process
          </h2>
          
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {step.number}
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Stack - H2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gray-50 rounded-3xl p-12 mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Modern Technology Stack
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { category: "Frontend", tech: "React, Next.js, Vue.js, TypeScript, Tailwind CSS" },
              { category: "Backend", tech: "Node.js, Python, Java, PostgreSQL, MongoDB" },
              { category: "Cloud & DevOps", tech: "AWS, Google Cloud, Docker, Kubernetes" },
              { category: "AI & ML", tech: "GPT Integration, TensorFlow, Scikit-learn" }
            ].map((stack, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <h3 className="font-bold text-gray-900 mb-4">{stack.category}</h3>
                <p className="text-sm text-gray-600">{stack.tech}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-center bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 md:p-16 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Let's discuss your software development needs and create a custom solution that drives measurable results.
          </p>
          <button className="px-10 py-4 bg-white text-amber-600 font-bold rounded-xl hover:bg-gray-100 transition-all text-lg">
            Schedule Free Consultation
          </button>
        </motion.div>

        {/* Schema Markup - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "LogicaWork Services",
            "url": "https://logicawork.com/services",
            "description": "Custom AI and software development services including web development, API design, AI integration, and more.",
            "telephone": "+1-XXX-XXX-XXXX",
            "areaServed": {
              "@type": "Country",
              "name": "US"
            },
            "serviceType": [
              "Custom Web Development",
              "AI Integration",
              "Backend Development",
              "Data Analytics",
              "Security Consulting"
            ]
          })}
        </script>
      </div>
    </section>
  );
};

export default ServicesOptimized;
