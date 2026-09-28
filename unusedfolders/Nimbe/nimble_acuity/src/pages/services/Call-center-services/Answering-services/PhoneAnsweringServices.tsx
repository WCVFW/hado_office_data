import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

const PhoneAnsweringServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Reliable Phone Answering Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Revolutionize your business communications with our 24/7 phone answering services – a blend of technology and human touch for superior customer satisfaction.
        </p>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Proficient Call Management</h2>
          <p className="text-gray-700 leading-relaxed">
            Proficient call management is an intricate task. Missed calls equate to missed business opportunities, potentially impeding growth. Our phone answering services are structured around standardized workflows and Lean Six Sigma-validated controls, ensuring communication strategies aligned with VoC-to-CTQ mapping.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our services encompass 24/7 live answering, advanced call screening, and forwarding — ensuring no vital calls are missed.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-3">Our Key Features</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>24/7 Live Answering</li>
            <li>Advanced Call Screening</li>
            <li>Call Forwarding</li>
            <li>Secure Message Delivery</li>
            <li>Personalized Greetings</li>
            <li>On-Hold Messages</li>
          </ul>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Phone Answering Services to a Hearing Aid Firm
              </h3>
              <p className="text-gray-700 mb-4">
                Revolutionizing Call Center Operations for a Global Hearing Aid Company: A Nimble Solutions Success Story.
              </p>
              <Button>Read More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Telemarketing Solutions to an Insurance Company
              </h3>
              <p className="text-gray-700 mb-4">
                Swift Telemarketing Solutions for a Leading Insurance Company: Overcoming Challenges with Nimble.
              </p>
              <Button>Read More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Clients Speak</h2>
        <blockquote className="text-lg italic text-gray-800">
          “Efforts from Nimble Acuity have been a major factor in our successful relationship. They help us make verification calls and follow up with our customers on feedback calls.”
        </blockquote>
        <p className="mt-3 text-gray-600">– CEO, Energy Equipment and Solutions, Ontario, CA</p>
      </section>

      {/* Services Grid (Sample for few services – repeatable) */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Customized and Comprehensive Online Phone Answering Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Small Business Phone Answering",
              desc: "Advanced call screening, secure message handling, and CRM integration."
            },
            {
              title: "Virtual Assistant Answering",
              desc: "Comprehensive calendar management to prevent overlaps and improve productivity."
            },
            {
              title: "Legal Phone Answering",
              desc: "24/7 availability for law firms with advanced call routing and error reduction."
            }
          ].map((service, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Streamline Your Business Communications?
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Partner with Nimble Acuity and experience seamless customer interactions powered by technology, expertise, and reliability.
        </p>
        <Button className="bg-white text-indigo-700 hover:bg-gray-200 px-6 py-3 rounded-xl text-lg">
          Get in Touch
        </Button>
      </section>
    </div>
  );
};

export default PhoneAnsweringServices;
