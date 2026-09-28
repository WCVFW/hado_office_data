import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const InteractivePrototypeServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Interactive Prototype Services
            </h2>
            <p className="text-lg text-gray-600">
              We enable you to transform your abstract ideas into a smooth and interactive experience. Contact us now to provide better design solutions for your clients.
            </p>
            <p className="text-lg text-gray-600 mt-2 font-medium">
              Prices start at $20/hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Before you delve head-first into the app design process, it is imperative for your client to visualize the thoughts in your head. They should be able to see and experience it just as you do. Our UX architects can help you with that. We help build your app designs into interactive prototypes that re-create the actual user experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our prototypes offer multiple benefits. They help you envision your own design and make the necessary tweaks. They help your team and stakeholders understand your vision. Most importantly, they curb the overall development cycle by eliminating unnecessary back-and-forth. Over the last 26+ years, we've helped thousands of clients save time, effort, and money through our interactive prototype services. We provide tailor-made solutions depending on your specific business needs.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Interactive Prototype Services
            </h3>
            <p className="text-700 leading-relaxed mb-6">
              Nimble Acuity is a premier interactive prototype service provider. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Creating Wireframes:</strong> Wireframe designs help you understand your designs from the end-user's perspective. Our architects work on menus, buttons, and other components to illustrate the flow of information as it would appear on the completed application or webpage.
              </li>
              <li>
                <strong>Making Mockups:</strong> This element helps you understand how the visual components of your design will play out. From fonts to colors and the overall layout, everything is covered in our mockups, providing you with the visual aid needed to make better design decisions.
              </li>
              <li>
                <strong>Building Prototypes:</strong> Our team of UX architects works on building interactive, life-like prototypes that enable you to navigate through an application or site just like a user would. This gives you a chance to understand how the end-user will assess and receive the information, allowing you to improve the experience for better user engagement.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a leading interactive prototype service provider with global repute. The benefits of partnering with us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Affordable Pricing Options:</strong> We offer flexible pricing packages to fit your budget, with prices starting at just $20/hour.
              </li>
              <li>
                <strong>High-Quality Services:</strong> With over two decades of experience, we provide high-quality and error-free services to clients across time zones.
              </li>
              <li>
                <strong>Data Security:</strong> As an ISO/IEC 27001:2022-certified company, we prioritize data security and have a robust ISMS system to prevent unauthorized access.
              </li>
              <li>
                <strong>Short Turnaround:</strong> Our experts provide seamless services with quick turnarounds and are highly committed to meeting all deadlines.
              </li>
              <li>
                <strong>Scalability:</strong> We have the infrastructure and resources required to scale up our services on short notice, with experts available 24/7.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Visualize Your Designs?
            </h3>
            <p className="text-gray-700 mb-6">
              We offer the best interactive prototype services, providing our global clients with complete transparency and data privacy. Our experts have extensive experience in prototype creation, and our solutions will help you understand and visualize your designs better.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Through our services, we enable clients to make modifications and offer the best-in-class website and app design solutions to their customers. Reach out to our experts for budget-friendly rates for high-end solutions.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default InteractivePrototypeServices;