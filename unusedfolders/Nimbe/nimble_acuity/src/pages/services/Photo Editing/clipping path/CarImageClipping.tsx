import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import PEMainMenu from "../PEmainmenu";

const CarImageClipping: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gray-50 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble Car Image Clipping Services</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-6">
          Effortlessly streamline your image editing process with our car image clipping services. From flawless backgrounds to precise detailing, we deliver exceptional quality while meeting demanding deadlines.
        </p>
        <Button size="lg">Contact Us</Button>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto py-12 px-6 text-gray-700">
        <p className="mb-4">
          Car dealerships, automobile auction houses, and studios often encounter hurdles such as limited resources, high volumes of work, and tight deadlines. Without in-house expertise, ensuring consistent quality becomes daunting. Our car image clipping services provide skilled resources with specialized expertise on demand.
        </p>
        <p>
          Recently, we assisted the largest auto dealer in the UK by delivering 5000 professionally clipped, high-quality images within a tight 30-day timeframe—proving our scalability and precision.
        </p>
      </section>

      {/* Solutions */}
      <section className="bg-white py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">Car Image Clipping Solutions We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            "Precise Clipping Path",
            "Background Removal",
            "Reflection & Glare Removal",
            "Shadow & Highlight Adjustment",
            "Image Retouching & Restoration",
            "Vehicle Color Changing",
            "Watermark Removal",
            "Noise Reduction",
            "Perspective Correction",
          ].map((service) => (
            <Card key={service} className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{service}</h3>
                <p className="text-sm text-gray-600">
                  Professional editing to ensure your automotive images are clear, consistent, and market-ready.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-6">Tools We Use</h2>
        <p className="text-gray-600">Adobe Photoshop • Adobe Lightroom CC</p>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us as Your Car Image Clipping Partner?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Scalability for Business Growth",
            "Strict GDPR & ISO 9001:2015 Compliance",
            "Stringent Security Measures",
            "Quick Turnaround Time",
            "High-quality Services",
            "Expertise of Adobe Specialists",
            "Customized Pricing Options",
          ].map((point) => (
            <div key={point} className="flex items-start space-x-3">
              <CheckCircle className="text-green-500 mt-1" />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-white py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">Additional Services</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {["Portrait Services", "Wedding Photo Editing", "Jewelry Image Editing", "Real Estate Image Editing"].map(
            (service) => (
              <Card key={service} className="shadow-sm">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">{service}</h3>
                  <p className="text-sm text-gray-600">Expand your offerings effortlessly with our expert editing support.</p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">Customer Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">UK's Largest Auto Seller</h3>
              <p className="text-gray-600 text-sm">
                Delivered 5000 edited car images within 30 days, helping the client meet a critical business target.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">NZ Bike Designer</h3>
              <p className="text-gray-600 text-sm">
                Provided dedicated clipping services with flawless execution and consistent delivery.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="italic text-gray-700">
          "Thank you for the excellent work you have done for me. The quality was very high, the price excellent and the turnaround time was very fast. 10/10."
        </blockquote>
        <p className="mt-4 text-gray-600">— Professional Photographer, Australia</p>
      </section>

      {/* Final CTA */}
      <section className="bg-green-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Nimble Car Image Clipping Services to Nimble Acuity</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Save time, scale your business, and achieve consistent quality with our professional car image clipping solutions.
        </p>
        <Button size="lg" variant="secondary">
          Get Started Today
        </Button>
      </section>
    </div>
  );
};

export default CarImageClipping;
