import React from "react";
import DSmainmenu from "../DSmainmenu";

const BoundingBoxServices: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 px-4 text-center rounded-b-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bounding Box Annotation Services</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Nimble Auity provides advanced bounding box annotation solutions to optimize AI-powered visual recognition for e-commerce and web businesses.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-indigo-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Bounding Box Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Geo-Tagging Services: Identify places, objects, and locations in images",
            "Multi-label Classification: Detect multiple objects in a single image",
            "Image Detailing: Provide multiple views and detailed object representation",
            "Image Descriptor: Tag objects and transcribe inscriptions within images",
            "Text Translation: Translate image-based text for search optimization",
            "Image Retrieval: Efficiently match queries with annotated images",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <p className="text-gray-800 font-medium">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold text-indigo-600">40%</p>
            <p className="text-gray-700 mt-1">Cost Reduction</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-600">8-24 Hrs</p>
            <p className="text-gray-700 mt-1">Faster Turnaround</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-600">500+</p>
            <p className="text-gray-700 mt-1">Satisfied Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-600">350+</p>
            <p className="text-gray-700 mt-1">Skilled Experts</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-600">99%</p>
            <p className="text-gray-700 mt-1">Accuracy</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Process</h2>
        <ol className="space-y-6 text-gray-700 text-lg">
          <li>1. Scope of Work: Define project details clearly.</li>
          <li>2. Sample Project: Execute based on client's inputs.</li>
          <li>3. Effort, Pricing & SLA: Confirm resources, time, and costs.</li>
          <li>4. Project Assignment: Project Manager sets up team and resources.</li>
          <li>5. Execute Process: Analyze, sort, and annotate data.</li>
          <li>6. Quality Check: QA team ensures accuracy and completeness.</li>
          <li>7. Regular Delivery: Upload annotated data to the client portal.</li>
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nimble for Bounding Box Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Experienced data entry & annotation professionals",
            "Quick scaling for rising demand",
            "ISO-compliant quality & standards",
            "Cost-effective & timely services",
            "Customized solutions based on industry needs",
            "Enhances visual recognition & AI model efficiency",
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <p className="text-gray-800 font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Success Stories</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">Singapore-based Web Solutions Provider</h3>
            <p>Delivered 250,000 images a month with accuracy using Nimble's bounding box services.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">Spanish eCommerce Web Solutions Provider</h3>
            <p>Processed 1 million images in 4 months with unmatched precision for fashion and AI applications.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-16">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-12 py-4 rounded-full shadow-lg hover:opacity-90 transition duration-300"
        >
          Contact Nimble
        </a>
      </section>
    </div>
  );
};

export default BoundingBoxServices;
