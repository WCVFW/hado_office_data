import React from "react";
import Imainmenu from "../Imainmenu";

const HealthInsuranceBackOfficeCaseStudy: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-green-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Complete Insurance Back Office Solutions for Renowned Health Insurance Company
          </h1>
          <p className="text-lg text-gray-700">
            Case study highlighting how Nimble Acuity helped a leading health insurance company optimize back-office operations and boost productivity.
          </p>
        </div>
      </section>

      {/* The Client */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Client</h2>
        <p>
          Our client is a renowned health insurance company based in the Bay Area, San Francisco, California. They operate as a successful online insurance brokerage firm, helping employees across the US find suitable health coverage tailored to their needs.
        </p>
      </section>

      {/* Project Requirements & Challenges */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">Project Requirements & Challenges</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>The client was spending a significant portion of commissions on back-office staff and wanted to cut costs without impacting productivity.</li>
            <li>They required exceptional back-office support to improve efficiency and focus on new business development quickly.</li>
          </ul>
        </div>
      </section>

      {/* The Nimble Acuity Solution */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Nimble Acuity Solution</h2>
        <p>
          Our insurance team took over all back-office tasks and prioritized them based on urgency, optimizing processes while focusing on mission-critical tasks. 
        </p>
        <p>
          Talented resources were assigned to implement process improvements without disrupting the existing workflow. A dedicated project manager ensured all deliverables were met on time.
        </p>
      </section>

      {/* The Result */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">The Result</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>All client requirements were met on time and within budget.</li>
            <li>Account managers were freed from back-office tasks and could focus entirely on generating new business.</li>
            <li>Established a long-term partnership, making Nimble Acuity the preferred outsourcing partner for all insurance operations.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Your Insurance Back-office Projects to Nimble Acuity
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          With 26+ years of experience, Nimble Acuity handles complex insurance outsourcing projects with 100% customer satisfaction. We provide scalable solutions tailored to your business needs.
        </p>
        <a
          href="/contact"
          className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default HealthInsuranceBackOfficeCaseStudy;
