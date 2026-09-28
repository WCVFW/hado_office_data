import React from "react";
import CSmainmenu from "../CSmainmenu";

const FashionIllustration: React.FC = () => {
  return (
    <div><CSmainmenu/>
    <section className="bg-white text-gray-800 px-6 md:px-16 lg:px-28 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          Nimble Fashion Illustration Services
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Our fashion illustration services are ideal to showcase your fashion products 
          as artworks on print and digital media (starts at $10/hour).
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto space-y-4 text-gray-700 leading-relaxed">
        <p>
          Are you looking for a fashion illustration services provider with experience in creating 
          fashion illustrations? Do you want to save time and effort in designing artworks by 
          outsourcing fashion illustration services? If so, help is just a phone call away. 
          Get in touch with us, at <b>Nimble Auity</b>, through your preferred medium and our 
          experts will assess your needs. We will provide a competitive quote for your 
          fashion illustration needs.
        </p>
        <p>
          <b>Nimble Auity</b> is an ISO 9001:2015 certified provider of fashion illustration 
          services in India. We have 40 global delivery centers across 4 continents. 
          Our fashion illustrators are qualified professionals with thousands of hours of 
          experience in illustration services. We have the bandwidth to facilitate scaling 
          up of your project. Choose <b>Nimble</b> as your fashion illustration service provider today!
        </p>
      </div>

      {/* Services */}
      <div>
        <h2 className="text-2xl font-semibold text-green-700 mb-6">
          Fashion Illustration Services We Offer
        </h2>
        <p className="text-gray-700 mb-6">
          Considering <b>Nimble Auity's</b> fashion illustration services can help you focus on 
          other important functions in business while we take care of designing fashion 
          illustrations to bring the spotlight on your products.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl shadow bg-gray-50">
            <h3 className="font-semibold text-lg text-green-700">
              Illustration for Fashion Figure
            </h3>
            <p className="text-gray-600 mt-2">
              Our experts create artworks with detailed lines, folds, and fabric renders 
              for print media or teaching material.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-gray-50">
            <h3 className="font-semibold text-lg text-green-700">
              Fashion Flat Illustration
            </h3>
            <p className="text-gray-600 mt-2">
              Using AI-based tools, we design fashion flats like tops, pockets, etc. 
              with 98% accuracy.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-gray-50">
            <h3 className="font-semibold text-lg text-green-700">
              Illustration of Stitch Styles
            </h3>
            <p className="text-gray-600 mt-2">
              We help showcase stitch styles to attract manufacturers with 
              precision illustrations.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-gray-50">
            <h3 className="font-semibold text-lg text-green-700">
              Illustration of Technical Flat
            </h3>
            <p className="text-gray-600 mt-2">
              We optimize flat designs to help you envision technical aspects 
              for calibration.
            </p>
          </div>
        </div>
      </div>

      {/* Process */}
      <div>
        <h2 className="text-2xl font-semibold text-green-700 mb-6">
          Fashion Illustration Process We Follow
        </h2>
        <ol className="space-y-4 list-decimal list-inside text-gray-700">
          <li><b>Gathering Client Needs</b> – We collaborate to understand your requirements.</li>
          <li><b>Requirement Assessment</b> – We analyze references and samples to guide illustrators.</li>
          <li><b>Fashion Illustration</b> – Our experts create as per SLA with scope for enhancement.</li>
          <li><b>Quality Checks</b> – QA team ensures compliance with standards.</li>
          <li><b>Delivery</b> – Secure SFTP delivery in your preferred format.</li>
        </ol>
      </div>

      {/* Why Nimble */}
      <div>
        <h2 className="text-2xl font-semibold text-green-700 mb-6">
          Why Choose Nimble for Fashion Illustration Services?
        </h2>
        <ul className="space-y-3 text-gray-700 list-disc list-inside">
          <li>Flexible, professional services at affordable rates.</li>
          <li>Swift project delivery with same-day turnaround for urgent needs.</li>
          <li>Adherence to stringent quality standards.</li>
          <li>Data protection with ISO/IEC 27001:2022 compliance.</li>
          <li>World-class infrastructure and advanced tools.</li>
          <li>24/7 customer support with SPOC (Single Point of Contact).</li>
          <li>Scalable services for fluctuating project needs.</li>
          <li>Dedicated, experienced fashion illustration teams.</li>
        </ul>
      </div>

      {/* Case Studies */}
      <div>
        <h2 className="text-2xl font-semibold text-green-700 mb-6">
          Client Case Studies
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 shadow rounded-2xl">
            <h3 className="font-semibold text-green-700">
              Nimble Provided Illustrations for a Denmark-based Writer
            </h3>
            <p className="text-gray-600 mt-2">
              Helped publish a children’s book with high-quality creative services.
            </p>
          </div>
          <div className="p-6 bg-gray-50 shadow rounded-2xl">
            <h3 className="font-semibold text-green-700">
              Nimble Delivered 50 Illustrations a Day to a US Client
            </h3>
            <p className="text-gray-600 mt-2">
              Designed top-notch illustrations inspired by Simpsons cartoon, 
              earning client satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-green-50 rounded-2xl p-8 shadow">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Testimonials</h2>
        <blockquote className="italic text-gray-700">
          “I am overwhelmed with the support & level of understanding of your team. 
          The effort you spent in working out my DTP project diligently with a 
          very quick turnaround time has helped my company reap immense profits. 
          Looking forward to a very successful business relationship in the coming years.”
        </blockquote>
        <p className="mt-4 font-semibold text-gray-800">
          – Graphics Manager, Leading Electronics Company (South Korea)
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700">
          Outsource Fashion Illustration Services to Nimble Auity
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Nimble Auity provides fashion illustration services across 4 continents worldwide. 
          With two decades of experience, we are committed to delivering top-quality 
          illustrations with 100% dedication.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg">
          Contact Us
        </button>
      </div>
    </section>
    </div>
  );
};

export default FashionIllustration;
