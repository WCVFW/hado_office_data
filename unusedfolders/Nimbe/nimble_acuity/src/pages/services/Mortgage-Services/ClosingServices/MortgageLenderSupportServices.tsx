import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const MortgageLenderSupportServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Closing Support for Lenders
            </h2>
            <p className="text-lg text-gray-600">
              Mortgage closing is a complicated process where the title passes from the seller to the buyer. For a smooth transition, closing documents must be properly collated, signed, and recorded.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The Consumer Financial Protection Bureau mandates that lenders must deliver closing disclosures to consumers at least three business days prior to the transaction's consummation date. Failing to comply can result in penalties, which means you have to be thoroughly diligent in carrying out the mortgage closing process. Outsourcing mortgage closing support for lenders to **Nimble Acuity** can help you overcome the challenges of delivering document disclosures on time and successfully maintaining data integrity.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Mortgage Closing Support We Offer
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Mortgage closing has always been challenging for lenders. Often, they are not in sync with settlement agencies as they work on diverse platforms. At Nimble Acuity, we work collaboratively with you on a secure, web-based portal to manage document disclosures. Our experienced mortgage loan executives can identify inconsistencies and impending compliance issues in the closing documents. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Mortgage Closing Documents Collection:</strong> We gather all required documents, including flood certificates, appraisal reports, inspection reports, title searches, and mortgage insurance, in an effective, flawless, and compliant way.
              </li>
              <li>
                <strong>Data Validation & Property Title Evaluation:</strong> Nimble Acuity has years of experience in data validation for mortgage closing documents. We have a dedicated auditing team to check for inconsistencies and proceed only after their assessment and approval.
              </li>
              <li>
                <strong>Closing Instructions Preparation & Dispatch:</strong> Once closing documents are verified, we prepare and send closing instructions, along with wiring details, to the finance team. Our support is 100% compliant with all federal regulations.
              </li>
              <li>
                <strong>Settlement Company's Tax & Fees Assessment:</strong> We work with settlement agents, escrow companies, and attorneys to assess tax and fee requirements. We can also check reconveyance deeds and notes and address any fallouts with the settlement agents.
              </li>
            </ul>
          </div>

          {/* The Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mortgage Closing Support Process
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We ensure compliance-friendly mortgage closing support for lenders through our wide-ranging solutions. We help you prepare and deliver mortgage closing documents as mandated by state and federal law. Our processes include:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>Gathering and Collating Closure Documents</li>
              <li>Valuation of Property Title</li>
              <li>Arrangement and Preparation of Closing Instructions</li>
              <li>Evaluation of Tax & Fee with Settlement Companies</li>
            </ol>
          </div>

          {/* Benefits of Outsourcing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Mortgage Closing Support?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When you outsource mortgage closing support for lenders to us, we diligently ensure the safety and quality of your process. Our solutions come with robust quality audits, which ensure 100% compliance with mortgage and federal regulations. Here are just a few of the many benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>High Quality:</strong> Our ISO 9001-certified organization assures high-quality support. Our team is highly motivated and knowledgeable to help you with your closing challenges.
              </li>
              <li>
                <strong>State-of-the-Art Infrastructure:</strong> Our team has access to modern infrastructure, including world-class office spaces, uninterrupted network equipment, and the latest tools and technologies.
              </li>
              <li>
                <strong>Flexible Pricing Options:</strong> You can collaborate with us on a need-basis with our flexible pricing options. Our customized service enables us to focus on your pain points.
              </li>
              <li>
                <strong>Industry Expertise:</strong> Our extensive knowledge and service experience give substance to our credibility and allow us to efficiently get ahead of changing demands.
              </li>
              <li>
                <strong>24/7 Availability:</strong> Our team is available 24/7. When you partner with us, you can be certain that our mortgage executives will always be available during your work hours.
              </li>
              <li>
                <strong>Economy of Scale:</strong> We have the necessary resources to handle any spike in your business demands.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Mortgage Closing Support to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has been a pioneer in providing high-value mortgage closing support and a series of other mortgage solutions to its global clientele. We have an extended suite of professionals who can provide a high level of scalability and flexibility, customized to your service needs. We have in-depth knowledge and understanding of US and UK mortgage and federal laws.
            </p>
            <p className="text-gray-700 mb-6">
              Get in touch with us today for reliable, efficient, and cost-effective mortgage closing support for lenders.
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

export default MortgageLenderSupportServices;