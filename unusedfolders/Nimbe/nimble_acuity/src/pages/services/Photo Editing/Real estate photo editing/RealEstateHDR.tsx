import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PEMainMenu from "../PEmainmenu";

const RealEstateHDR: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Real Estate HDR Photo Editing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Get crystal-clear, bright, and professional real estate photography
          for all your marketing needs. At just $7 an hour, our services come at
          unbeatable rates.
        </p>
        <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
          Get a Free Trial
        </Button>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Professional Real Estate HDR Image Blending Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Image Bracketing",
              desc: "Blend multiple exposures of the same space (living rooms, kitchens, outdoors) into one crystal-clear image.",
            },
            {
              title: "Color Balancing",
              desc: "Correct balance, saturation, and exposure to make property images vibrant and natural.",
            },
            {
              title: "Perspective Correction",
              desc: "Fix vertical and horizontal distortions to ensure natural, professional compositions.",
            },
            {
              title: "Professional Photo Editing",
              desc: "Noise reduction, cropping, object removal, and advanced enhancements for polished results.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="bg-gray-50 py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Real Estate HDR Image Blending Process
        </h2>
        <ol className="space-y-6">
          {[
            "Brief your appointed project manager.",
            "Share your photos securely via FTP or cloud.",
            "Our experts blend HDR images as per your requirements.",
            "We apply professional photo editing if needed.",
            "Quality team reviews every photo for 100% accuracy.",
            "Corrections made if errors are spotted.",
            "Final files delivered in TIFF, JPEG, PNG, PSD, or RAW format.",
          ].map((step, idx) => (
            <li
              key={idx}
              className="bg-white p-6 shadow-md rounded-xl border-l-4 border-indigo-600"
            >
              <span className="font-semibold">Step {idx + 1}:</span> {step}
            </li>
          ))}
        </ol>
        <div className="text-center mt-8">
          <Button size="lg" className="bg-indigo-700 text-white hover:bg-indigo-800">
            Try It Free Today
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble Acuity for Real Estate HDR Image Blending?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Quickest Turnaround",
              desc: "24–48 hour delivery enabled by globally distributed teams.",
            },
            {
              title: "Competitive Pricing",
              desc: "Professional quality editing at just $7/hour.",
            },
            {
              title: "Safety & Security",
              desc: "Strict protocols, FTP/VPN transfers, and NDAs ensure data confidentiality.",
            },
            {
              title: "Quality Guarantee",
              desc: "Every image undergoes strict QC before delivery.",
            },
            {
              title: "Modern Infrastructure",
              desc: "Licensed software, advanced systems, and high-speed processing.",
            },
            {
              title: "Experienced Team",
              desc: "100+ experts with 10+ years of real estate editing experience.",
            },
          ].map((benefit, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            "Real Estate Panorama Services",
            "Image Stitching Services",
            "Real Estate Photo Blending",
            "Real Estate Image Enhancement",
          ].map((service, idx) => (
            <Card key={idx} className="shadow rounded-xl">
              <CardContent className="p-6 font-medium">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="space-y-8">
          {[
            {
              title: "Case Study: Image Clipping for NZ Bike Designers",
              desc: "Handled 5 images/day with a dedicated resource.",
            },
            {
              title: "Case Study: Portrait Restoration for South Korean Client",
              desc: "Delivered 1400+ images per week with high client satisfaction.",
            },
          ].map((story, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-gray-600">{story.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <p className="max-w-3xl mx-auto italic text-lg">
          "Using Nimble Acuity to edit my portrait images was an absolute
          pleasure! Their communication and delivery time was lightning quick.
          The quality of editing work was great! Highly recommended."
        </p>
        <p className="mt-4 font-semibold">— Professional Photographer, South Africa</p>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble HDR Image Blending Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-6 text-gray-600">
          With 26+ years of expertise, ISO 9001:2015 certification, and hundreds
          of thousands of photos edited, we deliver international quality with
          speed, confidentiality, and cost savings.
        </p>
        <Button size="lg" className="bg-indigo-700 text-white hover:bg-indigo-800">
          Contact Us Now
        </Button>
      </section>
    </div>
  );
};

export default RealEstateHDR;
