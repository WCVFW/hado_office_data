import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PEMainMenu from "../PEmainmenu";

const SportsPhotoEditing: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <PEMainMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Nimble Sports Photo Editing Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Access on-demand scalability and fast-track bulk orders with our
          domain specialists. Choose our sports photo editing services for
          precision and efficiency in image editing.
        </p>
      </section>

      {/* Challenges */}
      <Card className="shadow-lg rounded-2xl">
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Why Sports Photo Editing Matters
          </h2>
          <p className="text-gray-600">
            Sports photographers and studios face challenges like sudden spikes
            in workload, tight deadlines, lack of expertise, and inconsistent
            quality. We address these with skilled resources, efficient
            processes, and quick turnaround times.
          </p>
        </CardContent>
      </Card>

      {/* Services Grid */}
      <section className="grid md:grid-cols-2 gap-6">
        {[
          "Background Removal",
          "HDR Image Processing",
          "Panorama Stitching",
          "Color Enhancement & Adjustment",
          "Image Masking",
          "Clipping Path",
          "Shadow Creation",
          "Image Enhancement",
          "Photo Background Editing",
        ].map((service, idx) => (
          <Card
            key={idx}
            className="hover:shadow-xl transition rounded-2xl bg-white"
          >
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {service} Service
              </h3>
              <p className="text-sm text-gray-600">
                Professional editing to enhance sports photos with precision and
                consistency.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Tools */}
      <Card className="shadow-md rounded-2xl">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">Tools We Use</h2>
          <p className="text-gray-600">
            Our team leverages industry-leading tools like{" "}
            <span className="font-medium">Adobe Photoshop</span> and{" "}
            <span className="font-medium">Lightroom CC</span> for professional
            sports photo editing.
          </p>
        </CardContent>
      </Card>

      {/* Why Choose Us */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Why Choose Us?
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-600">
          <li>Scalability on Demand</li>
          <li>High-Quality Outputs</li>
          <li>Fast Turnaround Times</li>
          <li>Domain Specialists</li>
          <li>GDPR & ISO 9001:2015 Compliance</li>
          <li>Comprehensive Data Security</li>
          <li>Customized Pricing Options</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Portrait Photo Editing",
            "Wedding Photo Editing",
            "Jewelry Image Editing",
            "Real Estate Image Editing",
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">{service}</h3>
                <p className="text-sm text-gray-600">
                  Professional editing to enhance quality and maximize visual
                  impact.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <Card className="shadow-md rounded-2xl">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">Customer Success Stories</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Delivered image editing services to a Swedish sports and outdoor
              photography company, reducing costs and improving quality.
            </li>
            <li>
              Precision cropping services for a leading UK-based sports brand
              activation company with quick turnaround.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Testimonials */}
      <Card className="bg-gray-50 rounded-2xl shadow-inner">
        <CardContent className="text-center space-y-4">
          <blockquote className="text-lg italic text-gray-700">
            “Thank you for the excellent work you have done for me. The quality
            was very high, the price excellent, and the turnaround time was very
            fast. 10/10”
          </blockquote>
          <p className="font-medium text-gray-800">
            – Professional Photographer, Australia
          </p>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Nimble Sports Photo Editing Services to Us
        </h2>
        <p className="text-gray-600">
          Manage high-volume requirements effortlessly with our scalable,
          high-quality sports photo editing solutions.
        </p>
        <Button className="px-6 py-3 text-lg rounded-xl">
          Contact Us Today
        </Button>
      </div>
    </div>
  );
};

export default SportsPhotoEditing;
