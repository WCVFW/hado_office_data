import React from "react";
import DSmainmenu from "../DSmainmenu";

const OCRCleanupServices = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          OCR Cleanup Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Ensure high accuracy in OCR and ICR processed data with Nimble Auity’s expert cleanup services. Experience faster processing and zero errors.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Data entry is challenging, and processing large volumes of raw data from images is even tougher. Optical Character Recognition (OCR) helps capture data efficiently, but errors can occur. Nimble Auity provides professional OCR cleanup services to correct these errors and ensure 99.95% accuracy.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Services We Offer</h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-gray-700 text-lg">
          <li>Identifying suspected OCR characters and recovering lost data</li>
          <li>Dispatching errors to data entry operators for manual verification</li>
          <li>Validating and correcting footnotes, tables, graphs, and other technical content</li>
          <li>Manual QA to ensure industry-leading accuracy (~99.95%)</li>
        </ul>
      </section>

      {/* Why OCR Cleanup */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose OCR Cleanup?</h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-gray-700 text-lg">
          <li>Error Control: Minimize data entry mistakes through effective OCR cleanup</li>
          <li>Faster Rendering: Process images quickly compared to manual keystrokes</li>
          <li>Electronic Data Storage: Convert handwritten documents to digital format</li>
          <li>Usability: Make data more usable and searchable for business operations</li>
        </ul>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 md:px-20 bg-purple-50 text-center">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
          <div><strong>40%</strong><p>Cost Reduction</p></div>
          <div><strong>8-24 Hrs</strong><p>Faster Turnaround</p></div>
          <div><strong>500+</strong><p>Satisfied Clients</p></div>
          <div><strong>350+</strong><p>Skilled Experts</p></div>
          <div><strong>99%</strong><p>Accuracy</p></div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Data Cleanup Process</h2>
        <ol className="max-w-4xl mx-auto space-y-6 list-decimal list-inside text-gray-700 text-lg">
          <li>Define Scope of Project – Outline data cleansing requirements</li>
          <li>Trial of the Project – Conduct trial based on client inputs</li>
          <li>Effort, Pricing & SLA – Specify time, resources, and pricing</li>
          <li>Project Allotment – Project Manager sets up the data cleansing team</li>
          <li>Execute Data Cleansing – Ensure data is cleaned as per project plan</li>
          <li>Quality Assurance – QA team verifies data accuracy and completeness</li>
          <li>Delivery – Upload the cleaned data to the client’s portal</li>
        </ol>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Outsourcing OCR Cleanup</h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-gray-700 text-lg">
          <li>Time and resource savings while minimizing errors</li>
          <li>High accuracy in data conversion and retrieval</li>
          <li>Recovery of lost data and correction of misreading errors</li>
          <li>Use of advanced OCR and ICR technology to distinguish text from images</li>
          <li>Fast turnaround times with zero-error assurance</li>
          <li>Data security and confidentiality maintained throughout</li>
          <li>Strict quality assurance protocols</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Partner with Nimble Auity for OCR Cleanup</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Nimble Auity has the infrastructure, technology, and expertise to provide highly accurate OCR cleanup services at cost-effective pricing. Capture data efficiently, correct errors, and streamline operations today.
        </p>
        <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default OCRCleanupServices;
