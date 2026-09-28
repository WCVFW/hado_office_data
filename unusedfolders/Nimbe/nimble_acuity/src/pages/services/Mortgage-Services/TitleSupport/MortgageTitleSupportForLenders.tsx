import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const MortgageTitleSupportForLenders: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Title Support Services for Lenders
            </h2>
            <p className="text-lg text-gray-600">
              Are you facing challenges with property title transfers and legal issues? It's time to outsource title support services to an experienced partner so you can focus on your core business.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** has been a pioneer in providing offshore title support services for lenders for almost two decades. We've catered to clients from different parts of the world and various industries, handling title support for companies of all sizes, from small to large corporations.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Title Support Services for Lenders
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our professional team of mortgage experts works to reduce delays and boost the accuracy of the title support process. Some of the key services we offer include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Ordering:</strong> Our team works closely with the loan officer to get details from the mortgage title company and place the order for the property title. Our proactive approach ensures we receive the title within a quick turnaround time.
              </li>
              <li>
                <strong>Examination:</strong> We meticulously review the title and other property details, such as owner history, purchase timeline, and transaction details. We thoroughly verify each entry to ensure all information is correct and updated.
              </li>
              <li>
                <strong>Commitment:</strong> We use state-of-the-art technologies to ensure all details are correct and error-free, which ensures a smooth process for tax filing, encumbrances, and commitment easements.
              </li>
              <li>
                <strong>Policy Production:</strong> By leveraging the endorsements and exceptions in the title commitment report, we generate necessary documents, including Short Form, Long Form, and owner policies. Our systematic approach helps lenders reduce operational costs.
              </li>
              <li>
                <strong>Insurance:</strong> Our team can help you order title insurance to protect your business interests. When you partner with us, you can rest assured you'll get the best title insurance for your property, reducing risks.
              </li>
              <li>
                <strong>Settlement & Closing:</strong> We can assist with preparing the HUD-1 or closing statement by collating all information, including title company charges, document prep fees, real estate commissions, and more. Our closing services help you execute the transfer process in the shortest time possible.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              As a leading mortgage title support services company with over 26 years in the industry, we understand our clients' exact needs and provide tailored services. By outsourcing to us, you gain access to the following benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Flexible Pricing Options:</strong> Our highly flexible pricing allows you to pay only for the services you need, helping you save on overall costs and increase revenue.
              </li>
              <li>
                <strong>World-Class Infrastructure:</strong> We have access to the best infrastructure, including modern office spaces, the latest tools, and uninterrupted network connections.
              </li>
              <li>
                <strong>Information Security:</strong> We are an ISO/IEC 27001:2022 ISMS-certified organization, ensuring all your data—including legal, financial, and client information—is completely safe with us.
              </li>
              <li>
                <strong>Experienced Mortgage Experts:</strong> Our team has over 100+ years of combined experience and has catered to clients worldwide.
              </li>
              <li>
                <strong>Single Point of Contact:</strong> We assign a dedicated project manager who will serve as your single point of contact for all your needs, available 24/7.
              </li>
              <li>
                <strong>Ease of Scalability:</strong> We have the bandwidth and resources to scale services up or down based on your requirements and work volume.
              </li>
              <li>
                <strong>Multiple Delivery Centers:</strong> Our delivery centers are spread across different time zones, allowing us to deliver services with a quick turnaround time.
              </li>
              <li>
                <strong>24/7 Availability:</strong> Our experts are available around the clock to address your issues via phone or email, no matter your time zone.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Title Support for Lenders to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing title support for lenders and other mortgage services to clients globally. Our team leverages the latest tools and technologies to accelerate title closing processes, understanding your requirements and providing quick solutions.
            </p>
            <p className="text-gray-700 mb-6">
              If you're looking for a reliable, efficient, and cost-effective title support service provider, look no further. Get in touch with us today!
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

export default MortgageTitleSupportForLenders;