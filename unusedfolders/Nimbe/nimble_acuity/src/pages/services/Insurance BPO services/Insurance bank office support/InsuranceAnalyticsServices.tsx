import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Imainmenu from "../Imainmenu";

const InsuranceAnalyticsServices: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Insurance Analytics Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Keep track of the changing regulations and latest trends in the
          insurance industry by leveraging Nimble Acuity's Insurance analytics
          services at highly flexible pricing.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          Is your insurance firm struggling to cope up with the changing
          regulations, the intense competition, and streamlining the business
          operations? Are you falling short of resources for insurance data
          analytics and missing out on the opportunities to grow your business?
          Then, it is time you Nimble insurance analytics services to an
          experienced service provider. By outsourcing, you will not only save on
          costs but also will get proper insights into how to improve your
          business operations.
        </p>
        <p>
          Nimble Acuity is one such service provider who can be your
          one-stop-shop for all your insurance data analytics needs. Our team
          comprises some of the most talented and skilled analysts who can
          deliver the best services within a quick time without compromising on
          the quality.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Insurance Analytics Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Subrogation Analytics",
              desc: "Our solutions help clients drive subrogation recovery using predictive analytics based on data, patterns, business rules, and characteristics.",
            },
            {
              title: "Customer Analytics",
              desc: "Boost client engagement and acquire new customers by leveraging cross-sell and upsell propositions through our customer analytics services.",
            },
            {
              title: "Claims Analytics",
              desc: "We provide best-in-class claims analytics to help achieve operational efficiency and reduce the risk of fraud.",
            },
            {
              title: "Fraud Analytics",
              desc: "Leverage text mining and data analysis from multiple sources (police reports, medical records, notes, emails) to detect fraud early.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="py-12 text-center bg-blue-900 text-white">
        <h2 className="text-2xl font-bold mb-4">Avail 1 WEEK FREE TRIAL</h2>
        <p className="mb-6">Try before you buy! Get 1 week free trial on any service of your choice.</p>
        <Button size="lg" variant="secondary">
          Get Started Now!
        </Button>
      </section>

      {/* Software Expertise */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Insurance Analytics Software Expertise
        </h2>
        <p className="text-center mb-6">
          We make use of some of the best analytics platforms to deliver
          high-quality services. Our expertise includes:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {["Board", "EverString", "Halo", "IBM SPSS", "Infer Insurance Analytics", "Radius", "SAS Advanced Analytics", "Statistica Decisioning Platform"].map(
            (tool, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-100 rounded-full shadow text-sm"
              >
                {tool}
              </span>
            )
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Acuity for Insurance Analytics Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            "Affordable Pricing with flexible options.",
            "ISO/IEC 27001:2022 certified ensuring complete data security.",
            "Quick turnaround time through global delivery centers.",
            "Experienced insurance experts with domain knowledge.",
            "High-quality, error-free services (ISO certified).",
            "World-class infrastructure and advanced analytics tools.",
            "Dedicated project manager as a single point of contact.",
            "24/7 availability for support and issue resolution.",
            "Scalable services based on client requirements.",
          ].map((reason, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6">
                <p>{reason}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Insurance Back-office Operations for Miami-based Client",
              desc: "A leading Miami-based insurance agency sought streamlined back-office operations. Our team delivered high-quality services quickly.",
            },
            {
              title: "Insurance Account Maintenance for US-based Agency",
              desc: "We helped a US-based insurance agency maintain multiple accounts with cost-effective and reliable services.",
            },
          ].map((story, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-gray-700">{story.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 text-center bg-blue-900 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Insurance Analytics Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          We deliver cost-effective, reliable, and quick insurance analytics
          services using advanced tools and technologies. Get in touch with us
          today to boost your operational efficiency.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default InsuranceAnalyticsServices;