import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ShieldCheck, Lock, DollarSign, Zap } from "lucide-react";
import { motion } from "framer-motion";
import PEMainMenu from "../PEmainmenu";

const services = [
  "Photo Color Correction",
  "Photo Correction (Background Removal, Clipping Path, Image Masking)",
  "Photo Collage Creation",
  "Brightness & Contrast Enhancement",
  "eCommerce Image Editing",
  "Antique Photo Restoration",
];

const process = [
  "Requirement Discovery",
  "Analysis and Format Conversion",
  "Selection of Image Manipulation Experts",
  "Selection of Editing Tools",
  "Device Customization",
  "Quality Control of Edited Files",
  "Project Closure",
];

const improvements = [
  "Add/Remove/Replace objects or people",
  "Crop/Enlarge images",
  "Convert to sketches/paintings",
  "Remove spots, wrinkles, jagged edges",
  "Add watermarks",
];

const industries = [
  "Online Apparels Shopping",
  "Online Electronic Store",
  "Online Automobile Store",
  "Online Sports Accessories",
  "Publishing Houses",
  "Portrait Studios",
  "Real Estate Companies",
];

const reasons = [
  { icon: <ShieldCheck className="w-6 h-6 text-green-600" />, text: "ISO-Certified Quality" },
  { icon: <Lock className="w-6 h-6 text-blue-600" />, text: "100% Data Security (NDA Protected)" },
  { icon: <CheckCircle className="w-6 h-6 text-purple-600" />, text: "Zero Imperfections with SLA Compliance" },
  { icon: <DollarSign className="w-6 h-6 text-orange-600" />, text: "Cost-effective Pricing" },
  { icon: <Zap className="w-6 h-6 text-pink-600" />, text: "Scalable and Flexible Service" },
];

const extraServices = [
  "Image Enhancement Services",
  "Real Estate Image Post Processing",
  "Wedding Photo Editing Services",
  "Clipping Path Services",
  "Portrait Services",
  "Adobe Photoshop Services",
  "Panorama Photo Stitching Services",
  "Photo Retouching Services",
];

export default function PhotoManipulationPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-pink-600 to-red-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Nimble Photo Manipulation Services
        </motion.h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Boost brand awareness, increase sales, and elevate your visuals with professional photo manipulation services.
        </p>
        <Button size="lg" className="rounded-2xl shadow-lg">Request Free Trial</Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Image Manipulation Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <CardContent className="p-6 text-center font-medium">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Photo Manipulation Process</h2>
        <ol className="max-w-4xl mx-auto space-y-6">
          {process.map((step, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <span className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {idx + 1}
              </span>
              <p className="font-medium">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Improvements */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">How Can Image Manipulation Improve Your Images?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {improvements.map((item, idx) => (
            <Card key={idx} className="p-6 rounded-2xl text-center shadow hover:shadow-md">
              <p className="font-medium">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Industries We Cater To</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {industries.map((industry, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg p-6">
              <p className="font-medium">{industry}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nimble Acuity?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white shadow rounded-2xl p-6 hover:shadow-md transition">
              {reason.icon}
              <p className="font-medium">{reason.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Services */}
      <section className="bg-gray-50 py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Additional Photo Editing Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {extraServices.map((service, idx) => (
            <Card key={idx} className="p-6 rounded-2xl shadow-md hover:shadow-lg text-center">
              <p className="font-medium">{service}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nimble Your Photo Manipulation Today!</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Enhance your images, boost engagement, and increase sales with our expert team. Contact us today for a free trial and quote.
        </p>
        <Button size="lg" variant="secondary" className="rounded-2xl shadow-lg">Contact Us</Button>
      </section>
    </div>
  );
}
