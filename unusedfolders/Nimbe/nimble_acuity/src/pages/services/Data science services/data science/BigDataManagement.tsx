import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Layers, RefreshCcw, Cloud, Shield, Users, HardDrive, Activity, LifeBuoy } from "lucide-react";
import DSMainMenu from "../mainmenu";

const BigDataManagement: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto space-y-12">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Nimble Big Data Management Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Unleash the ultimate power of your data and make strategic business
          decisions for maximum growth and profitability.
        </p>
      </section>

      {/* Overview */}
      <section className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Data is the lifeline of every business. To help organizations unleash
          new opportunities and make intelligent, informed decisions, data must
          be clear, consistent, and accurate.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Nimble Acuity (Nimble Acuity) helps organizations tap into the power of big
          data for unmatched business intelligence. Our agile data management
          practices, infused with AI-powered tools and technologies, transform
          terabytes or even petabytes of big data into an ecosystem that’s
          searchable, controllable, and accessible.
        </p>
      </section>

      {/* Services */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Our Big Data Management Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Database, title: "Data Collection & Maintenance", desc: "From capturing and cleaning data to storing and analyzing it." },
            { icon: Activity, title: "Big Data Quality Management", desc: "Ensure accuracy, consistency, and completeness through rigorous checks." },
            { icon: Layers, title: "Big Data Metadata Management", desc: "Design strategies and metrics to manage metadata effectively." },
            { icon: RefreshCcw, title: "Data Integration", desc: "Unify data from multiple sources into a single cohesive system." },
            { icon: Cloud, title: "Data Migration", desc: "Seamlessly migrate data infrastructure across platforms for anytime access." },
            { icon: HardDrive, title: "Enterprise Data Management & Storage", desc: "Flexible storage solutions that scale with growing data volumes." },
            { icon: Users, title: "Data Architecture Optimization", desc: "Reconstruct and redesign data ecosystems for smooth information flow." },
            { icon: LifeBuoy, title: "Disaster Recovery", desc: "Tools and procedures to recover quickly after disruptive events." },
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

      {/* Why Nimble */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Nimble Big Data Services to Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "Certified Experts", desc: "Instant access to highly experienced and certified data experts." },
            { icon: Layers, title: "End-to-End Solutions", desc: "Holistic range of services covering every aspect of data management." },
            { icon: Database, title: "Customized Services", desc: "Tailored solutions designed specifically to meet your business needs." },
            { icon: Shield, title: "Complete Data Security", desc: "Encrypted servers and strict data protection norms ensure safety." },
            { icon: RefreshCcw, title: "Hassle-Free Support", desc: "24/7 support to resolve your queries quickly and effectively." },
          ].map((benefit, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6 space-y-3 flex flex-col items-center text-center">
                <benefit.icon className="w-10 h-10 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-700">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Streamlined Inventory Management
              </h3>
              <p className="text-gray-600">
                Helped a top electronics firm optimize inventory with
                cost-effective RPA solutions.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Chart Extraction for Healthcare
              </h3>
              <p className="text-gray-600">
                Assisted a healthcare provider with secure and efficient chart
                extraction using RPA.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-50 py-10 rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Nimble Big Data Services to Nimble Acuity
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Make big data work to your advantage. Nimble data management
          services to Nimble Acuity and level up your data practices with ease and
          success.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default BigDataManagement;
