import React from "react";
import Imainmenu from "../Imainmenu";

const InsuranceClaimsManagement: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-900 text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Nimble Insurance Claims Management Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Streamline your insurance claims management with our expert team. 
          Improve claims processing, reduce overheads, and boost efficiency.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-10 px-6 max-w-5xl mx-auto space-y-4">
        <p>
          Managing claims is critical for any insurance carrier. Optimized claims 
          processing reduces overheads, boosts operational efficiency, and improves 
          customer satisfaction. Our professional insurance claims management services 
          handle every step of the claims process, letting you focus on other business activities.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-white py-10 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Insurance Claims Management Solutions We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-bold mb-2">First Notice of Loss (FNOL) & Initial Triage</h3>
            <p>
              Receive and record initial claim information via multiple channels, triage the claim, and assign it to specialists.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Investigation & Adjustment</h3>
            <p>
              Conduct thorough investigations to determine liability, coverage, damages, and negotiate settlements.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Settlement & Resolution</h3>
            <p>
              Ensure paperwork is completed and payments are made on time for effective claim settlement.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Fraud Prevention & Detection</h3>
            <p>
              Use advanced analytics to detect and prevent fraudulent claims efficiently.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Medical & Legal Review</h3>
            <p>
              Expert review of claims ensures accurate settlements and prevents overpayment.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Subrogation & Recovery</h3>
            <p>
              Identify recovery opportunities to recoup losses from claim settlements.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Data Analysis & Reporting</h3>
            <p>
              Generate detailed reports to identify trends, inefficiencies, and areas for improvement.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Compliance & Regulatory Support</h3>
            <p>
              Ensure full compliance with applicable regulations and reduce risk exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Our Insurance Claims Management Process
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Receive Claims Request:</strong> Process and evaluate incoming claims requests.</li>
          <li><strong>Investigation:</strong> Verify loss, coverage, and terms for each claim.</li>
          <li><strong>Review:</strong> Review all terms, conditions, and clauses, creating detailed reports.</li>
          <li><strong>Evaluation:</strong> Finalize claim amount in coordination with underwriters.</li>
          <li><strong>Transfer to Adjuster:</strong> Adjuster settles claims with supporting documentation and customer communication.</li>
        </ol>
      </section>

      {/* Benefits */}
      <section className="bg-white py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Why Carriers Choose Us
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Best infrastructure with modern tools and office spaces</li>
          <li>Skilled insurance experts handling all client requirements</li>
          <li>Dedicated project manager for seamless communication</li>
          <li>ISO/IEC 27001:2022 certified data security</li>
          <li>Highly scalable solutions for varying project needs</li>
          <li>Short turnaround times across 10 global delivery centers</li>
          <li>24/7 support via phone and email</li>
          <li>High-quality, error-free services</li>
          <li>Affordable pricing packages tailored to client budgets</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-100 py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Additional Services You Can Benefit From
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Insurance Lead Generation Services</li>
          <li>Insurance Endorsements Processing</li>
          <li>Insurance BPO Services for Carriers</li>
          <li>Insurance Agency Back-office Management Services</li>
          <li>Certificate of Insurance (COI) Services</li>
          <li>Renewals Processing Services</li>
        </ul>
      </section>

      {/* Client Success */}
      <section className="bg-white py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Customer Success Stories
        </h2>
        <div className="space-y-4">
          <p>
            <strong>Insurance Back-office Solutions to a Leading Insurance Agency:</strong> Provided timely and reliable back-office operations for a health insurance agency.
          </p>
          <p>
            <strong>Back-office Operations for Miami-based Client:</strong> Delivered efficient and cost-effective services for a Miami-based insurance agency.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Boost Efficiency With Nimbled Insurance Claims Management
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Access reliable and effective insurance claims management services. 
          Improve customer retention, optimize processes, and reduce operational overheads.
        </p>
        <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default InsuranceClaimsManagement;



