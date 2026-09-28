import React from "react";
import NavigationMenu from "../MegaMenu";

const ScientificDataMiningPage: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto space-y-12">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Nimble Scientific Data Mining Services
        </h1>
        <p className="text-lg text-gray-600">
          Get access to expert scientific data mining services provided by
          highly-experienced and qualified scientific researchers at prices
          starting from only <span className="font-semibold">$14/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="space-y-4 text-gray-700">
        <p>
          Are you looking to develop a scientific database from multiple sources
          of information for your research project? Do you want to use clinical
          data or web data to create large sets of vital scientific data? If so,
          outsourcing to a trusted vendor like us is the right solution.
        </p>
        <p>
          Nimble Acuity is a leading scientific data mining service provider
          offering comprehensive offshore research solutions. Our highly-trained
          analysts provide in-depth data mining services for scientific and
          medical fields, enabling you to focus on your core research goals.
        </p>
      </section>

      {/* Services */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Scientific Data Mining Services We Offer
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          <li>Data Warehousing</li>
          <li>Scientific Data Management</li>
          <li>Creation of Databases from Scientific Data</li>
          <li>Business and Data Analytics</li>
          <li>Statistical Data Mining</li>
          <li>Scientific Data Mining and Analysis</li>
          <li>Business Intelligence Gathering & Presentation</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Advanced Analysis Methods
        </h3>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          <li>Meta-analysis</li>
          <li>ROC Curve</li>
          <li>Sample size determination</li>
          <li>Reliability (Kappa test, Intra-class correlation)</li>
          <li>Data Validation and Cleaning</li>
          <li>Data Entry</li>
          <li>Design of CRF in SPSS/PASW</li>
          <li>Report Writing</li>
        </ul>
      </section>

      {/* Process */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Scientific Research Process
        </h2>
        <ol className="space-y-3 text-gray-700 list-decimal list-inside">
          <li>Define Project Scope</li>
          <li>Define Data Mining Plan</li>
          <li>Conduct Data Mining</li>
          <li>Collate the Gathered Data</li>
          <li>Objectively Analyze the Data</li>
          <li>Create and Deliver Report</li>
        </ol>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Nimble Scientific Data Mining Services to Nimble Acuity?
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          <li>World-class Infrastructure</li>
          <li>High-quality Services</li>
          <li>Affordable Pricing Options</li>
          <li>Latest Software Tools & Technologies</li>
          <li>Experienced Research Team</li>
          <li>Data Security (ISO/IEC 27001:2022 certified)</li>
          <li>Quick Turnaround Time</li>
          <li>Capability to Scale</li>
        </ul>
      </section>

      {/* Case Studies */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Customer Success Stories
        </h2>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold">
              Case Study: Patient Dashboard Creation
            </h3>
            <p>
              Developed a patient dashboard for a leading pharmaceutical company
              by analyzing treatment timelines, hospital networks, and location
              preferences.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Case Study: Market Research Survey
            </h3>
            <p>
              Helped a 70-year-old UK-based pharmaceutical firm conduct targeted
              campaigns in the 50 busiest airports worldwide — delivered on time
              and within budget.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Testimonials
        </h2>
        <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4">
          “We have carefully reviewed your documents and are suitably impressed
          with the meticulous details with which you are conducting your audits
          to ensure exceptionally high quality for the extracted data delivered.”
        </blockquote>
        <p className="mt-2 font-semibold text-gray-800">
          – VP, Leading STM Publisher, USA
        </p>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Nimble Scientific Data Mining to Nimble Acuity
        </h2>
        <p className="text-gray-700">
          For over 26+ years, Nimble Acuity has provided world-class
          scientific research and data mining services to clients worldwide. Our
          experts leverage cutting-edge tools and methodologies to deliver
          accurate, timely, and cost-effective results.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
          Get in Touch Today
        </button>
      </section>
    </div>
  );
};

export default ScientificDataMiningPage;
