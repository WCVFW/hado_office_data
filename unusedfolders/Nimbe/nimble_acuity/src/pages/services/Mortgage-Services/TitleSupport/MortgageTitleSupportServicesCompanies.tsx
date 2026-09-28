import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const MortgageTitleSupportServicesCompanies: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Title Support Services for Companies
            </h2>
            <p className="text-lg text-gray-600">
              Unclear title is a common cause of concern for mortgage lenders, resulting in monetary losses and legal risks.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              An unclear title is a common concern for mortgage lenders, as it can result in significant financial losses. If you're a lender, it's crucial to order professional title services to protect yourself from disputes between buyers and sellers after a mortgage closes. Since mortgage title support is a resource-intensive task, it's best to leave it to experts like us.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we have extensive knowledge of title ordering, analysis, property transfer rights, and title insurance. As a one-stop solution for your mortgage needs, we have over 200 certified mortgage professionals who are adept at legal requirements and regulatory compliance to provide comprehensive assistance for all mortgage titles.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Title Support Services for Companies
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              To provide a superior service experience and ensure financial security, a mortgage title support company must have a 360-degree view of a property's transaction history. When you partner with us for mortgage title support services, we delve deep into property records to prevent significant delinquencies. Our services are designed to cut down turnaround time and speed up decision-making, including:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Ordering Mortgage Title:</strong> We order mortgage titles on the lender's behalf to ensure the collateral has a clear mortgage lien, a crucial step for preventing legal disputes.
              </li>
              <li>
                <strong>Title Search:</strong> We conduct thorough title searches at the city, county, and even area-specific levels. Our expert loan officers collaborate with title companies to retrieve highly-accurate title reports and routinely follow up with all relevant stakeholders.
              </li>
              <li>
                <strong>Title Assessment:</strong> We scan property titles for unresolved disputes and irregularities. Our service acts as a fraud deterrent, alerting lenders if a property has legal complications or does not qualify as ideal collateral. We look for past lawsuits, liens, defaulted taxes, and other legal claims.
              </li>
              <li>
                <strong>Title Commitment:</strong> This is a final summary of the title search and ordering process. It includes the title insurance conditions and resolves any faults or peculiarities found during the title assessment. The commitment report facilitates a smooth mortgage closure.
              </li>
              <li>
                <strong>Mortgage Title Insurance:</strong> If you need help with title insurance for your clients, we've got you covered. With our comprehensive knowledge of policy terms and compliance, we use automated tools to extract and index data from documents, ensuring your insurance requirements are met quickly.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nimble Acuity provides back-office services for mortgage titles aimed at mitigating and eliminating risks lenders face during mortgage closure. Our services are customized to protect you from scenarios that lead to financial losses. The benefits go beyond just saving time and money. By outsourcing to us, you can gain:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Access to 200+ certified and experienced mortgage experts.</li>
              <li>Significant savings on costs and turnaround time.</li>
              <li>Customized services that match your business size and budget.</li>
              <li>The power of process automation for higher efficiency.</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Title Support Process
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              From providing customized services to making them cost-effective, our workflow is fine-tuned to streamline your mortgage process. We follow a transparent and efficient workflow:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Document Collection:</strong> We gather inputs from banks and other sources, such as seller information sheets and commitment letters, and issue an acknowledgment upon receipt.
              </li>
              <li>
                <strong>Evaluation of Tax Records:</strong> We consult with tax authorities to pull up tax payment records and check for any unpaid dues.
              </li>
              <li>
                <strong>Creation of Paper Trails:</strong> We analyze the tax payment history to create a strong, end-to-end paper trail for the property’s timeline.
              </li>
              <li>
                <strong>Title History Evaluation:</strong> We perform comprehensive title checks to see if the collateral was involved in past disputes and verify that the title transfer was handled properly.
              </li>
              <li>
                <strong>Title Commitment Report:</strong> Once the collateral is deemed clear, we issue a commitment report, enabling lenders to make data-driven decisions.
              </li>
              <li>
                <strong>Sale and Closing Transaction Execution:</strong> We provide a single-view of the mortgage portfolio, allowing you to quickly deny or close the mortgage to finance the client.
              </li>
            </ol>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Choose Nimble Acuity for Reliable Mortgage Title Support
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is an ISO-certified mortgage title support outsourcing company with over 26 years of industry experience. Our range of mortgage services are trusted by many clients across the industry. With a team of over 200 certified mortgage professionals, we handle each project exactly as you expect. Since we use automated tools for data aggregation and compliance, you face minimal risk by partnering with us.
            </p>
            <p className="text-gray-700 mb-6">
              Get in touch with us if you want reliable mortgage title support services that speed up closure.
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

export default MortgageTitleSupportServicesCompanies;