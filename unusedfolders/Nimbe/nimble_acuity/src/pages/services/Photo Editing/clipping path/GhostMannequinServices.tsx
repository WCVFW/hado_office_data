import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PEMainMenu from "../PEmainmenu";

const GhostMannequinServices: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Ghost Mannequin Service
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Streamline your ghost mannequin process, minimize support staff, and
          maximize the efficiency of your digital studio with our expert ghost
          mannequin services.
        </p>
        <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
          Get a Free Quote
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Professional Ghost Mannequin Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Ghost Mannequin Image Editing",
              desc: "Transform raw apparel images into polished, web-ready photos.",
            },
            {
              title: "Shadow Effect",
              desc: "Remove mannequin traces while adding realistic shadows to create a 3D look.",
            },
            {
              title: "Color Correction",
              desc: "Perfect color balance while keeping apparel details intact.",
            },
            {
              title: "360° Packshot / 3D Effect",
              desc: "Add interactive 360-degree effects for eCommerce and marketing.",
            },
            {
              title: "Neck Joint",
              desc: "Rebuild necklines seamlessly for shirts, jackets, and more.",
            },
            {
              title: "Bottom & Sleeves Joint",
              desc: "Create a natural ghost mannequin effect by adding bottom and sleeve joints.",
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

      {/* Industries Served */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Clients We Serve
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Online Apparel Stores",
            "Fashion Brands",
            "eCommerce Businesses",
            "Photography Agencies",
            "Portrait Studios",
            "Publishing Houses",
            "Real Estate Owners",
            "Sports Stores",
          ].map((client, idx) => (
            <div
              key={idx}
              className="bg-white p-6 shadow rounded-xl text-gray-700 font-medium"
            >
              {client}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Ghost Mannequin Services?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "GDPR & ISO Certified",
              desc: "We prioritize data security and confidentiality at every stage.",
            },
            {
              title: "High Quality",
              desc: "Professional editors ensure web-ready apparel photos of top quality.",
            },
            {
              title: "Scalability",
              desc: "Scale quickly with our global delivery centers and expert teams.",
            },
            {
              title: "24/7 Availability",
              desc: "Round-the-clock customer support for seamless project execution.",
            },
            {
              title: "Experienced Team",
              desc: "200+ skilled image editors with 23+ years of experience.",
            },
            {
              title: "Flexible Pricing",
              desc: "Cost-effective models tailored to your project requirements.",
            },
          ].map((point, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Portrait Editing Services",
            "Wedding Photo Editing",
            "Jewelry Image Editing",
            "Real Estate Image Editing",
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white shadow p-6 rounded-xl text-center font-medium"
            >
              {service}
            </div>
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
              title: "0.3 Km Long Photo Stitching Project",
              desc: "We successfully stitched 300+ images into a single panoramic output for a client.",
            },
            {
              title: "Image Enhancement for UK Photo Studio",
              desc: "Helped a UK-based studio clear backlog with high-quality image editing.",
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
      <section className="bg-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <p className="max-w-3xl mx-auto italic text-lg">
          "I am so amazed that you were able to do such quality work so quickly.
          The image came out perfect, and you got it to me well before my
          deadline!"
        </p>
        <p className="mt-4 font-semibold">— Business Owner, USA</p>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Ghost Mannequin Services to Us
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-6 text-gray-600">
          Deliver well-edited apparel images without the hassle of in-house
          editing. Save time, cut costs, and scale seamlessly with our expert
          ghost mannequin services.
        </p>
        <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default GhostMannequinServices;
