import React from "react"; import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const ManagementAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Management Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Keep track of your sales, profits, and productivity to make key business decisions with Nimble Acuity’s expert management accounting services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Looking for ways to track your sales and profits to make informed business decisions?
              Outsourcing <span className="font-medium">management accounting services</span> to Nimble Acuity ensures you get experienced professionals who leverage the latest tools and deliver superior quality solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium">Nimble Acuity</span> is a trusted management accounting partner with skilled experts, advanced technologies, and proven expertise in addressing complex accounting requirements across industries.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Management Accounting Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Budgeting & Forecasting:</strong> End-to-end budgeting and forecasting solutions powered by modern tools and expert financial specialists.
              </li>
              <li>
                <strong>Financial Analysis:</strong> Accurate financial insights delivered by certified analysts to help you make smarter business decisions.
              </li>
              <li>
                <strong>Cash Flow Management:</strong> Track and optimize your cash flow efficiently with reliable services designed for faster decision-making.
              </li>
              <li>
                <strong>Reporting Services:</strong> Customized weekly, monthly, or quarterly financial reports aligned with your unique business requirements.
              </li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You May Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Forensic Audit Services</li>
              <li>Virtual Accountant Services</li>
              <li>Real Estate Accounting</li>
              <li>Invoice Processing Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Management Accounting Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing Options:</strong> Affordable and cost-effective plans tailored to suit your business requirements.</li>
              <li><strong>Error-free Services:</strong> ISO-certified processes guarantee accurate, reliable, and high-quality services.</li>
              <li><strong>Experienced Accountants:</strong> Work with seasoned professionals skilled in handling complex management accounting needs.</li>
              <li><strong>World-class Infrastructure:</strong> Access to advanced accounting software and international-standard offices.</li>
              <li><strong>Highly Scalable Services:</strong> Easily scale services and team size based on your evolving business requirements.</li>
              <li><strong>Quick Turnaround Time:</strong> Global delivery centers enable faster execution across different time zones.</li>
              <li><strong>SPOC (Single Point of Contact):</strong> A dedicated project manager ensures smooth communication and delivery.</li>
              <li><strong>24/7 Customer Support:</strong> Round-the-clock support via phone and email to resolve any issues instantly.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Management Accounting Services
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a pioneer in providing world-class management accounting services and a wide range of financial solutions. Our skilled team leverages modern tools and software to deliver reliable and efficient results.
            </p>
            <p className="text-gray-700 mb-8">
              Looking for a trusted and cost-effective management accounting partner?
              <span className="font-medium"> Your search ends here.</span>
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

export default ManagementAccountingServices;
