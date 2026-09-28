import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  BarChart,
  FolderKanban,
  LineChart,
  Cloud,
  Layers,
  Plug,
  LifeBuoy,
  DollarSign,
  Settings,
  Wrench,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const DataAnalyticsAppDev: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto space-y-12">
      {/* Hero */}
      <DSMainMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Nimble Data Analytics Application Development Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We use big data analytics application development and integration
          services to accelerate growth and improve your business operations.
        </p>
      </section>

      {/* Intro */}
      <section className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Big data application development is hugely beneficial in today’s
          business landscape. Its integrations dramatically increase operational
          effectiveness while also generating significant revenue.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Nimble Acuity’s analytics app development engineers specialize in
          designing and implementing software that harnesses the full power of
          big data solutions.
        </p>
      </section>

      {/* Services */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Data Analytics Application Development Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Database,
              title: "Data Storage",
              desc: "Efficiently store, manage, and retrieve large volumes of data tailored to speed, size, and variety.",
            },
            {
              icon: BarChart,
              title: "Data Visualization",
              desc: "Present critical statistics in consolidated, interactive dashboards for better decision-making.",
            },
            {
              icon: FolderKanban,
              title: "Data Management",
              desc: "Migrate, store, replicate, and analyze data in secure, well-organized environments.",
            },
            {
              icon: LineChart,
              title: "Predictive Analysis",
              desc: "Leverage machine learning and statistical models to uncover insights and forecast outcomes.",
            },
            {
              icon: Cloud,
              title: "Cloud Computing",
              desc: "Private or hybrid cloud options to scale storage based on budget and security needs.",
            },
            {
              icon: Layers,
              title: "Big Data Application Development",
              desc: "Deploy deep learning algorithms to ensure highly accurate forecasts and insights.",
            },
            {
              icon: Plug,
              title: "Custom Big Data Integration",
              desc: "Unify data from multiple sources into a single, cohesive platform for holistic insights.",
            },
            {
              icon: LifeBuoy,
              title: "Maintenance & Support",
              desc: "Ongoing support, updates, and periodic checks to ensure smooth operations.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6 space-y-3">
                <service.icon className="w-10 h-10 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-700">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Choose Nimble Acuity for Analytics App Development?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: DollarSign,
              title: "Cost-effective Solutions",
              desc: "Flexible pricing models designed to fit different business budgets.",
            },
            {
              icon: Settings,
              title: "Individual Pricing",
              desc: "Choose time-and-materials or fixed-price models tailored to your needs.",
            },
            {
              icon: Wrench,
              title: "Latest Analytics Tools",
              desc: "Cutting-edge technologies ensure expert, future-ready solutions.",
            },
          ].map((benefit, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6 space-y-3 flex flex-col items-center text-center">
                <benefit.icon className="w-10 h-10 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-700">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Big Data Platform for Document Processing
              </h3>
              <p className="text-gray-600">
                Helped a banking firm automate document processing workflows by
                implementing a big data platform.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Analytics Platform for a Finance Provider
              </h3>
              <p className="text-gray-600">
                Designed and deployed an open-source analytics platform for
                structured and unstructured data with quick turnaround.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-50 py-10 rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Nimble Analytics Application Development to Nimble Acuity
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Get expert solutions for data gathering, processing, integration, and
          analytics. Make optimal decisions, uncover insights, and leverage your
          massive data pools for growth.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default DataAnalyticsAppDev;
