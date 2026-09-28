import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DSmainmenu from "../DSmainmenu";

const stats = [
  { value: "40%", label: "Cost Reduction" },
  { value: "8-24 Hrs", label: "Faster Turnaround" },
  { value: "500+", label: "Satisfied Clients" },
  { value: "350+", label: "Skilled Data Experts" },
  { value: "99%", label: "Accuracy" },
  { value: "21", label: "Years Experience" },
];

const services = [
  {
    title: "Complete ePUB Conversion",
    desc: "We convert from Word, Quark, InDesign, PDF, and other input formats strictly following IDPF standards.",
  },
  {
    title: "Budget-Friendly Services",
    desc: "Our pricing is tailored to suit your budget while ensuring high-quality conversions.",
  },
  {
    title: "Secure File Handling",
    desc: "We use FTP and VPN for secure transfers and maintain backup copies for retention.",
  },
];

const advantages = [
  "Universal compatibility with most devices and software.",
  "Lower conversion costs with a single ePUB format for all channels.",
  "ePUB easily converts to MOBI or RTF formats.",
  "ePUB files can be distributed across multiple outlets.",
  "Cost-effective distribution and maximum flexibility.",
];

const ereaders = [
  "Adobe Digital Editions (Windows, macOS)",
  "Barnes & Noble Nook",
  "BeBook Reader",
  "Sony Reader Touch",
  "iPhone, iPad (via Stanza)",
  "Bookworm (online open source reader)",
  "Calibre (library + eBook viewer)",
  "Aldiko (Android eBook reader)",
];

const EpubConversionPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble ePUB Conversion Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Expand your reach with professional ePUB conversions. Nimble Auity
          provides high-quality, standards-compliant eBook formatting tailored
          for global distribution.
        </p>
        <Button size="lg" className="rounded-full shadow-lg">
          Contact Us
        </Button>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          ePUB Conversion Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <Card key={idx} className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Advantages of ePUB Conversions
        </h2>
        <ul className="max-w-4xl mx-auto grid gap-4 list-disc list-inside text-gray-700">
          {advantages.map((adv, idx) => (
            <li key={idx}>{adv}</li>
          ))}
        </ul>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {stats.map((s, idx) => (
          <div key={idx} className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-3xl font-bold text-blue-600">{s.value}</h3>
            <p className="text-gray-600 mt-2">{s.label}</p>
          </div>
        ))}
      </section>

      {/* eReaders */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular eReaders for ePUB Format
        </h2>
        <div className="max-w-4xl mx-auto">
          <ul className="grid gap-3 list-disc list-inside text-gray-700">
            {ereaders.map((reader, idx) => (
              <li key={idx}>{reader}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Outsource ePUB Conversion to Nimble Auity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Our expert team delivers high-quality ePUB conversions for authors and
          publishers worldwide. Get started today and make your eBooks
          universally accessible.
        </p>
        <Button size="lg" variant="secondary" className="rounded-full">
          Get a Quote
        </Button>
      </section>
    </div>
  );
};

export default EpubConversionPage;
