import React from "react";
import Imainmenu from "../Imainmenu";

const PolicyAdministration: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-green-900 text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Nimble Policy Administration, Maintenance, and Servicing
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Professional and cost-effective insurance policy administration, maintenance, and servicing by expert teams at rates starting at $8/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-10 px-6 max-w-5xl mx-auto space-y-4">
        <p>
          Access efficient insurance policy administration and maintenance services without the need for in-house resources. Our team leverages the latest tools and technologies to deliver high-quality, reliable services tailored to your business requirements.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-white py-10 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Insurance Policy Administration & Maintenance Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-bold mb-2">Policy Monitoring</h3>
            <p>
              Keep track of policy utilization and maintain accurate client records for reliable data management.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Process Customer Requests</h3>
            <p>
              Handle client requests efficiently while keeping them informed at every step of the policy administration process.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Policy Administration Services</h3>
            <p>
              Maintain and update policies, ensuring all details like client contact info and DOB are accurate and current.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Analyze Requests</h3>
            <p>
              Assess client requests such as premium changes or policy term updates using a streamlined and efficient process.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Our Policy Administration & Maintenance Process
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Receive Policy Documents:</strong> Collect policy documents and customer details and update the CRM system.</li>
          <li><strong>Compare Policy:</strong> Verify coverage details by comparing proposals with policy documents.</li>
          <li><strong>Update Customer Details:</strong> Keep customer profiles up to date in a transparent and timely manner.</li>
          <li><strong>Communicate with Underwriters:</strong> Coordinate with underwriters for documentation and report preparation.</li>
          <li><strong>Final Dispatch:</strong> Send finalized reports, policies, and customer details to the client, broker, or carrier.</li>
        </ol>
      </section>

      {/* Benefits */}
      <section className="bg-white py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Why Choose Nimble Acuity for Policy Administration & Maintenance
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Affordable and flexible pricing packages starting at $8/hour</li>
          <li>World-class infrastructure and access to latest insurance tools</li>
          <li>Highly skilled, experienced, and talented insurance experts</li>
          <li>Dedicated project manager as a single point of contact</li>
          <li>ISO/IEC 27001:2022 certified data security</li>
          <li>Scalable solutions to meet project demands</li>
          <li>Short turnaround times through global delivery centers</li>
          <li>24/7 round-the-clock support for clients</li>
          <li>ISO-certified error-free service assurance</li>
        </ul>
      </section>

      {/* Client Success */}
      <section className="bg-gray-100 py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Client Success Stories
        </h2>
        <div className="space-y-4">
          <p>
            <strong>Insurance Back-office Solutions to a Leading Health Insurance Company:</strong> Delivered reliable and timely back-office operations.
          </p>
          <p>
            <strong>Back-office Operations for Miami-based Client:</strong> Provided cost-effective and efficient insurance policy administration services.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Nimble Your Policy Administration Today
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Leverage reliable, scalable, and cost-effective policy administration, maintenance, and servicing solutions for your business. Get in touch with us today!
        </p>
        <button className="bg-white text-green-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PolicyAdministration;
