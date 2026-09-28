import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PEMainMenu from "../PEmainmenu";

const MatterportServicesPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Navigation */}
      <PEMainMenu />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Matterport Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Navigate the challenges of real estate's visual demands with our
          all-encompassing Matterport services. Gain flexibility, scalability,
          and specialized expertise for exceptional results.
        </p>
        <Button className="mt-6 bg-white text-indigo-700 hover:bg-gray-100">
          Get Started Today
        </Button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Redefining Property Visualization
        </h2>
        <p className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
          At Nimble Acuity, we harness Matterport's advanced technology to create deeply
          engaging 3D 360° virtual tours that make your properties stand out.
          From Google Maps integration, e-commerce, and tagging to 2D photos,
          our services enhance the value of your virtual tours while reducing
          customer decision-making time.
        </p>
      </section>

      {/* Solutions We Offer */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Solutions We Offer as a Matterport Service Provider
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Virtual Tour Creation",
            "3D Modeling & Rendering",
            "Floor Plan Generation",
            "Matterport Virtual Staging",
            "Matterport for Architects",
            "Annotation & Tagging",
            "Architecture & Design",
            "Construction Documentation",
            "Event Venues",
            "Hospitality Industry",
          ].map((service, i) => (
            <Card key={i} className="shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive solutions designed to elevate virtual
                  experiences, tailored to your industry needs.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industries We Cater To */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Industries We Cater To
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {[
            "Real Estate",
            "Commercial",
            "Architecture & Construction",
            "Retail & E-commerce",
            "Travel",
            "Hospitals",
            "Insurance",
            "Property Management",
          ].map((industry, i) => (
            <div
              key={i}
              className="p-5 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
            >
              <h3 className="font-medium">{industry}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Us as Your Matterport Service Company?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Immersive Virtual Experience",
            "VR Compatibility",
            "Accurate Representation",
            "On-time Delivery",
            "Expertise & Quality",
            "Scalable Solutions",
            "Data Security (GDPR & ISO 9001:2015)",
            "Flexible Pricing",
          ].map((reason, i) => (
            <div
              key={i}
              className="p-5 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
            >
              <h3 className="font-medium">{reason}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Additional Services You Can Benefit From
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 list-disc list-inside text-gray-700">
          <li>Real Estate Image Processing Services</li>
          <li>Image Enhancement Services</li>
          <li>Clipping Path Services</li>
          <li>Panorama Image Stitching Services</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Panorama Stitching for US Client
              </h3>
              <p className="text-gray-600 text-sm">
                Delivered quick, cost-effective panorama stitching services to a
                Portland-based real estate client.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Image Editing & Video Creation
              </h3>
              <p className="text-gray-600 text-sm">
                Provided high-quality image editing and video creation services
                to a global leader in 3D real space visualization at affordable
                cost.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-center max-w-3xl mx-auto">
        <blockquote className="italic text-gray-700">
          "I am so amazed that you were able to do such quality work so quickly.
          The image came out perfect, and you got it to me well before my
          deadline!"
        </blockquote>
        <p className="mt-4 font-medium">– Graphic Designer, Canada</p>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Nimble Matterport Services to Us
        </h2>
        <p className="max-w-3xl mx-auto">
          Embrace the future of property visualization with Nimble Acuity’s Matterport
          services. Boost efficiency, reduce costs, and deliver immersive
          experiences that captivate clients.
        </p>
        <Button className="mt-6 bg-white text-indigo-700 hover:bg-gray-200">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default MatterportServicesPage;
