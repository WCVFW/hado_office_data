import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  Headphones,
  Phone,
  Users,
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  Languages,
  Clock,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

export default function CloudContactCenterServices() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Cloud Contact Center Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Scale your contact center seamlessly with cloud-powered solutions,
          ensuring agility, security, and exceptional customer satisfaction.
        </p>
        <Button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200">
          Get in Touch
        </Button>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Cloud Contact Center Services
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Does the growing number of omnichannel encounters complicate your
          processes, impacting customer satisfaction and operational
          performance? Are you facing trouble scaling your call center
          operations, with rising costs holding you back? Then, it’s the right
          time to move towards a cloud-based contact center. Nimble Acuity helps
          organizations transition seamlessly to the cloud with Lean Six
          Sigma–based workflows that guarantee scalable and reliable results.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Cloud Contact Center Services We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud-based Inbound Call Center Services",
                icon: Headphones,
                desc: "Migrate your inbound contact center to the cloud effortlessly for improved efficiency and scalability.",
              },
              {
                title: "Cloud-based Outbound Call Center Services",
                icon: Phone,
                desc: "DMAIC-driven migrations ensure reduced operational variance and repeatable agent performance.",
              },
              {
                title: "Cloud-based Telemarketing Services",
                icon: Users,
                desc: "High-quality lead management, product promotion, database selling, and debt collection.",
              },
              {
                title: "Cloud-based Super Agent Services",
                icon: ShieldCheck,
                desc: "Deliver secure, error-free, and reliable client interactions with super-agent capabilities.",
              },
              {
                title: "Cloud-based Customer Support",
                icon: Cloud,
                desc: "Technical support, live chat, toll-free, IT support, and social media engagement powered by the cloud.",
              },
              {
                title: "BPaaS",
                icon: BarChart3,
                desc: "Eliminate inefficiencies with CVA-BVA-NVA analysis while improving responsiveness and scalability.",
              },
            ].map((service, i) => (
              <Card key={i} className="shadow-md hover:shadow-xl transition">
                <CardHeader className="flex items-center gap-3">
                  <service.icon className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cloud Contact Centers */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Cloud-based Contact Centers?
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "Supports multiple customer interaction channels in one place",
              "Easily scalable up or down based on business needs",
              "Centralized control across multiple locations",
              "Add new channels and functionalities anytime",
              "High flexibility for current and future needs",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1" />
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Nimble Acuity for Cloud Contact Center Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Flexible Pricing Options",
                icon: BarChart3,
                desc: "Cost-effective solutions aligned with CTQ results, ensuring quality at the right price.",
              },
              {
                title: "Best Infrastructure",
                icon: Cloud,
                desc: "Access to cutting-edge cloud tools, world-class spaces, and uninterrupted networks.",
              },
              {
                title: "Multilingual Services",
                icon: Languages,
                desc: "Serve customers in multiple languages with experienced global support teams.",
              },
              {
                title: "Information Security",
                icon: ShieldCheck,
                desc: "ISO/IEC 27001:2022 certified to safeguard client and customer data with the highest standards.",
              },
              {
                title: "Quick Turnaround Time",
                icon: Clock,
                desc: "Delivery centers across time zones ensure fast, reliable execution and support.",
              },
              {
                title: "24/7 Availability",
                icon: Headphones,
                desc: "Round-the-clock availability via phone, email, and chat for all client needs.",
              },
            ].map((reason, i) => (
              <Card key={i} className="shadow-md hover:shadow-xl transition">
                <CardHeader className="flex items-center gap-3">
                  <reason.icon className="h-8 w-8 text-blue-600" />
                  <CardTitle>{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{reason.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
          <blockquote className="italic text-lg text-gray-700">
            “We only use Nimble Acuity for marketing purposes and no one else due
            to the extremely high levels of professionalism and clear
            communication that they deliver consistently.”
          </blockquote>
          <p className="mt-4 font-semibold">
            – Marketing Director, Spray Foam Insulation Company, UK
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Transform Your Call Center with Nimble Acuity
        </h2>
        <p className="mb-6 max-w-3xl mx-auto">
          With 26+ years of expertise and Lean Six Sigma-certified professionals,
          Nimble Acuity ensures verifiable improvements in service quality, cycle
          time reduction, and customer satisfaction.
        </p>
        <Button className="bg-white text-indigo-800 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
