import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Shield, Database, Users } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const SurveyFormsProcessing: React.FC = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Nimble Survey Forms Processing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Digitize survey responses using scan & capture technology at rates
          starting from <span className="font-semibold">$6 per hour</span>.
        </p>
      </section>

      {/* Why Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Why Nimble Survey Forms Processing?
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-8">
          If your survey responses are still paper-based, outsourcing to experts
          like Nimble Acuity ensures accuracy, timeliness, and cost savings.
          We help organizations across industries extract, digitize, and analyze
          survey data to accelerate decision-making.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Survey Forms Processing Services We Offer
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Scanning Surveys",
              desc: "Using OCR and AI-powered ICR, we digitize survey data with up to 98% accuracy.",
            },
            {
              title: "Survey Data Entry",
              desc: "Data entry experts transfer responses into CRMs or databases with precision.",
            },
            {
              title: "Analysis & Reporting",
              desc: "We perform ANOVA sampling, correlation tests, and cross-analysis to extract insights.",
            },
          ].map((service, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Our Survey Forms Processing Workflow
        </h2>
        <ol className="space-y-6 max-w-3xl mx-auto">
          {[
            "Scan & Upload survey responses in any format or send physical forms.",
            "Store survey images securely in the cloud or dedicated servers.",
            "Digitize forms using OCR/ICR and capture structured data.",
            "Verify and validate entries to ensure accuracy and completeness.",
            "Quality check by QA teams to maintain consistency and compliance.",
          ].map((step, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <CheckCircle2 className="text-green-600 w-6 h-6 mt-1" />
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <Shield className="w-10 h-10 text-green-600" />,
              title: "100% Data Security",
              desc: "ISO/IEC 27001:2022 certified with strict security protocols.",
            },
            {
              icon: <Clock className="w-10 h-10 text-green-600" />,
              title: "Quick Turnaround",
              desc: "8–24 hour faster processing with strict adherence to deadlines.",
            },
            {
              icon: <Database className="w-10 h-10 text-green-600" />,
              title: "Multi-Format Support",
              desc: "We work with paper-heavy surveys, PDFs, and digital formats.",
            },
            {
              icon: <Users className="w-10 h-10 text-green-600" />,
              title: "Skilled Experts",
              desc: "Teams with years of survey forms processing experience.",
            },
            {
              icon: <CheckCircle2 className="w-10 h-10 text-green-600" />,
              title: "High Accuracy",
              desc: "99% accuracy achieved with OCR/ICR and manual validation.",
            },
            {
              icon: <Clock className="w-10 h-10 text-green-600" />,
              title: "Scalable Services",
              desc: "Flexible solutions for projects of all sizes and urgencies.",
            },
          ].map((benefit, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Nimble Survey Forms Processing Today
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          With over 26+ years of experience, Nimble Acuity ensures accuracy,
          scalability, and secure handling of all survey responses. Contact us
          today to streamline your survey forms processing and get a free quote
          within 24 hours.
        </p>
        <button className="bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default SurveyFormsProcessing;
