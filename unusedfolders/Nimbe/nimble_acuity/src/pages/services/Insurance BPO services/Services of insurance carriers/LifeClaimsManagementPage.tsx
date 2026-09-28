import React from "react";
import {
  ShieldCheckIcon,
  DocumentTextIcon,
  BanknotesIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Imainmenu from "../Imainmenu";

const LifeClaimsManagementPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Life/Annuity Insurance Claims Management
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Get flawless, error-free, and cost-effective claims management by
          outsourcing it to Nimble Acuity.
        </p>
        <Button className="mt-6 bg-white text-blue-700 hover:bg-gray-100">
          Get Started
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Life/Annuity Insurance Claims Management Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Insurance claims setup",
            "Claims document imaging",
            "Disbursement",
            "Claims eligibility & estimation",
            "Full claim adjudication",
            "Fast track adjudication",
            "Claim support & auditing",
            "Account settlement",
            "Modernization of legacy systems",
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-lg">
              <CardContent className="p-6 text-center">
                <CheckCircleIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Additional Annuity Claims Management Support
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Fresh Business Acquisition",
            "Life Insurance Claims Administration",
            "Customer Support Services",
            "Billing Services",
            "Claims Processing",
            "Marketing & Data Informatics",
            "Claims Servicing",
            "Agency Administration",
          ].map((extra, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-4 text-center text-sm text-gray-700">
                {extra}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Software Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Life/Annuity Insurance Claims Software We Leverage
        </h2>
        <p className="mb-8 text-gray-600">
          We use advanced tools and technologies to deliver quick, accurate, and
          secure claims processing.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Advanced Insurance System",
            "Caseblocks",
            "Cases CRM",
            "Claims Manager",
            "DocuPhase",
            "HealthQx",
            "HEALTHsuite",
            "INSIS",
            "PCRS",
            "Quick Cap",
          ].map((tool, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-4 text-gray-700 font-medium text-center">
                {tool}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Choose Nimble Acuity for Life/Annuity Claims Management?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            {
              icon: BanknotesIcon,
              title: "Flexible Pricing",
              desc: "Cost-effective models where you pay only for what you use.",
            },
            {
              icon: ShieldCheckIcon,
              title: "Insurance Data Security",
              desc: "ISO/IEC 27001:2022 certified with strict NDAs for full confidentiality.",
            },
            {
              icon: ClockIcon,
              title: "Quick Turnaround",
              desc: "Global delivery centers ensure deadlines are always met.",
            },
            {
              icon: UserGroupIcon,
              title: "Experienced Experts",
              desc: "100+ man-years of combined claims management expertise.",
            },
            {
              icon: DocumentTextIcon,
              title: "Error-Free Processing",
              desc: "ISO 9001:2015 certified for flawless claims adjudication.",
            },
            {
              icon: DevicePhoneMobileIcon,
              title: "24/7 Availability",
              desc: "Round-the-clock project managers and support staff.",
            },
          ].map((reason, idx) => (
            <Card key={idx} className="rounded-2xl shadow-lg">
              <CardContent className="p-6 text-center">
                <reason.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title:
                "Insurance Back-office Solutions for Leading Insurance Company",
              desc: "A global provider partnered with Nimble Acuity for back-office support and saw significant efficiency gains.",
            },
            {
              title: "Back-office Operations for Miami-based Client",
              desc: "Our team streamlined insurance operations and reduced costs for a major Miami-based insurer.",
            },
          ].map((story, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{story.title}</h3>
                <p className="text-gray-600 text-sm">{story.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-blue-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Simplify Your Claims Management?
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Partner with Nimble Acuity for reliable, cost-effective, and
          efficient life/annuity claims management services.
        </p>
        <Button className="bg-white text-blue-700 hover:bg-gray-100">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default LifeClaimsManagementPage;
