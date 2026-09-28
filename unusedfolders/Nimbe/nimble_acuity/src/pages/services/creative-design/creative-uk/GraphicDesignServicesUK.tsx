import React from "react";
import CSmainmenu from "../CSmainmenu";

const GraphicDesignServicesUK: React.FC = () => {
  const services = [
    "Trade Show Booth Design Services",
    "Presentation Design Services",
    "Infographic Design Services",
    "Marketing and Promotional Design Services",
    "Exhibition Design Services",
    "InDesign Services",
    "UI/UX Design",
    "Web Design Services",
    "Logo Design Services",
    "Advertising Design Services",
    "Print Design Services",
    "Flyer Design Services",
    "Corporate Design Services",
  ];

  const additionalServices = [
    "Video Editing Services",
    "Illustration Services",
    "Animation Services",
    "DTP Services",
    "3D Modelling Services",
    "Real Estate Video Editing Services",
  ];

  const benefits = [
    "ISO 9001:2015 Certified: Over 24 years of expertise in offshore graphic design.",
    "High-Quality Service: Excellence from concept to execution.",
    "Quick Turnaround Time: 10-36 hours depending on service, ensuring project timelines are met.",
    "Experienced Graphic Designers: Dedicated team integrating design, web, and development for cohesion.",
    "Cutting-Edge Tools: Photoshop, Illustrator, CorelDraw, Freehand and more.",
    "Cost-Effective Services: Flexible pricing models tailored to your requirements.",
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-green-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Graphic Design Services - UK
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Tailored designs, targeted results! Scale your events with visually stunning materials that engage and inform.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Contact Us
        </button>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Crafting resonant event branding, producing eye-catching promotional materials, and orchestrating attendee-friendly event signage can feel overwhelming. Tight timelines often cause rushed work, impacting quality and professionalism.
        </p>
        <p>
          Nimble Auity eases the graphic design load, providing efficiency in workflows, consistent branding, and cost-effective solutions for events of all scales—from intimate gatherings to large-scale conferences. Our commitment is to deliver designs that surpass professional standards, giving your events a competitive edge.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Graphic Design Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">{service}</h3>
              <p className="text-gray-700">
                Expertly crafted {service.toLowerCase()} for the UK market, designed to engage your audience and enhance your brand identity.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Design Process</h2>
        <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto">
          <li><strong>Brainstorm with Client:</strong> Explore design ideas and establish project direction.</li>
          <li><strong>Understand Requirements:</strong> Gather detailed project information, audience, and objectives.</li>
          <li><strong>Sketch Up & Design:</strong> Transform concepts into initial sketches and designs.</li>
          <li><strong>Feedback & Iterations:</strong> Refine designs based on client feedback.</li>
          <li><strong>Approvals:</strong> Present finalized designs for client approval.</li>
          <li><strong>Final Design:</strong> Refine and prepare designs for seamless implementation across platforms.</li>
        </ol>
      </section>

      {/* Software */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Software We Leverage</h2>
        <p className="text-center">Adobe Illustrator, Adobe Photoshop, Adobe InDesign, CorelDraw</p>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 bg-green-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Additional Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {additionalServices.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">{service}</div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Nimble Auity</h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto">
          {benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Client Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Client Case Studies</h2>
        <div className="space-y-6 text-center">
          <p>
            <strong>Nimble Provided Graphic Design Services to UK Property Website & App Owner:</strong> Helped client reach wider audience and increase conversions.
          </p>
          <p>
            <strong>Precision Cropping for UK Sports Brand:</strong> Delivered high-quality services with fast turnaround for a leading sports activation company.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Testimonials</h2>
        <p>
          "I am overwhelmed with the support & understanding of Nimble Auity. Their team handled our DTP project with diligence and a quick turnaround, helping us reap immense profits." <br />
          <strong>Graphics Manager, Electronics Company, South Korea</strong>
        </p>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Partner with Nimble Auity for Expert Graphic Design
        </h2>
        <p className="mb-6">
          Access cost-effective, high-quality, and scalable graphic design solutions tailored to your UK market. Let us handle your design while you focus on your core business.
        </p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default GraphicDesignServicesUK;
