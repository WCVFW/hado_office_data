import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ADACompliance: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ADA Compliance Services
            </h2>
            <p className="text-lg text-gray-600">
              Leverage **Nimble Acuity**'s AI-powered ADA services for a seamless and hassle-free web browsing experience, regardless of your users' abilities.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Millions of people around the world live with physical and cognitive disabilities that affect their daily life, including online shopping and web browsing. To ensure a barrier-free environment and create a seamless browsing experience for all, it has become imperative for businesses to make their websites Americans with Disabilities Act (ADA) compliant.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we provide customized ADA services to help even specially-abled people navigate your website without any glitch. Our ADA compliance specialists work with you to understand your requirements, audience, and the need for compliance. They then leverage our Artificial Intelligence (AI) tools and make necessary design and UI adjustments to make sure it is user-friendly and globally accessible.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our ADA Compliance Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is a full-service ADA compliance company that offers expert web solutions. Our comprehensive solutions include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Visually Impaired Profile Customization:</strong> Our ADA-compliant software is compatible with multiple screen readers, including VoiceOver, JAWS, and NVDA.</li>
              <li><strong>ADHD-Friendly Profile Building:</strong> We use powerful tools and AI technologies to eliminate distractions on your website to help people with neurodevelopmental disorders.</li>
              <li><strong>Seizure Safe Profile Creation:</strong> We make sure that our ADA software reduces color and eliminates flashes from your website to make it safe for epileptic and seizure-prone users.</li>
              <li><strong>Cognitive Disability Profile Creation:</strong> We help visitors with ADD, dyslexia, and autism easily navigate your website by simplifying the content and using familiar icons and symbols.</li>
              <li><strong>Content Adjustment:</strong> Our ADA-compliant software is compatible with multiple screen readers and provides a seamless browsing experience for all users.</li>
              <li><strong>Color Adjustment:</strong> Our AI-powered web solutions allow online users to adjust the color and optimize the contrast on the website to improve visibility.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is a leading ADA compliance service provider. Partnering with us can help you enjoy the following benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Instant Access to Certified Experts:</strong> Our ADA specialists have complete knowledge of the process and government regulations to help you fortify your website.</li>
              <li><strong>Latest Tools and Techniques:</strong> We use cutting-edge practices and AI-powered tools to help your website stay ADA compliant.</li>
              <li><strong>Affordable Rates:</strong> We offer our ADA services at absolutely cost-effective prices customized to your needs and requirements.</li>
              <li><strong>Complete Data Privacy:</strong> We do not collect your business data or user information; everything stays encrypted within your servers.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Make Your Website Accessible?
            </h3>
            <p className="text-gray-700 mb-6">
              Want to make your website ADA compliant but lack the skills and resources to take the plunge? Through powerful tools and advanced ADA compliance software, we can help you create an inclusive online experience for your audience.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Simply let us know your requirements, and we'll help you make your website ADA-compliant and fully accessible for all.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ADACompliance;