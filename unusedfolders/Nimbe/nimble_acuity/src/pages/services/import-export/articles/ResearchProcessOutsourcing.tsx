import React from "react";
import NavigationMenu from "../MegaMenu";

const ResearchProcessOutsourcing: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Intro */}
      <NavigationMenu/>
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Nimble Research Process Outsourcing (RPO)
        </h1>
        <p className="text-gray-700 leading-relaxed">
          Searching for the right information is an activity that can be easily Nimbled – 
          the first step in research process outsourcing (RPO). Business information requires 
          careful study and sifting before value-added analysis can be done. But the deluge of 
          information available today requires an inordinate amount of time to wade through 
          before business executives can derive value from it.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          RPO enhances productivity in your workplace, enabling you to handle more business. 
          For example, a market researcher can quickly gather competitive intelligence about 
          a product or service, a legal consultant can process more patents, an investment 
          analyst can process more stocks, or a pharma company can conduct contract research 
          outsourcing, enabling faster time-to-market for new drugs. India has become a 
          preferred R&D destination with its pool of knowledge workers with specialized skills.
        </p>
      </section>

      {/* Nimble Acuity Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Nimble Acuity’s Research Process Outsourcing Services
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Financial research, financial analysis and modeling</li>
          <li>Business research – competitive intelligence, preparation of company profiles, data analytics</li>
          <li>Life sciences research</li>
          <li>Legal research</li>
          <li>Intellectual Property research</li>
        </ul>
      </section>

      {/* Business Models */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Three Business Models</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Transactional Model</h3>
            <p className="text-gray-700 text-sm">
              Lower value, less complex projects help to showcase the vendor’s capability 
              before proceeding to higher-level projects.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Relationship Model</h3>
            <p className="text-gray-700 text-sm">
              Contracts are typically larger and last longer as the outsourcing client 
              develops a relationship with the RPO vendor.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Partnership Model</h3>
            <p className="text-gray-700 text-sm">
              The client-vendor relationship evolves into a long-term partnership. 
              Recurring gains accrue to both parties through learning, resulting in 
              higher productivity and value-addition.
            </p>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Some Things to Keep in Mind</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Start with a trial program and ramp up in stages for best results.</li>
          <li>Be clear and specific in your requirements and deliverables.</li>
          <li>Invest time during the initial phase to align expectations with your vendor.</li>
          <li>Business research services based on secondary sources like the internet are a good bet for outsourcing.</li>
          <li>Cost savings can go up to 40% with long-term value from innovation and productivity gains.</li>
        </ul>
      </section>

      {/* Benefits & Expectations */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          What You Can Expect from Nimble Acuity
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Expertise in research strategy and methodology</li>
          <li>Competency in corporate research and investment research</li>
          <li>Global coverage</li>
          <li>A results-oriented approach</li>
          <li>Strict confidentiality</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-50 p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Nimble Research Process Outsourcing to Nimble Acuity
        </h2>
        <p className="text-gray-700 mb-6">
          Contact Nimble Acuity now for Research Process Outsourcing services 
          that create value for your business.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default ResearchProcessOutsourcing;
