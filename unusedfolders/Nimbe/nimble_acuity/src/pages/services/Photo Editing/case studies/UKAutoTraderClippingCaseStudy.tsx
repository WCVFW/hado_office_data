import React from "react";
import PEMainMenu from "../PEmainmenu";

const UKAutoTraderClippingCaseStudy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-red-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Image Clipping Case Study for UK's Largest Auto Trader
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Learn how UK's top automobile seller Nimbled 5,000 vehicle images per month for high-quality editing and website updates, without compromising on quality.
        </p>
      </section>

      {/* Client Info */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            One of the most prominent automobile sellers in the UK with 30+ years of experience, having sold millions of vehicles and expanded their business model to multiple countries including USA, Australia, and Canada.
          </p>
        </div>

        {/* Requirement */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Requirement</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Edit at least 5,000 high-quality automobile images per month.</li>
            <li>Include cropping, shadow removal, and any additional effects as per client specifications.</li>
            <li>Deliver edited images quickly leveraging time zone differences by offshoring.</li>
          </ul>
        </div>

        {/* Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Urgent editing requirements for a large volume of images with short turnaround times.</li>
            <li>Insufficient operational staff initially to handle workload efficiently.</li>
            <li>Client expectation of 24/7 editing while staff worked 24/6.</li>
          </ul>
        </div>

        {/* Solution */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Phased approach with gradually increasing delivery volume—from 500 images per fortnight to 3,500 per month.</li>
            <li>Daily turnaround divided based on complexity (9h, 6h, 2h).</li>
            <li>Staff worked overtime and 8 new image editors were hired for 24/7 operations.</li>
            <li>Used Adobe Photoshop on high-end workstations for precise editing.</li>
          </ul>
        </div>

        {/* Results */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Delivered 100% accurate, professional-quality images.</li>
            <li>Strict adherence to turnaround times despite large volume.</li>
            <li>Client signed ongoing contracts due to satisfaction with quality and speed.</li>
            <li>Website updated frequently with latest images, improving customer experience.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Nimble Your Image Editing Today</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Achieve high-quality, efficient, and affordable image clipping and editing services for your website or business. Contact Nimble Acuity and get started today!
        </p>
        <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Now
        </button>
      </section>
    </div>
  );
};

export default UKAutoTraderClippingCaseStudy;
