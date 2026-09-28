import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Layers, Server, Shield, Clock, Users } from "lucide-react";
import DSMainMenu from "../mainmenu";

const ClouderaDataScienceWorkbench: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto space-y-12">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Nimble Cloudera Data Science Workbench Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Cloudera Data Science Workbench allows you to implement a machine learning
          project's whole lifetime, from research through deployment, at affordable rates
          through us.
        </p>
      </section>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
        <p className="text-gray-600 leading-relaxed">
          Cloudera Data Science Workbench is a scalable, self-service corporate data
          science system that provides data scientists a way to manage their analytic
          workflows. It allows machine learning projects to move faster from discovery
          to deployment while enabling teams to harness Python, R, or Scala in secure
          Hadoop environments.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Cloudera Data Science Workbench Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold text-gray-700">
                For IT Professionals
              </h3>
              <p className="text-gray-600">
                We accelerate the adoption of data science while reducing risk and
                overhead costs. Get secure deployment options on-premises or on-cloud
                with unified governance.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold text-gray-700">
                For Data Scientists
              </h3>
              <p className="text-gray-600">
                Experiment with agility across Python, R, or Scala using on-demand
                computation. Gain safe access to Apache Impala™ and Apache Spark™ while
                accelerating deployment with replicable research.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Cloudera Data Science Workbench Process We Follow
        </h2>
        <ol className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { step: "01", title: "Data Exploration" },
            { step: "02", title: "Analyze" },
            { step: "03", title: "Training" },
            { step: "04", title: "Deploy" },
          ].map((item, idx) => (
            <li
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center"
            >
              <span className="text-2xl font-bold text-blue-600">{item.step}</span>
              <p className="mt-2 font-medium text-gray-700">{item.title}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Nimble Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Nimble to Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Layers, title: "Cost-effective" },
            { icon: Shield, title: "ISO-certified" },
            { icon: Server, title: "Data Security" },
            { icon: CheckCircle, title: "Quality Certified" },
            { icon: Users, title: "Professional Staff" },
            { icon: Clock, title: "Quick TAT" },
          ].map((item, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6 flex flex-col items-center space-y-3">
                <item.icon className="w-10 h-10 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Streamlined Inventory Management
              </h3>
              <p className="text-gray-600">
                Helped a top electronics firm optimize inventory with cost-effective RPA
                solutions.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Chart Extraction for Healthcare
              </h3>
              <p className="text-gray-600">
                Assisted a healthcare provider with secure and efficient chart extraction
                using RPA.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-50 py-10 rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to Harness Cloudera Data Science Workbench?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We deliver tailored Cloudera solutions at scale across Asia Pacific and beyond.
          Contact us today for a free evaluation and discover how we can align with your
          success.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
          Get a Free Evaluation
        </button>
      </section>
    </div>
  );
};

export default ClouderaDataScienceWorkbench;
