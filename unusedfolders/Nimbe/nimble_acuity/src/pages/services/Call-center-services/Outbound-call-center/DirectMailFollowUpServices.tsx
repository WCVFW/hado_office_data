import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

const DirectMailFollowUpServices: React.FC = () => {
  const coreServices = [
    {
      title: "One-on-one Conversation",
      description:
        "Using Lean Six Sigma procedures and defined communication standards, our team creates customized engagement sequences that align with Voice of the Customer (VoC) triggers."
    },
    {
      title: "Email Reminders",
      description:
        "To ensure repeat business and boost client relationships, we send reminder emails to executives to keep your brand top-of-mind."
    },
    {
      title: "Insights & Reporting",
      description:
        "We use data-driven feedback loops to track customers’ buying decisions, identify process gaps, and refine future campaigns."
    }
  ];

  const otherServices = [
    "Virtual Assistant Services",
    "Customer Support Services",
    "Lead Generation Services",
    "Call Quality Monitoring Support Services"
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
    "Emails are essential in most successful marketing strategies",
    "Email follow-up contacts prospective customers without disturbing them",
    "Facilitates prompt responses from prospective customers",
    "Ensures customers remain well informed about your products/services"
  ];

  const processSteps = [
    "Professionals at Nimble call your customers and substantiate their name & addresses.",
    "This ensures right delivery of your message to the appropriate prospects.",
    "We follow-up with customized calls after mailing them with the required information.",
    "We convey details about your products/services and their benefits.",
    "Direct mail + call center follow-up triples product response rates."
  ];

  const whyChoose = [
    "Flexible Pricing Options – customized to your project volume and complexity.",
    "100% Information Security – ISO/IEC 27001:2022 certified with foolproof systems.",
    "State-of-the-art Infrastructure – modern automation tools, uninterrupted networks.",
    "High Quality – reliable services ensuring maximum customer engagement.",
    "24/7 Availability – round-the-clock support across all time zones.",
    "Experienced Team – 26+ years of expertise, 100+ man-years management experience.",
    "Ease of Scalability – CVA-first approach enables quick ramp-ups without deviation."
  ];

  return (
    <div className="w-full flex flex-col items-center p-6 md:p-12 space-y-12">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="text-center max-w-4xl space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-700">
          Nimble Auity Direct Mail Follow-up Services
        </h1>
        <p className="text-gray-600 text-lg">
          Improve brand recall and retention with Nimble’s customer-validated,
          analytics-driven direct mail and email follow-up services.
        </p>
      </section>

      {/* Core Services */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
          Our Direct Mail Follow-up Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, idx) => (
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

      {/* Other Services */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
          Other Services You Can Benefit From
        </h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          {otherServices.map((item, idx) => (
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

      {/* Why Choose Nimble */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
          Why Choose Nimble for Direct Mail Follow-up?
        </h2>
        <ul className="grid sm:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          {whyChoose.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Process Steps */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
          Our Direct Mail Follow-up Process
        </h2>
        <ol className="space-y-4 text-gray-700 list-decimal list-inside">
          {processSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Client Testimonial */}
      <section className="max-w-4xl text-center space-y-4 bg-gray-50 p-6 rounded-2xl shadow-md">
        <p className="italic text-gray-600">
          “The team at Nimble Auity have provided excellent support and always
          delivered an extra mile in their efforts. Right from the outset, it has
          been a great experience to work with Nimble.”
        </p>
        <p className="font-semibold text-gray-800">Co-Founder, Tech-startup based in UK</p>
      </section>

      {/* CTA Section */}
      <section className="text-center max-w-3xl space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
          Partner with Nimble Auity Today
        </h2>
        <p className="text-gray-600">
          Nimble provides direct mail follow-up solutions along with cold calling,
          call center services, order taking, appointment setting, and more. Boost
          your marketing and sales campaigns with our expert follow-up services.
        </p>
        <Button className="px-6 py-3 text-lg rounded-2xl">
          Contact Nimble Today
        </Button>
      </section>
    </div>
  );
};

export default DirectMailFollowUpServices;