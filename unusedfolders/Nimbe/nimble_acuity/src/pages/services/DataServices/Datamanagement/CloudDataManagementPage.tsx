import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSmainmenu from "../DSmainmenu";

export default function CloudDataManagementPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Cloud Data Management Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Streamline your data processes with our cloud data management
          platform. We incorporate microservices architecture, container
          orchestration, and hybrid cloud support.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6 text-gray-700">
        <p>
          Do the intricacies of handling data across several platforms overwhelm
          you? Our multi-cloud data management services are designed to maximize
          performance and streamline your data environment. By eliminating
          redundancy and enhancing data quality, our solutions give you
          centralized management over your data assets. Our services offer
          flexible scalability to meet your company’s demands and support hybrid
          and multi-cloud systems. To protect your data at every touchpoint, we
          use advanced cloud-based data storage solutions for secure access
          management and data encryption.
        </p>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="grid gap-8 md:grid-cols-3 text-center max-w-5xl mx-auto">
          {[
            {
              stat: "70%",
              desc: "Faster Data Access Compared to On-Premises Solutions",
            },
            {
              stat: "50%",
              desc: "Reduction in Data Processing Costs via Cloud Optimization",
            },
            {
              stat: "35%",
              desc: "Increase in Data Security through Enhanced Encryption Methods",
            },
          ].map((item, idx) => (
            <Card key={idx} className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-4xl font-bold text-indigo-600">
                  {item.stat}
                </h3>
                <p className="mt-2 text-gray-700">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Achieve Maximum Scalability with Our Cloud Computing Management
          Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Cloud Security Services",
              desc: "Identity and Access Management (IAM), end-to-end encryption, continuous security assessment.",
            },
            {
              title: "CIO Advisory Services",
              desc: "Strategic IT roadmaps, risk mitigation, and innovation leveraging AI, ML, and blockchain.",
            },
            {
              title: "Hybrid Cloud Services",
              desc: "Workload optimization, orchestration with containers/Kubernetes, scalable architecture.",
            },
            {
              title: "Cloud Integration Services",
              desc: "API management, real-time data synchronization, legacy integration with cloud.",
            },
          ].map((service, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Software Section */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Software We Depend On</h2>
        <p className="text-gray-700 mb-4">
          Snowflake • Couchbase Cloud • MongoDB Atlas
        </p>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
          Disclaimer: We use third-party tools solely for operational purposes
          and do not endorse, affiliate, or sponsor these entities in any
          capacity.
        </p>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Cloud Business Transformation Services – optimize cloud integration & scalability.",
            "Database Services – high availability, integrity, and fast data retrieval.",
            "Property Digital Transformation Services – modernize systems for growth & innovation.",
            "Multi-Cloud Services – workload distribution, resilience, and cost optimization.",
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <p className="text-gray-700">{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble for Cloud Data Management Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            "Unmatched Data Security – encryption, tokenization, MFA, continuous monitoring.",
            "Seamless Integration – API-driven interoperability across systems.",
            "Scalable & High-Performance Solutions – elastic scalability with high availability.",
            "Robust Data Governance – centralized compliance & automated accuracy.",
            "Advanced Analytics & Insights – predictive analytics for smarter decisions.",
            "Continuous Support & Monitoring – 24/7 expert support & proactive monitoring.",
          ].map((point, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <p className="text-gray-700">{point}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            "Data Research and Extraction to a Nightlife App Developer",
            "XML Conversion to a Norwegian Academic Literature Publisher",
          ].map((story, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <p className="text-gray-700">{story}</p>
                <Button variant="link" className="mt-3 p-0">
                  Read more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-gray-700 text-lg max-w-3xl mx-auto">
          “I am more than pleased with the way the project has turned out, and
          with the overall experience itself. I have been raving about Nimble
          Auity to everyone I know, and I will definitely be sending more
          projects in the future.”
        </blockquote>
        <p className="mt-4 text-gray-600">
          – CEO, Top Logistics Company in the US
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-600 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Transform Your Data Operations with Nimble
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Benefit from multi-cloud compatibility, secure data transfer
          protocols, and efficient data lifecycle management.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="rounded-full shadow-md hover:shadow-xl"
        >
          Contact Us
        </Button>
      </section>
    </div>
  );
}
