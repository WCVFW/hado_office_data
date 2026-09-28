import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CSmainmenu from "../CSmainmenu";

const SurgicalIllustration: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Surgical Illustration Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          High-quality surgical illustrations to educate patients, train doctors, and visualize procedures at rates starting at <b>$10/hour</b>.
        </p>
        <Button className="mt-6 bg-white text-blue-700 hover:bg-blue-200">
          Contact Us
        </Button>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <p>
          Surgery can be intimidating for patients and complex for medical professionals. Nimble Auity creates surgical illustrations that explain procedures clearly, from patient education to professional training.
        </p>
        <p>
          Our team works one-on-one with clients to ensure that each illustration accurately represents the procedure, devices, or techniques, making learning and understanding easier for everyone.
        </p>
      </div>

      {/* Surgical Illustration Services */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Surgical Illustration Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Cardiovascular Surgical Illustration", desc: "Detailed depictions of cardiovascular surgeries, stent procedures, bypass, pacemakers, and benefits of each surgery." },
            { title: "Plastic Surgery Illustrations", desc: "Illustrations for cosmetic, reconstructive, and all types of plastic surgery procedures, before and after." },
            { title: "Neurosurgery Illustrations", desc: "Visualize intricate components of the brain and nervous system for complex neurosurgeries." },
            { title: "General Surgery Illustration", desc: "Illustrate anatomy and surgical steps for skeletal, cardiovascular, neurological, and connective tissue procedures." }
          ].map((item, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Benefits of Choosing Nimble for Surgical Illustration
        </h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-gray-700">
          <li><b>A Suite of Related Services:</b> Medical illustration, transcription, medical billing, coding, and more.</li>
          <li><b>Highly Trained Professionals:</b> Illustrators with anatomy knowledge, medical backgrounds, and software expertise.</li>
          <li><b>Cutting-edge Medical Illustration:</b> Hand-drawn, watercolor, 2D/3D computer renderings, and interactive illustrations on request.</li>
          <li><b>Client-focused Revisions:</b> Work one-on-one with clients to revise illustrations until fully satisfied.</li>
        </ul>
      </div>

      {/* Client Case Studies */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Client Case Studies</h2>
        <div className="space-y-6">
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Nimble Provided Illustration Services to Paris-based Men's Apparel Manufacturer
              </h3>
              <p className="text-sm text-gray-600">
                Delivered 200 illustrations with four images per day via Dropbox in EPS/PDF formats, achieving 60% cost savings.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Nimble Provided Illustrations for Denmark-based Writer
              </h3>
              <p className="text-sm text-gray-600">
                Delivered high-quality illustrations for a children's book with cost-effective and timely solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto italic text-lg text-gray-700">
          “Thank you for the fast turnaround time and attention to detail. We highly appreciate your hard work.”
        </blockquote>
        <p className="mt-4 font-semibold">CEO, Digital Marketing Agency, Australia</p>
      </div>

      {/* CTA */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Bring Surgical Procedures to Life</h2>
        <p className="mb-6">
          Collaborate with Nimble Auity to create clear, detailed, and professional surgical illustrations that educate and inform.
        </p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default SurgicalIllustration;
