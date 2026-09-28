import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PEMainMenu from "../PEmainmenu";

const FocusStackingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Focus Stacking Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          See beyond, sharper than ever. Discover limitless focus with our focus
          stacking services. From macro marvels to sweeping landscapes, redefine
          clarity and depth in every shot.
        </p>
        <Button className="mt-6 bg-white text-indigo-700 hover:bg-gray-100">
          Connect Today
        </Button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Redefine Depth, Unveil Clarity, Embrace the Extraordinary
        </h2>
        <p className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
          At the heart of focus stacking lies challenges—capturing minute
          details, seamless blends, and impeccable quality. Our experts leverage
          Adobe Photoshop, Lightroom, and advanced tools to deliver perfectly
          stacked, detail-rich images across industries.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Professional Focus Stacking Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Focus Stacking for Landscapes",
            "Still Life Photography",
            "Portraits",
            "Real Estate Images",
            "Product Photography",
            "360 Product Photography",
            "Architectural Photography",
            "Botanical & Nature Photography",
            "Scientific & Medical Imaging",
          ].map((service, i) => (
            <Card key={i} className="shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">
                  High-quality, detail-rich imagery ensuring unmatched clarity
                  and depth across your photography.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Quality Assurance",
            "On-time Delivery",
            "Rigorous Quality Checks",
            "Large-Scale Focus Stacking",
            "Macro & Micro Solutions",
            "Scalable Solutions",
            "Simplified File Submission",
            "Data Security (GDPR & ISO)",
            "Flexible Pricing",
          ].map((point, i) => (
            <div
              key={i}
              className="p-5 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
            >
              <h3 className="font-medium">{point}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Portrait Restoration for South Korean Client
              </h3>
              <p className="text-gray-600 text-sm">
                Restored 1400 images per week with 100% quality for a leading
                photo restoration business.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Photo Restoration for Australian Client
              </h3>
              <p className="text-gray-600 text-sm">
                Delivered 10,000+ restored images for a merchandising business,
                exceeding client expectations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-center max-w-3xl mx-auto">
        <blockquote className="italic text-gray-700">
          "I used Nimble Acuity.com for some photo retouching. I'm thrilled
          with the work and time they saved me. The whole process was efficient
          and the result was great."
        </blockquote>
        <p className="mt-4 font-medium">– Graphic Designer, Canada</p>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Nimble Focus Stacking Services to Us
        </h2>
        <p className="max-w-3xl mx-auto">
          Eliminate costly equipment investments and training. Achieve superior
          image quality and depth with our expertise, at a fraction of the cost.
        </p>
        <Button className="mt-6 bg-white text-indigo-700 hover:bg-gray-200">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default FocusStackingPage;
