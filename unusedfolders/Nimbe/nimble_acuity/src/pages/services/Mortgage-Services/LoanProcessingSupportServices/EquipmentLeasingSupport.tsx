import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const EquipmentLeasingSupport: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Equipment Leasing Mortgage Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Get complete and reliable support for your equipment leasing requirements at cost-effective rates, helping you secure the capital needed for business growth.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              If your business needs new equipment or technology but can't afford it right now, you should consider the equipment financing and leasing solutions offered by Nimble Acuity. We are a leading provider of capital equipment leasing solutions, including terminal rental adjustment clause (TRAC) loans.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For over 23 years, our professionals have supported captive finance organizations and banks with the expertise needed to solve complex problems, open new markets, and drive efficiencies. We are here to help you enhance your business competitiveness, provide a solid foundation for growth, and generate enhanced business value.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Commercial Equipment Leasing Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nimble Acuity is a premier provider of operating lease, capital lease, and leaseback services, offering a comprehensive range of solutions:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Small Business Equipment Leasing:</strong> Our highly competent equipment finance professionals have significant experience working on commercial leasing platforms. We facilitate smooth and streamlined lease originations, allowing all stakeholders to collaborate seamlessly.
              </li>
              <li>
                <strong>Heavy Equipment Leasing:</strong> We help you design and develop innovative leasing plans so your clients can acquire the heavy equipment they need quickly and smoothly. Our experts will assist you in creating the best leasing contracts for heavy equipment.
              </li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Equipment Finance?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Affordable Pricing Options:</strong> Our equipment leasing and financing solutions are priced affordably, with hourly and FTE (full-time equivalent) options to ensure you receive world-class services at unbeatable prices.
              </li>
              <li>
                <strong>High-Quality Services:</strong> As an ISO-certified firm, we leave nothing to chance in our quest for service excellence on every project we undertake.
              </li>
              <li>
                <strong>Tools and Technologies:</strong> Our dedicated team uses the latest and best tools, techniques, and workflows to provide the most effective services.
              </li>
              <li>
                <strong>Superb Infrastructure:</strong> We provide our finance experts with world-class offices to maximize their productivity.
              </li>
              <li>
                <strong>Short Turnaround:</strong> Our experts are highly strict about meeting all timelines, ensuring our services are always provided quickly.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Equipment Finance and Leasing Support
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leading provider of equipment finance and leasing services. With our support, you can solve complex problems, open new markets, and drive efficiencies.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We help you enhance your business competitiveness, provide a solid foundation for business growth, and generate enhanced business value. If you are looking for a professional and cost-effective equipment finance service provider, get in touch with us today!
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default EquipmentLeasingSupport;