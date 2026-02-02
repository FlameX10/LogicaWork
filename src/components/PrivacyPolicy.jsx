import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function PrivacyPolicy() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sec = sectionRef.current;
      if (!sec) return;
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-gray-300"
          >
            Last updated: February 2, 2024
          </motion.p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            LogicaWork ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://logicawork.com (the "Site"), use our services, and interact with us.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Site or services.
          </p>
        </section>

        {[
          {
            title: "1. Information We Collect",
            content: (
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Personal Information You Provide</h4>
                  <p className="text-gray-700 mb-2">We collect information you provide directly, including:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Name and email address</li>
                    <li>Phone number</li>
                    <li>Company name and industry</li>
                    <li>Project details and requirements</li>
                    <li>Billing information</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Automatically Collected Information</h4>
                  <p className="text-gray-700 mb-2">We automatically collect certain information when you use our Site:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent on each page</li>
                    <li>Referring website</li>
                    <li>Device information</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            )
          },
          {
            title: "2. How We Use Your Information",
            content: (
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze usage patterns and optimize our Site</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure security</li>
                <li>Fulfill contractual obligations</li>
              </ul>
            )
          },
          {
            title: "3. Information Sharing and Disclosure",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700">We do not sell or rent your personal information. We may share information in these circumstances:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Service Providers:</strong> Third parties who assist us in operating our Site and conducting business</li>
                  <li><strong>Legal Compliance:</strong> When required by law or to protect our legal rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or asset sale</li>
                  <li><strong>Your Consent:</strong> With your explicit permission</li>
                </ul>
              </div>
            )
          },
          {
            title: "4. Data Security",
            content: (
              <p className="text-gray-700">
                We implement industry-standard security measures including encryption, secure servers, and access controls to protect your information. However, no method of transmission over the internet is completely secure. We cannot guarantee absolute security.
              </p>
            )
          },
          {
            title: "5. Your Rights and Choices",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Control cookie preferences</li>
                  <li>Data portability (receive your information in a usable format)</li>
                </ul>
                <p className="text-gray-700 mt-4">To exercise these rights, contact us at privacy@logicawork.com.</p>
              </div>
            )
          },
          {
            title: "6. Cookies and Tracking Technologies",
            content: (
              <p className="text-gray-700">
                We use cookies and similar technologies to enhance your experience, remember preferences, and analyze Site usage. You can control cookie settings through your browser. Disabling cookies may affect Site functionality.
              </p>
            )
          },
          {
            title: "7. Third-Party Links",
            content: (
              <p className="text-gray-700">
                Our Site may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their privacy policies before sharing information.
              </p>
            )
          },
          {
            title: "8. Children's Privacy",
            content: (
              <p className="text-gray-700">
                Our Site is not directed to individuals under 13 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete the information immediately.
              </p>
            )
          },
          {
            title: "9. Changes to This Privacy Policy",
            content: (
              <p className="text-gray-700">
                We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of significant changes by email or prominent notice on our Site.
              </p>
            )
          },
          {
            title: "10. Contact Us",
            content: (
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-900 font-semibold mb-3">If you have questions about this Privacy Policy, please contact us:</p>
                <div className="text-gray-700 space-y-2">
                  <p><strong>Email:</strong> privacy@logicawork.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> San Francisco, CA, USA</p>
                </div>
              </div>
            )
          }
        ].map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
            {section.content}
          </motion.section>
        ))}

      </main>
    </div>
  );
}
