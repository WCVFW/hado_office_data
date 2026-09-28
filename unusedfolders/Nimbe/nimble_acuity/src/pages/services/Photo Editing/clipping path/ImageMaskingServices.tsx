import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PEMainMenu from "../PEmainmenu";

const ImageMaskingServices: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Professional Image Masking Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Improve your images with advanced layering and alpha channel
          techniques designed to handle intricate details and textures in
          high-resolution projects.
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          Get a Free Consultation
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Transform Your Photos with Precision Masking
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Layer Masking",
              desc: "Non-destructive editing with pixel-level control, opacity adjustments, and seamless integration.",
            },
            {
              title: "Alpha Masking",
              desc: "Channel-based masking for transparency, preserving high details and ensuring compatibility.",
            },
            {
              title: "Fur & Hair Masking",
              desc: "High-precision masking with edge detection algorithms for natural appearance and detail retention.",
            },
            {
              title: "Refine Edge Masking",
              desc: "Smooth transitions with feathering, edge refinement, and smart radius adjustments.",
            },
            {
              title: "Object Masking",
              desc: "Precise isolation of distinct objects with support for hard/soft edges and multiple applications.",
            },
            {
              title: "Color Masking",
              desc: "Selective color adjustments using HSL, color range masking, and non-linear enhancements.",
            },
            {
              title: "Photoshop Collage Masking",
              desc: "Composite creation with layer masks for creative, artistic, and commercial projects.",
            },
            {
              title: "Background Replacement",
              desc: "Professional background replacement for product, portrait, and creative image requirements.",
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

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Image Masking Services?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Absolute Precision",
              desc: "Advanced techniques capture intricate details like fine hair and fragile edges.",
            },
            {
              title: "Non-Destructive Editing",
              desc: "Flexible editing that preserves original image quality.",
            },
            {
              title: "Advanced Software",
              desc: "We use Adobe Photoshop & Illustrator for flawless outcomes.",
            },
            {
              title: "Fast Delivery",
              desc: "Streamlined workflows ensure quick turnaround for large volumes.",
            },
            {
              title: "Consistent Quality",
              desc: "Uniform results across all images, ensuring professional visual identity.",
            },
            {
              title: "Cost-Effective",
              desc: "Flexible pricing models that balance quality and affordability.",
            },
            {
              title: "Excellent Support",
              desc: "Dedicated support team for clear, timely communication.",
            },
            {
              title: "Experienced Team",
              desc: "Highly skilled editors with years of expertise in complex masking.",
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

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="space-y-8">
          {[
            {
              title:
                "Netherlands Photographer Meets Tight Deadline with Hair Masking",
              desc: "Delivered 700 images in 2 days with precise hair masking and background changes.",
            },
            {
              title:
                "Minneapolis Photographer Saves Time & Costs with Image Masking",
              desc: "Handled 1000 images over 2 months with weekly delivery of 70-80 high-quality masked photos.",
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

      {/* Additional Services */}
      <section className="bg-gray-50 py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Clipping Path Services",
            "Advanced Photoshop Services",
            "Image Enhancement",
            "Photo Manipulation",
            "Portrait Retouching",
            "Photo Cutout Services",
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

      {/* Testimonials */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <p className="max-w-3xl mx-auto italic text-lg">
          "I am so amazed that you were able to do such quality work so quickly.
          The image came out perfect, and you got it to me well before my
          deadline!"
        </p>
        <p className="mt-4 font-semibold">— Business Owner, USA</p>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Image Masking Services to Us
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-6 text-gray-600">
          Enhance your visual content with precision masking, scalability, and
          professional expertise. From eCommerce to creative campaigns, we help
          your brand shine with flawless images.
        </p>
        <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default ImageMaskingServices;
