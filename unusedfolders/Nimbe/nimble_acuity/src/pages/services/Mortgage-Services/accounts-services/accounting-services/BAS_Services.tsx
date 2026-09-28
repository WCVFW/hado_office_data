import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const BAS_Services = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              BAS Services
            </h2>
            <p className="text-lg text-gray-600">
              Effectively and efficiently maintain your Business Activity Statements (BAS) and file them promptly with our expert services, starting at just $12/hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              For any business operating in Australia, it is essential to maintain and report Business Activity Statements (BAS) to the Australian Taxation Office (ATO). Preparing these statements can be time-consuming, especially for small businesses, and complex for larger firms with extensive paperwork. Outsourcing this task allows you to focus on your core business.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a pioneer in providing BAS solutions, helping businesses of all sizes prepare accurate business activity statements for years. We address every client's unique requirements, keeping ourselves up-to-date with the latest ATO notifications and guidelines to ensure accuracy and compliance.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Business Activity Statement Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              We provide a range of BAS services tailored to meet your specific needs.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">BAS Preparation & Lodgment</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Our experienced team thoroughly reviews your invoices and records taxes to prepare accurate BAS.</li>
                  <li>We handle the entire lodgment process with the ATO, ensuring all guidelines are followed precisely.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">BAS Accounting Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Our skilled and experienced accounting team handles all accounting and taxation activities in accordance with Australian GST and BAS reporting guidelines.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Professional BAS Agent Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Our licensed BAS agents provide expert advice and can represent you to the ATO on all BAS-related matters.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Installment Activity Statements</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>We help small businesses prepare and lodge installment activity statements, making tax payments more manageable.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our BAS Process
            </h3>
            <p className="text-gray-700 mb-6">
              Our efficient process is designed to deliver accurate and effective services with a fast turnaround time.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Gathering:</strong> We begin by discussing your needs to gather all necessary details for a precise service plan.</li>
              <li><strong>Costing & Proposal:</strong> We provide a transparent proposal with detailed pricing, turnaround time, and revision policies based on the required man-hours and resources.</li>
              <li><strong>Data Transfer & Security:</strong> All information, including invoices and receipts, is transferred via a secure, encrypted file transfer protocol (FTP) to ensure complete data security.</li>
              <li><strong>Team Allotment & Quality Assessment:</strong> A dedicated team is assigned to your project, with a manager and business head constantly monitoring progress. We also conduct multiple quality checks to guarantee error-free, high-quality results.</li>
              <li><strong>Final Delivery:</strong> After stringent checks, we deliver the final BAS solutions through a secure FTP, on time and as promised.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Reduced Overhead Costs:</strong> You only pay for the work we do, saving you the cost of hiring in-house experts and implementing infrastructure.</li>
              <li><strong>High Data Security:</strong> We are ISO-certified, and all your data is processed using the latest secure technologies and protected by strict non-disclosure agreements.</li>
              <li><strong>Highest Accuracy:</strong> Our stringent quality checks ensure that your BAS is error-free, preventing potential legal consequences.</li>
              <li><strong>Shorter Turnaround Time:</strong> With our expert teams and efficient workflow, we prioritize the urgency of taxation matters and deliver solutions on time.</li>
              <li><strong>Dedicated Team:</strong> We ensure our teams work on a single project at a time to maintain the highest quality and speed.</li>
              <li><strong>Expertise & Compliance:</strong> Our team has extensive experience in Australian taxation and we adhere to all ATO guidelines, keeping your business compliant at all times.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Effective and Cost-Efficient BAS Services
            </h3>
            <p className="text-gray-700 mb-6">
              If you are a business owner without in-house BAS expertise, hiring a professional service provider is the perfect option. Nimble Acuity’s BAS accounting services are tailor-made to ensure a smooth accounting process and help you make informed financial decisions.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Get in touch with us today to learn how we can help you with preparing and lodging Business Activity Statements with ease.</span>
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

export default BAS_Services;