import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const VATReturnServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Professional & Cost-Effective VAT Return Services
            </h2>
            <p className="text-lg text-gray-600">
              Free your business from the burden of VAT returns. With Nimble Acuity,
              you get professional, accurate, and cost-effective VAT return services
              starting from just <span className="font-semibold">$35 per return</span>.
              Our experts simplify the complexity, saving you time, money, and effort
              while ensuring compliance.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              VAT returns require specialized knowledge and precision. Our team has
              years of experience managing VAT processes for global clients and ensures
              quick, accurate turnaround on every project. From data processing to
              calculation and delivery, we handle it all seamlessly.
            </p>
          </div>

          {/* Services / Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive VAT Services
            </h3>
            <p className="text-gray-700 mb-6">
              We provide end-to-end VAT return support along with expert consulting
              to keep you compliant and efficient. Our streamlined process ensures
              accuracy at every step:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>
                <strong>Document Receipt:</strong> Secure submission of income-related
                documents via FTP.
              </li>
              <li>
                <strong>Data Processing:</strong> Entry and processing of payments,
                receipts, purchases, and sales for the VAT period.
              </li>
              <li>
                <strong>Calculation &amp; Schemes:</strong> Inclusion of fuel scale
                charges and preparation of returns for both standard and specialized
                VAT schemes.
              </li>
              <li>
                <strong>Final Delivery:</strong> Completed VAT returns delivered in
                your preferred format, or directly updated into your finance software
                for a seamless workflow.
              </li>
            </ol>
          </div>

          {/* Technology */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Technology & Expertise
            </h3>
            <p className="text-gray-700 mb-6">
              Our VAT return specialists are proficient in leading software like{" "}
              <strong>Sage, Viztopia, Tally, and Pro Fit</strong>, while also adapting
              quickly to any platform you use. Beyond data entry, we conduct thorough
              analyses—comparing inputs and outputs across quarters and validating
              transactions for accuracy. We are also skilled in handling VAT schemes
              for specific industries and professions.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              The Nimble Acuity Advantage
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Professional Expertise:</strong> Skilled accountants delivering
                flawless VAT return solutions.
              </li>
              <li>
                <strong>Cost-Effective Pricing:</strong> Services designed to lower
                overhead without compromising quality.
              </li>
              <li>
                <strong>Efficient Process:</strong> A structured workflow for fast,
                accurate returns every time.
              </li>
              <li>
                <strong>Customized Solutions:</strong> Flexible services adapted to
                your accounting methods and software.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Simplify VAT. Stay Compliant.
            </h3>
            <p className="text-gray-700 mb-6">
              With deep expertise and proven processes, Nimble Acuity is your
              trusted partner for accurate, timely, and hassle-free VAT return
              services.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to simplify your VAT returns?</span>{" "}
              Contact us today for more details and a custom pricing plan.
            </p>
            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
              Contact Us Today
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default VATReturnServices;
