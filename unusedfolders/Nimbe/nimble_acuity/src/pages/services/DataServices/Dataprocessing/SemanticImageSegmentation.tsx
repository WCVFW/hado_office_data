import React from "react";
import { Image, Layers, CheckCircle, UserCheck, Cpu } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const segmentationServices = [
  "Region Based Segmentation",
  "Network Based Segmentation",
  "Weakly Supervised Semantic Segmentation",
  "3D Labelling Services",
];

const otherServices = [
  "Order Processing Services",
  "Data Cleansing Services",
  "Credit Card Processing Services",
  "Transaction Processing Services",
];

const benefits = [
  "Flexible Pricing Options",
  "Data Security",
  "SPOC (Dedicated Manager)",
  "Skilled Team",
  "24/7 Customer Support",
];

const testimonials = [
  {
    quote:
      "We are most pleased and satisfied with our team at Nimble Auity. They have proven that a small business such as ours can take advantage of the great benefits of outsourcing.",
    author: "Project Manager, US Insurance Company",
  },
];

const SemanticImageSegmentation: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Semantic Image Segmentation Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            We offer pixel-perfect semantic image segmentation services at $6/hour. Reach out for the highest standards of accuracy.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Our Semantic Image Segmentation Services
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {segmentationServices.map((service, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center mb-3">
                <Image className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">{service}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Other Services You Can Benefit From
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherServices.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <Layers className="text-blue-600 mb-2" size={32} />
                <p className="font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Why Choose Nimble for Image Segmentation?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <CheckCircle className="mx-auto text-blue-600 mb-2" size={36} />
              <p className="font-semibold">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-8">Client Testimonials</h3>
          {testimonials.map((t, idx) => (
            <blockquote key={idx} className="mb-6 text-gray-700 italic">
              “{t.quote}”
              <footer className="mt-2 font-semibold">{t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-white mb-4">Get Started with Nimble Auity Today</h3>
          <p className="text-white mb-6">
            Partner with us to get accurate, scalable, and cost-effective semantic image segmentation services.
          </p>
          <a
            id="contact"
            href="#"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default SemanticImageSegmentation;
