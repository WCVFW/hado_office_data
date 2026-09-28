import React from "react";
import CSmainmenu from "../CSmainmenu";

const MagazineDigitization: React.FC = () => {
  return (
    <div><CSmainmenu/>
    <section className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 md:px-16">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-green-700">
          Nimble Magazine Digitization Services
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Get access to flawless and error-free magazine digitization services from an experienced team of creative artists starting at just{" "}
          <span className="font-semibold">$10 an hour</span>.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto space-y-6 leading-relaxed">
        <p>
          Are you unable to get high-quality and error-free magazine digitization services from your in-house creative team? Are you falling short of skilled and experienced creative artists who can take care of your magazine digitization requirements? Then, the best option for you would be to choose{" "}
          <span className="font-semibold">Nimble magazine digitization services</span>.
        </p>
        <p>
          <span className="font-semibold">Nimble Auity</span> is a trusted magazine digitization company that can be your one-stop-shop for all your artwork needs. Our talented creative artists use the latest digitization tools and technologies to deliver flawless services.
        </p>
      </div>

      {/* Services */}
      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-green-600 mb-6">
          Magazine Digitization Services We Offer
        </h2>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Magazine Data Entry Services</strong> – Multilingual data entry solutions with quick turnaround.
          </li>
          <li>
            <strong>Magazine Data Conversion</strong> – Accurate format conversions as per business needs.
          </li>
          <li>
            <strong>Magazine Formatting Services</strong> – Aesthetic formatting with eye-catching layouts.
          </li>
        </ul>
      </div>

      {/* Other Services */}
      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-green-600 mb-6">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-white shadow rounded-xl">Layout & Formatting Design</div>
          <div className="p-4 bg-white shadow rounded-xl">Magazine Layout Design</div>
          <div className="p-4 bg-white shadow rounded-xl">DTP Services</div>
          <div className="p-4 bg-white shadow rounded-xl">Book Layout Design Services</div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold text-green-600 mb-6">
          Why Choose Nimble for Magazine Digitization Services?
        </h2>
        <ul className="list-disc list-inside space-y-3">
          <li>Flexible Pricing Options – Affordable packages to suit every budget.</li>
          <li>Information Security – ISO/IEC 27001:2022 certified for data safety.</li>
          <li>Superior Quality – Streamlined quality checks for flawless outputs.</li>
          <li>Best Infrastructure – Equipped with the latest tools and secure offices.</li>
          <li>Skilled Creative Artists – Experienced team for any digitization need.</li>
          <li>Dedicated SPOC – Single point of contact for efficient communication.</li>
          <li>Easily Scalable – Scale up resources based on client requirements.</li>
          <li>24/7 Customer Support – Always available via phone or email.</li>
          <li>Quick Turnaround – Multiple delivery locations for faster service.</li>
        </ul>
      </div>

      {/* Case Studies */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold text-green-600 mb-6">
          Client Success Stories
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-white shadow rounded-xl">
            <strong>Prepress and Vector Artwork for Dublin Client</strong> – Delivered prepress and artwork services quickly and reliably.
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <strong>Vector Artwork for US-based Label Designer</strong> – Cost-effective vector artwork solutions for a leading label designer.
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold text-green-600 mb-6">
          Testimonials
        </h2>
        <blockquote className="italic text-gray-700 bg-white shadow rounded-xl p-6">
          “Thanks for your fast turnaround time and attention to detail for our busy Australian ad agency, appreciate your hard work.”
          <footer className="mt-4 font-semibold text-gray-900">– Digital Marketing Agency, Australia</footer>
        </blockquote>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Partner with Nimble Auity Today
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Nimble Auity is a pioneer in providing magazine digitization services in India and globally. With skilled experts and advanced tools, we ensure top-quality, cost-effective services.
        </p>
        <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">
          Contact Us
        </button>
      </div>
    </section>
    </div>
  );
};

export default MagazineDigitization;
