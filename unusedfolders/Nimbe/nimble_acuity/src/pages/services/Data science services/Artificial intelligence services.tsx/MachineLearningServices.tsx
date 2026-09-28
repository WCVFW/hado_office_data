import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Cpu, Brain, Layers, Database } from "lucide-react";
import DSMainMenu from "../mainmenu";

const MachineLearningServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble Machine Learning Services</h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Leverage streamlined processes to build, train, and deploy high-quality learning models with our Machine Learning Services
        </p>
        <Button size="lg" variant="secondary">Get Started</Button>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <p className="text-lg mb-6">
          Enterprises have leveraged the power of machine learning for multiple functions - from providing better customer experience to automating routine tasks.
          Fast ML deployment enhances collaboration, efficiency, and decision-making. 
        </p>
        <p className="text-lg">
          As a leading ML service provider, we help clients detect fraud, reduce costs, optimize operations, and improve customer satisfaction.
        </p>
      </section>

      {/* Solutions */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Machine Learning Solutions We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Cpu, title: "ML Development Services", desc: "Intelligent apps with data visualization, predictive analytics, and model training." },
            { icon: Brain, title: "ML Consulting", desc: "Support enterprise ML initiatives, root-cause analysis, forecasts, and data mining." },
            { icon: Layers, title: "Computer Vision", desc: "Pre-built AI models for fast image analysis, recognition, and insights." },
            { icon: Database, title: "Recommender Systems", desc: "Boost sales with smart recommendations based on customer history and preferences." },
            { icon: Brain, title: "ML Model Development", desc: "Guidance through data collection, evaluation protocols, and benchmark models." },
            { icon: Cpu, title: "AWS ML Services", desc: "Full AWS ML toolset for predictive applications and workflow optimization." },
            { icon: Cpu, title: "Azure ML Services", desc: "Streamline workflows, lifecycle management, and deployment with Azure ML." },
            { icon: Database, title: "SQL Server ML", desc: "Integrate Python & R with SQL Server for predictive analytics and automation." },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <item.icon className="w-10 h-10 text-indigo-600 mb-2" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="link">Click for More Services</Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
        <ul className="space-y-4">
          {[
            "ISO-certified AI and data science firm providing rigorously tested services",
            "World-class infrastructure for cutting-edge ML solutions",
            "Use of the latest ML systems and software for robust results",
            "Flexible, affordable pricing to suit diverse requirements",
          ].map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Additional Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Deep Learning Services",
            "Natural Language Processing Services",
            "Artificial Intelligence Services",
            "Robotic Process Automation Services",
          ].map((service, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Customer Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Document Processing Automation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A leading banking firm automated document processing with a big-data platform, reducing turnaround drastically.
              </p>
              <Button variant="link" className="mt-3">Read the case study</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Open Source Analytics Workbench</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We designed and implemented an open-source analytics platform for a finance provider, enabling faster insights.
              </p>
              <Button variant="link" className="mt-3">Read the case study</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-purple-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Nimble Machine Learning Services to Us</h2>
        <p className="max-w-3xl mx-auto mb-6">
          From fraud detection to predictive maintenance, our ML services help optimize workflows, improve decision-making, and reduce costs.
        </p>
        <Button size="lg" variant="secondary">Contact Us Today</Button>
      </section>
    </div>
  );
};

export default MachineLearningServices;
