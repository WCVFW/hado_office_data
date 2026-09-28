import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Sparkles, Camera, Users, Shield } from "lucide-react";
import PEMainMenu from "../PEmainmenu";

export default function HeadshotRetouchingPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Headshot Retouching Services
        </h1>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Leverage our professional headshot retouching services at unbeatable rates. Experience expert results delivered within 24 hours.
        </p>
        <Button size="lg" className="rounded-2xl bg-white text-indigo-600 font-semibold">
          Get Started Today
        </Button>
      </section>

      {/* Why Nimble Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Why Nimble?</h2>
          <p className="mb-4">
            Headshot retouching is time-consuming and demands advanced tools. Our experts deliver precise, efficient, and cost-effective solutions—saving you time, manpower, and resources.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center"><CheckCircle className="text-indigo-600 mr-2" /> Reduce costs</li>
            <li className="flex items-center"><CheckCircle className="text-indigo-600 mr-2" /> Fast 24-hour delivery</li>
            <li className="flex items-center"><CheckCircle className="text-indigo-600 mr-2" /> Consistent high quality</li>
          </ul>
        </div>
        <div className="bg-gray-100 rounded-2xl p-6 flex items-center justify-center shadow">
          <Sparkles className="text-indigo-600 w-20 h-20" />
        </div>
      </section>

      {/* Solutions We Offer */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Headshot Retouching Solutions</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Skin Smoothing & Toning","Teeth Whitening & Eye Correction","Basic Touch Ups","Blemish & Scar Removal","Braces Removal","Glass Glare Removal"].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-sm text-gray-600">Professional editing techniques to enhance overall portrait quality with precision.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Retouching Categories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {["Basic Headshot Retouching","Advanced Headshot Retouching","Theatrical Headshot Retouching","Business & Corporate Headshot Retouching"].map((cat, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cat}</h3>
                <p className="text-sm text-gray-600">Before / After slider integration placeholder for {cat}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Industries We Cater To</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          {["E-commerce Businesses","Photographic Studios","Publishing & Newspapers","Online Retailers"].map((ind, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
              <Users className="mx-auto mb-2 text-indigo-600" />
              <p className="font-medium">{ind}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Tech */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Technologies We Leverage</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["Adobe Photoshop","Adobe Lightroom","Canva","GIMP"].map((tool, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-2xl shadow">
              <Camera className="mx-auto mb-2 text-indigo-600" />
              <p className="font-medium">{tool}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-indigo-600 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["ISO Certified Data Security","Ultramodern Infrastructure","Top-notch Quality","Short Turnaround","Experienced Team","Scalability & Flexible Pricing"].map((reason, i) => (
            <Card key={i} className="bg-white text-gray-800 rounded-2xl shadow-md">
              <CardContent className="p-6">
                <Shield className="text-indigo-600 mb-3" />
                <h3 className="font-semibold">{reason}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Image Clipping for Deutsche Client</h3>
              <p className="text-sm text-gray-600">Delivered 700 images within 24 hours by two expert editors.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Portrait Restoration for South Korean Client</h3>
              <p className="text-sm text-gray-600">1400 images delivered per week with exceptional quality.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <Star className="mx-auto text-indigo-600 w-10 h-10 mb-4" />
        <blockquote className="max-w-2xl mx-auto text-lg italic">
          "Outstanding job, in record time, and it was so easy! The retouching was excellent. Final files were delivered within 12 hours."
        </blockquote>
        <p className="mt-4 font-medium">Director of Operations, Insurance Company (Canada)</p>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Nimble Headshot Retouching Services to Us</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Streamline your workflow, save resources, and get stunning headshots that impress. Flexible pricing and rapid turnaround guaranteed.
        </p>
        <Button size="lg" className="rounded-2xl bg-white text-indigo-600 font-semibold">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
