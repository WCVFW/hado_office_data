import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MortgageRPA: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Robotic Process Automation (RPA) for Mortgage Processing
            </h2>
            <p className="text-lg text-gray-600">
              Decrease your legwork and boost efficiency by outsourcing mortgage robotic process automation support services to Nimble Acuity.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to outsource **mortgage robotic process automation**? At **Nimble Acuity**, we understand your existing mortgage framework and workflow just like an in-house team. We work with you to identify key areas where automation is practical and necessary, saving you time, money, and effort that can be spent on more important functions. When you partner with us, you get a foolproof way to improve your mortgage processes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When you choose mortgage robotic process automation from Nimble Acuity, we first study your workflow to categorize areas where automation with **AI** and **ML** can significantly reduce time spent on rule-based processes like data entry, organization, and verification. Our goal is to help you find an efficient way to manage the mortgage process, so you can focus on growing your business.
            </p>
          </div>

          {/* Our RPA Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Mortgage RPA Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Committing errors in data entry, extraction, and validation can be expensive and time-consuming. It's one of the top reasons for an unhappy service experience. To end manual and routine processes in the mortgage landscape, it's time to upgrade to a practical solution like mortgage robotic process automation. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 md:columns-2">
              <li>
                <strong>Mortgage Loan Processing:</strong> Automate data inputs in W-2 and Fannie Mae form 1003 to simplify data aggregation and verification.
              </li>
              <li>
                <strong>Mortgage Underwriting:</strong> Simplify updating loan attributes and collecting borrower documentation such as income reports and credit statements.
              </li>
              <li>
                <strong>Mortgage Appraisal:</strong> Automate the collection of ownership history, title documents, and comparable values to streamline appraisal reports.
              </li>
              <li>
                <strong>Mortgage Loan Closing:</strong> Significantly shorten closing times and improve collaboration between originators, underwriters, and processors.
              </li>
            </ul>
          </div>

          {/* The Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our RPA Implementation Process
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is an experienced mortgage robotic process automation enabler. We possess the know-how of the latest developments to accelerate and make an otherwise manual mortgage service error-free. Our transparent methodology is as follows:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 font-medium">
              <li>Client's Mortgage Process Analysis</li>
              <li>RPA Modeling of Manual Tasks</li>
              <li>Prototype Testing</li>
              <li>Full-Scale RPA Implementation & Testing</li>
              <li>RPA Integration and Ongoing Support</li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Your Mortgage RPA?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Certified and Secure:</strong> We are committed to data security, with a focus on protecting your confidential mortgage information.
              </li>
              <li>
                <strong>High Accuracy and Quality:</strong> Our team of experienced testers ensures the operational efficiency and quality of our RPA solutions.
              </li>
              <li>
                <strong>Short Turnaround Time:</strong> Our customized RPA solutions are designed to deliver the industry's fastest turnaround times.
              </li>
              <li>
                <strong>Scalability:</strong> We help you scale your mortgage business without revamping your existing resources from the ground up.
              </li>
              <li>
                <strong>Flexible Pricing:</strong> Choose from affordable and customizable pricing options that fit your specific needs.
              </li>
              <li>
                <strong>Dedicated Support:</strong> Get a dedicated account manager to ensure a seamless experience and quick resolution of challenges.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Automate Your Mortgage Process?
            </h3>
            <p className="text-gray-700 mb-6">
              Mortgage businesses that rely on robotic process automation never lose track and are successful in achieving their desired results. With an accessible pool of skilled RPA specialists, you can automate most routine mortgage application processes on the go.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to transform your mortgage loan processing? Contact us today to discuss your specific needs.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MortgageRPA;