import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const InvoiceFactoringServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Invoice Factoring Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure steady cash flow and implicit management of your finances with our professional invoice factoring solutions.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for a professional team to help you with invoice factoring? Do you need a reliable solution to generate steady cash inflow? Look no further. Nimble Acuity is a leading provider of business factoring services, obtaining your invoices for a discounted rate in exchange for immediate cash. We then take on the responsibility of pursuing your clients for payments, ensuring your business has the funds it needs without the wait.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By entrusting us with your invoice factoring needs, you can manage your finances and credit control more effectively. Our services help you recover debts and secure working capital, saving you valuable time and resources that would otherwise be spent on collections. We ensure you get your deserved funds and avoid financial losses.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Invoice Factoring Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              We are a trusted invoice factoring provider for a wide range of industries, including staffing, construction, small businesses, and healthcare. Our services include:
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Invoice Processing & Factoring</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Cross-check every invoice and financial document for authenticity and potential issues.</li>
                  <li>Systematically enter and process all validated data into our secure invoice factoring software.</li>
                  <li>Handle your unpaid invoices through both recourse and non-recourse factoring.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Invoice Discounting & Payroll Factoring</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Provide confidential invoice discounting, where customers are unaware of the arrangement.</li>
                  <li>Convert outstanding invoices into instant cash to help overcome cash flow management issues.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Quality Checks & Data Management</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Perform rigorous quality checks on all inputs and processed invoices.</li>
                  <li>Maintain a complete electronic document records management database for easy retrieval and secure storage.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Invoice Factoring Process
            </h3>
            <p className="text-gray-700 mb-6">
              We follow a streamlined process to ensure a fast and efficient invoice factoring agreement.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Discussion & Organization:</strong> We meet with your team to organize all invoices and prepare for the process.</li>
              <li><strong>Processing & Statements:</strong> We begin invoice processing by updating all data into our system and generating account statements.</li>
              <li><strong>Fund Transfer:</strong> Once all checks are complete, we prepare a cash flow summary and transfer the calculated funds to you.</li>
              <li><strong>Post-Payment Assistance:</strong> We follow up with the client and assist with all post-payment formalities to ensure a complete process.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective:</strong> Our services are competitively priced, with flexible options to fit your needs, starting at just $12/hour.</li>
              <li><strong>Experienced Team:</strong> Our accountants and financial experts are trained to provide services that help you save time and increase your cash flow.</li>
              <li><strong>Rapid Turnaround:</strong> Our efficient workflow allows us to provide invoice factoring solutions within 24 hours.</li>
              <li><strong>Data Security:</strong> We strictly adhere to our non-disclosure terms, ensuring all your data is completely confidential.</li>
              <li><strong>Scalable & Custom:</strong> All our invoice factoring plans can be customized to your specific requirements, regardless of the volume of work.</li>
              <li><strong>24/7 Support:</strong> Our team is available 24/7 via chat, phone, or email to provide assistance and information whenever you need it.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Your Invoice Factoring for Financial Peace of Mind
            </h3>
            <p className="text-gray-700 mb-6">
              By outsourcing your invoice factoring to Nimble Acuity, you can take care of every aspect of your bill factoring while saving time and money. Our team can be approached for help with any of your queries, doubts, and concerns at any given time.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Get in touch with us today for a free consultation and let us help you get the funds you deserve.</span>
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

export default InvoiceFactoringServices;