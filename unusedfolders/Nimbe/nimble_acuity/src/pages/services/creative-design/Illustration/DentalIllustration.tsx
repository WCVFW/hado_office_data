import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CSmainmenu from "../CSmainmenu";

const DentalIllustration: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Dental Illustration Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Set your dental practice and training apart with high-quality, custom dental illustrations starting at <b>$10/hour</b>.
        </p>
        <Button className="mt-6 bg-white text-teal-700 hover:bg-teal-200">
          Contact Us
        </Button>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <p>
          Enhance your dental practice with professional illustrations designed to educate patients, train new dentists, and aid in marketing dental products. Nimble Auity provides detailed, accurate, and visually engaging dental illustrations tailored to your needs.
        </p>
        <p>
          Our team creates illustrations that explain dental procedures, show proper oral care, demonstrate device usage, and support textbooks or marketing campaigns.
        </p>
      </div>

      {/* Dental Illustration Services */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Dental Illustration Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Tooth Alignment Illustrations",
              desc: "Illustrate misalignments like overbites, underbites, and crossbites, showing their effects on supporting structures."
            },
            {
              title: "Professional Dental Care Illustrations",
              desc: "Educate hygienists and patients about oral hygiene, gingivitis, and preventive care through detailed step-by-step illustrations."
            },
            {
              title: "Dental Anatomy Illustration Services",
              desc: "Provide detailed layered views of teeth, alveolar bone, periodontal ligament, dentin, enamel, and surrounding tissues."
            }
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
          Benefits of Choosing Nimble for Dental Illustration
        </h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-gray-700">
          <li><b>Anatomically & Scientifically Accurate:</b> Illustrations created by experts with medical and scientific training.</li>
          <li><b>Strong Foundational Knowledge:</b> Detailed understanding of dental anatomy ensures precise and reliable illustrations.</li>
          <li><b>Custom Creations:</b> Personalized illustrations tailored to your practice, textbooks, or dental product requirements.</li>
          <li><b>Experience with Dental Products:</b> Illustrations to help dental device developers showcase product benefits effectively.</li>
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
      <div className="bg-teal-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto italic text-lg text-gray-700">
          “Thank you for the fast turnaround time and attention to detail. We highly appreciate your hard work.”
        </blockquote>
        <p className="mt-4 font-semibold">CEO, Digital Marketing Agency, Australia</p>
      </div>

      {/* CTA */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Enhance Your Dental Practice Today</h2>
        <p className="mb-6">
          Partner with Nimble Auity to create accurate, visually appealing dental illustrations that educate, inform, and engage your audience.
        </p>
        <Button className="bg-teal-600 text-white hover:bg-teal-700">
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default DentalIllustration;
