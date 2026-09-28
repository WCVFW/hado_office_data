import React from "react";
import Imainmenu from "../Imainmenu";

const InsuranceEligibilityManagement: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Nimble Insurance Eligibility Management Services</h1>
        <p className="text-lg text-gray-700">
          Streamline your insurance agency's operations with our Insurance Eligibility Management Services.
        </p>
        <p className="text-gray-600">
          Embrace quick scalability and improved business flexibility, seamlessly navigating busy times.
        </p>
      </section>

      {/* Challenges Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Challenges in Eligibility Management</h2>
        <p className="text-gray-700">
          Insurance agencies often grapple with the complexities of eligibility management, facing challenges such as inefficient workflows and time-consuming processes. 
          Our tailored solutions provide reliable and efficient management of additions, terms, and changes while optimizing customer service and productivity.
        </p>
      </section>

      {/* Solutions Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Insurance Eligibility Management Solutions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Eligibility Verification", description: "Ensure error-free eligibility verification for policyholders, minimizing discrepancies and mitigating potential liabilities." },
            { title: "Enrollment Assistance", description: "Simplify the enrollment process with expert guidance, ensuring clients have a seamless onboarding experience." },
            { title: "Dependent Management", description: "Efficiently manage and update dependent information, ensuring accurate coverage for all beneficiaries." },
            { title: "Coordination with Insurance Providers", description: "Facilitate seamless communication with insurance providers, streamlining processes for quicker responses and resolutions." },
            { title: "Employee Communication", description: "Keep employees informed about eligibility changes and policy updates, fostering transparency and trust." },
            { title: "Claims Assistance", description: "Provide dedicated support for managing insurance claims, ensuring timely processing and smooth resolution for clients." },
            { title: "Compliance and Regulatory Support", description: "Stay ahead of industry regulations with expert guidance and comprehensive compliance support." },
            { title: "Billing and Premium Management", description: "Efficiently handle billing and premium-related tasks, ensuring accuracy and timely payments." },
            { title: "Reporting and Analytics", description: "Gain valuable insights into eligibility trends and performance through detailed reporting and analytics." },
            { title: "Employee Support and Education", description: "Offer specialized support to employees, addressing eligibility-related inquiries and providing education on insurance benefits." },
          ].map((item, idx) => (
            <div key={idx} className="border rounded p-4 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Process Flow</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><strong>Request Initiation:</strong> Benefit administration portals and email submissions serve as channels for change requests.</li>
          <li><strong>Record Creation:</strong> Our team expertly creates records in your Agency Management System (AMS) using your naming conventions.</li>
          <li><strong>Process Request:</strong> We process requests directly on the carrier website using your agency's login.</li>
          <li><strong>Document Changes:</strong> Capture screenshots of the confirmed enrollment term or change and verify accuracy with the carrier.</li>
          <li><strong>Track Progress:</strong> Keep track of our progress effortlessly in your AMS, ensuring complete visibility.</li>
          <li><strong>Verify Accuracy:</strong> Double-check all changes for precision and compliance.</li>
        </ol>
      </section>

      {/* Why Choose Us Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Certified Service Provider:</strong> ISO 9001:2015 and SSAE18 certified.</li>
          <li><strong>Highly Trained Team:</strong> Experts in insurance eligibility management.</li>
          <li><strong>Data Security:</strong> Robust security measures with NDA, MFA, and encrypted emails.</li>
          <li><strong>High-quality Services:</strong> Meticulous processes ensuring excellence.</li>
          <li><strong>Scalable Solutions:</strong> Flexible services adapting to your agency's needs.</li>
          <li><strong>24/7 Availability:</strong> Round-the-clock support for prompt assistance.</li>
          <li><strong>Flexible Pricing:</strong> Cost-effective solutions tailored to your budget.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Optimize Your Eligibility Management</h2>
        <p className="text-gray-700 mb-4">
          Ensure your insurance agency's productivity and responsiveness during peak seasons. Minimize inaccuracies, enhance client satisfaction, and free up valuable time and resources.
        </p>
        <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default InsuranceEligibilityManagement;
