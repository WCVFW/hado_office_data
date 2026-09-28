import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Imainmenu from "../Imainmenu";

export default function InsuranceEndorsementsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-900 text-white py-20 text-center px-6">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Endorsements Processing Services for Insurance
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Efficient, accurate, and cost-effective insurance endorsements
          processing solutions to streamline your operations.
        </p>
        <Button className="mt-6 bg-white text-blue-900 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Endorsements Processing Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[ 
            "Add to the coverage of an insurance policy",
            "Limit or delete coverage of a policy",
            "Add or delete people and locations on an insurance policy",
            "Add any clauses mid-term",
            "Adjust premiums as a result of an insurance endorsement",
            "Follow-ups"
          ].map((service, idx) => (
            <Card key={idx} className="shadow-lg">
              <CardContent className="flex items-start gap-3 p-6">
                <CheckCircle2 className="text-blue-600 w-6 h-6" />
                <p>{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Categories of Insurance Endorsements
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-8">
            Endorsements can be broadly categorized into standard and non-standard.
            They can also be grouped based on the purpose they serve.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              "Modification of Coverage",
              "Added Coverage",
              "Exclusion",
              "Administrative Changes",
              "Editorial Changes"
            ].map((category, idx) => (
              <Card key={idx}>
                <CardContent className="p-6 text-center font-medium">
                  {category}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us for Endorsement Processing?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[ 
            "Highly customized insurance endorsement processing services",
            "High-quality services at cost-effective rates",
            "Access to state-of-the-art infrastructure and technologies",
            "Quick turnaround time via global delivery centers",
            "Domain experts handling different endorsement types",
            "Strict confidentiality and robust data security",
            "One-stop solution for all insurance-related services"
          ].map((benefit, idx) => (
            <Card key={idx}>
              <CardContent className="flex items-start gap-3 p-6">
                <CheckCircle2 className="text-green-600 w-6 h-6" />
                <p>{benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Endorsement Processing for Insurance to Us
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          With 26+ years of experience, advanced technologies, and domain expertise,
          we deliver high-quality endorsement processing services that save you time
          and money. Let’s collaborate and transform your insurance operations.
        </p>
        <Button className="bg-white text-blue-900 hover:bg-gray-100">
          Get Started
        </Button>
      </section>
    </div>
  );
}
