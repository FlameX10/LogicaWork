import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function TermsOfService() {
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
            Terms of Service
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            These Terms of Service ("Terms") constitute a legal agreement between you and LogicaWork ("Company," "we," "us," "our"). By accessing or using our website https://logicawork.com (the "Site") and services, you agree to be bound by these Terms. If you do not agree to any part of these Terms, you may not use our Site or services.
          </p>
        </section>

        {[
          {
            title: "1. Use License",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700">
                  We grant you a limited, non-exclusive, non-transferable license to access and use our Site and services for lawful purposes only. You agree not to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful, malicious, or unauthorized code</li>
                  <li>Attempt to gain unauthorized access to systems</li>
                  <li>Reverse engineer, decompile, or disassemble our software</li>
                  <li>Resell or redistribute our services without authorization</li>
                  <li>Use automated systems to access our Site without permission</li>
                </ul>
              </div>
            )
          },
          {
            title: "2. Intellectual Property Rights",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700">
                  All content on our Site, including text, graphics, logos, images, and software, is the exclusive property of LogicaWork or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-700">
                  You may not reproduce, distribute, transmit, or use any content without our prior written permission.
                </p>
              </div>
            )
          },
          {
            title: "3. User-Generated Content",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700">
                  Any content you submit, post, or transmit to our Site ("User Content") is owned by you. By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute it.
                </p>
                <p className="text-gray-700">
                  You represent and warrant that you own or have the necessary rights to all User Content and that it does not violate any laws or third-party rights.
                </p>
              </div>
            )
          },
          {
            title: "4. Disclaimer of Warranties",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 font-semibold">OUR SITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.</p>
                <p className="text-gray-700">
                  We disclaim all warranties, express or implied, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Warranties of merchantability and fitness for a particular purpose</li>
                  <li>Warranties of title and non-infringement</li>
                  <li>Warranties that services will be uninterrupted or error-free</li>
                </ul>
              </div>
            )
          },
          {
            title: "5. Limitation of Liability",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 font-semibold">
                  TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL LOGICAWORK BE LIABLE FOR:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, data, or revenue</li>
                  <li>Damages for loss of business or business opportunity</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Our total liability shall not exceed the amount you paid to us in the 12 months preceding the claim.
                </p>
              </div>
            )
          },
          {
            title: "6. Indemnification",
            content: (
              <p className="text-gray-700">
                You agree to indemnify, defend, and hold harmless LogicaWork and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our Site or services or violation of these Terms.
              </p>
            )
          },
          {
            title: "7. Acceptable Use Policy",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700">You agree not to use our Site or services to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Create false, misleading, or fraudulent content</li>
                  <li>Harass, threaten, defame, or disparage others</li>
                  <li>Transmit unlawful or harmful content</li>
                  <li>Spam or send unsolicited communications</li>
                  <li>Infringe on privacy, publicity, or intellectual property rights</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </div>
            )
          },
          {
            title: "8. Third-Party Services",
            content: (
              <p className="text-gray-700">
                Our Site may contain links to third-party websites and services. We are not responsible for their content, accuracy, or practices. Your use of third-party services is subject to their own terms and conditions.
              </p>
            )
          },
          {
            title: "9. Modification of Terms",
            content: (
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our Site. Your continued use of our Site constitutes acceptance of modified Terms.
              </p>
            )
          },
          {
            title: "10. Termination",
            content: (
              <p className="text-gray-700">
                We reserve the right to terminate or suspend your access to our Site and services at any time, without notice, for violation of these Terms or for any other reason.
              </p>
            )
          },
          {
            title: "11. Governing Law and Jurisdiction",
            content: (
              <p className="text-gray-700">
                These Terms are governed by and construed in accordance with the laws of California, without regard to conflict of law principles. You agree to submit to the exclusive jurisdiction of the state and federal courts located in California.
              </p>
            )
          },
          {
            title: "12. Severability",
            content: (
              <p className="text-gray-700">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            )
          },
          {
            title: "13. Contact Information",
            content: (
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-900 font-semibold mb-3">If you have questions about these Terms of Service, please contact us:</p>
                <div className="text-gray-700 space-y-2">
                  <p><strong>Email:</strong> legal@logicawork.com</p>
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
