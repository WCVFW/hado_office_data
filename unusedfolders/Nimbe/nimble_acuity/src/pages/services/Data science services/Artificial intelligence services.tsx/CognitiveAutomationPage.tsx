import React from "react";
import { Brain, Cpu, Workflow, LineChart, ShieldCheck, Zap, Layers, Database, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSMainMenu from "../mainmenu";

const CognitiveAutomationPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble Cognitive Process Automation Services</h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Embrace the future with our Cognitive Process Automation services. Integrate AI, Machine Learning, and Python-based frameworks to optimize processes and personalize customer interactions.
        </p>
        <Button size="lg" className="rounded-2xl bg-white text-blue-700 font-semibold hover:bg-gray-100">
          Contact Us Today
        </Button>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">Document Processing Automation Platform</h3>
              <p className="text-gray-600 mb-4">
                A leading banking organization partnered with us to develop a big data platform to automate document processing. Our solution improved efficiency and accuracy.
              </p>
              <Button variant="link">Read More</Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">Loan Quality Investment (LQI) Automation</h3>
              <p className="text-gray-600 mb-4">
                We helped a top US mortgage company automate the LQI process. Our solution boosted accuracy, reduced FTEs, and lowered processing time.
              </p>
              <Button variant="link">Read More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Cognitive Automation Services We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Workflow, title: "Robotic Process Automation (RPA)", desc: "Seamless integration with ERP, CRM, and existing systems." },
            { icon: Brain, title: "Applied Intelligence", desc: "Automate complex processes using advanced ML algorithms." },
            { icon: Database, title: "Distributed Ledger Technology", desc: "Transparent, secure, and auditable decentralized transactions." },
            { icon: Globe, title: "Conversational Bots", desc: "Multi-language bots to engage with global customers." },
            { icon: LineChart, title: "Process Mining", desc: "Advanced data visualization to identify bottlenecks and improve workflows." },
            { icon: Zap, title: "Automation as a Service", desc: "Subscription-based scalable automation solutions." }
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6 text-center">
                <service.icon className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
        <ol className="space-y-8">
          {["Project Blueprinting", "Data Pre-processing", "Intelligent Solution Development", "Precision Testing", "Go-Live and Support"].map((step, idx) => (
            <li key={idx} className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold mr-4">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{step}</h3>
                <p className="text-gray-600 text-sm">Detailed execution to ensure accuracy, scalability, and business impact.</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Industries We Cater To</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {["Retail & E-commerce", "Transportation & Logistics", "Finance & Banking", "Healthcare", "Insurance", "IT & Telecom", "Legal", "Manufacturing"].map((sector, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg">{sector}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What Sets Us Apart</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Efficiency in Process Integration",
            "Decreased Cycle Times",
            "High Accuracy Validation with Cognitive Engine",
            "Significant Cost Reductions"
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-start">
              <ShieldCheck className="w-6 h-6 text-blue-700 mt-1 mr-3" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">Transform Your Business with Smart Solutions</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Embark on your automation journey with us. Our Cognitive Process Automation solutions help you save costs, accelerate delivery, and scale with ease.
        </p>
        <Button size="lg" className="bg-white text-blue-700 font-semibold rounded-2xl hover:bg-gray-100">
          Get Started Now
        </Button>
      </section>
    </div>
  );
};

export default CognitiveAutomationPage;
