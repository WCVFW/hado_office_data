import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MortgageDefaultSupport: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Default Management Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Are non-paying and late-paying borrowers taking a toll on your business? Nimble Acuity provides mortgage default management services to help you mitigate the high rate of mortgage foreclosures.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity's mortgage default services can benefit lending institutions by capping the cost associated with loan recovery. We provide flexible options to prevent business deadlocks. We send frequent reminders for timely repayment, and also provide legal support to deal with non-paying customers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Additionally, we offer HAMP modification and short sale assistance if all other recovery options are exhausted. Our goal is to help you cope with late-paying and non-paying borrowers without risking bad loan write-offs.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mortgage Default Management Support Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Dealing with mortgage defaulters can be stressful. Our cost-effective services help you manage these situations with ease. Our support includes:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Loan Recovery Services:</strong> We efficiently track payment discrepancies by maintaining a detailed database of defaulter accounts. We use this data to send "letters of demand" and free your in-house teams from grappling with legally mandated processes.
              </li>
              <li>
                <strong>Loan Modification & Short Sale Support:</strong> Our specialists obtain necessary paperwork to understand the borrower's financial condition and determine their eligibility for loan modification. We provide excellent insights to help you decide on the possibility of modifying a loan or initiating a short sale to recover unpaid dues.
              </li>
              <li>
                <strong>Risk & Asset Management Services:</strong> We specialize in managing defaulted assets for various mortgage loan types. We help you monetize non-performing assets through short sales without bearing losses. We also conduct audits, maintain reports, and ensure a secure paper trail to protect the collateral.
              </li>
              <li>
                <strong>Mortgage Claims Processing:</strong> We prepare and send claims for collateral to the default management team. We provide reliable estimates for the mortgaged property and help you fast-track decisions in claims processing to cut losses and provide recovery options.
              </li>
              <li>
                <strong>HAMP Modification & Property Liquidation:</strong> We provide comprehensive back-office support for quick loan recovery. Our specialists assess the borrower's financial capacity and perform routine follow-ups. If a customer is unable to continue repayment, we can also provide short sale support as an alternative.
              </li>
            </ul>
          </div>

          {/* The Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mortgage Default Process
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity follows a highly disciplined strategy to handle conflicting scenarios with a friendly approach that benefits both lenders and borrowers. The steps involved in our process are:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 font-medium">
              <li>
                <span className="font-bold">Document Analysis:</span> We analyze mortgage records to understand the terms of the loan package and repayment terms.
              </li>
              <li>
                <span className="font-bold">Preliminary Skip Tracing:</span> We use manual and automated dialing along with email tracking to trace customers and notify them of their grace period.
              </li>
              <li>
                <span className="font-bold">Contact Attempts:</span> We assess contact possibilities and review credit and employment details to ensure borrowers can be reached through multiple channels.
              </li>
              <li>
                <span className="font-bold">Advanced Skip Tracing:</span> If a borrower cannot be contacted in the preliminary steps, we dispatch notifications to inform them that legal action may be considered.
              </li>
              <li>
                <span className="font-bold">Persistent Contact:</span> We continue to attempt to contact defaulters via phone, email, and other methods on a daily basis until a repayment is made.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Mortgage Default Management?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Certified Company:</strong> We are an ISO 9001:2015 certified company, recognized for our genuine mortgage default management services that truly solve concerns in debt collections and payment tracking.
              </li>
              <li>
                <strong>Data Security:</strong> We are an ISO/IEC 27001:2022 certified company. We value your data and mandate non-disclosure agreements before project commencement to keep your information secure.
              </li>
              <li>
                <strong>High Accuracy and Quality:</strong> We ensure the process is systematic and accurate from start to finish, from document correctness to keeping valid records.
              </li>
              <li>
                <strong>Short Turnaround:</strong> We work tirelessly to ensure that paper trails are accurate, allowing for quick contact with borrowers and timely reminders.
              </li>
              <li>
                <strong>Scalability:</strong> We are adaptable to sudden changes in demand and regulations, ensuring you are prepared for future challenges.
              </li>
              <li>
                <strong>Flexible Pricing:</strong> We offer customizable services, so you only pay for what is ideal for your specific mortgage default management needs.
              </li>
              <li>
                <strong>Single-point Contact:</strong> We assign a dedicated project manager as your single point of contact, ensuring you get quick updates and have your queries addressed without delay.
              </li>
              <li>
                <strong>Experienced Team:</strong> We have a large pool of talented professionals, including default management executives and mortgage analysts with over 10 years of experience.
              </li>
              <li>
                <strong>Modern Infrastructure:</strong> Our physical, security, and technology infrastructure is flawlessly maintained to ensure a secure environment for all projects.
              </li>
              <li>
                <strong>Secure Data Exchange:</strong> Our secure and advanced FTP and VPN systems ensure your data is safe and secure from the moment it leaves your end.
              </li>
              <li>
                <strong>24/7 Availability:</strong> Our contact centers are operational 24/7 to provide you with training, support, and grievance management at any time.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Mortgage Default Management Support
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has earned its stripes as a leading mortgage default management services provider. We have catered to over 250 clients worldwide and made services more accessible and affordable than any other competitors.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We offer other services, including reverse assistance and support for credit unions. Reach out now if you are looking for ways to stay on top of collectibles without straining relationships with borrowers.
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

export default MortgageDefaultSupport;