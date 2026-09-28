import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Camera, Users, Image as ImageIcon, Star } from "lucide-react";
import PEMainMenu from "../PEmainmenu";

export default function SchoolPhotoEditing() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble School Photo Editing Services</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Efficient, cost-effective, and high-quality school photo editing! We save your time with precise cropping, masking, and halo removal. Transform your school photos with us today.
        </p>
        <Button size="lg">Get Started</Button>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold mb-4">Struggling with Post-Processing School Photos?</h2>
        <p className="text-gray-700">
          Our skilled team is here to enhance your school photos into dynamic, realistic keepsakes. From background replacement to color correction, sharpness refinement, and more – we make your memories vivid and professional.
        </p>
      </section>

      {/* Solutions Section */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Solutions We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Background Masking Service", desc: "Seamless modification or replacement of backgrounds for distraction-free school photos." },
            { title: "Basic Retouching Service", desc: "Minor imperfections removed and enhanced visual appeal for student portraits." },
            { title: "Shadow Adding Service", desc: "Adds realistic shadows for depth and dimension in school photos." },
            { title: "Camera RAW Correction", desc: "Optimize RAW photos with corrected exposure, color balance, and sharpness." },
            { title: "Focus Stacking Service", desc: "Combine multiple shots for perfect depth of field, ideal for group photos." },
            { title: "Hair Masking Service", desc: "Meticulous isolation of hair for precise retouching and background edits." },
            { title: "Color Cast Removal", desc: "Eliminate unwanted tints caused by poor lighting or environment." },
          ].map((service, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Tools We Use</h2>
        <div className="flex justify-center gap-8">
          <div className="flex flex-col items-center">
            <ImageIcon className="w-10 h-10 text-purple-600" />
            <p>Adobe Lightroom CC</p>
          </div>
          <div className="flex flex-col items-center">
            <Camera className="w-10 h-10 text-pink-600" />
            <p>Adobe Photoshop CC</p>
          </div>
        </div>
      </section>

      {/* We Work With Section */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">We Work With</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          {["Kids Photographers", "Studios", "Professional Photographers", "Freelancers"].map((item, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-6 font-medium">{item}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Specialized Expertise",
            "Consistency",
            "High Volume Handling",
            "Customization",
            "Scalability",
            "Collaboration & Communication",
            "Simplified File Submission",
            "Data Security",
            "Flexible Pricing",
          ].map((benefit, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Additional Services</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["Portrait Services", "Photoshop Services", "Clipping Path Services", "Photo Retouching Services"].map((srv, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-6 font-medium text-center">{srv}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Customer Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">UK-based Photo Studio</h3>
              <p className="text-gray-600 text-sm">Image enhancement and photo editing for 200–400 images weekly, adapting to client’s unique style.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Australian Sports Brand</h3>
              <p className="text-gray-600 text-sm">Portrait restoration services for 10,000 images delivered quickly and accurately.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <Star className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
        <blockquote className="max-w-2xl mx-auto italic text-lg">
          "The quality of Artwork delivered during the trial period was exceptional and that helped us to decide on our new Nimbled Partner."
        </blockquote>
        <p className="mt-4 font-medium">Director – Operations, Netherlands</p>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Nimble School Photo Editing Services to Us</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Focus on capturing precious moments while we refine and perfect your school photos. Let us be your editing partner today!
        </p>
        <Button size="lg">Contact Us</Button>
      </section>
    </div>
  );
}
