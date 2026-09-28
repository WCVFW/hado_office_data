import React from "react";
import {
  ShieldCheckIcon,
  DocumentDuplicateIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Imainmenu from "../Imainmenu";

const PolicyIssuancePage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Policy Issuance Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Get your policy issuance process streamlined by our experienced team
          of insurance experts at affordable prices.
        </p>
        <Button className="mt-6 bg-white text-blue-700 hover:bg-gray-100">
          Get Started
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Policy Issuance Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: ShieldCheckIcon,
              title: "Policy Detail Verification",
              desc: "Collect and verify customer details to eliminate errors and reduce turnaround time.",
            },
            {
              icon: DocumentDuplicateIcon,
              title: "Submit Missing Information",
              desc: "Communicate with underwriters to update missing information and avoid mistakes.",
            },
            {
              icon: ClipboardDocumentCheckIcon,
              title: "Generate Policy Setup Document",
              desc: "Enter information into CRM systems using insurance policy issuance software.",
            },
            {
              icon: CheckCircleIcon,
              title: "Issue Final Policy",
              desc: "Deliver accurate, error-free policies on time while keeping stakeholders informed.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-lg rounded-2xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Policy Issuance Process
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {[
            "Find an Insurable Object",
            "Create an Insurable Object",
            "Insurance Contract",
            "Contract Review",
            "Policy Issuance",
          ].map((step, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-blue-600 font-bold text-xl mb-2">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <p className="text-gray-700">{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Choose Nimble Acuity for Policy Issuance Services?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: ClockIcon,
              title: "Quick Turnaround",
              desc: "10+ global delivery centers ensure fast service without compromising quality.",
            },
            {
              icon: UserGroupIcon,
              title: "Experienced Experts",
              desc: "100+ man-years of combined experience in policy issuance and insurance operations.",
            },
            {
              icon: ShieldCheckIcon,
              title: "Information Security",
              desc: "ISO/IEC 27001:2022 certified to safeguard sensitive insurance data.",
            },
          ].map((reason, idx) => (
            <Card key={idx} className="shadow-lg rounded-2xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <reason.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Streamline Your Policy Issuance?
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Partner with Nimble Acuity for cost-effective, accurate, and
          efficient policy issuance services.
        </p>
        <Button className="bg-white text-blue-700 hover:bg-gray-100">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default PolicyIssuancePage;
