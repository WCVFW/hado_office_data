import React from "react";
import { CheckCircle, Cloud, Cpu, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

export default function BPaaSServices() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Outsource Business Process as a Service (BPaaS)
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Lean Six Sigma-based process improvement with Nimble Acuity helps you
          achieve operational excellence while staying agile with cloud-driven
          BPaaS solutions.
        </p>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">
          Why Choose Nimble Acuity for BPaaS?
        </h2>
        <p className="mb-4">
          Nimble Acuity's BPaaS delivery model, part of our Business Process
          Outsourcing (BPO) Services, empowers enterprises to leverage
          CTQ-aligned standardized processes verified by Lean Six Sigma without
          heavy investments.
        </p>
        <p>
          Our specialized approach enables global clients to shift from a
          high-cost model to a more flexible, consumption-based pricing
          structure.
        </p>
      </section>

      {/* Offerings */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our BPaaS Service Offerings
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Uses foundational cloud services like PaaS, IaaS, and SaaS",
              "Configured to suit your processes without hampering productivity",
              "Well-defined APIs for quick integration with related services",
              "Supports multiple deployed environments and languages",
              "Scalable environment from few processes to thousands",
            ].map((item, idx) => (
              <Card key={idx} className="shadow-md">
                <CardContent className="flex items-start gap-3 p-4">
                  <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
                  <p>{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          What Makes BPaaS Effective?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Cloud className="w-6 h-6 text-blue-600" /> Cloud Delivery
              </h3>
              <p>
                BPaaS delivers BPO services from the cloud, often automated with
                consumption or subscription-based pricing models.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-blue-600" /> Scalable & Flexible
              </h3>
              <p>
                Access point solutions, ERP, and end-to-end apps that enhance
                collaboration, scalability, and global connectivity.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Zap className="w-6 h-6 text-blue-600" /> Rapid Deployment
              </h3>
              <p>
                Faster time-to-market with DMAIC lifecycle-driven deployment
                cycles that accelerate process improvements.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Benefits of Choosing Nimble Acuity BPaaS
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Faster time-to-market with Lean Six Sigma",
              "Immediate access to best-in-class processes and skills",
              "Better control and compliance without long transitions",
              "Reduced costs with flexible pricing models",
              "State-of-the-art infrastructure and professional staff",
            ].map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-blue-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Grow Your Business with Nimble Acuity's BPaaS Solutions
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Leverage our cloud-driven BPaaS services to achieve verified
          improvements across your processes using Lean Six Sigma’s DMAIC
          lifecycle.
        </p>
        <Button size="lg" className="bg-white text-blue-700 font-semibold">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
