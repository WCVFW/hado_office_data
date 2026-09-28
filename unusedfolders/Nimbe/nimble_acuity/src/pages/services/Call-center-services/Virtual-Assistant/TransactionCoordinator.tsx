import React from "react";
import { CheckCircle, FileText, Users, Clock } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const TransactionCoordinator: React.FC = () => {
  const services = [
    "Communicate with buyer, seller, agent, broker, escrow, lender, etc.",
    "Prepare summary sheet with complete property information",
    "Review paperwork, documentation, and certificates",
    "Check for all signatures and initials",
    "Prepare disclosure packets for state and county",
    "Draft and share seller's disclosure packets",
    "Cross-check listing agreements and purchase contracts",
    "Create contract addendums or extensions if required",
    "Open and close escrow account and audit files",
    "Maintain a paper trail of all communications",
    "Ensure BRE compliance",
    "Complete tax withholding exemptions like FIRPTA",
    "Build and follow transaction timeline for critical dates",
    "Document all executed contracts and upload securely",
    "Create complete client files for IRS filings",
  ];

  const processSteps = [
    "Collect your requirements and understand tasks to delegate",
    "Assign a transaction coordinator aligned with your needs",
    "Coordinator interacts with stakeholders and analyzes records",
    "Prepare summary sheet, review documents, maintain paper trail",
    "Create files essential for IRS filing and furnish detailed report",
  ];

  const benefits = [
    "ISO Certified Transaction Coordinator",
    "Complete Data Security and Privacy Assurance",
    "Quality Guaranteed with error-free documentation",
    "Scalable Resources to match your workload",
    "Fast Turn-around with global US & India-based team",
    "Competitive Pricing to reduce costs by 40%-50%",
    "Single Point of Contact (SPOC) for seamless communication",
    "Trained and Experienced Team ready immediately",
    "Superb Infrastructure with skilled coordinators and tools",
    "24/7 Support via global delivery centers",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
          {/* Hero Section */}
          <CCmainmenu/>
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Hire a Transaction Coordinator
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
          Hire a transaction coordinator from <span className="font-semibold text-blue-600">Nimble Acuity</span> and streamline various real estate functions—from liaising with clients to contract closure—all at affordable rates.
        </p>
      </header>

      {/* Why Hire */}
      <section className="mb-12">
        <p className="mb-4 text-gray-700">
          If repetitive contract-to-closure tasks are delaying your workflow, it’s time to engage a process-aligned transaction coordinator. At <span className="font-semibold text-blue-600">Nimble Acuity</span>, we eliminate Non-Value Adding (NVA) activities using Voice of Customer (VoC) to Critical to Quality (CTQ) mapping, ensuring improved real estate deal velocity.
        </p>
        <p className="text-gray-700">
          Our coordinators connect with clients, manage paperwork, coordinate with third parties, and ensure contracts are closed on time—error-free—keeping clients happy and efficient.
        </p>
      </section>

      {/* Services */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Services Offered by Our Transaction Coordinator</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex items-start p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <CheckCircle className="text-blue-600 mr-3 mt-1" size={20} />
              <p className="text-gray-800">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Process Followed by Our Transaction Coordinators</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-start p-4 bg-blue-50 border border-blue-100 rounded-xl"
            >
              <Clock className="text-blue-600 mr-3 mt-1" size={20} />
              <p className="text-gray-800">{`Step ${idx + 1}: ${step}`}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Why Hire a Transaction Coordinator from Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <Users className="text-blue-600 mr-3 mt-1" size={20} />
              <p className="text-gray-800">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-lg">
          Hire a transaction coordinator from <span className="font-semibold text-blue-600">Nimble Acuity</span> to save costs, reduce administrative burden, minimize errors, and delight your clients.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl text-lg transition shadow-lg">
          Contact Us
        </button>
      </section>
    </div>
    </div>
  );
};

export default TransactionCoordinator;
