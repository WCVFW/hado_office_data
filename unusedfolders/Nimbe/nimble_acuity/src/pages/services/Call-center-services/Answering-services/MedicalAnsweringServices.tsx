import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

const MedicalAnsweringServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Medical Answering Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Focus on Care, Amplify Communications. Leverage our 24/7 Medical
          Answering Services to offer unparalleled care and support to your
          patients.
        </p>
      </section>

      {/* About */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Nimble for Medical Answering?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Managing high call volumes with consistency and reduced process
            variation is a CTQ requirement for modern healthcare practices. Our
            Lean Six Sigma-aligned workflows minimize missed interactions and
            streamline front-end load balancing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            With deep knowledge of HIPAA requirements, our tailor-made healthcare
            answering services ensure compliance, patient privacy, and improved
            staff utilization — all while enhancing efficiency and patient care.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-3">
            Key Benefits We Deliver
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>HIPAA-Compliant Secure Messaging</li>
            <li>24/7 Healthcare Answering Service</li>
            <li>Medical Scheduling & Appointment Setting</li>
            <li>After-Hours Answering Services</li>
            <li>Live Call Answering & Chat Support</li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Medical Answering Solutions We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Medical Office Answering",
              desc: "Boost efficiency, patient satisfaction, and reduce cancellations with our office answering services.",
            },
            {
              title: "Physician Answering",
              desc: "Elevate patient care, minimize missed calls, and optimize practice efficiency.",
            },
            {
              title: "Doctors Answering",
              desc: "Manage high call volumes effectively to improve operations and patient experiences.",
            },
            {
              title: "Virtual Medical Assistant",
              desc: "Streamline workflows, improve patient care, and enhance efficiency with virtual support.",
            },
            {
              title: "Medical Appointment Setting",
              desc: "Optimize scheduling accuracy using Lean charts and reduce no-shows through real-time rescheduling.",
            },
            {
              title: "Patient Helpdesk Services",
              desc: "Establish efficient response systems to ensure seamless patient communication.",
            },
          ].map((service, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Clientele */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Clientele We Serve
        </h2>
        <div className="flex flex-wrap gap-4 justify-center text-gray-700">
          {[
            "Physicians",
            "Doctors",
            "Mental Health",
            "Hospitals",
            "Dental Offices",
            "Nursing Homes",
            "Pharmaceutical Companies",
            "Chiropractors",
            "Medical Clinics",
            "Podiatrists",
            "Dermatologists",
            "Laboratories",
            "Pediatricians",
            "Plastic Surgeons",
          ].map((item, i) => (
            <span
              key={i}
              className="bg-gray-100 px-4 py-2 rounded-lg shadow text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Nimble as Your Medical Answering Partner?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Quality Assurance",
              desc: "Audit-ready dashboards aligned with DMAIC control phase to validate improvements.",
            },
            {
              title: "Latest Infrastructure",
              desc: "Cutting-edge technology and skilled resources delivering beyond-satisfaction outcomes.",
            },
            {
              title: "Data Security",
              desc: "HIPAA compliance, confidentiality, and international security standards ensured.",
            },
            {
              title: "Operational Transparency",
              desc: "Utmost clarity, efficiency, and seamless communication in every interaction.",
            },
            {
              title: "Cost-Effective Pricing",
              desc: "CVA-BVA-NVA mapped pricing ensures you only pay for outcomes tied to CTQs.",
            },
          ].map((benefit, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Call Center Services for Healthcare Provider
              </h3>
              <p className="text-gray-700 mb-4">
                We provided inbound call center support services to a Berlin-based Healthcare Consultant, coordinating with patients in real time.
              </p>
              <Button>Read More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Inbound Customer Support for PPE Sales
              </h3>
              <p className="text-gray-700 mb-4">
                A healthcare essentials producer boosted PPE kit sales with our outbound calling services delivered in record time.
              </p>
              <Button>Read More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="text-lg italic text-gray-800 max-w-3xl mx-auto">
          “The success of this support model actually exceeded our expectations;
          hence we are currently considering making it part of our normal
          support process. I therefore look forward to continuing to work with
          Nimble Acuity in the future.”
        </blockquote>
        <p className="mt-3 text-gray-600">
          – Project Manager, Travel Website Company, CA
        </p>
      </section>

      {/* CTA */}
      <section className="bg-emerald-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Deliver Unparalleled Patient Satisfaction?
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Say goodbye to overwhelmed staff and missed calls with Nimble’s
          round-the-clock availability. Scale effortlessly while enhancing
          patient experiences with our HIPAA-compliant answering services.
        </p>
        <Button className="bg-white text-emerald-700 hover:bg-gray-200 px-6 py-3 rounded-xl text-lg">
          Get Started
        </Button>
      </section>
    </div>
  );
};

export default MedicalAnsweringServices;
