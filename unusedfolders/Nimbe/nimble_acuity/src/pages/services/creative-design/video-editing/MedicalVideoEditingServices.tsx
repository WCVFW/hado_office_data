import React from "react";
import CSmainmenu from "../CSmainmenu";

const MedicalVideoEditingServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-green-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Medical Video Editing Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Outsource medical video editing services starting at $10/hour to get perfectly edited medical videos for personal and professional use.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          The healthcare sector requires utmost precision and professionalism. Nimble Auity helps healthcare organizations by providing expert medical video editing services, ensuring videos are accurate, clear, and suitable for learning, patient engagement, or promotional use.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Medical Video Editing Services We Offer</h2>
        <ul className="list-disc ml-6 space-y-3">
          <li>
            <strong>Medical Video Editing:</strong> Professional editing of surgical, promotional, and informational medical videos to highlight key content.
          </li>
          <li>
            <strong>Medical Event Production:</strong> Broadcast or produce high-quality videos for conferences, seminars, and other medical events.
          </li>
          <li>
            <strong>Live Streaming:</strong> Medical live streaming, teleconferencing, and virtual training with interactive features such as live chat and analytics.
          </li>
          <li>
            <strong>Medical Video Editing Assistance:</strong> Full support and training for building your in-house medical video editing team.
          </li>
        </ul>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-green-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Medical Video Editing Process</h2>
        <ol className="list-decimal ml-6 space-y-3">
          <li>
            <strong>Understanding Client's Requirements:</strong> Discuss scope, project timeline, and resources; receive files via secure FTP; present packages and get approval.
          </li>
          <li>
            <strong>Editing:</strong> Use latest tools to enhance, trim, highlight, or add text while maintaining medical accuracy.
          </li>
          <li>
            <strong>Review:</strong> Expert team checks for inconsistencies and implements client feedback for quality assurance.
          </li>
          <li>
            <strong>Delivery:</strong> Send final edited videos securely via FTP.
          </li>
          <li>
            <strong>Assistance:</strong> Provide training and support for client teams if required.
          </li>
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Other Services You Can Benefit From</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Creative Design Services</li>
          <li>Illustrator Services</li>
          <li>Animation Services</li>
          <li>Logo Design Services</li>
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-green-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Nimble Auity for Medical Video Editing</h2>
        <ul className="list-disc ml-6 space-y-3">
          <li>Affordable pricing solutions for healthcare organizations of all sizes.</li>
          <li>Strict data security measures with ISO-certified protocols.</li>
          <li>Cutting-edge technology for precise medical video editing.</li>
          <li>Professional editors with medical expertise for accurate results.</li>
          <li>Scalable solutions to handle sudden demand surges.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-green-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Client Success Stories</h2>
        <ul className="space-y-4 list-disc ml-6">
          <li>
            <p>"A Swedish film production house received reliable and cost-effective live medical video editing services from Nimble Auity in record time."</p>
          </li>
          <li>
            <p>"A leading American car dealer benefited from accurate video editing and walkthrough creation using Maya for professional medical presentations."</p>
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 text-center max-w-6xl mx-auto bg-green-200 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Get Started with Medical Video Editing</h2>
        <p className="mb-6">
          Trust Nimble Auity to provide professional, accurate, and affordable medical video editing services. Receive high-quality videos that enhance learning, communication, and presentation.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Contact Us for a Free Quote
        </button>
      </section>
    </div>
  );
};

export default MedicalVideoEditingServices;
