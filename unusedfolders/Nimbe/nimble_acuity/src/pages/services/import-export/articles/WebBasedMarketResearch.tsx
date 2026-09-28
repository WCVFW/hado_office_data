import React from "react";
import NavigationMenu from "../MegaMenu";

const WebBasedMarketResearch: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-gray-800">
      {/* Title */}
      <NavigationMenu/>
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Why Nimble Web-Based Market Research to Nimble Acuity?
      </h1>

      {/* Intro */}
      <p className="mb-6">
        The internet has transformed the world into a global village by enabling accessibility
        everywhere. What began as a luxury has now become a necessity, and with online buying and
        selling booming, the need to understand the digital marketplace is greater than ever. 
        Web-based Market Research helps businesses adapt to changing trends with a focus on both
        present needs and future opportunities.
      </p>

      <p className="mb-6">
        At Nimble Acuity (Nimble Acuity), we have kept pace with this evolution by successfully executing
        research and analysis projects for global clients. Our team of consultants includes PhDs and
        Masters degree holders across diverse domains such as biology, chemistry, bioinformatics,
        statistics, software engineering, electronics, civil and mechanical engineering,
        petrochemicals, biotechnology, and more. With our deep technical expertise, we deliver
        world-class quality and on-time outcomes.
      </p>

      {/* Section: Value Proposition */}
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Nimble Acuity’s Unique Value Proposition for Web-Based Market Research Outsourcing
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>End-to-end solutions for all research needs</li>
        <li>Scale economies for cost efficiency</li>
        <li>In-depth domain expertise</li>
        <li>Excellent research and analytical skills</li>
        <li>Strong process and project implementation</li>
        <li>Fluent English communication skills</li>
        <li>Expert use of the internet to secure and execute projects</li>
        <li>Ability to manage both business and execution aspects of a project</li>
      </ul>

      {/* Section: Advantages */}
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Advantages of Nimble Acuity’s Research Services
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Cost savings as high as 40-45%</li>
        <li>World-class quality deliverables with quick turnaround</li>
        <li>On-demand access to research and analytical expertise</li>
        <li>Hassle-free outsourcing with full project accountability</li>
        <li>Highly qualified team of PhD and Masters professionals</li>
        <li>Strong Scientific, Technical, and Medical (STM) expertise</li>
        <li>Guaranteed security and confidentiality</li>
      </ul>

      {/* Section: Infrastructure & Security */}
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Infrastructure and Security
      </h2>

      <h3 className="text-xl font-semibold text-blue-700 mb-2">Power Supply</h3>
      <p className="mb-6">
        Our facilities are powered by a high-tension source and supported by a 120 KVA generator,
        ensuring uninterrupted operations for up to 6 hours. All systems are also backed by UPS
        units providing at least 2 hours of backup.
      </p>

      <h3 className="text-xl font-semibold text-blue-700 mb-2">Internet Connectivity</h3>
      <p className="mb-6">
        We maintain a dedicated 1 Mbps internet line and an additional 2 Mbps line exclusively for
        client file downloads. Redundant connections ensure 99.95% uptime, guaranteeing reliable
        connectivity.
      </p>

      <h3 className="text-xl font-semibold text-blue-700 mb-2">Mirroring and Security</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>RAID (level-1) for critical servers</li>
        <li>Remote backup storage</li>
        <li>Fireproof storage systems for critical information</li>
        <li>SLA and NDA agreements with vendors</li>
      </ul>

      {/* Section: Quality Standards */}
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Quality and Data Security Standards at Nimble Acuity
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>ISO 9001 certified</li>
        <li>Driven by Six Sigma and COPC methodologies</li>
        <li>In process of achieving BS7799 certification for data security</li>
      </ul>

      <p className="mb-6">
        At Nimble Acuity, we prioritize customer privacy. Your data is handled with absolute confidentiality,
        and your preferred method of contact is respected. We never disclose identity without your
        expressed consent.
      </p>

      {/* CTA */}
      <div className="bg-blue-50 p-6 rounded-xl shadow-md text-center">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">
          Ready to Nimble Your Web-Based Market Research?
        </h3>
        <p className="mb-4">
          Partner with Nimble Acuity to access expert research services, world-class quality, and
          secure project execution.
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition">
          Contact Us Today
        </button>
      </div>
    </div>
  );
};

export default WebBasedMarketResearch;
