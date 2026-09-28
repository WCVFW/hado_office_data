import React from "react";
import CSmainmenu from "../CSmainmenu";

const ImageOptimization: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Image Optimization & Vectorization Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          At Nimble Auity, we aid website owners, ad agencies, photographers,
          design studios, and more with image optimization and vectorization
          services. We serve as your extended in-house design team offering
          high-quality services at realistic costs.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <p className="mb-6">
          Need to increase or compress images of any size? We can assist with
          image optimization services. We also convert any image format into
          vector artwork or illustrations. With over two decades of experience,
          our illustrators transform your images into beautiful vector artworks
          for every kind of media — scalable to any size without loss of
          quality.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          Image Optimization & Vector Graphic Services We Offer
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-8">
          At Nimble, we work with almost any type of graphic file format —
          bitmap, PDF, GIF, JPEG, TIFF, and more — converting them into SVG,
          EPS, PDF, AI, DXF vector images with full-color tracing. Our services
          include:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Image Optimization",
            "Image Vectorization",
            "Graphic Design Vectors",
            "Pre-Print Vectors",
            "Logo Vectors",
            "Recreation of Illustrations, Maps, Blueprints, Signage",
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Image Optimization & Vector Art Conversion Process
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            {
              step: "01. Briefing",
              desc: "Briefing received from the client on scope of work, timelines, and resources.",
            },
            {
              step: "02. Client Input",
              desc: "Client samples transferred securely via FTP or Dropbox to Nimble.",
            },
            {
              step: "03. Optimization & Vectorization",
              desc: "Image size adjusted as per specifications (Adobe Photoshop) and vector art created (Adobe Illustrator).",
            },
            {
              step: "04. Client Approval",
              desc: "First draft sent for approval; edits and corrections carried out as per feedback.",
            },
            {
              step: "05. Final Output",
              desc: "Final approved files securely delivered to client via FTP or Dropbox.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg shadow hover:shadow-md"
            >
              <h3 className="font-bold mb-2">{item.step}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          Benefits of Choosing Nimble for Image Optimization & Vectorization
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Experienced Team",
              desc: "Skilled illustrators trained in Adobe Photoshop CC, Adobe Illustrator, and the latest tools.",
            },
            {
              title: "Cost-Effective Pricing",
              desc: "Affordable options — FTEs, hourly rates, or custom pricing — without compromising quality.",
            },
            {
              title: "Any Image Size",
              desc: "We compress or enlarge images of any size and convert any format into vectors.",
            },
            {
              title: "Scheduled Delivery",
              desc: "Projects delivered on time, within agreed timelines.",
            },
            {
              title: "Hassle-Free Nimble",
              desc: "Work across time zones, with 24/6 support and dedicated Account Managers.",
            },
            {
              title: "Quality Output",
              desc: "ISO quality standards, 99% SLA adherence, and regular audits to ensure excellence.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Software */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Software We Use</h2>
        <p className="max-w-3xl mx-auto text-center mb-8">
          Our team leverages industry-standard tools and universal graphic file
          support to deliver the best results:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          {[
            "Adobe Illustrator CS5.5/CS6",
            "Adobe Photoshop CC",
            "Live Trace",
            "Wacom Tablet",
            "PDF Format",
            "EPS Format",
            "PSD Format",
            "GIF Format",
            "SVG Format",
            "JPEG Format",
            "SWF Format",
            "TIFF Format",
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-lg shadow hover:shadow-md"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Choose Nimble for Image Optimization & Vector Illustration Services
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          For exclusive, high-quality image optimization and vectorization
          services, call or email Nimble today. Save time and money with
          customized solutions, delivered at the most affordable costs.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ImageOptimization;
