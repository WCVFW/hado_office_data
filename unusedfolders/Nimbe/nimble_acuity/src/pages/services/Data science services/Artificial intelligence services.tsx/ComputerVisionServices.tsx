import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSMainMenu from "../mainmenu";

const ComputerVisionServices: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Computer Vision Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Overcome the hurdles of visual data analysis with our comprehensive
          computer vision services! Experience rapid, accurate analysis of
          visual assets while ensuring data privacy.
        </p>
        <Button className="mt-6 bg-white text-blue-700 hover:bg-gray-100">
          Get Started
        </Button>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "ICD-10 Implementation for Medical Billing Company",
              desc: "We assisted a Florida-based medical billing company with smooth ICD-10 implementation.",
            },
            {
              title: "Digital Transformation for African Automotive Firm",
              desc: "We delivered cost-effective RPA-based transformation for an automotive client.",
            },
            {
              title: "RPA for Healthcare Company",
              desc: "Helped a healthcare company expand services with accounts receivable automation.",
            },
          ].map((story, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{story.title}</h3>
                <p className="text-gray-600 text-sm">{story.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Our Computer Vision Development Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Face Recognition",
            "Emotion Recognition",
            "Video Analytics",
            "Optical Character Recognition (OCR)",
            "Image Analysis & Segmentation",
            "Object Detection, Tracking & Labeling",
            "Intelligent Character Recognition",
            "Content-based Image Retrieval",
            "Contextual Image Classification",
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <h3 className="font-medium text-lg mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">
                  Tailored solutions for {service.toLowerCase()} to enhance visual
                  intelligence.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools & Tech Stack */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Our Powerhouse of Advanced Tools
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {["OpenCV", "Tesseract OCR", "Keras", "PyTorch", "TensorFlow", "MATLAB", "Caffe", "Cloud Vision API"].map(
            (tool, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white rounded-full shadow text-gray-700 text-sm"
              >
                {tool}
              </span>
            )
          )}
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Computer Vision Solutions Across Industries
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {["Healthcare", "Retail", "Manufacturing", "Aerospace", "Telecom", "Education", "Logistics", "Media & Entertainment"].map(
            (industry, idx) => (
              <Card key={idx} className="rounded-xl shadow-sm">
                <CardContent className="p-4 font-medium">{industry}</CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-10">
          What Sets Our Computer Vision Solutions Apart?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "ISO Certified Services",
            "Flexible Pricing Options",
            "Cost-efficient Solutions",
            "Dedicated Project Manager",
            "24/7 Support",
            "Faster Turnaround",
          ].map((point, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="font-medium text-lg">{point}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-indigo-700 to-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Computer Vision Services to Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Overcome today's challenges and gear up to bag future opportunities with
          our computer vision expertise. Ensure security, scalability, and
          innovation.
        </p>
        <Button className="bg-white text-indigo-700 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default ComputerVisionServices;
