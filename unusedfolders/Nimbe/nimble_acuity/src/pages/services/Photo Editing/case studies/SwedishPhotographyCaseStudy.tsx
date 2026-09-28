import React from "react";
import PEMainMenu from "../PEmainmenu";

const SwedishPhotographyCaseStudy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Sports and Outdoor Photography Case Study for a Swedish Company
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble Acuity helped a Swedish sports and outdoor photography company achieve cost-effective, timely, and high-quality image editing solutions.
        </p>
      </section>

      {/* Case Study Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Client Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            A Swedish sports and outdoor photography company producing images for junior and elite classes, along with its suppliers, societies, and associations.
          </p>
        </div>

        {/* Business Need */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Situation – Business Need</h2>
          <p>
            The client wanted to deliver quality images to customers at affordable costs while reducing operating expenses and ensuring timely delivery.
          </p>
        </div>

        {/* Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Providing round-the-clock coverage and quick turnaround time.</li>
            <li>Ensuring 100% quality output using licensed software.</li>
            <li>Managing high volume of images with skilled and experienced editors.</li>
            <li>Maintaining secure infrastructure and data protection protocols.</li>
            <li>Assigning supervisors for prompt query resolution.</li>
          </ul>
        </div>

        {/* Nimble Acuity Solution */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Nimble Acuity Solution</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Allocated adequate and experienced resources for the project.</li>
            <li>Ensured data safety via secure VPN, enterprise antivirus, HIPS, NAC, and domain-level access restrictions.</li>
            <li>Provided high-speed dedicated bandwidth (4 Mbps) for quick uploads/downloads.</li>
            <li>Equipped 40 high-end workstations with latest image editing tools.</li>
            <li>Assigned supervisors for handling queries and resolving issues promptly.</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Achieved 60% annual cost savings.</li>
            <li>Improved efficiency through Nimble Acuity's training programs.</li>
            <li>Reduced operating costs while maintaining high-quality output.</li>
            <li>Delivered affordable, quality images to customers with quick turnaround times.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Sign up for a FREE Trial</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Experience the quality of our work before outsourcing. Let Nimble Acuity help you achieve cost-effective and timely image editing solutions.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default SwedishPhotographyCaseStudy;
