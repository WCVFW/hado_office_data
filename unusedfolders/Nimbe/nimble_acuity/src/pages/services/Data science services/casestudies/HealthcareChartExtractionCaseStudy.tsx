import React from "react";
import DSMainMenu from "../mainmenu";


const HealthcareChartExtractionCaseStudy: React.FC = () => {
  return (
    <div>
      {/* ✅ Global Navigation */}
      <DSMainMenu />

      {/* ✅ Page Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Nimble Acuity Helped a Healthcare Service Provider with Chart Extraction Services
          </h1>
          <p className="text-lg text-gray-600">
            Case Study on Automating Chart Extraction for a Leading Healthcare Service Provider
          </p>
        </header>

        {/* Client */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Client</h2>
          <p className="text-gray-700">
            The client is a California-based{" "}
            <strong>healthcare risk adjustment service provider</strong> serving leading 
            organizations participating in Medicaid, Medicare Advantage, the Affordable Care Act, 
            and Medicare ACO programs.
          </p>
        </section>

        {/* Requirement */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Client's Requirement</h2>
          <p className="text-gray-700">
            The client required a <strong>cost-effective robotic process automation (RPA)</strong>{" "}
            solution for <strong>chart extraction services</strong>. They relied on natural language 
            processing (NLP) to extract vital details from patient charts and EMRs, aiming to 
            streamline data handling, remain HIPAA compliant, and expand their client database.
          </p>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Challenges</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Recruiting highly skilled and qualified data scientists quickly for RPA implementation.
            </li>
            <li>
              Automating chart extraction under tight timelines while ensuring HIPAA compliance.
            </li>
          </ul>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Solution</h2>
          <p className="text-gray-700 mb-3">
            Nimble Acuity designed a <strong>streamlined UiPath RPA solution</strong> to automate chart 
            extraction. UiPath was chosen for its simplicity and strong compatibility with{" "}
            <strong>Citrix-based EMRs</strong>.
          </p>
          <p className="text-gray-700">
            The solution included deploying <strong>3–4 UiPath robots</strong> that could extract key 
            details, filter documents, log out of EMRs, generate final PDFs, and close connections. 
            This automation ensured faster, more accurate, and compliant processing.
          </p>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Results</h2>
          <p className="text-gray-700 mb-3">
            The client was highly impressed by the outcomes. With Nimble Acuity’s automation solution, they 
            successfully extracted <strong>1.2 million+ entries</strong> and doubled their customer 
            base within a short time.
          </p>
          <p className="text-gray-700">
            Each UiPath robot now processes <strong>200+ medical records per day</strong> and handles{" "}
            <strong>2,000+ patient encounter documents daily</strong>. The client appreciated both the 
            <strong>speed</strong> and <strong>cost-effectiveness</strong> of the project.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Nimble UiPath RPA Services to Nimble Acuity
          </h2>
          <p className="text-gray-700 mb-4">
            Nimble Acuity is a trusted partner for <strong>UiPath RPA services</strong> and a wide 
            range of data science solutions. Our certified data scientists and RPA experts leverage 
            cutting-edge tools and technologies to deliver <strong>scalable, cost-efficient</strong> 
            solutions.
          </p>
          <p className="text-gray-700 font-medium">
            📩 Looking for HIPAA-compliant and efficient chart extraction?{" "}
            <span className="text-blue-600">Contact us today!</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default HealthcareChartExtractionCaseStudy;
