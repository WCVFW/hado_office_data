import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Workflow,
  Layers,
  MessageSquare,
  Headphones,
  Settings,
  Users,
  Award,
  Building,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const PyTorchServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto space-y-16">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Nimble PyTorch Development Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Accelerate your deep learning projects using neural networks built by
          our efficient PyTorch developers at just $15/hour
        </p>
      </section>

      {/* Intro */}
      <section className="space-y-5 text-gray-600 leading-relaxed max-w-4xl mx-auto">
        <p>
          Due to the rapid emergence and evolution of new technologies, deep
          learning has gained widespread popularity. One of these is PyTorch,
          which is a tool that can quickly train models for various tasks such
          as speech and textual analysis. Developed by Facebook, PyTorch is
          especially handy for handling cognitive and complex numerical
          computations.
        </p>
        <p>
          Nimble Acuity has exceptional professional experience in PyTorch AI
          technology. Our developers are capable of satisfying PyTorch neural
          networks requirements as per client needs.
        </p>
      </section>

      {/* Services */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          PyTorch Development Consulting Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Settings,
              title: "PyTorch Consulting",
              desc: "We evaluate infrastructure & processes and provide roadmap, PoC, and design for PyTorch adoption.",
            },
            {
              icon: Brain,
              title: "PyTorch Neural Networks",
              desc: "Develop and train advanced neural networks including PyTorch ResNet for computer applications.",
            },
            {
              icon: Workflow,
              title: "PyTorch Application Development",
              desc: "Build ML apps such as image processing, time-series, OCR, and more with PyTorch.",
            },
            {
              icon: Layers,
              title: "PyTorch Pipeline",
              desc: "Design end-to-end PyTorch pipelines including tensor APIs, data loading, training, and reporting.",
            },
            {
              icon: MessageSquare,
              title: "PyTorch NLP Development",
              desc: "Implement LSTM models with PyTorch to handle natural language processing tasks.",
            },
            {
              icon: Headphones,
              title: "PyTorch Support & Maintenance",
              desc: "24/7 support and maintenance for PyTorch infrastructure, pipelines, and applications.",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
                <CardContent className="p-6 space-y-4">
                  <service.icon className="w-12 h-12 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Artificial Intelligence Services", "AI-Driven Digital Transformation", "Computer Vision Services", "Cognitive Process Automation Services"].map(
            (srv, idx) => (
              <Card
                key={idx}
                className="rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <CardContent className="p-6 text-center">
                  <p className="text-gray-700 font-medium">{srv}</p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Why Choose Nimble Acuity as your PyTorch Development Company?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Cpu,
              title: "Customized ML Solutions",
              desc: "Tailor-made PyTorch ML solutions based on client infrastructure, data, and needs.",
            },
            {
              icon: Users,
              title: "Certified Experts",
              desc: "Skilled workforce of researchers, developers, testers, and QAs for quality outcomes.",
            },
            {
              icon: Building,
              title: "World-Class Infrastructure",
              desc: "Latest tools, debugging environments, and secure infrastructure for projects.",
            },
            {
              icon: Award,
              title: "Profound Customer Support",
              desc: "Detailed reports, training, and 24/7 support after delivery.",
            },
          ].map((benefit, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <CardContent className="p-6 text-center space-y-3 flex flex-col items-center">
                <benefit.icon className="w-12 h-12 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">
                Big Data Platform for Document Processing
              </h3>
              <p className="text-gray-600">
                A leading banking firm needed to automate document workflows.
                Nimble Acuity developed an advanced big data-based platform within a quick
                time.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">
                Open-Source Analytics Workbench
              </h3>
              <p className="text-gray-600">
                For a leading bank, we built an open-source analytics platform
                that integrates structured and unstructured data for rapid
                insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 py-12 rounded-2xl text-white space-y-6">
        <h2 className="text-3xl font-bold">Nimble PyTorch Requirements to Nimble Acuity</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Speed up your development process, deploy PyTorch models with robust
          pipelines, and optimize performance with Nimble Acuity’s expert services.
        </p>
        <button className="px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default PyTorchServices;
