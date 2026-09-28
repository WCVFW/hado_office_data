import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, BarChart3, Users, Shield } from "lucide-react";
import NavigationMenu from "../MegaMenu";

const ABMServicesPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Account-based Marketing Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Exceed your sales target with our multi-touch ABM solutions. Contact
          us for higher-quality leads and more conversions!
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          Our ABM services aim to identify decision-makers in targeted companies
          who may be researching your products and services. We then customize
          sales programs and marketing messages to engage and influence those
          personnel. Our experts track productive accounts and optimize campaigns
          on the go to ensure the best outcomes.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The direct benefits of our services are targeted marketing,
          higher-quality leads, and better chances of conversion. We accelerate
          your revenue by focusing only on accounts that can bring in the most
          business.
        </p>
      </section>

      {/* Solutions Offered */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Account-based Marketing Solutions We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "High-Value Accounts Identification",
              desc: "We leverage BI technologies to identify and prioritize accounts using firmographic data.",
              icon: Target,
            },
            {
              title: "Account Research for Target Marketing",
              desc: "We conduct in-depth research to shortlist decision-makers and key influencers.",
              icon: Users,
            },
            {
              title: "User-centric Content Creation",
              desc: "We create personalized content addressing industry challenges to influence accounts.",
              icon: BarChart3,
            },
            {
              title: "Content Marketing Across Channels",
              desc: "We push your content across the most effective channels for maximum impact.",
              icon: CheckCircle,
            },
            {
              title: "Campaign Review and Analysis",
              desc: "We review and optimize campaigns while providing detailed reports.",
              icon: Shield,
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Nimble Acuity for ABM Services?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Flexible Pricing",
              desc: "Cost-effective and scalable packages for small, medium, and large businesses.",
            },
            {
              title: "Information Security",
              desc: "We are ISMS-certified and ensure strict confidentiality with NDAs.",
            },
            {
              title: "Experienced Team",
              desc: "Our ABM experts use the latest tools and techniques for best results.",
            },
            {
              title: "Quality Services",
              desc: "ISO-certified organization delivering reliable and effective ABM services.",
            },
            {
              title: "Global Infrastructure",
              desc: "10+ delivery centers worldwide equipped with advanced technologies.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-md rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg max-w-3xl mx-auto text-gray-700">
          “Let me thank you for the professional way in which you are managing
          the project and meeting our deadlines. Nimble Acuity has been a
          tremendous resource for our team.”
        </blockquote>
        <p className="mt-4 font-semibold">— CEO, Technology Company, UK</p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Account-based Marketing Services to Nimble Acuity
        </h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          As a premier ABM service provider, we help you generate accurate
          leads, engage prospects, and empower sales teams to close deals faster.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default ABMServicesPage;
