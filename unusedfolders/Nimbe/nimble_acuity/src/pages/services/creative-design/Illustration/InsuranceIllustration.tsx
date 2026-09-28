import React from "react";
import CSmainmenu from "../CSmainmenu";

const InsuranceIllustration: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Insurance Illustration Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Get access to accurate sale valuations with flexible insurance policy
          illustration services. Nimble insurance illustration services improve
          organizational accuracy with our innate insurance illustrations at
          just <span className="font-semibold">$15/hour</span>.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p>
          There has been an increased demand for life insurance policies since
          the pandemic. Insurance illustrators provide accurate insurance policy
          illustrations with easily understandable policy benefits/values.
          Insurance illustration services support whole life, term life,
          universal life, corporate, and bank-owned life insurance. Insurance
          illustration services cater to the group as well as individually owned
          policies.
        </p>
        <p>
          We provide compliant and compelling insurance illustration services
          for life, annuity, and long-term care. We are an intuitive and
          responsive insurance illustration service provider. We support the
          vital sales functions for all major types of business. We align our
          insurance illustrations following how insurance and retirement
          solutions are sold. Being a leading insurance illustration trial
          service providing company, we support product types across varied
          distribution channels.
        </p>
      </div>

      {/* Services */}
      <div className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Insurance Illustration Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Life Insurance Illustration Services",
              desc: "We analyze the performance by looking at the interest rates, mortality, and expense charges. Our illustrations present guaranteed and hypothetical non-guaranteed policy values.",
            },
            {
              title: "Annuity Insurance Illustration Services",
              desc: "We generate an average of 10–15 insurance illustrations daily. We provide comparisons, statements, and guidance for financial decisions.",
            },
            {
              title: "Sales Insurance Illustration Services",
              desc: "We offer variable, fixed, and indexed annuities with customizable, compliant outputs and integration with third-party systems.",
            },
            {
              title: "Comprehensive Insurance Illustration Reports",
              desc: "We provide thorough reports for basic, regular, in-force, LIRP, and supplemental illustrations tailored to product requirements.",
            },
            {
              title: "Insurance Illustration Mobile Application Services",
              desc: "Our Android/iOS app allows agents to log in, create, and track client orders, with fingerprint/facial recognition and easy search.",
            },
            {
              title: "Order Management System",
              desc: "Our web portal helps teams update orders, track status, manage roles, and generate dashboards and reports securely.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Insurance Illustration Process Flow We Follow
        </h2>
        <ol className="max-w-4xl mx-auto space-y-6 list-decimal list-inside">
          <li>
            <span className="font-semibold">Quotation Request:</span> We receive
            insured details, rating class, product type, premium, and other
            inputs.
          </li>
          <li>
            <span className="font-semibold">Document Verification:</span> We
            check if required information is complete. Missing data is requested
            from the client.
          </li>
          <li>
            <span className="font-semibold">Illustration:</span> Using WinFlex,
            I Pipeline, or other engines, we generate reports and save them in
            our system.
          </li>
          <li>
            <span className="font-semibold">
              Illustration Delivery & MIS Reporting:
            </span>{" "}
            We deliver within 2 hours and generate daily update reports.
          </li>
        </ol>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Nimble for Insurance Illustration Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            "Affordable Pricing Options",
            "ISO 27001 Certified and HIPAA Compliant",
            "Data Security and Confidentiality",
            "Dedicated Experts with 26+ Years Experience",
            "Scalable Cloud-Based Infrastructure",
            "Quicker Turnarounds (97% same-day delivery)",
            "24/7 Customer Support",
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-lg bg-gray-50 shadow-sm"
            >
              {benefit}
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Client Case Studies</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          <p>
            Nimble Provided Prepress and Vector Artwork to a Dublin-based Client
            – delivered accurate and high-quality services within quick
            turnaround time.
          </p>
          <p>
            Nimble Provided World-class and Unique Vector Artwork Services to an
            American Label Designer – flawless and unique results delighted the
            client.
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic max-w-3xl mx-auto">
          “The quality of Artwork delivered during the trial period was
          exceptional and that helped us to decide on our new Outsourced Partner
          from a couple of quotes from companies across the globe.”
          <footer className="mt-4 font-semibold">
            – Director, Operations, Leading Pharmaceutical Company, Netherlands
          </footer>
        </blockquote>
      </div>

      {/* Contact */}
      <div className="bg-blue-900 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Outsource Insurance Illustration Services to Nimble Auity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Nimble is a reputed global insurance illustration company offering
          cutting-edge solutions worldwide. Contact us today to get a free
          quote.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default InsuranceIllustration;
