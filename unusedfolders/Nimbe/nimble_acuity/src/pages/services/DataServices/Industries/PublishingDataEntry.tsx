import React from "react";
import DSmainmenu from "../DSmainmenu";


const PublishingDataEntry: React.FC = () => {
  return (
    <div>
      {/* Main Menu */}
      <DSmainmenu />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Publishing Data Entry Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Accurate, efficient, and cost-effective data entry solutions for publishers and e-publishing businesses with Nimble Auity.
        </p>
      </section>

      {/* Your Publishing Data Entry Needs */}
      <section className="py-12 px-8 md:px-20">
        <h2 className="bg-gradient-to-r from-blue-200 to-teal-200 text-gray-800 py-3 px-4 rounded-md text-2xl font-bold mb-4 inline-block">
          Your Publishing Data Entry Needs
        </h2>
        <p className="text-gray-700 mb-6 text-xl">
          Nimble Auity’s publishing data entry services produce high-quality results with short turnaround times. Send your scanned documents via encrypted email or secure FTP. Focus on vital business functions while we handle meticulous data entry and e-publishing tasks.
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-6 text-xl">
          <li>Focus resources on key functional areas</li>
          <li>Enhance operational efficiency</li>
          <li>Meet stringent deadlines</li>
        </ul>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-12 px-6 md:px-20 text-center rounded-lg mb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">40%</h3>
            <p className="text-gray-700">Cost Reduction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">8-24 Hrs</h3>
            <p className="text-gray-700">Faster Turnaround</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-700">Satisfied Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">350+</h3>
            <p className="text-gray-700">Skilled Data Experts</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">99%</h3>
            <p className="text-gray-700">Accuracy</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="bg-gradient-to-r from-blue-200 to-teal-200 text-gray-800 py-3 px-4 rounded-md text-2xl font-bold mb-4 inline-block">
          Nimble Auity's Solution
        </h2>
        <p className="text-gray-700 mb-6 text-xl">
          No matter what type of publications your company specializes in—books, magazines, or newspapers—quality and attention to detail are paramount. Nimble Auity uses the latest technologies to produce superior results and customizes data entry solutions for your specific needs.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 text-xl">
          <li>Access a dedicated team of skilled editors, proofreaders, and trained data entry specialists</li>
          <li>Take advantage of sophisticated equipment without additional investment</li>
          <li>Get tailored data entry solutions that meet your unique requirements</li>
        </ul>
      </section>

      {/* Position for Success */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="bg-gradient-to-r from-blue-200 to-teal-200 text-gray-800 py-3 px-4 rounded-md text-2xl font-bold mb-4 inline-block">
          Position Your Publishing Company for Success
        </h2>
        <p className="text-gray-700 mb-6 text-xl">
          Outsourcing time-consuming functions like data entry is a powerful strategy to stay competitive. Nimble Auity ensures accurate, efficient, and cost-effective services so your team can focus on the business of publishing.
        </p>
        <p className="text-gray-700 text-xl">
          By partnering with Nimble Auity, you gain a reliable service provider that passes stringent QA procedures to ensure accuracy and consistency. Free up your resources, reduce turnaround times, and improve operational efficiency with our expert publishing data entry services.
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-12 px-6 md:px-20 text-center rounded-lg mt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Competing Seriously Today!
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Partner with Nimble Auity for accurate, timely, and cost-efficient publishing data entry solutions.
        </p>
        <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PublishingDataEntry;
