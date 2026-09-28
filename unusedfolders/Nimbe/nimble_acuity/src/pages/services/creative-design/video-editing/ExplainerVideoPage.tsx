
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CSmainmenu from "../CSmainmenu";

export default function ExplainerVideoPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Outsource Explainer Video Creation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Build a strong niche reputation for your product with captivating explainer videos. Convey your product’s value clearly in just 1–2 minutes with accessible visuals and storytelling.
        </p>
        <Button className="mt-6 bg-white text-purple-600 hover:bg-gray-100">
          Get a Free Quote
        </Button>
      </section>

      {/* Process Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          The Explainer Video Creation Process
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[ 
            {
              step: "01",
              title: "Basic Research & Script",
              desc: "We develop the script based on your product, customers, and goals."
            },
            {
              step: "02",
              title: "Storyboard Creation",
              desc: "A visual storyboard is created to map each action and movement."
            },
            {
              step: "03",
              title: "Voiceover Recording",
              desc: "Professional voiceover artists narrate the script based on the storyboard."
            },
            {
              step: "04",
              title: "Animation",
              desc: "Our creative team animates the video, bringing your concept to life."
            },
            {
              step: "05",
              title: "Final Production",
              desc: "The video undergoes multiple reviews, quality checks, and final edits."
            }
          ].map((item, index) => (
            <Card key={index} className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-extrabold text-purple-600 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gray-50 w-full">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tools We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["Autodesk Maya", "After Effects", "Photoshop", "Illustrator", "3ds Max", "Anime Studio", "Anim8or", "Draw Plus"].map((tool, index) => (
              <Card key={index} className="rounded-2xl shadow-sm">
                <CardContent className="p-4 font-medium text-gray-700">{tool}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Explainer Video Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[ 
            {
              title: "Expert Creative Team",
              desc: "Skilled in scriptwriting, storyboarding, and animation to deliver engaging videos."
            },
            {
              title: "Cost-efficient & Fast Turnaround",
              desc: "Affordable solutions without compromising quality, delivered on time."
            },
            {
              title: "Superior Quality Standards",
              desc: "Strict ISO quality standards and multiple QA checks ensure premium results."
            },
            {
              title: "Data Security",
              desc: "Secure infrastructure with VPN/FTP protocols and backup systems for confidentiality."
            }
          ].map((item, index) => (
            <Card key={index} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 w-full text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Create Engaging Explainer Videos?
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Let our expert team help you convey your brand’s story with clarity and creativity.
        </p>
        <Button className="bg-white text-purple-600 hover:bg-gray-100">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}