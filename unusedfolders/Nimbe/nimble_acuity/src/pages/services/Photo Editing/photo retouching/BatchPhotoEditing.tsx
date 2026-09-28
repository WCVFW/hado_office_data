
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import PEMainMenu from "../PEmainmenu";

const services = [
  {
    title: "Image Resizing & Cropping",
    description:
      "We meticulously adjust each image dimension to match your unique specifications using Adobe Photoshop. From conventional resizing to custom aspect ratios, your visuals will always fit perfectly.",
  },
  {
    title: "Image Shadow Optimization",
    description:
      "Enhance realism with cast shadow refinement, reflection shadows, and ambient occlusion simulation for life-like results.",
  },
  {
    title: "Background Removal Services",
    description:
      "Using Pen Tool, Magic Wand, and advanced clipping path techniques, we deliver clean and consistent backgrounds across bulk images.",
  },
  {
    title: "Lightroom Batch Editing",
    description:
      "We leverage Lightroom’s automation to apply exposure, contrast, saturation, and tone curve adjustments seamlessly across multiple photos.",
  },
  {
    title: "Real Estate Image Editing",
    description:
      "Batch sky replacement and virtual staging help create uniform and engaging property visuals that captivate potential buyers.",
  },
  {
    title: "Wedding Image Editing",
    description:
      "We harmonize tones across wedding collections, ensuring a natural flow of visuals while perfecting intricate details in Photoshop.",
  },
  {
    title: "Fashion Image Editing",
    description:
      "Precise retouching of fabrics, accessories, and colors to maintain a cohesive style and elevate your brand’s fashion identity.",
  },
  {
    title: "Jewelry Image Editing",
    description:
      "Highlight every detail with blemish removal, engraving enhancement, and Lightroom batch workflows for stunning jewelry visuals.",
  },
  {
    title: "Clipping Path Services",
    description:
      "Isolating complex subjects with precision, even for transparent or intricate elements, ensuring professional-level consistency.",
  },
];

const benefits = [
  "22+ years of industry expertise",
  "ISO-certified stringent quality control",
  "GDPR compliant with strict data security",
  "24-hour turnaround & same-day delivery",
  "99% accuracy rate with advanced automation",
  "Global delivery centers with round-the-clock availability",
];

const BatchPhotoEditing: React.FC = () => {
  return (
    <div className="px-6 lg:px-16 py-12 space-y-16">
      {/* Hero Section */}
      <PEMainMenu/>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4">
          Nimble <span className="text-blue-600">Batch Photo Editing</span> Services
        </h1>
        <p className="text-lg text-gray-600">
          Harness AI-powered automation, Lightroom presets, and Photoshop workflows
          to deliver consistently edited visuals at scale—without compromising quality.
        </p>
        <div className="mt-6">
          <Button size="lg" className="rounded-2xl px-8 py-4 text-lg shadow-md">
            Request a Free Quote
          </Button>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card className="shadow-lg rounded-2xl h-full hover:shadow-xl transition">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-50 rounded-2xl p-10 shadow-inner"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Why Choose Us as Your Batch Editing Partner?
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map((point, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <CheckCircle2 className="text-green-500 mt-1" />
              <span className="text-gray-700 text-sm">{point}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold">What Our Clients Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          “Thank you for the excellent work you have done for me. The quality was
          very high, the price excellent, and the turnaround time very fast.
          10/10.”
        </p>
        <span className="block font-semibold">Professional Photographer, Australia</span>
      </div>
    </div>
  );
};

export default BatchPhotoEditing;

