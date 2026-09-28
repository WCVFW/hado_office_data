import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Shield, Clock, Camera, Layers } from "lucide-react";
import PEMainMenu from "../PEmainmenu";

export default function LightroomEditingPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-indigo-50 to-blue-100 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Lightroom Editing Services
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Simplify editing complexities with our tailored Lightroom photo editing services.
          We offer expertise, scalability, and fast turnaround times for consistent, high-quality results.
        </p>
        <Button size="lg">Get Started</Button>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <p className="text-lg leading-relaxed">
          The need for expertise in utilizing Adobe Lightroom is one of the main challenges
          faced by photographers and studios. To address this, we provide comprehensive
          Lightroom photo editing services, ensuring accuracy, consistency, and speed while
          letting you focus on your creative vision.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Lightroom Image Editing Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Exposure and Tone Adjustments",
            "Color Correction and Enhancement",
            "Noise Reduction",
            "Sharpening and Clarity",
            "Lens Correction",
            "Cropping and Composition",
            "Retouching and Spot Removal",
            "Portrait Enhancements",
            "Black and White Conversion",
          ].map((service, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {service}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Professional Lightroom-based {service.toLowerCase()} to elevate
                  your photos with accuracy and efficiency.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["E-commerce", "Real Estate", "Fashion", "Travel", "Automobile", "Cinema"].map(
            (industry, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-xl shadow-sm font-medium"
              >
                {industry}
              </div>
            )
          )}
        </div>
      </section>

      {/* We Work Best With */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">We Work Best With</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {["Photography Studios", "Wedding Planners", "Marketing Agencies", "Stock Photo Agencies", "Influencers", "Fashion Studios"].map(
            (client, idx) => (
              <div
                key={idx}
                className="p-6 border rounded-xl shadow-sm bg-gray-50 font-medium"
              >
                {client}
              </div>
            )
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-indigo-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us as Your Lightroom Editing Partner?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Adobe Lightroom Specialists", icon: Camera },
            { title: "GDPR & ISO Compliance", icon: Shield },
            { title: "Scalability", icon: Layers },
            { title: "Data Security", icon: Shield },
            { title: "Short Turnaround Time", icon: Clock },
            { title: "High-Quality Deliverables", icon: Star },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <item.icon className="h-6 w-6 text-indigo-600 mb-2" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We ensure professional Lightroom services with strict standards,
                  secure workflows, and exceptional results.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Additional Photo Editing Services We Offer
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {["eCommerce Editing", "Real Estate Editing", "Jewelry Editing", "Wedding Editing"].map(
            (srv, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-xl shadow font-medium">
                {srv}
              </div>
            )
          )}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>
                Global Leader in 3D Real Space Visualizing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We supported a 3D visualization leader with image editing & video
                creation using Lightroom & Photoshop.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Photo Studio in the U.K.</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Delivered 200–400 high-quality images weekly with tailored image
                enhancement & Lightroom editing services.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <blockquote className="text-xl italic mb-4">
          “I am so amazed that you were able to do such quality work so quickly.
          The image came out perfect, and you got it to me well before my deadline!”
        </blockquote>
        <p className="font-semibold">— Graphic Designer, Canada</p>
      </section>

      {/* CTA Footer */}
      <section className="bg-indigo-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Simplify Your Lightroom Editing?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Nimble Lightroom photo editing services to us for expert solutions,
          high-quality results, and on-time delivery.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us
        </Button>
      </section>
    </div>
  );
}