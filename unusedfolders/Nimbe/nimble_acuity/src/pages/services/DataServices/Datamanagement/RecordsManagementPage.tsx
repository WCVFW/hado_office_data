import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSmainmenu from "../DSmainmenu";

export default function RecordsManagementPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Records Management Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Records management specialists can shrink your storage space
          requirement, streamline record retrieval, and save time at rates
          starting at just <span className="font-semibold">$6 per hour</span>.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p className="text-lg text-gray-700">
          Is your business not having records management as its strategic focus?
          Hiring dedicated full-time resources may not seem economical if you
          have other business goals. With limited storage and compliance
          obligations, you should consider Nimble Records Management Services.
        </p>
        <p className="text-lg text-gray-700">
          Nimble Auity is a world’s leading records management company
          headquartered in India. We provide scalable, technology-driven
          solutions that ensure timely information availability to meet your
          business objectives. We turn records into paperless assets through
          robust digitization and secure access-controlled systems.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Records Management Services We Offer
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Storage of Records",
              desc: "We store business records in any format (paper, CD, digital) and convert them into secure, searchable digital formats.",
            },
            {
              title: "Management of Legal Records",
              desc: "Confidential storage and retrieval of legal records in digital format, ensuring secure access at critical times.",
            },
            {
              title: "Secure Record Destruction",
              desc: "Our professionals ensure complete destruction of records (digital shredding) without leaving any traceable instances.",
            },
            {
              title: "Scanning and Retrieval",
              desc: "Instantly retrieve large volumes of data. Secure login access ensures data safety with strong security protocols.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-lg hover:shadow-xl transition">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Records Management Process We Follow
        </h2>
        <ol className="space-y-6">
          {[
            "Scan and Upload – Digitize your records using high-quality scanning tools.",
            "Download/Access Files – Evaluate, fix, and deliver your data securely.",
            "Record Modification – Edit, delete, or update records as required.",
            "Index, Sort & Move – Organize records for seamless search and retrieval.",
            "Quality Check – Ensure uncompromised accuracy and reliability.",
            "Access Right – Provide secure credentials for authorized access.",
          ].map((step, idx) => (
            <li key={idx} className="flex items-start space-x-4">
              <span className="text-blue-600 font-bold text-xl">{`0${idx + 1}.`}</span>
              <p className="text-gray-700">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble for Records Management?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Friendly Rates – Affordable solutions tailored for SMBs.",
            "100% Data Security – ISO/IEC 27001:2022 compliance.",
            "Multiple Data Format Support – Any record format handled with ease.",
            "High-Quality Services – Reliable and consistent standards.",
            "Quick Turnaround Time – Projects completed ahead of schedule.",
            "ISO Certified Provider – ISO 9001:2015 certified operations.",
            "Scalable Services – Flexible for ongoing and priority records.",
            "Experienced Professionals – Certified record management experts.",
            "24/7 Support – Multilingual, responsive customer service.",
          ].map((reason, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardContent className="p-6">
                <p className="text-gray-700">{reason}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-gray-700 text-lg">
          “We were very satisfied with the quality of service Nimble Auity
          provided. They met our requests with professionalism and flexibility.
          We look forward to future collaborations.”
        </blockquote>
        <p className="mt-4 text-gray-600">
          – Spokesperson, Online health lessons company in Canada
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner with Nimble for Records Management
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          With 26+ years of experience and global delivery centers, Nimble Auity
          helps you achieve business goals without cutting corners. Contact us
          now to get a free quote within 24 hours.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="rounded-full shadow-md hover:shadow-xl"
        >
          Get a Free Quote
        </Button>
      </section>
    </div>
  );
}
