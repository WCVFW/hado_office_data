import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Hammer,
  Settings,
  FileText,
  Layers,
  Package,
  ClipboardList,
  Ruler,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

const KitchenEquipmentEngineering: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Outsource Engineering Services for Kitchen Equipment Manufacturer
        </motion.h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-6">
          Streamline flow, function, and budgeting with our engineering services for kitchen equipment manufacturers.
        </p>
        <Button size="lg" variant="secondary">
          Try Our Design Support Now
        </Button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Kitchen equipment manufacturers face a multitude of challenges, from the need for precision and efficiency in design to compliance with stringent safety standards. At Nimble Auity, we provide specialized engineering services tailored to address these very challenges. Our seasoned CAD engineers understand the intricate technical aspects of the industry and offer advanced solutions, including finite element analysis, computational fluid dynamics, and materials selection, enabling us to optimize structural integrity, thermal performance, and energy efficiency.
        </p>
        <p>
          From high-temperature induction cookers to multifunctional dishwashers, our CAD services focus on delivering thermally efficient designs, advanced materials selection, and precision manufacturing specifications. We are committed to ensuring that your kitchen equipment not only meets industry standards but also excels in the face of challenging design requirements.
        </p>
        <p>
          What sets us apart is our ability to translate your visionary concepts into tangible, high-performance solutions. Our technical prowess shines through our 2D drawings and lifelike 3D models, offering you a crystal-clear blueprint for success.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Services We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[ 
            { icon: <Wrench className="h-10 w-10 text-blue-600" />, title: "Product Design", desc: "Custom kitchen equipment design focusing on usability, efficiency, and aesthetics." },
            { icon: <Hammer className="h-10 w-10 text-blue-600" />, title: "CAD Drafting", desc: "Precision CAD drafting for accurate technical drawings." },
            { icon: <Layers className="h-10 w-10 text-blue-600" />, title: "3D Modeling", desc: "Transform concepts into realistic, detailed 3D models." },
            { icon: <Settings className="h-10 w-10 text-blue-600" />, title: "Manufacturing Optimization", desc: "Enhance workflows, reduce waste, and improve efficiency." },
            { icon: <FileText className="h-10 w-10 text-blue-600" />, title: "Technical Documentation", desc: "Comprehensive documentation for operation, maintenance, and compliance." },
            { icon: <ClipboardList className="h-10 w-10 text-blue-600" />, title: "Assembly Design", desc: "Ensure seamless integration of all equipment components." },
            { icon: <Package className="h-10 w-10 text-blue-600" />, title: "Sheet Metal Design", desc: "Optimized sheet metal designs for durability and cost-efficiency." },
            { icon: <Ruler className="h-10 w-10 text-blue-600" />, title: "Design Validation", desc: "Validate performance, safety, and reliability of designs." },
            { icon: <CheckCircle className="h-10 w-10 text-blue-600" />, title: "BOM & DFM", desc: "Accurate Bills of Materials and Design for Manufacturing support." },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-lg rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[ 
            "Uncompromising Quality",
            "Confidentiality Assured",
            "26+ Years of Expertise",
            "Tailored Solutions with Advanced Tools",
            "Futuristic Global Designs",
            "Maximized Value for Investment"
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <ShieldCheck className="h-8 w-8 text-green-600 flex-shrink-0" />
              <p className="text-gray-700 text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="italic text-lg max-w-3xl mx-auto mb-4">
          “Nimble Auity has been a tremendous resource for our engineering department. They are very precise, attentive, and learned our procedures quicker than I ever thought possible.”
        </blockquote>
        <p className="font-semibold">— General Partner, Manufacturing Company in US</p>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Partner with Nimble for Engineering Excellence</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Outsourcing your engineering design needs to Nimble means working with experts who foresee challenges early, minimize risks, and deliver cost-effective, future-ready kitchen equipment designs.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default KitchenEquipmentEngineering;