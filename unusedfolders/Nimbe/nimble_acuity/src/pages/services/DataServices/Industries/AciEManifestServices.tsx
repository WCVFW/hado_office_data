import React from "react";
import DSmainmenu from "../DSmainmenu";

const AciEManifestServices = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <DSmainmenu />
      <section className="bg-gradient-to-r from-blue-600 to-indigo-200 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble ACI e-Manifest Services
        </h1>
        <p className="text-xl md:text-1.5xl max-w-3xl mx-auto">
          We can significantly reduce the turnaround time of your shipments and help you avail efficient e-manifest solutions without the hassle of border delays while you focus on your operations.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-xl leading-relaxed">
          ACI e-Manifest services play an important role in providing freight information regarding shipments that arrive at the border through electronic means. This happens way before a shipment arrives physically, saving considerable time in the process. Failing to submit e-Manifests can lead to truck returns and huge fines. Nimble Auity ensures all your cross-border shipments to Canada comply with ACI requirements efficiently.
        </p>
        <p className="max-w-4xl mx-auto text-gray-700 text-xl leading-relaxed mt-4">
          With 26+ years of experience, Nimble Auity provides proficient ACI e-Manifest solutions and is equipped to make e-Manifest an easy, hassle-free process for you.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          ACI e-Manifest Services We Offer
        </h2>

        {/* Services List */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-xl">
          <div>
            <h3 className="font-semibold mb-2">Complete ACI e-Manifest Software Solution</h3>
            <p>
              Nimble Auity provides complete software solutions for clients who want to submit e-manifests themselves. Our software is easy to use, efficient, and allows automated verification, record keeping, and real-time shipment tracking.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Fax/Email Service</h3>
            <p>
              Send us your manifests via fax or email, and we submit the e-manifest for you. All notifications regarding shipment status are automatically forwarded to you.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">EIM Integrated Solutions</h3>
            <p>
              Ideal for clients with large cross-border carriers. Our EIM integrated solution automates the entire e-manifest creation and submission process, eliminating errors from manual keying.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Solutions for Service Providers and Brokers</h3>
            <p>
              Nimble Auity provides complete e-manifest services to service providers and brokers managing e-manifest requirements for multiple clients efficiently.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Barcoded Lead-sheet Generation</h3>
            <p>
              We provide scannable barcodes as required by CBSA, sending them via email, fax, or print for each trip.
            </p>
          </div>
        </div>

        {/* Other Services */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-xl">
          <div>B3 Form Building Process</div>
          <div>Bills of Lading Services</div>
          <div>Harmonized System Classification</div>
          <div>Logistics Support Services</div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Benefits of Our ACI e-Manifest Services
        </h2>
        <ul className="max-w-5xl mx-auto space-y-4 text-gray-700 text-xl list-disc list-inside">
          <li>Cost-effective ACI e-manifest services with affordable pricing</li>
          <li>High-end infrastructure and state-of-the-art technology</li>
          <li>ISO/IEC 27001:2022 certified data security compliance</li>
          <li>Multiple global delivery centers for worldwide client support</li>
          <li>Dedicated project manager for seamless communication</li>
          <li>24/7 customer care support across time zones</li>
          <li>Scalable services to meet increasing client demands</li>
          <li>ISO 9001:2015 certified quality assurance with multi-tier checks</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Client Success Stories
        </h2>
        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 text-xl">
          <div>
            <h3 className="font-semibold mb-2">B3 Form Processing for International Customs Broker</h3>
            <p>
              A Canada-based customs brokerage and logistics company was helped with back-office form entry services at cost-effective rates, reducing error rates and operational costs considerably.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">PARS Entry for Montreal-based Client</h3>
            <p>
              A Montreal-based customs broker required PARS entry services at reasonable rates. Nimble Auity efficiently streamlined their processes, reducing operational costs significantly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact Us
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-xl mb-6">
          Nimble Auity is a leading ACI e-Manifest company providing comprehensive services and solutions. Contact us now for the best ACI e-manifest assistance!
        </p>
        <button className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-xl">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default AciEManifestServices;
