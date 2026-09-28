import React from "react";
import CCmainmenu from "../CCmainmenu";

const BillingQueryServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-700 text-white py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nimble Acuity Billing Query Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Handling billing queries can be daunting. Nimble Acuity helps you streamline 
            revenue management and save valuable productive hours with expert billing support.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 lg:px-20 max-w-6xl mx-auto space-y-6">
        <p className="text-lg leading-relaxed">
          Is billing query draining your time and productivity? Nimble’s billing query 
          handling services ensure each engagement is aligned with (Voice of the Customer) 
          VoC-to-CTQ mapping, reducing Non-Value Add (NVA) steps while maximizing efficiency.
        </p>
        <p className="text-lg leading-relaxed">
          Whether it’s re-ordering, exchange, refunds, account balances, or billing statements, 
          Nimble Acuity ensures clarity and seamless communication between you and your customers.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Billing Query Handling Services We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                Billing Management
              </h3>
              <p>
                Quick settlement of billing conflicts, First Call Resolution (FCR) procedures, 
                and support for up-selling opportunities.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                Receivables Management
              </h3>
              <p>
                Payment plan follow-up, reduced payment cycle steps, quick settlements via credit/debit/cheques, 
                and routine follow-ups with delinquent accounts.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                Revenue Assurance
              </h3>
              <p>
                Accurate billing validation, root-cause audits, address verification, and reconciliation 
                processes to prevent revenue leaks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Workflow */}
      <section className="py-16 px-6 lg:px-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Our Billing Query Services Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Automatic Call Distribution (ACD)",
              "Level One Support",
              "Problem Research",
              "Level Two Support",
              "Call Return & Feedback",
              "Report Creation",
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-indigo-600"
              >
                <h3 className="font-bold text-lg text-indigo-700 mb-2">
                  {idx + 1}. {step}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step === "Automatic Call Distribution (ACD)" &&
                    "Calls are routed based on CTQs, reducing delays and enabling faster responses."}
                  {step === "Level One Support" &&
                    "Initial query handling by our telecom service representative."}
                  {step === "Problem Research" &&
                    "L1 reps investigate queries. If unresolved, escalated to L2."}
                  {step === "Level Two Support" &&
                    "Advanced specialists resolve complex billing issues."}
                  {step === "Call Return & Feedback" &&
                    "VoC feedback is collected and integrated into DMAIC improvements."}
                  {step === "Report Creation" &&
                    "Detailed reporting with KPIs for analysis and documentation."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-indigo-900 text-white py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why Choose Nimble Acuity for Billing Query Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              "ISO 9001:2015 Certified for quality excellence.",
              "Confidential & secure data handling practices.",
              "Lean workflows ensuring accuracy and efficiency.",
              "Fast turnaround with 20+ years of expertise.",
              "Flexible, scalable, and pocket-friendly pricing.",
              "24/7 multilingual support and global reach.",
            ].map((point, idx) => (
              <div key={idx} className="bg-indigo-800 p-6 rounded-xl shadow-md">
                <p className="text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">
            What Our Clients Say
          </h2>
          <blockquote className="italic text-lg text-gray-700">
            “I just wanted to thank Jay / Customer Service Rep. who contacted me twice 
            regarding my order status. He left me a detailed message and provided 
            wonderful support. This is the best customer service I’ve experienced.”
          </blockquote>
          <p className="mt-4 font-semibold">— Spokesperson, Pet Pharmacy Company (USA)</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16 px-6 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Streamline Your Billing Queries with Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Partner with us for secure, cost-effective, and customer-friendly billing query solutions. 
          Let us handle your billing so you can focus on growing your business.
        </p>
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-300 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default BillingQueryServices;
