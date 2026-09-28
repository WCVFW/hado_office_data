import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import DSMainMenu from "../mainmenu";

const OffensiveImageVideoRecognition: React.FC = () => {
  return (
    <div className="w-full px-6 py-12 bg-gray-50">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Offensive Image & Video Recognition Software Development
        </h1>
        <p className="text-lg text-gray-600">
          Leverage deep learning to automatically detect, filter, and block 
          inappropriate images and videos. Ensure safety, compliance, and 
          trustworthiness of your platforms with Nimble Acuity’s AI-powered recognition solutions.
        </p>
      </section>

      {/* Service Features */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Key Services We Provide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Weapon, Alcohol, Drug Detection",
              desc: "Identify and filter content containing weapons, alcohol, drugs, or other objectionable visuals.",
            },
            {
              title: "Nudity Detection",
              desc: "Automatically detect and block partial or raw nudity from user uploads.",
            },
            {
              title: "Offensive & Hate Sign Recognition",
              desc: "Detect offensive gestures, hate symbols, and inappropriate signs.",
            },
            {
              title: "Minor Detection",
              desc: "Detect children under 18 in restricted environments and alert authorities.",
            },
            {
              title: "Spam Detection",
              desc: "AI-driven detection of spam or malicious media content.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Tools & Technologies We Leverage
        </h2>
        <div className="flex flex-wrap gap-4 text-gray-700">
          {["Django", "Apache Hadoop", "Luigi", "MongoDB", "OCR", "Python"].map(
            (tool, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white border rounded-full shadow-sm"
              >
                {tool}
              </span>
            )
          )}
        </div>
      </section>

      {/* Development Process */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Our Development Process
        </h2>
        <ol className="space-y-4">
          {[
            "Software Requirement Analysis",
            "Offensive Image/Video Detection Development",
            "Software Integration",
            "Software Testing",
            "Future Improvements",
          ].map((step, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Affordable & flexible pricing",
            "Experienced data scientists (100+ man-years)",
            "ISO/IEC 27001:2022 certified (data security)",
            "Quick turnaround time",
            "Easy scalability of solutions",
            "Highly accurate deep learning models",
          ].map((point, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow"
            >
              <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center bg-blue-600 text-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Secure Your Platform?
        </h2>
        <p className="mb-6">
          Partner with Nimble Acuity for reliable and scalable image & video 
          recognition software development using deep learning.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default OffensiveImageVideoRecognition;
