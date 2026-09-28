import React from "react";
import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import { Link } from "react-router-dom";


const MortgageService = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      {/* Page Content */}
      <section className="py-16 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl text-center font-bold text-[#006A7C] mb-4">
              Mortgage Processing Support Services
            </h1>
            <p className="text-lg text-gray-600">
              Managing mortgage processing in-house can be overwhelming with
              complex paperwork, regulatory requirements, and market changes.
              These challenges often cause inefficiencies, delays, and missed
              opportunities.{" "}
              <strong>Outsourcing mortgage processing</strong> allows
              businesses to streamline workflows, reduce costs, and stay
              compliant — enabling teams to focus on growth and customer
              satisfaction.
            </p>
            <div className="w-full mt-10 mb-12">
          <img
            src="/images/img2.jpg"
            alt="Mortgage Processing Support"
            className="w-full rounded-lg shadow-lg object-cover max-h-96 mx-auto"
          />
        </div>
          {/* Hero Section */}

          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                From document verification to underwriting and closing support,
                outsourcing ensures accuracy and faster turnaround times while
                mitigating compliance risks. By working with seasoned mortgage
                professionals, your business gains a competitive edge in an
                evolving market.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Discover how our mortgage processing services transform
                operations, improve efficiency, and help you deliver
                exceptional borrower experiences.
              </p>
            </div>
            <div className="bg-[#F0FAFB] rounded-2xl p-6 shadow">
              <h3 className="text-xl font-semibold text-[#006A7C] mb-4">
                Key Benefits
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✔️ Faster loan approvals</li>
                <li>✔️ Reduced operational costs</li>
                <li>✔️ Improved compliance and accuracy</li>
                <li>✔️ End-to-end mortgage support</li>
                <li>✔️ Scalable solutions for peak demand</li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#006A7C] mb-6">
              Our Mortgage Processing Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Mortgage Loan Servicing",
                "Mortgage Process Automation Services",
                "Mortgage Underwriting Services",
                "Mortgage Loan Processing Support",
                "Mortgage Appraisal Support",
                "Mortgage Title Support",
                "Mortgage Automation Solutions",
                "Mortgage Closing Support",
                "Mortgage Post-Closing Support",
                "Digital Marketing Services for Mortgage",
                "Mortgage Compliance Services",
                "Reverse Mortgage Support Services",
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-[#F9F9F9] p-5 rounded-xl shadow hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-[#006A7C]">{service}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Process Flow */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#006A7C] mb-6">
              Optimized Process Flow for Mortgage Outsourcing
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
              {[
                "Loan Origination",
                "Loan Processing",
                "Underwriting",
                "Closing Support",
                "Post-closing Formalities",
                "Mortgage Servicing",
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#F9F9F9] p-5 rounded-xl shadow hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-[#006A7C]">{step}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#006A7C] mb-6">
              Customer Success Stories
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-[#F9F9F9] rounded-xl shadow">
                <h4 className="font-semibold text-[#006A7C] mb-2">
                  Streamlined Loan Onboarding for a US Lender
                </h4>
                <p className="text-gray-600">
                  Using the MSuite tool, we resolved loan onboarding challenges,
                  tightened TAT, and boosted efficiency for high-volume
                  processing.
                </p>
              </div>
              <div className="p-6 bg-[#F9F9F9] rounded-xl shadow">
                <h4 className="font-semibold text-[#006A7C] mb-2">
                  Automated Underwriting for a Residential Lender
                </h4>
                <p className="text-gray-600">
                  Our automation solution significantly improved underwriting
                  productivity and reduced massive backlogs for a leading US
                  residential lender.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#006A7C] mb-6">
              Why Choose Us for Mortgage Processing?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <ul className="space-y-2">
                <li>
                  <strong>Proven Track Record:</strong> Years of successful
                  mortgage projects.
                </li>
                <li>
                  <strong>Experienced Team:</strong> Skilled professionals with
                  industry know-how.
                </li>
                <li>
                  <strong>Advanced Tools:</strong> Research & analytics-driven
                  solutions.
                </li>
                <li>
                  <strong>Customized Services:</strong> Tailored to your unique
                  business goals.
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <strong>Quality Assurance:</strong> Multi-step quality control
                  checks.
                </li>
                <li>
                  <strong>On-time Delivery:</strong> Efficient project
                  management for faster results.
                </li>
                <li>
                  <strong>Affordable Pricing:</strong> Flexible and
                  cost-effective models.
                </li>
                <li>
                  <strong>Client-Centric:</strong> Transparent communication and
                  high satisfaction rates.
                </li>
              </ul>
            </div>
          </div>

          {/* Who Benefits */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#006A7C] mb-6">
              Who Benefits from Our Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
              {[
                "Real Estate & Property Management",
                "Banks & Financial Institutions",
                "Mortgage Brokers",
                "Law Firms",
                "Construction & Development",
                "Individuals",
                "Insurance Companies",
                "Credit Unions",
              ].map((industry, idx) => (
                <div
                  key={idx}
                  className="bg-[#F9F9F9] p-5 rounded-xl shadow hover:shadow-md transition"
                >
                  <h4 className="font-medium">{industry}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#006A7C] mb-6">FAQs</h2>
            <ul className="space-y-4 text-gray-700">
              {[
                "Do you specialize in mortgage processing?",
                "Can outsourcing mortgage processing save costs?",
                "In which states are you licensed for mortgage processing?",
                "What are the advantages of outsourcing borrower mortgage applications?",
                "What factors should I consider when choosing a mortgage processing provider?",
                "How can outsourced mortgage processing benefit B2B businesses?",
              ].map((faq, idx) => (
                <li key={idx} className="border-b pb-2">
                  {faq}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource Mortgage Processing for Smarter Business Growth
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Simplify complex processes, improve compliance, and reduce costs
              with our end-to-end mortgage support services. Focus on your core
              business while we handle the details with accuracy and efficiency.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MortgageService;
