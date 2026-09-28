import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, ShieldCheck, Cpu, BarChart3, CheckCircle } from "lucide-react";
import DSMainMenu from "../mainmenu";

const AnomalyDetection: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Anomaly Detection Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Detect anomalies at the granular level to expose indicators of
          compromise in real-time and act quickly to avoid disruptions.
        </p>
        <Button size="lg" variant="secondary">
          Get Started
        </Button>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg mb-4">
          Save time and fix problems as they surface with Nimble Acuity’s anomaly
          detection services. Our systems use inference engines to detect
          unusual patterns in real-time—without requiring labeled training data.
          Alerts are delivered via email, SMS, or third-party tools, so you can
          respond immediately.
        </p>
      </section>

      {/* Solutions */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Custom Anomaly Detection Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Cpu,
              title: "Cloud Anomaly Detection",
              desc: "Deep learning models monitor cloud infrastructure with real-time alerts and anomaly reports.",
            },
            {
              icon: Activity,
              title: "Edge Anomaly Detection",
              desc: "Intelligent platforms address anomalies locally to minimize latency and enhance resilience.",
            },
            {
              icon: BarChart3,
              title: "Time Series Anomaly Detection",
              desc: "Bayesian methods analyze time-based data to anticipate and mitigate potential risks.",
            },
            {
              icon: ShieldCheck,
              title: "Multivariate Anomaly Detection",
              desc: "Advanced frameworks detect hidden correlations in complex datasets for reliable outcomes.",
            },
            {
              icon: Activity,
              title: "Univariate Anomaly Detection",
              desc: "Outlier detection in single-variable datasets with seasonal decomposition techniques.",
            },
            {
              icon: Cpu,
              title: "Predictive Anomaly Detection",
              desc: "Prognostic models analyze historical data to foresee and address future anomalies.",
            },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <item.icon className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* More Services */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">More Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Deep Learning Anomaly Detection",
            "AI Anomaly Detection",
            "IoT Anomaly Detection",
            "Supervised Anomaly Detection",
          ].map((service, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Progressive Approach to Anomaly Detection
        </h2>
        <ol className="space-y-6">
          {[
            "Goals & Metrics Identification – define KPIs and impact areas.",
            "Data Ingestion & Discovery – collect and analyze cloud, IoT, and system data.",
            "Feature Engineering – design relevant features for anomalies.",
            "Algorithm Tuning – apply ensemble/hybrid models for detection.",
            "Model Deployment & Validation – implement in scalable environments.",
            "Continuous Monitoring – feedback loops for ongoing refinement.",
          ].map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Sectors */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Sectors We Serve</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            "Healthcare",
            "Manufacturing",
            "Retail",
            "Banking",
            "Financial Services",
            "E-commerce",
            "IT",
            "Telecommunications",
            "Cybersecurity",
            "Insurance",
          ].map((sector, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">{sector}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Acuity for Anomaly Detection?
        </h2>
        <ul className="space-y-4">
          {[
            "Customizable anomaly dashboards for real-time monitoring.",
            "Proactive threat detection using predictive analytics.",
            "Robust enterprise-grade data security protocols.",
            "Continuous model improvement with retraining support.",
            "Specialized 24/7 anomaly detection support team.",
            "Proven track record in high-accuracy deviation analysis.",
          ].map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>
                Digital Transformation for an Automotive Firm
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our RPA solutions empowered an African automotive firm to embrace
                digital transformation cost-efficiently.
              </p>
              <Button variant="link" className="mt-3">
                Read the Case Study
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Reduced Onboarding Time for LA Bank</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Delivered automation solutions to a leading LA-based bank,
                reducing client onboarding time significantly.
              </p>
              <Button variant="link" className="mt-3">
                Read the Case Study
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Anomaly Detection to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Detect and respond to irregularities with advanced ML algorithms.
          Ensure compliance, reduce risks, and achieve operational excellence
          with tailored anomaly detection solutions.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default AnomalyDetection;
