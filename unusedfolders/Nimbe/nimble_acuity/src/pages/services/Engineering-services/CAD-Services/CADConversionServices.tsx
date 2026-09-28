import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ESmainmenu from "../ESmainmenu";

export default function CADConversionServices() {
  return (
    <div className="px-6 md:px-16 py-12 space-y-16 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900"
        >
          Nimble CAD Conversion Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto"
        >
          Streamline Your Design Cycle! Let us handle your CAD conversions – Precision, Speed, and Security Guaranteed.
        </motion.p>
        <Button className="px-10 py-5 text-lg rounded-full shadow-lg">
          Get Started
        </Button>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto text-gray-700 space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 text-center"
        >
          Why Choose Nimble CAD Conversions?
        </motion.h2>
        <p className="text-lg leading-relaxed">
          We prioritize precision and system compatibility, utilizing premier software such as SolidWorks and AutoCAD, along with advanced platforms like Siemens NX and Creo when required. Opting for our services means faster project turnovers, robust data security, and the flexibility to scale as per your needs.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {[
            "Swift project turnovers with accuracy",
            "Data integrity and security maintained",
            "Flexible scalability based on demand",
            "Optimized files ready for deployment",
          ].map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <CheckCircle2 className="text-green-600" size={24} />
              <span className="font-medium text-gray-800">{point}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Our CAD Conversion Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "PDF to CAD Conversion Services",
            "Scan to CAD Conversion Services",
            "3D CAD Conversion Services",
            "2D CAD Conversion Services",
            "CAD Vectorization Services",
            "CAD Digitization Services",
            "CAD Migration Services",
            "CAD to Revit Conversion Services",
            "CAD to BIM Conversion Services",
            "Image to CAD Conversion Services",
            "Point Cloud to CAD Conversion Services",
            "Paper to CAD Conversion Services",
            "2D to 3D CAD Conversion Services",
          ].map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="shadow-xl hover:shadow-2xl transition rounded-2xl bg-white">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Nimble delivers {service.toLowerCase()} with advanced tools, ensuring accuracy, efficiency, and seamless integration.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-gray-900">Our Conversion Process</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {["Understanding Needs", "Gathering Data", "Executing Conversion", "Quality Assurance", "Final Delivery"].map(
            (step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white shadow-md rounded-xl p-6 space-y-2 hover:shadow-xl transition"
              >
                <div className="text-3xl font-bold text-blue-600">0{i + 1}</div>
                <div className="font-semibold text-gray-800">{step}</div>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-white py-12 rounded-2xl shadow-inner">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["Aerospace", "Automotive", "Energy & Plant", "Engineering", "Glass", "Electrical", "Mill Work", "Hospitals", "Commercial", "Retail", "Industrial", "Residential"].map(
            (industry) => (
              <Card key={industry} className="text-center shadow-md rounded-xl hover:shadow-lg transition">
                <CardContent className="p-4 font-medium">{industry}</CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Partner with Nimble Today
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Entrust your CAD conversion tasks to our expert team and experience precision, speed, and adaptability. With Nimble, you gain a partner dedicated to excellence and innovation.
        </p>
        <Button className="mt-4 px-10 py-5 text-lg rounded-full shadow-xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
}