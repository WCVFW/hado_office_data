import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CSmainmenu from "../CSmainmenu";

const DesktopPublishing: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nimble Auity – Desktop Publishing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-6">
          Create print-ready designs with our easy-to-rescale, frame-based
          solutions! Enhance your design capabilities and slash production costs
          with our expert DTP services.
        </p>
        <Button size="lg" className="bg-white text-indigo-600 font-semibold">
          Contact Us
        </Button>
      </section>

      {/* Service Intro */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Why Choose Nimble Desktop Publishing?
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
          As the demand for well-edited, print-ready documents increases,
          challenges like consistency, software mastery, and high costs rise.
          Nimble Auity brings decades of expertise to deliver professional,
          scalable, and high-quality designs while cutting costs.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          DTP Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "InDesign Layout",
              desc: "Transform content into visually striking documents using Adobe InDesign – brochures, flyers, and magazines.",
            },
            {
              title: "Vector Creation",
              desc: "Scalable, high-quality vectors for logos, illustrations, and designs using Adobe Illustrator.",
            },
            {
              title: "Typesetting",
              desc: "Professional arrangement of text & images for readability and engagement.",
            },
            {
              title: "Document Formatting",
              desc: "Ensure compliance with academic, corporate, and research formatting standards.",
            },
            {
              title: "Large Format Print",
              desc: "Print-ready banners, posters, and billboards optimized for large-scale clarity.",
            },
            {
              title: "Content Localization",
              desc: "Adapt content to global markets with multilingual design expertise.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Process Flow
        </h2>
        <ol className="space-y-6 text-gray-700">
          <li>
            <strong>Briefing:</strong> Client shares inputs via secure server.
          </li>
          <li>
            <strong>Input:</strong> Nimble professionals review all inputs.
          </li>
          <li>
            <strong>Formatting:</strong> Formatting in Adobe InDesign, CorelDraw,
            Publisher, and MS Word.
          </li>
          <li>
            <strong>Quality Check:</strong> Specialist reviews accuracy & SLA.
          </li>
          <li>
            <strong>Edits:</strong> PDF draft shared for client feedback.
          </li>
          <li>
            <strong>Final Output:</strong> Approved files securely delivered.
          </li>
        </ol>
      </section>

      {/* Software */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Software We Use</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          Adobe InDesign, QuarkXPress, CorelDraw, MS Publisher, Adobe PageMaker,
          FrameMaker – mastered by our expert DTP team.
        </p>
      </section>

      {/* Advantages */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Sets Nimble Apart?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "ISO Certification & GDPR Compliance",
            "Expert Team of 30+ DTP professionals",
            "Flexible 24/6 Schedule & Quick Turnarounds",
            "Tailored & Cost-Efficient Solutions",
            "24/7 Customer Support",
            "Robust Data Security",
          ].map((adv, idx) => (
            <Card key={idx} className="shadow rounded-xl">
              <CardContent className="p-6">
                <p className="text-gray-700">{adv}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Customer Success Stories
        </h2>
        <div className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>
                Case Study – US Promotional Products Marketing Company
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Nimble Auity delivered cutting-edge DTP services that helped the
                client cut costs significantly, scale up, and increase
                profitability.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Clients Say</h2>
        <blockquote className="text-lg italic text-gray-700">
          “I am overwhelmed with the support & level of understanding of Nimble
          Auity’s team. Their quick turnaround time and professionalism helped
          my company reap immense profits.”
        </blockquote>
        <p className="mt-4 font-semibold text-gray-900">
          – Graphics Manager, Leading Electronics Company (South Korea)
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-600 text-white py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Elevate Your Publishing?
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Partner with Nimble Auity for superior desktop publishing services.
          From print to digital, we ensure quality, consistency, and
          cost-efficiency.
        </p>
        <Button size="lg" className="bg-white text-indigo-600 font-semibold">
          Get Started
        </Button>
      </section>
    </div>
  );
};

export default DesktopPublishing;
