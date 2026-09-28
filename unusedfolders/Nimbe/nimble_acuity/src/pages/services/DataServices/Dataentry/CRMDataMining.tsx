import React from "react";
import DSmainmenu from "../DSmainmenu";

const CRMDataMining: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nimble CRM Data Mining Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Do better and create more scope for growth by leveraging more
          personalized interactions with your customers. Prices start at just{" "}
          <span className="font-semibold">$6/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Customer Relationship Management (CRM) is critical for managing
          interactions with existing customers and gaining insights into
          potential clients. CRM data mining helps you build stronger
          relationships, regain lost customers, and enhance profitability.
        </p>
        <p>
          At Nimble Acuity (Nimble Acuity), we leverage the latest tools and techniques
          to provide CRM data mining services that align with your business
          goals and ensure a strong brand image.
        </p>
      </section>

      {/* Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          CRM Data Mining Services We Offer
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Personalized Customer Experience:</strong> Identify your
            target audience and enhance interactions to make them more
            personalized and effective.
          </li>
          <li>
            <strong>CRM Software Integration:</strong> Integrate data from
            various CRM platforms like Salesforce, SAP, Microsoft Dynamics,
            Oracle Siebel, and PeopleSoft for actionable insights.
          </li>
          <li>
            <strong>Building Marketing Database:</strong> Create a targeted
            marketing database to improve outreach and sales effectiveness.
          </li>
          <li>
            <strong>Collecting Customer Profile Data:</strong> Gather relevant
            customer information to plan effective marketing and sales
            strategies.
          </li>
          <li>
            <strong>Identifying Value-Based Customers:</strong> Focus on
            high-value clients for improved ROI and resource allocation.
          </li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Choose Nimble Acuity for CRM Data Mining Services?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Affordable, customized CRM data mining solutions</li>
          <li>100% data security and confidentiality</li>
          <li>High-quality services with dedicated quality assurance</li>
          <li>Quick turnaround time with global delivery centers</li>
          <li>ISO 9001:2015 certified services meeting international standards</li>
          <li>Single point of contact for seamless communication</li>
          <li>Scalable services to handle small or large projects</li>
          <li>Round-the-clock support through calls, emails, chat, and social media</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Client Success Stories
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Auckland-based Consulting Firm:</strong> Provided accurate
            data extraction and created comprehensive profiles of potential clients.
          </li>
          <li>
            <strong>Missouri-based Online Store:</strong> Delivered high-quality
            online data entry services at cost-effective rates.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble CRM Data Mining Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Partner with us for transparent, reliable, and high-quality CRM data
          mining services that drive growth, strengthen customer relationships,
          and improve sales outcomes.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CRMDataMining;
