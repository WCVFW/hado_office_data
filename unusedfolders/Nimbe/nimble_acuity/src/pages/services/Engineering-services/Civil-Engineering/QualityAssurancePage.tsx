"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function QualityAssurancePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Nimble Acuity Construction Quality Assurance Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg md:text-xl"
        >
          Enhance the quality of your projects, avoid extra costs, and ensure
          smooth progress with our expert QA services. Starting at just $12/hour.
        </motion.p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 text-gray-700">
        <p>
          Every construction project is a complex combination of countless
          processes, operations, teams, and experts, and there's so much at
          stake. A perfectly executed project strikes a balance between time,
          cost, resources, and quality. While quality control ensures standards
          are met, quality assurance establishes them across the project.
        </p>
        <p>
          Nimble Acuity is an experienced construction QA services provider,
          collaborating with your team to implement best practices and deliver
          accurate, error-free projects.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Construction Quality Assurance Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Standard Establishment",
            "Regular Construction Appraisal",
            "Critical Observation Reports",
            "Non-Conformity Reports",
            "Checklist Review Report",
            "Punch Points List",
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="h-full"
            >
              <Card className="shadow-lg rounded-2xl h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-700">
                    {service}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service === "Standard Establishment" &&
                      "We study your project and create tailored quality standards for professionals, materials, plans, and drawings."}
                    {service === "Regular Construction Appraisal" &&
                      "Weekly progress reports compare actual progress with standards, helping identify lapses early."}
                    {service === "Critical Observation Reports" &&
                      "Highlight urgent quality lapses requiring immediate action with preventive steps for future."}
                    {service === "Non-Conformity Reports" &&
                      "Document lapses or non-fulfillment of agreed standards in design, drawings, and practices."}
                    {service === "Checklist Review Report" &&
                      "Comprehensive quality verification checklist for EPC contractors to ensure compliance."}
                    {service === "Punch Points List" &&
                      "List of pending work and strict quality standards to be met for timely delivery."}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Our Construction Quality Assurance Process
        </h2>
        <ol className="space-y-6">
          {[
            "Requirement Analysis",
            "Project Review",
            "Quality Assurance Standardization",
            "Approval",
            "Delivery",
          ].map((step, idx) => (
            <li
              key={idx}
              className="flex flex-col md:flex-row md:items-start gap-4"
            >
              <span className="text-indigo-600 font-bold text-xl">
                {String(idx + 1).padStart(2, "0")}.
              </span>
              <div>
                <h3 className="font-semibold text-lg">{step}</h3>
                <p className="text-gray-600 text-sm">
                  {step === "Requirement Analysis" &&
                    "We analyze your project, scope, and cost to finalize requirements before execution."}
                  {step === "Project Review" &&
                    "In-depth study of new or ongoing projects to align QA standards with project goals."}
                  {step === "Quality Assurance Standardization" &&
                    "Establish standards as per legal provisions, codes, and safety norms for suppliers and materials."}
                  {step === "Approval" &&
                    "Senior QA experts review standards and suggest refinements before rollout."}
                  {step === "Delivery" &&
                    "We continuously deliver reports and monitor quality assurance for sustained compliance."}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="bg-indigo-50 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Cost-effective Services",
              desc: "We tailor services to your needs with fair, transparent pricing.",
            },
            {
              title: "Commitment to Quality",
              desc: "ISO-certified processes with stringent QA at every step.",
            },
            {
              title: "Global Delivery Centers",
              desc: "Strategically located centers enable faster turnaround times.",
            },
            {
              title: "Well-Established Infrastructure",
              desc: "State-of-the-art workspaces with complete power backup.",
            },
            {
              title: "Effective Communication",
              desc: "Constant communication with stakeholders ensures no lapses.",
            },
            {
              title: "Expert Team",
              desc: "Handpicked professionals with proven experience.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-indigo-700 mb-2">
                Nimble Provided HVAC Modeling of 19-Story Building
              </h3>
              <p className="text-gray-600 text-sm">
                During the pandemic, our team used Navisworks to model HVAC
                systems of a 19-story commercial building in the US, ensuring
                precision and efficiency.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-indigo-700 mb-2">
                Nimble Delivered UAV LiDAR Mapping in Canada
              </h3>
              <p className="text-gray-600 text-sm">
                We performed UAV LiDAR mapping of over 600 km of railroads in
                Canada with accuracy and cost-effectiveness.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Testimonials
        </h2>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="italic text-lg text-gray-700">
            “The commitment and focus of Nimble Acuity's managers and engineers
            were excellent, and surpassed our expectations.”
          </p>
          <p className="font-semibold text-gray-800">
            – SVP & Co-Founder, Engineering Resource Company
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Partner with Nimble Acuity Today
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Efficient, ISO-certified, transparent, and diligent – Nimble Acuity
          ensures your construction quality assurance needs are met with
          precision.
        </p>
        <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
