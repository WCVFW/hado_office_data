import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PEMainMenu from "../PEmainmenu";

const BackgroundRemoval: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Nimble Background Removal Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Transform the background of your images and let the images speak for
          your brand. Choose our background removal services and bring out the
          best in your images.
        </p>
      </section>

      {/* Why Background Removal */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Background Removal Matters</h2>
        <p>
          An estimated 50% of consumers place more importance on images than
          product descriptions or reviews when shopping. Clean and clutter-free
          images persuade buyers and help your brand stand out. Our expert
          background removal services ensure professional, aesthetic, and
          high-quality visuals for your business.
        </p>
      </section>

      {/* Solutions */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Background Removal Solutions We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Photo Background Removal Services",
              desc: "Isolate subjects and keep backgrounds clean with custom or neutral backgrounds for impact.",
            },
            {
              title: "Image Background Removal Service",
              desc: "Modify distracting backgrounds to highlight your subject effectively.",
            },
            {
              title: "Product Background Removal Services",
              desc: "Neutral backgrounds for ecommerce products to boost customer confidence.",
            },
            {
              title: "Photoshop Background Removal Services",
              desc: "Precise background removal using Adobe Photoshop without quality loss.",
            },
            {
              title: "Removing Objects and People",
              desc: "Eliminate distractions to ensure your subject remains in focus.",
            },
            {
              title: "Changing the Background Color",
              desc: "Apply custom or recommended colors to elevate aesthetics.",
            },
            {
              title: "Bulk Background Removal Service",
              desc: "Equipped to handle high-volume image edits with quick delivery times.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Nimble Background Removal Services to Us?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Experienced team with 5+ years in photo editing and 5M+ images annually.</li>
          <li>Fast turnaround time of 24–48 hours via global delivery centers.</li>
          <li>ISO-certified with 98%+ accuracy from our QA team.</li>
          <li>Advanced tools: Adobe Photoshop CS6, CC, and Lightroom.</li>
          <li>Secure file transfers via VPN and FTP with full backups.</li>
          <li>Affordable pricing with custom solutions.</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Additional Services You Can Benefit From</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Image Enhancement Services","Real Estate Image Post Processing","Wedding Photo Editing Services","Photo Manipulation Services","Clipping Path Services","Portrait Services","Adobe Photoshop Services","Panorama Photo Stitching Services"].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-sm">
              <CardContent className="p-4 text-center font-medium">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <blockquote className="italic text-gray-700 max-w-2xl mx-auto">
          "Thank you for the excellent work you have done for me. The quality was
          very high, the price excellent and the turnaround time was very fast.
          10/10."
        </blockquote>
        <p className="font-medium">— Professional Photographer, Australia</p>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Choose Us As Your Background Removal Service Provider</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Get in touch with us now for expert solutions that transform your
          images, enhance your brand, and meet your unique needs.
        </p>
        <Button className="rounded-2xl px-6 py-3 text-lg">Contact Us</Button>
      </section>
    </div>
  );
};

export default BackgroundRemoval;
