import React from "react";
import CCmainmenu from "../CCmainmenu";

const RebateProcessing: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Rebate Processing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble's competent call center agents provide cost-effective &
          comprehensive rebate processing services which protect your business
          from cost & rebate processing complexity.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <p className="text-lg mb-4">
          Stop exhaustive rebate operations from straining your internal
          resources. Nimble rebate processing services align your operations
          with Critical to Quality (CTQ) metrics, such as processing time and
          accuracy. We reduce inefficiencies by mapping the{" "}
          <span className="font-semibold">Voice of the Customer (VoC)</span> with{" "}
          <span className="font-semibold">CTQ processes</span>.
        </p>
        <p>
          Nimble is a leading provider of tax refund processing services with
          27+ years of experience in discount management for global clients. Our
          expert team leverages{" "}
          <span className="font-semibold">DMAIC methodology</span> to streamline
          workflows, ensure compliance, and standardize rebate data collection.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Rebate Processing Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Rebate Data Processing",
            "Rebate Receiving & Sorting",
            "Rebate Check Printing & Mailing",
            "Rebate Support Service",
            "Laser Printing for Readable Checks",
            "Email Updates to Customer",
            "Rebate Premiums Storage",
            "Address Provisioning",
            "Back Office Rebate Processing",
            "Rebate Order Processing",
            "Data Entry",
            "Rebate Survey & Polling",
            "Kit-Making with Rebate Management Programs",
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Rebate Processing Workflow
        </h2>
        <ol className="space-y-6 max-w-4xl mx-auto">
          {[
            "Data entry for rebate receipts/bonus voucher",
            "Data collection and summary",
            "Confirm rebate form/email and rebate agreement",
            "Verification with industry protocols",
            "If compliant, merchandise is processed and recorded",
            "If non-compliant, customer is updated with reasons for rejection",
          ].map((step, idx) => (
            <li
              key={idx}
              className="flex items-start bg-white p-4 rounded-lg shadow"
            >
              <span className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold mr-4">
                {idx + 1}
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Industries */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          Industries We Cater To
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-medium max-w-6xl mx-auto">
          {[
            "Aerospace",
            "Agriculture",
            "Automotive",
            "Customs Brokerage",
            "Defense",
            "Energy",
            "Education",
            "Entertainment",
            "Finance",
            "Food",
            "Healthcare",
            "Hospitality",
            "IT",
            "Logistics",
            "Manufacturing",
            "Multimedia",
            "Public Sector",
            "Pharmaceutical",
            "Retail & eCommerce",
            "Telecom",
            "Insurance",
            "Legal",
            "Real Estate",
          ].map((industry, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-3 rounded-lg hover:bg-blue-50"
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          Benefits of Choosing Nimble
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            "Flexible Pricing Options",
            "100% Information Security",
            "Modern Infrastructure Facilities",
            "High Quality with Lean Processes",
            "Operational Transparency",
            "Built-in CRM",
            "Multilingual Support",
            "24/7 Availability",
            "Qualified Team",
            "Full Monthly/Weekly Reports",
            "Scalability Services",
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md"
            >
              <h3 className="font-semibold">{benefit}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-indigo-50">
        <h2 className="text-3xl font-bold text-center mb-8">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-center italic text-gray-700">
          “The quality of Artwork delivered during the trial period was
          exceptional and that helped us to decide on our new partner. Nimble’s
          support team consistently delivers excellence.”
          <br />
          <span className="mt-2 block font-semibold">
            Director - Operations, Leading Pharma Company (Netherlands)
          </span>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-blue-800 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Streamline Your Rebate Workflows?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Partner with Nimble to transform your rebate processing efficiency with
          measurable improvements. Connect with us today to set up your{" "}
          <span className="font-semibold">CTQ requirements</span>.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default RebateProcessing;
