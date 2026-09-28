import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PEMainMenu from "../PEmainmenu";

const PhotoDensityCorrectionPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Navigation */}
      <PEMainMenu />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Photo Density & Color Correction Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Give your images a professional and brand-new look with Nimble Acuity’s
          density and color correction services. Restore old photos, correct poorly
          captured images, and enhance every detail for lasting impact.
        </p>
        <Button className="mt-6 bg-white text-indigo-700 hover:bg-gray-100">
          Start Your Free Trial
        </Button>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Even with advanced cameras, photos often suffer from errors such as poor
          lighting, low contrast, or faded details. Nimble Acuity’s expert photo
          density and color correction services resolve these issues, giving you
          sharper, brighter, and more vibrant images.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Increase/Decrease Brightness & Contrast",
            "Improve Image Sharpness",
            "Fix Over-Exposure & Lighting Issues",
            "Color Saturation & Hue Balancing",
            "Revive Old or Damaged Photographs",
            "Correct Technical Camera Errors",
          ].map((service, i) => (
            <Card key={i} className="shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">
                  Professional editing tailored to bring clarity, vibrance, and
                  precision to your images.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Verticals We Cater To */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Verticals / Industries We Cater To
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {[
            "Online Apparel Shopping",
            "Online Electronics Stores",
            "Automobile Stores",
            "Sports Accessories Stores",
            "Publishing Houses",
            "Portrait Studios",
            "Real Estate Companies",
          ].map((industry, i) => (
            <div
              key={i}
              className="p-5 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
            >
              <h3 className="font-medium">{industry}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Nimble */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Nimble Photo Density & Color Correction Services?
        </h2>
        <div className="max-w-4xl mx-auto text-gray-700 space-y-4">
          <p>
            By outsourcing to Nimble Acuity, you save time and cost while gaining
            access to professionals who deliver high-quality editing at scale. Our
            team ensures sharp, clear images with the perfect color balance at
            competitive rates.
          </p>
          <p>
            Without investing in expensive tools or in-house expertise, you can
            achieve superior results that enhance your brand’s image.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Benefits of Partnering with Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Large team of expert image editors",
            "Latest image editing software & technology",
            "Cost-effective & accurate services",
            "Always delivered ahead of schedule",
            "Confidential & secure process",
          ].map((benefit, i) => (
            <div
              key={i}
              className="p-5 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
            >
              <h3 className="font-medium">{benefit}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Restore and Revitalize Your Images Today
        </h2>
        <p className="max-w-3xl mx-auto">
          Contact us to Nimble your photo density and color correction needs.
          Experience sharper, clearer, and more vibrant photographs that leave a
          lasting impression.
        </p>
        <Button className="mt-6 bg-white text-indigo-700 hover:bg-gray-200">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default PhotoDensityCorrectionPage;
