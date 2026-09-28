import React from "react";
import { Book, Globe, Microscope, GraduationCap, PenTool, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CSmainmenu from "../CSmainmenu";

const EducationalIllustration: React.FC = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Educational Illustration Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
          Express ideas pictorially so your students and audience can interpret concepts with ease – starting at just <span className="font-semibold">$12/hour</span>.
        </p>
        <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-200">
          Get Started
        </Button>
      </div>

      {/* Services Section */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Educational Illustration Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <Book className="w-10 h-10 text-indigo-600" />, title: "Kindergarten & Primary Textbook Illustrations", desc: "Age-appropriate designs that make early learning fun and impactful." },
            { icon: <GraduationCap className="w-10 h-10 text-indigo-600" />, title: "Academic & Secondary Illustrations", desc: "Meticulous illustrations to expand student knowledge and support curriculum." },
            { icon: <Globe className="w-10 h-10 text-indigo-600" />, title: "Geographical Illustrations", desc: "Detailed visuals that bring geography and earth sciences to life." },
            { icon: <Microscope className="w-10 h-10 text-indigo-600" />, title: "Medical Illustrations", desc: "High-quality visuals to simplify complex medical concepts." },
            { icon: <Users className="w-10 h-10 text-indigo-600" />, title: "Interactive Media & Websites", desc: "Engaging visuals for digital learning platforms and school websites." },
            { icon: <PenTool className="w-10 h-10 text-indigo-600" />, title: "Scientific Publications", desc: "Custom visuals for research papers, journals, and academic presentations." },
          ].map((service, i) => (
            <Card key={i} className="shadow-md rounded-2xl hover:shadow-lg transition">
              <CardContent className="p-6 flex flex-col items-center text-center">
                {service.icon}
                <h3 className="mt-4 font-semibold text-lg">{service.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Illustration Process
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            { step: "01. Receiving Order", desc: "We collect your requirements to define deliverables and goals." },
            { step: "02. Designing", desc: "Sample illustrations are created using best-in-class tools." },
            { step: "03. Quality Review & Feedback", desc: "Designs undergo review cycles to ensure satisfaction." },
            { step: "04. Delivery", desc: "Final illustrations are delivered securely in your preferred formats." },
          ].map((p, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                {p.step.split(".")[0]}
              </div>
              <div>
                <h4 className="font-semibold">{p.step}</h4>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble Auity?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Flexible Pricing Solutions",
            "100% Secure Data (ISO/IEC 27001:2022)",
            "ISO Certified Quality (9001:2015)",
            "Cutting-edge Technology (Adobe, Sketch, etc.)",
            "Quick Turnaround Times",
            "Scalability & Dedicated Teams",
            "24/7 Global Client Support",
          ].map((reason, i) => (
            <Card key={i} className="shadow rounded-xl">
              <CardContent className="p-6">
                <p className="font-medium text-gray-700">{reason}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Case Studies
        </h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Nimble Auity Provided Prepress & Vector Artwork to a Dublin-based Client
              </h3>
              <p className="text-gray-600 text-sm">
                Our team created accurate prepress and vector artwork, delivering within the assured timeline and exceeding expectations.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Nimble Auity Delivered Vector Artwork to US-based Label Designer
              </h3>
              <p className="text-gray-600 text-sm">
                We successfully provided flawless vector artwork solutions to an American client, delighting them with speed and quality.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="italic text-gray-700">
          "The quality of artwork delivered during the trial was exceptional. That helped us decide on Nimble Auity as our new trusted partner."
        </blockquote>
        <p className="mt-4 font-medium">— Director of Operations, Leading Pharmaceutical Company, Netherlands</p>
      </div>

      {/* Contact CTA */}
      <div className="bg-indigo-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Outsource Educational Illustration Services to Nimble Auity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Our expert illustrators simplify concepts and create engaging visuals for your educational needs. Let’s work together to bring your ideas to life.
        </p>
        <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-200">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default EducationalIllustration;
