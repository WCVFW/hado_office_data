import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const PayrollDataAnalyticsServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Actionable Insights from Payroll Data Analytics
            </h2>
            <p className="text-lg text-gray-600">
              Gain a 360-degree view of your employee spend with our payroll data analytics services. Leverage advanced tools and expert analysis, starting at <strong>$12/hour</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Payroll analytics provides an all-around view of your workforce spend, helping you identify inefficiencies and make data-driven decisions. Our 6+ years of expertise empower strategic insights for optimized payroll management.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Payroll Data Analytics Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Standardizing Information:</strong> Centralized portal for all payroll data ensures accurate, stress-free management.</li>
              <li><strong>Data Visualization:</strong> Charts, graphs, and maps highlight trends, patterns, and anomalies for informed decisions.</li>
              <li><strong>Payroll Assistance:</strong> AI-driven answers to employee payroll queries, with complex issues handled by specialists.</li>
              <li><strong>Connecting Payroll Across Regions:</strong> Ensure compliance and accuracy across local and global payroll operations.</li>
              <li><strong>Mapping Attendance with Payroll:</strong> Eliminate manual errors and accurately process leaves and sick days.</li>
              <li><strong>Computing Turnover:</strong> Analyze attrition trends relative to pay rates to improve retention strategies.</li>
              <li><strong>Aligning Payroll with Company Goals:</strong> Link payroll costs to performance and business objectives.</li>
              <li><strong>Compliance Management:</strong> Ensure adherence to regulations and prevent costly misclassifications or errors.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Payroll Data Analytics Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Understand Requirements:</strong> Map your payroll process to identify areas for improvement.</li>
              <li><strong>Baseline Key Measures:</strong> Quantify costs and bottlenecks to create a baseline for transformation.</li>
              <li><strong>Redesign with Tools:</strong> Automate payroll processes using advanced analytics tools for better accuracy.</li>
              <li><strong>Roll Out the Solution:</strong> Implement the solution, train your team, and monitor performance for optimal results.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective Pricing:</strong> Efficient payroll solutions without breaking the budget.</li>
              <li><strong>Well-Qualified Team:</strong> Experts in payroll analytics and tools like Oracle HDL and HSDL.</li>
              <li><strong>Industry Exposure:</strong> Experience across IT, manufacturing, and diverse sectors.</li>
              <li><strong>Improve Hiring Practices:</strong> Streamline recruitment and select the best candidates.</li>
              <li><strong>Reduce Risk of Fraud:</strong> Identify payroll risks and prevent asset misappropriation.</li>
              <li><strong>Assist in Strategic Planning:</strong> Insights on employee acquisition costs and expansion planning.</li>
              <li><strong>Employee Benefits:</strong> Measure and optimize benefits to reduce attrition and improve engagement.</li>
              <li><strong>Build Employer Brand:</strong> Strengthen your company profile and attract top talent.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Choose a Partner You Can Trust
            </h3>
            <p className="text-gray-700 mb-6">
              With 6+ years of experience, we transform fragmented payroll systems into unified, standardized processes, providing real-time insights and actionable data for better decision-making.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">For reliable and expert payroll data analytics services,</span> contact us today.
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

export default PayrollDataAnalyticsServices;
