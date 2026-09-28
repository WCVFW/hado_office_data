import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; 

const HighFidelityDesign: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              High Fidelity Design Services
            </h2>
            <p className="text-lg text-gray-600">
              Accurately and completely visualize your entire application concept with our superlative high-fidelity design services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Before beginning the in-depth design process, it is crucial for a client to fully and properly visualize their application concept. This is where high-fidelity design comes into play. The best way for clients to truly experience the applications as they will be is to ensure the designs are ultimately realistic and thought-provoking. At **Nimble Acuity**, we are one of the leading names in the industry of app design and prototyping.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With our team of talented developers and architects, Nimble Acuity creates stunning and highly realistic app designs that significantly enhance the user experience. Partner with us for the best high-fidelity prototype solutions that bring your vision to life.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our High Fidelity Design Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Wireframe Creations</h4>
                <p>Our professional designers create detailed wireframes, including menus, buttons, and other key features, to lay the foundational structure for the perfect high-fidelity prototype.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Mockup Development</h4>
                <p>We build comprehensive mockups that allow you to properly see and understand how all visual components—from layout to colors—will function together in the final application design.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Prototype Building</h4>
                <p>Our dedicated team of professionals creates high-fidelity prototypes that enable proper navigation and interaction, ensuring a realistic user experience before development begins.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Circuit Design</h4>
                <p>We offer specialized high-fidelity circuit design services to ensure that the planning and design of your application's hardware components are meticulously overseen and validated.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable & Flexible Pricing:</strong> We provide a flexible and affordable pricing module tailored to your specific project requirements, ensuring a great return on investment.</li>
              <li><strong>Quality Assurance:</strong> When you choose our high-fidelity design services, you can rest assured that we deliver error-free and high-quality results that exceed expectations.</li>
              <li><strong>Professional Experts:</strong> You will be provided with a dedicated team of professional experts who are committed to meeting the specific needs of your project.</li>
              <li><strong>100% Data Security:</strong> As an ISO-certified company, your confidential project data is completely safeguarded throughout the entire process.</li>
              <li><strong>Quick Turnaround Time (TAT):</strong> Our experts are well-versed in providing a quick turnaround, ensuring we meet your deadlines and deliver amazing results promptly.</li>
              <li><strong>Scalability:</strong> We are always available to provide support and can easily scale our services to meet the growing demands of your project.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Visualize Your Application?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a reputable high-fidelity design service company offering our expertise to clients all across the globe. Our professionals are committed to creating an environment of complete transparency with our clients, ensuring proper data security and reliability.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Custom Quote
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default HighFidelityDesign;