import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  FileText,
  Layers,
  Search,
  Database,
  ShieldCheck,
  Globe,
  Cpu,
  Clock,
  Users,
  Percent,
} from "lucide-react";
import DSmainmenu from "../DSmainmenu";

export default function DocumentScanning() {
  return (
    <div className="w-full bg-gradient-to-b from-indigo-50 via-white to-indigo-100">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Nimble Document Scanning Services
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          Employees spend over 4 hours daily searching for information. Nimble
          Auity helps you preserve, digitize, and secure documents efficiently.
        </p>
      </section>

      {/* Intro */}
      <section className="px-6 md:px-20 py-16 text-gray-700">
        <p className="mb-6 text-lg leading-relaxed">
          If your critical business information is lost in files or stored on
          paper, performance and profitability take a direct hit. Nimble Auity
          is one of India’s leading providers of affordable, high-quality
          document scanning services. For over 26 years, we’ve delivered
          world-class scanning solutions within fast turnaround times and in
          multiple image formats.
        </p>
      </section>

      {/* Services */}
      <section className="px-6 md:px-20 py-16 bg-indigo-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Document Scanning Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: FileText,
              title: "Document & Image Scanning",
              desc: "Receipts, manuals, handwritten notes, legal files, records, accounting sheets, and more.",
            },
            {
              icon: Layers,
              title: "Indexing & Archiving",
              desc: "Automatic and manual indexing, full-text OCR, and de-skewing for accuracy.",
            },
            {
              icon: Database,
              title: "Data Capture",
              desc: "Single and double data capture for maximum reliability.",
            },
            {
              icon: Search,
              title: "Document Management System",
              desc: "Digitization and setup of secure, searchable document systems.",
            },
            {
              icon: Cpu,
              title: "Full-Color & B/W Scanning",
              desc: "High-quality scanning tailored to client requirements.",
            },
          ].map((srv, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <srv.icon className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {srv.title}
              </h3>
              <p className="text-gray-600 text-sm">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Invest */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Why Invest in Nimble Auity’s Scanning Services?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
          We are equipped to handle any scanning project using manual data entry
          and OCR/ICR scanning methods. Your data can be converted into PDF,
          JPEG, or any preferred format with speed and accuracy.
        </p>
        <ul className="max-w-3xl mx-auto grid gap-4 text-gray-700 list-disc pl-6">
          <li>Preserve information electronically in multiple formats</li>
          <li>Retrieve information easily via indexing and archiving</li>
          <li>Digitally store and update critical information</li>
          <li>Ensure accuracy through OCR/ICR scanning methods</li>
        </ul>
      </section>

      {/* 3-Step Process */}
      <section className="px-6 md:px-20 py-16 bg-indigo-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Guaranteed Accuracy with Our 3-Step Process
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "1. Document Organization",
              desc: "We arrange documents in a predefined order for faster scanning.",
            },
            {
              title: "2. Document Scanning",
              desc: "High-speed flatbed scanners capture the best possible image output.",
            },
            {
              title: "3. Document Re-organization",
              desc: "QA team reviews scanned files and rescans if necessary.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-20 py-16 text-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { value: "40%", label: "Cost Reduction" },
            { value: "8-24 Hrs", label: "Faster Turnaround" },
            { value: "500+", label: "Satisfied Clients" },
            { value: "350+", label: "Skilled Experts" },
            { value: "99%", label: "Accuracy" },
            { value: "21", label: "Years Experience" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-6"
            >
              <h3 className="text-3xl font-extrabold text-indigo-600">
                {stat.value}
              </h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="px-6 md:px-20 py-16 bg-indigo-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Nimble Auity’s Value Proposition
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "Global Delivery Centers",
              desc: "With centers in the USA, UK, and more, we reduce shipping costs and ensure faster delivery.",
            },
            {
              icon: ShieldCheck,
              title: "Safety & Security",
              desc: "Strict protocols ensure privacy; documents are securely returned or destroyed post-scanning.",
            },
            {
              icon: Cpu,
              title: "Latest Technology",
              desc: "Flatbed scanners, duplex scanning, and pixel density up to 4800 PPI for detailed needs.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <item.icon className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Choose Nimble Auity for High-Quality Document Scanning
        </h2>
        <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
          Reduce costs, improve productivity, and secure your business data with
          our reliable document scanning solutions.
        </p>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl shadow-md">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
