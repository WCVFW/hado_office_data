import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: "Email",
      details: "info@nimbleacuity.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Mon - Fri, 9 AM - 6 PM EST"
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: "Office",
      details: "New York, NY",
      subtitle: "Available for on-site consultations"
    }
  ];

  return (
    <div className="bg-white font-sans text-[#006A7C] overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative bg-[#E6F3F5] text-[#006A7C] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Ready to transform your business with data-driven insights? Let's start the conversation.
          </p>
          <div className="inline-flex gap-4">
            <Button className="bg-white text-[#006A7C] px-6 py-3 rounded-full 
  hover:bg-[#006A7C] hover:text-white hover:shadow-lg 
  transform transition-all duration-300 ease-in-out inline-flex items-center">
              Send a Message <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
            <div className="p-6 bg-[#E6F3F5] rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="p-3 rounded-lg"
                  />
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="p-3 rounded-lg"
                  />
                </div>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="p-3 rounded-lg"
                />
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows={6}
                  className="p-3 rounded-lg"
                />
                <Button type="submit" className="w-full bg-gradient-to-r from-[#006A7C] to-[#00A7BB] text-white rounded-full hover:scale-105 transition-transform inline-flex items-center justify-center">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in delay-200">
            <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
            <div className="flex flex-col gap-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="p-6 bg-[#006A7C] rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-white flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#00A7BB] rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{info.title}</h3>
                    <p className="font-medium">{info.details}</p>
                    <p className="text-sm opacity-80">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="mt-8 p-6 bg-[#E6F3F5] rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-lg font-semibold mb-3">Why Choose Nimble Acuity?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#006A7C] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Expert team with proven track record
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#006A7C] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Tailored solutions for your business needs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#006A7C] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Fast turnaround and agile delivery
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#006A7C] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Ongoing support and partnership
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);} }
          .animate-fade-in { animation: fadeIn 1s ease forwards; }
          .animate-fade-in.delay-200 { animation-delay: 0.2s; }
        `}
      </style>
    </div>
  );
};

export default Contact;
