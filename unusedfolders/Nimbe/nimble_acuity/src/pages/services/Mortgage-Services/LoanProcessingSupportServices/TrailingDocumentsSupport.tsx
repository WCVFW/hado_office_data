import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const TrailingDocumentsSupport: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Trailing Documents Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Get timely processing of your mortgage trailing documents to increase productivity and avoid costly fines from investors.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Managing all mortgage trailing documents can be stressful, especially when investors issue fines for late or missing paperwork. Timely processing is crucial to ensure smooth cash flow. This is where an experienced provider like Nimble Acuity can help.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over 12 years of experience in mortgage services, Nimble Acuity is a leader in mortgage trailing documents support. We work with a highly efficient team and use state-of-the-art technology to ensure our clients have all trailing documents in place well before time, making us a trusted partner in the industry.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mortgage Trailing Documents Support Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Missing documents can lead to chaos and unwanted costs. Our services are designed to cover lenders from start to finish. Our experts use the latest tools, software, and automated systems to ensure a seamless process. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Document Preparation:</strong> We use a document receipt system to pick up your mortgage trailing documents daily. This keeps your mailroom organized and ensures documents like deeds of trust, title policies, and private mortgage insurance policies are properly handled.
              </li>
              <li>
                <strong>Document Scanning:</strong> Once received, we scan all documents using our in-house document management system. We ensure the highest quality, checking for any missing files or even the tiniest inconsistencies.
              </li>
              <li>
                <strong>Document Auditing:</strong> We use advanced document review systems to perform routine audits of digitized loan files, identifying and flagging inconsistencies to save you from potential risks.
              </li>
              <li>
                <strong>Outbound Calls:</strong> We have a dedicated team for document acquisition. They make outbound calls to concerned parties, such as title companies, to acquire any missing documents and ensure the mortgage file is complete.
              </li>
              <li>
                <strong>Regular Reporting:</strong> We send regular reports to keep you updated on the status of your documents. We use our mortgage software solution to flag missing documents, ensuring you are aware of the entire process at any given point.
              </li>
              <li>
                <strong>Bulk Mortgage Scanning:</strong> We provide highly efficient bulk mortgage scanning services, which saves time for lenders who plan for loan sales in the secondary market without compromising on quality or accuracy.
              </li>
            </ul>
          </div>

          {/* The Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mortgage Trailing Documents Support Process
            </h3>
            <p className="text-gray-700 mb-6">
              We believe in complete transparency and follow a systematic process to ensure perfection in our services. Here are the steps we take when you partner with us:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 font-medium">
              <li>
                <span className="font-bold">Receiving Documents:</span> We begin by receiving all your documents and preparing them for scanning.
              </li>
              <li>
                <span className="font-bold">Scanning:</span> Documents are scanned using accurate automated systems to identify any missing files or information.
              </li>
              <li>
                <span className="font-bold">Acquiring Missing Documents:</span> We correct any inconsistent information and acquire missing documents through outbound calls to the concerned parties.
              </li>
              <li>
                <span className="font-bold">Delivering Documents:</span> After all missing documents are acquired, we double-check the file for completeness. We then send the electronic version to the investor and the original version to the lender or other required party.
              </li>
              <li>
                <span className="font-bold">Reporting:</span> We keep you in the loop by providing weekly reports on the status of your documents, using our proprietary mortgage software to store and track all files.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Mortgage Trailing Documents Support?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Timely Processing:</strong> We are experts at recording all important documents well in time, ensuring you avoid costly fines from investors.
              </li>
              <li>
                <strong>Expert Team:</strong> Our team of experts is rich in skill and experience, following a systematic procedure to ensure all documents are in place and identified without mistakes.
              </li>
              <li>
                <strong>Cutting-edge Technology:</strong> We invest in the latest tools and technologies to increase efficiency and provide unmatched services.
              </li>
              <li>
                <strong>Over Two Decades of Experience:</strong> With over 12 years of intense experience, we have become a leader in outsourcing mortgage trailing documents support services.
              </li>
              <li>
                <strong>24/7 Customer Support:</strong> Our dedicated customer support team works around the clock to help you find answers to any questions or queries you may have.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Mortgage Trailing Documents Support
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has reached incredible heights by maintaining the core qualities that make a service provider successful. We ensure your investors are happy by providing top-notch mortgage trailing document processing services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              With the countless benefits we offer, outsourcing your mortgage trailing documents support to us can be the best bet for you. Get in touch with us now for the support services you’re looking for.
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

export default TrailingDocumentsSupport;