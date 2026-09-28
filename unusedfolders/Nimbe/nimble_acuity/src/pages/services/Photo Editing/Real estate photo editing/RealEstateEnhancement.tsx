import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PEMainMenu from "../PEmainmenu";

const RealEstateEnhancement: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Real Estate Floor Plan Conversion Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Enhance your property listings with expert image enhancements using
          top-tier software. Save up to 60% on costs while we handle the
          complexity for you.
        </p>
        <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
          Get Started Today
        </Button>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Real Estate Still Photo Enhancement Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Color Cast Removal",
              desc: "Restore accurate colors for authentic property images that foster buyer trust.",
            },
            {
              title: "Perspective Correction",
              desc: "Rectify lens distortions and achieve balanced compositions for wide-angle shots.",
            },
            {
              title: "Image Correction Services",
              desc: "Balance highlights, shadows, contrast, and brightness for vivid compositions.",
            },
            {
              title: "Photo Color Correction",
              desc: "Adjust color balance, saturation, and vibrancy for true-to-life visuals.",
            },
            {
              title: "Sky Change Services",
              desc: "Enhance skies with sunlit tones, cloud details, and natural reflections.",
            },
            {
              title: "Additional Services",
              desc: "Barrel distortion correction, cropping, rotation, white balance adjustment, and more.",
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
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Real Estate Image Enhancement Process Flow
        </h2>
        <ol className="space-y-6">
          {[
            {
              step: "01. Image Assessment & Consultation",
              desc: "We review your images and collaborate to design strategies aligned with your goals.",
            },
            {
              step: "02. Technical Enhancement",
              desc: "Fix exposure, color balance, and technical imperfections for clean results.",
            },
            {
              step: "03. Creative Enhancement",
              desc: "Apply perspective correction, sky enhancements, and artistic refinements.",
            },
            {
              step: "04. Quality Control & Review",
              desc: "Images undergo rigorous QC with side-by-side comparisons to originals.",
            },
            {
              step: "05. Client Feedback & Revisions",
              desc: "Adjustments are made based on your feedback to ensure satisfaction.",
            },
            {
              step: "06. Final Delivery",
              desc: "High-resolution images are delivered securely with complete confidentiality.",
            },
          ].map((item, idx) => (
            <li
              key={idx}
              className="bg-white p-6 shadow-md rounded-xl border-l-4 border-blue-600"
            >
              <h3 className="font-semibold text-lg mb-2">{item.step}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Hire Us */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Hire Us for Real Estate Image Enhancement?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Specialized Adobe Professionals",
              desc: "Our experts turn real estate images into captivating visual narratives.",
            },
            {
              title: "Latest Tools & Tech",
              desc: "We combine creative finesse with advanced software like Lightroom & Photoshop.",
            },
            {
              title: "Hassle-Free Scalability",
              desc: "Scale from small portfolios to large property datasets with ease.",
            },
            {
              title: "100% Client Satisfaction",
              desc: "We align every enhancement with your brand identity and buyer appeal.",
            },
            {
              title: "Quick Turnaround",
              desc: "Standard turnaround time of 24–48 hours for real estate projects.",
            },
            {
              title: "Cost-Effective Solutions",
              desc: "Save up to 60% by eliminating in-house resource costs.",
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

      {/* Success Stories */}
      <section className="bg-gray-50 py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Customer Success Stories
        </h2>
        <div className="space-y-8">
          {[
            {
              title: "Case Study: Image Clipping for NZ Bike Designers",
              desc: "We delivered 5 high-quality images per day with a single dedicated resource.",
            },
            {
              title: "Case Study: Portrait Restoration for South Korean Client",
              desc: "Handled 1400 finished images per week, delivering immense satisfaction.",
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
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
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
          Nimble Real Estate Image Enhancement Services
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-6 text-gray-600">
          From crisp colors to captivating compositions, we transform your
          listings into visual magnets. Focus on selling while we enhance your
          property images with speed, precision, and creativity.
        </p>
        <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-800">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default RealEstateEnhancement;
