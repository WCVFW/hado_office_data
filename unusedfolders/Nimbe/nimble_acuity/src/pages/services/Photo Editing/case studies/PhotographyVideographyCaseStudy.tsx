import React from "react";
import PEMainMenu from "../PEmainmenu";

const PhotographyVideographyCaseStudy: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Exceptional Photography & Videography Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          How Nimble Acuity helped a reputed freelance photographer expand their services and revenue through professional image and video editing.
        </p>
      </section>

      {/* Client Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">The Client</h2>
        <p>
          A reputed freelance photographer offering specialized photography and videography services, primarily portraits and traditional Indian events like rituals and housewarming ceremonies.
        </p>
      </section>

      {/* Requirement Section */}
      <section className="bg-gray-50 py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">The Requirement</h2>
        <p>
          The client wanted to expand from photography to videography but lacked the bandwidth. They needed a post-production partner who could:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Handle basic to advanced image retouching services</li>
          <li>Edit videos to help expand operations</li>
        </ul>
      </section>

      {/* Challenges Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">The Challenges</h2>
        <p>
          Between appointments, client servicing, and photoshoots, the client struggled to meet deliverables and timelines. This affected service quality, credibility, and business growth.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>No scope for referrals or repeat business</li>
          <li>Unable to cater to a larger audience</li>
        </ul>
      </section>

      {/* Solution Section */}
      <section className="bg-gray-50 py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Our Solution</h2>
        <p>
          We started with an image editing project, delivering high-quality outputs on time. Later, we introduced video editing services, providing end-to-end post-production support.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Dedicated project managers for each project</li>
          <li>Multiple layers of QC to ensure international quality standards</li>
        </ul>
      </section>

      {/* Business Impact */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Business Impact</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Increased influx of new projects</li>
          <li>Combined photography and videography projects</li>
          <li>Up to 40% increase in client's revenue</li>
        </ul>
      </section>

      {/* Technologies Used */}
      <section className="bg-gray-50 py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
        <p>Adobe Photoshop, Adobe Lightroom, Adobe Premiere Pro, Final Cut Pro</p>
      </section>

      {/* Outcome Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">The Outcome</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Streamlined operating costs and increased revenue by up to 150%</li>
          <li>99% accurate services with 24-48 hour TAT</li>
          <li>Extended project scope due to client satisfaction</li>
          <li>150% growth in revenue in the first season</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
        <h2 className="text-2xl font-semibold mb-4">Nimble Event Photography Services</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Transform mediocre images into remarkable photos. Partner with a service provider with 22+ years of experience.
        </p>
        <ul className="list-disc list-inside max-w-md mx-auto mb-6">
          <li>Over 98% accuracy, 99.5% adherence to delivery time</li>
          <li>200,000+ images enhanced, improved & restored monthly</li>
          <li>ISO 9001 quality processes, 100% same price guarantee</li>
        </ul>
        <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PhotographyVideographyCaseStudy;
