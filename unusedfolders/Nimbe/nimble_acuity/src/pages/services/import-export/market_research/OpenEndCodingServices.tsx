import { motion } from "framer-motion";
import { CheckCircle, Globe, Lock, Users, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function OpenEndCodingServices() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
       <NavigationMenu/>
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Nimble Open-end Coding Market Research Services
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Gather actionable and quantifiable insights from audience responses. Nimble open-end coding market research to Nimble Acuity at just $14/hour.
        </p>
        <Button size="lg" variant="secondary">Get Started</Button>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-center">Overview</h2>
        <p className="text-gray-700 text-center">
          Open-end coding helps companies analyze responses such as words, phrases, voices, images, and ideas. At Nimble Acuity, we deliver open-end coding services across 65 languages annually for social media, survey forms, CRMs, IVR, feedback platforms, and websites — with speed, accuracy, and cultural expertise.
        </p>
      </section>

      {/* Services Offered */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">Open-end Coding Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Customer Response Analysis",
              desc: "Examine consumer response data from multiple sources to derive insights for strategic marketing decisions.",
            },
            {
              title: "Multi-lingual Coding Services",
              desc: "Expert coding in 65+ languages including English, Chinese, French, Hindi, Spanish, and more.",
            },
            {
              title: "Translation Memory Services",
              desc: "Leverage advanced software for consistent, cost-effective, and fast translation.",
            },
            {
              title: "Document Proofreading",
              desc: "Stringent proofreading ensures accuracy, relevance, and adherence to quality standards.",
            },
            {
              title: "Online Validation",
              desc: "Thorough validation of survey responses and coding documents for accuracy and layout.",
            },
            {
              title: "Transcription Services",
              desc: "Convert audio responses into accurate, useful data across multiple file formats.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Application Areas */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Key Application Areas</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
          {[
            "Social media comments & feedback",
            "Messages & comments from websites",
            "Unstructured survey responses",
            "IVR recordings & podcasts",
            "Telephonic interviews (CATI, CAPI)",
            "Survey forms & comment cards",
            "Customer feedback",
            "CRM data",
            "Images",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle className="text-blue-600 w-5 h-5 mt-1" /> {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">Our Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Collecting Project Information",
            "Data Retrieval",
            "Code Frame Development",
            "Open-end Coding",
            "Quality Assurance",
            "Project Delivery",
          ].map((step, idx) => (
            <Card key={idx} className="rounded-2xl border shadow-sm">
              <CardContent className="p-6 text-center">
                <span className="text-3xl font-bold text-blue-600">{idx + 1}</span>
                <p className="mt-3 text-gray-700 font-medium">{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">Why Choose Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Clock, title: "Quicker Turnarounds", desc: "We meet the most challenging deadlines without compromising quality." },
            { icon: DollarSign, title: "Flexible Pricing", desc: "Transparent, cost-effective pricing tailored to your project scope." },
            { icon: Lock, title: "High Data Security", desc: "ISO 27001-compliant safety standards ensure full confidentiality." },
            { icon: CheckCircle, title: "Quality Assurance", desc: "Multi-stage quality checks guarantee accuracy and reliability." },
            { icon: Users, title: "Dedicated Team", desc: "Experienced coders, linguists, and analysts with 8+ years avg. experience." },
            { icon: Globe, title: "24/7 Support", desc: "Global delivery centers provide around-the-clock assistance." },
          ].map((feature, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6 text-center">
                <feature.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-semibold">Testimonials</h2>
          <p className="italic text-gray-700 max-w-2xl mx-auto">
            “The services that Nimble Acuity provided helped us achieve substantial cost and time savings on several difficult projects.”
          </p>
          <p className="font-semibold">Senior Vice President, Automotive & Transportation Industry Solutions Group</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Nimble Open-end Coding Services to Nimble Acuity</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          With 26+ years of experience, ISO certification, and a skilled team, Nimble Acuity ensures accurate coding, improved decision-making, and higher ROI. Contact us today to discuss your requirements.
        </p>
        <Button size="lg">Contact Us Now</Button>
      </section>
    </div>
  );
}
