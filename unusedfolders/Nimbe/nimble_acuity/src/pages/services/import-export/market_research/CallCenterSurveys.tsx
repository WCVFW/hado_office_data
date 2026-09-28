import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function CallCenterSurveys() {
  return (
    <div className="px-6 py-12 space-y-16">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold">
          Nimble Call Center Surveys
        </h1>
        <p className="text-lg text-gray-600">
          Get detailed, reliable, and accurate call center survey solutions that
          let you analyze where your business stands and take the best strategic
          steps to fill the gap.
        </p>
        <Button size="lg" className="rounded-2xl mt-4">
          Get Started
        </Button>
      </section>

      {/* Services Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">
          Call Center Survey Services We Provide
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="space-y-3 p-6">
              <h3 className="text-xl font-bold">Employee Satisfaction Surveys</h3>
              <p>
                We help you measure employee involvement levels and productivity
                by assessing attrition, team bonding, HR behavior, and more. A
                satisfied workforce means better business outcomes.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-3 p-6">
              <h3 className="text-xl font-bold">Customer Satisfaction Surveys</h3>
              <p>
                Understand your customers’ needs and measure how satisfied they
                are with your services. Gain actionable insights to improve
                operations, activities, and customer relationships.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 shadow">
          <h3 className="text-xl font-bold mb-2">
            Other Call Center Surveys We Offer
          </h3>
          <p>
            B2B/B2C surveys, follow-up surveys, group surveys, marketing surveys,
            investment surveys, CATI surveys, market research surveys, and more.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">
          Call Center Survey Process Steps We Follow
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "Gathering of Data",
              desc: "We define objectives, track target audiences, and collect responses via web, email, or telephonic surveys, syndicated research, and more.",
            },
            {
              step: "02",
              title: "Integration of Data",
              desc: "We clean, organize, and structure responses for easy analysis, ensuring accurate tabulation and statistical readiness.",
            },
            {
              step: "03",
              title: "Representation of Data",
              desc: "Using tools like Excel and SPSS, we analyze, test, and tabulate results, delivering them in formats such as PDF, Word, XML, or PowerPoint.",
            },
          ].map((item) => (
            <Card key={item.step}>
              <CardContent className="p-6 space-y-3">
                <div className="text-2xl font-bold text-blue-600">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p>{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">
          Benefits of Outsourcing Call Center Surveys to Nimble Acuity
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[ 
            "Custom-priced Call Center Surveys",
            "Advanced Infrastructure with latest systems and VPNs",
            "ISO/IEC 27001:2022 Certified for strict data security",
            "Experienced Research Team with 300+ experts",
            "100% Project Security with compliance standards",
            "Faster Turnaround Time with flexible resources",
            "Scalable Solutions to adapt to your needs",
            "24/7 Global Customer Support",
          ].map((benefit, idx) => (
            <Card key={idx}>
              <CardContent className="p-6 text-center font-medium">
                {benefit}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">
          Other Services You May Be Interested In
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[ 
            "Industry Analysis Services",
            "Market Research Surveys",
            "Market Feasibility Analysis",
            "Marketing Questionnaire Design",
          ].map((service, idx) => (
            <Card key={idx}>
              <CardContent className="p-6 text-center font-medium">
                {service}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 bg-blue-600 text-white rounded-2xl space-y-4">
        <h2 className="text-3xl font-bold">
          Ready to Enhance Your Business with Call Center Surveys?
        </h2>
        <p>
          Partner with Nimble Acuity today and gain actionable insights to
          improve customer experience and brand growth.
        </p>
        <Button size="lg" variant="secondary" className="rounded-2xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
