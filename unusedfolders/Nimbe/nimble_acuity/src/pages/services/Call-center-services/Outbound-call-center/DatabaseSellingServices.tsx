import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

const DatabaseSellingServices: React.FC = () => {
  const services = [
    {
      title: "Email Appending Services",
      description:
        "Enhance customer databases through a structured match-and-validate model. Using historical campaign data and contact clustering, we’ve achieved validated improvement metrics, such as a 60%+ email match rate, reducing cost per contact and increasing outreach reliability."
    },
    {
      title: "Custom List Building",
      description:
        "Ensure steady access to a regularly updated prospect database. With access to senior managers and executives, our lists provide genuine, high-profile contacts for your marketing needs."
    },
    {
      title: "Data Appending Services",
      description:
        "Gain better understanding of prospects by adding missing contact details like email IDs, phone numbers, etc. Push targeted advertising with richer data insights."
    },
    {
      title: "Data Validation Services",
      description:
        "We perform both automated and manual validation to ensure all contacts are regularly updated, eliminating redundancy and keeping data relevant."
    },
    {
      title: "Email Database Management",
      description:
        "End-to-end email list management ensuring accuracy and hygiene of your marketing data: validation, cleansing, de-duplication, bounce processing, and accessibility."
    }
  ];

  const extraServices = [
    "Appointment Setting Services",
    "Database Creation and Management Services",
    "Direct Mail Follow-up Services",
    "Lead Generation Services",
    "Market Intelligence Services",
    "Telesales and Customer Acquisition"
  ];

  const callCenterSoftware = [
    "HubSpot",
    "Bitrix24",
    "Talkdesk",
    "Five9",
    "Zendesk",
    "Dixa",
    "Salesforce",
    "LiveAgent",
    "Avaya"
  ];

  const benefits = [
    "Increased brand reputation and goodwill",
    "Reduction in spam reports",
    "Accurate client statistics",
    "Maximum utility of time and bandwidth",
    "Widely distributed collection of databases with demographics",
    "Efficient and high-quality database backup and data recovery"
  ];

  return (
    <div className="w-full flex flex-col items-center p-6 md:p-12 space-y-12">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="text-center max-w-4xl space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-700">
          Nimble Auity Database Selling Services
        </h1>
        <p className="text-gray-600 text-lg">
          Maintain accurate, validated, and campaign-ready databases with Nimble’s
          expert database selling and management services.
        </p>
      </section>

      {/* Services Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6 space-y-3">
                <h3 className="font-bold text-lg text-blue-700">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Extra Services */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
          Additional Services
        </h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 list-disc list-inside text-gray-700">
          {extraServices.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Call Center Software */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
          Call Center Software We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {callCenterSoftware.map((sw, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm shadow-sm"
            >
              {sw}
            </span>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
          Benefits of Choosing Nimble
        </h2>
        <ul className="grid sm:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          {benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center max-w-3xl space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
          Start Your Transformation Today
        </h2>
        <p className="text-gray-600">
          Eliminate data inconsistencies and increase campaign efficiency with
          Nimble Auity’s CTQ-driven database selling services. Backed by Lean Six
          Sigma methodologies, our data workflows ensure measurable improvements
          in outreach performance, targeting precision, and brand impact.
        </p>
        <Button className="px-6 py-3 text-lg rounded-2xl">
          Contact Nimble Today
        </Button>
      </section>
    </div>
  );
};

export default DatabaseSellingServices;
