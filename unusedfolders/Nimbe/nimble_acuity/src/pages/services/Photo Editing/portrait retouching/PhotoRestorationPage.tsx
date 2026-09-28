import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Image as ImageIcon, Clock, ShieldCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";
import PEMainMenu from "../PEmainmenu";

const services = [
  "Damaged Photo Recovery",
  "Restoring Custom Borders",
  "Old Photo Enhancement",
  "Repairing Album Glue Damage",
  "Photo Stain Removal",
  "Restoring Faded Photos",
  "Removing Discolorations",
  "Recreating Missing Parts",
  "Repairing Cracks, Rips, Creases",
  "Remove Spotting or Moulds",
  "Blemish Removing",
  "Photo Manipulation",
  "Black and White to Color Conversion",
];

const reasons = [
  { icon: <ShieldCheck className="w-6 h-6 text-green-600" />, text: "ISO standard quality procedures" },
  { icon: <ImageIcon className="w-6 h-6 text-blue-600" />, text: "Cutting-edge photo editing tools" },
  { icon: <CheckCircle className="w-6 h-6 text-purple-600" />, text: "Skilled editors from premier institutes" },
  { icon: <Clock className="w-6 h-6 text-orange-600" />, text: "Quick turnaround times" },
  { icon: <Globe className="w-6 h-6 text-pink-600" />, text: "Multiple delivery centers worldwide" },
];

export default function PhotoRestorationPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Nimble Antique Photo Restoration Services
        </motion.h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Bring your precious memories back to life with our expert photo restoration services. From faded prints to severely damaged images, we restore them to their original glory.
        </p>
        <Button size="lg" className="rounded-2xl shadow-lg">Start Free Trial</Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Antique Photo Restoration Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <p className="font-medium">{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Digital Photo Restoration Process</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Scanning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We use advanced scanning software like Silverfast and Vuescan, ensuring the highest bit-depth and RAW/TIFF formats for perfect results.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Fading Restore</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We restore lost contrast using advanced tools, bringing back the richness of blacks and whites in your photos.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Color Cast Removal</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Yellowing photos are carefully corrected using white balance tools, tailored to the photo’s natural tone.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Localized Damage Removal</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Scratches, rips, and stains are meticulously fixed using clone and healing tools while keeping the photo authentic.</p>
            </CardContent>
          </Card>
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

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Old Photos Restored Today!</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join thousands of happy clients who trusted Nimble Acuity to restore their antique photos. Save time, cost, and memories with our expert team.
        </p>
        <Button size="lg" variant="secondary" className="rounded-2xl shadow-lg">Contact Us</Button>
      </section>
    </div>
  );
}
