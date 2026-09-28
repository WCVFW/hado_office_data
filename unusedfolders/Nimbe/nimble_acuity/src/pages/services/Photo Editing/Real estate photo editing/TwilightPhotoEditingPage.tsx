import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PEMainMenu from "../PEmainmenu";

const TwilightPhotoEditingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Twilight Photo Editing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Elevate Listings, Amplify Conversions! Gain immediate access to
          market-ready images that streamline client engagement, boost
          inquiries, and fuel rapid conversions.
        </p>
        <Button className="mt-6 bg-white text-purple-700 hover:bg-gray-100">
          Get Started Today
        </Button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Twilight Editing That Transforms Properties
        </h2>
        <p className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
          Raw property photos often lack the charm to attract buyers. Our
          twilight photo editing services enhance your visuals with precise
          lighting, sky replacements, shadow casting, and detailed corrections —
          helping your listings shine in a competitive market.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Twilight Photo Editing Solutions We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "HDR Processing",
            "Shadow Casting",
            "Sky Replacement",
            "Eliminating Imperfections",
            "Dusk Sky Background",
            "Brightness & Contrast Adjustment",
            "Interiors & Soothing Exteriors",
            "Dust Spot & Flash Reflection Removal",
            "Real Estate HDR Blending",
            "Perspective Correction",
          ].map((service, i) => (
            <Card key={i} className="shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">
                  Professional twilight enhancement ensuring properties look
                  flawless, captivating, and market-ready.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Industry Specialists",
            "Tailored Excellence",
            "Technical Know-How",
            "Efficient Turnaround",
            "Consistent Quality",
            "Flexible Pricing",
          ].map((point, i) => (
            <div
              key={i}
              className="p-5 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
            >
              <h3 className="font-medium">{point}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                HDR Blending & Editing for Bangladeshi Client
              </h3>
              <p className="text-gray-600 text-sm">
                Helped a digital advertising supplier with real estate HDR
                blending & portrait editing, achieving 40% cost savings.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Panorama Stitching for US Client
              </h3>
              <p className="text-gray-600 text-sm">
                Delivered high-quality panorama stitching to a Portland-based
                real estate client with quick turnaround and cost efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-center max-w-3xl mx-auto">
        <blockquote className="italic text-gray-700">
          "I got to see the photos you edited for the 'Millennium Towers'
          project and they were amazing. It's a thumbs up from me to your
          editors as the images were perfect quality-wise."
        </blockquote>
        <p className="mt-4 font-medium">
          – Managing Director, Real Estate Photography Company, USA
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Nimble Twilight Photo Editing Services to Us
        </h2>
        <p className="max-w-3xl mx-auto">
          Free yourself from time-consuming edits. Let our experts refine your
          images with precision, enhancing lighting, sky, and ambiance to
          captivate buyers and drive sales.
        </p>
        <Button className="mt-6 bg-white text-indigo-700 hover:bg-gray-200">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default TwilightPhotoEditingPage;
