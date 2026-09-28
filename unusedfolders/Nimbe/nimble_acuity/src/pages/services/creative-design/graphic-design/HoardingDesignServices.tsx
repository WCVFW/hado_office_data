import React from "react";
import CSmainmenu from "../CSmainmenu";

const HoardingDesignServices: React.FC = () => {
  const hoardingServices = [
    "Backlit Banner Designs",
    "Contra Vision Signs (one-way vision)",
    "Road Banners",
    "Road Signs",
    "Flex Banners",
  ];

  const processFlow = [
    "Project Definition: Define requirement based on client inputs.",
    "Trial: Deliver a trial project to set quality and price expectations (if required).",
    "Project SLA: On approval of trial, draft SLA (finalize completion time, resources, pricing).",
    "Project Assignment: Allocate resources, assign tasks, and appoint Project Manager.",
    "Design Execution: Professional design considering size, purpose, target audience; draft, approval, final design.",
    "Quality Check: Multiple checks to ensure accuracy and 99% SLA adherence.",
    "Delivery: Deliver final output via client’s preferred method.",
  ];

  const benefits = [
    "Service Expertise: 30+ qualified designers.",
    "ISO quality processes.",
    "Skilled data entry professionals.",
    "99% SLA adherence.",
    "Seamless Outsourcing: Work in your own time zone.",
    "Quick turnaround times (depends on project).",
    "Up to 2 design revisions at no additional cost.",
    "Fluent English-speaking Account Manager.",
    "100% security: NDA, GDPR compliance, and other protocols.",
    "24/6 support.",
    "Cost Effective: Hourly, project rates, or FTE option.",
    "Customized pricing packages to suit your budget.",
  ];

  const caseStudies = [
    {
      title: "Sticker Design for an Advertising Firm",
      description: "Top Scandinavian medical research company gets 3200 full-time Nimble work hours and delivery of fully-functional 3D animation and 3D modeled video.",
    },
    {
      title: "Logo Vectorization for an Australian Company",
      description: "Australian startup specializing in marketing and web development gets logo design and vectorization services in a timely and cost-efficient manner.",
    },
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-green-700 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Hoarding Design Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Effective hoardings and billboards that capture attention and deliver maximum ROI for your brand, products, or services.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          At Nimble Auity, we create creative and eye-catching hoarding/billboard designs for businesses across industries to establish brand identity, launch products, and target specific demographics.
        </p>
        <p>
          Our outdoor hoarding designs incorporate vibrant palettes, high-quality images, and typography for the perfect finish. We also provide pre-designed templates for reference.
        </p>
      </div>

      {/* Hoarding Services */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Our Hoarding Design Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hoardingServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Process Flow */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Our Hoarding Design Process</h2>
          <div className="space-y-6">
            {processFlow.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-green-700 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
                  {index + 1}
                </div>
                <p className="text-gray-800">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Why Choose Nimble Auity?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <p className="text-gray-800">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Client Case Studies</h2>
          <div className="space-y-6">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{caseStudy.title}</h3>
                <p className="text-gray-700">{caseStudy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-green-700 text-white py-16 text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started Today</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Partner with Nimble Auity to create creative and impactful hoarding designs that communicate your brand effectively. Contact us for a free quote today.
        </p>
        <button className="px-8 py-4 bg-white text-green-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default HoardingDesignServices;
