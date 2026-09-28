import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, PhoneCall, Users, Calendar, Headphones, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CCmainmenu from "../CCmainmenu";

const AppointmentSetting: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: "B2B Appointment Setting",
      description:
        "We leverage advanced CRM and analytics to nurture business relationships, improve follow-ups, and maximize ROI.",
    },
    {
      icon: Users,
      title: "B2C Appointment Setting",
      description:
        "Targeted consumer outreach with analytics-driven insights, ensuring higher conversion rates and personalized interactions.",
    },
    {
      icon: Headphones,
      title: "Call Answering Services",
      description:
        "24/7 multilingual call answering support to make your business always accessible and reliable.",
    },
    {
      icon: PhoneCall,
      title: "Cold Calling Services",
      description:
        "Persuasive, VoC-driven cold calling with structured scripts and continuous performance tracking.",
    },
    {
      icon: Calendar,
      title: "Insurance Appointment Setting",
      description:
        "Specialized insurance appointment scheduling with trained agents and pre-briefed sales teams.",
    },
    {
      icon: Users,
      title: "Virtual Assistant Services",
      description:
        "Support for social media, customer queries, and admin tasks aligned with CVA/BVA prioritization models.",
    },
    {
      icon: BarChart,
      title: "Lead Qualification",
      description:
        "Predictive analytics to identify high-potential leads and provide sales-ready profiles for your team.",
    },
    {
      icon: Calendar,
      title: "Inbound & Outbound Appointment Setting",
      description:
        "Multi-channel inbound capture and targeted outbound outreach, ensuring streamlined scheduling success.",
    },
  ];

  const roadmap = [
    "Understanding Client Objectives",
    "Identifying Target Audience",
    "Lead Generation & Qualification",
    "Appointment Confirmation & Scheduling",
    "Post-appointment Follow-up & Nurturing",
    "Reporting & Analytics",
  ];

  const differentiators = [
    { title: "Exceptional Quality", desc: "ISO 9001-certified controls with SOP adherence for error-free appointment quality." },
    { title: "World-class Infrastructure", desc: "CRM and dialer tech deployed post DMAIC readiness review for flawless performance." },
    { title: "Data Security Assurance", desc: "ISMS-certified & GDPR-compliant, ensuring confidentiality of all data." },
    { title: "Scalable Services", desc: "Flexible capacity planning and takt-time balancing to scale rapidly." },
    { title: "Experienced Team", desc: "Skilled appointment setters combined with advanced technology and quality checks." },
    { title: "24/7 Global Support", desc: "Round-the-clock multilingual assistance across phone, chat, and email." },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Outsource Appointment Setting Services
        </motion.h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Revamp your pipeline with qualified sales appointments. Capture and engage more leads with our
          Lean Six Sigma-powered appointment setting services.
        </p>
        <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
          Get a Free Quote
        </Button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Simplify Appointment Scheduling</h2>
        <p className="text-gray-600 max-w-4xl mx-auto">
          We combine automation, CRM integration, and Lean Six Sigma (DMAIC) methodologies to eliminate delays,
          minimize double-bookings, and ensure seamless scheduling. Focus on conversions while we manage
          the process.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <Card key={idx} className="shadow-lg hover:shadow-xl transition rounded-2xl">
              <CardContent className="p-6 text-center">
                <s.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-600">{s.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 px-6 md:px-20 bg-blue-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Roadmap to Success</h2>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6">
          {roadmap.map((step, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 w-full md:w-1/3"
            >
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="font-medium">{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((d, idx) => (
            <Card key={idx} className="shadow-lg hover:shadow-xl transition rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{d.title}</h3>
                <p className="text-gray-600">{d.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto italic text-gray-700">
          “We employed this team to contact potential leads and set appointments for our sales reps. They
          delivered consistently and showed month-over-month performance growth.”
        </blockquote>
        <p className="mt-4 font-semibold text-gray-800">— Director of Sales Operations, USA</p>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-indigo-700 to-blue-600 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Maximize Your Sales Efforts</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Partner with us for flexible, scalable, and transparent appointment setting services tailored to your
          business needs.
        </p>
        <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default AppointmentSetting;
