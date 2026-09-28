import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Mic, Volume2, Wand2, Shield, Users, Clock, Building } from "lucide-react";
import CSmainmenu from "../CSmainmenu";

const AdJingleCreation: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-pink-600 to-red-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Ad Jingle Creation Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Our highly creative production team creates eye-popping ad jingles to put your brand under the limelight. Rates starting at <b>$12/hour</b>.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p>
          Want a tune for your brand that people can memorize? You don’t need a production unit for Ad jingle creation. With <b>Nimble Auity’s</b> advantage, you’ll never need a production house or even a small team. We do everything to put your brand under the global spotlight with high-quality ad jingle creation services.
        </p>
        <p>
          With 26+ years of experience, our talented team of ad jingle creation experts will work remotely to create a jingle that your audience won’t forget. It’s the perfect way to connect with your patrons and keep them closer to your brand.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Ad Jingle Creation Services We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Lyrics for Ad Jingle",
                icon: Mic,
                desc: "We compose catchy lyrics around your brand and objectives to pique audience interest."
              },
              {
                title: "Composing Music for Ad Jingle",
                icon: Music,
                desc: "We craft tunes that blend audio, vocals, drums, and ambient sound to make your brand unforgettable."
              },
              {
                title: "Creating Catchphrase for Ad Jingle",
                icon: Wand2,
                desc: "We collaborate with you to create slogans that combine brand value, offerings, and USP."
              },
              {
                title: "Ad Jingle Mixing",
                icon: Volume2,
                desc: "We enhance the mashup with equalizers, compressors, and stereo mixing tools."
              }
            ].map((service, idx) => (
              <Card key={idx} className="shadow-md rounded-2xl">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <service.icon className="w-10 h-10 text-pink-600 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Ad Jingle Creation Process</h2>
        <ol className="space-y-6">
          {[
            "Requirement Discovery — Collaborating with you to define business values, USP, and messaging.",
            "Planning the Ad Layout with creative slogans and catchy lyrics.",
            "Audio Editing for a crisp stereo output.",
            "Soundtrack Pro refinement to remove distractions and enhance vocal range.",
            "Quality Check — multiple reviews to ensure clarity and precision.",
            "Final Format — exporting audio in any format preferred by you."
          ].map((step, i) => (
            <li key={i} className="flex items-start">
              <span className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                {i + 1}
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Other Services */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Other Services You Can Benefit From
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["Video Editing Services", "Illustrator Services", "Storyboard Services", "Digital Advertising Services"].map((srv, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                {srv}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nimble Auity?</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {[
            "Affordable Ad Jingle Creation Services with great value.",
            "ISO 9001:2015 Certified provider ensuring uncompromised quality.",
            "100% Data Security — strict confidentiality guaranteed.",
            "Quick TAT — we meet tight deadlines without losing quality.",
            "Specialized Professionals with years of creative expertise.",
            "Scalable Services — designed to grow with your business.",
            "Superb Infrastructure for world-class production quality.",
            "24x7 Support in your local time zone.",
            "Dedicated SPOC to keep your project on track."
          ].map((reason, i) => (
            <li key={i} className="flex items-start">
              <Shield className="text-pink-600 w-6 h-6 mr-3 mt-1" />
              <p>{reason}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Case Studies */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Client Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">
                  Rotoscoping Services for a South Asian Media House
                </h3>
                <p>
                  Nimble delivered high-quality rotoscoping services, helping a media client cut costs and save time.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">
                  Wedding Video Editing for a Canadian Film Firm
                </h3>
                <p>
                  Nimble completed pending wedding video editing projects with accuracy and speed for a Canadian filmmaker.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-pink-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic">
          “This is FANTASTIC! I am very happy with the result. Your turn-around is great, quality is great, and the price is great also. I will send you many more projects. Fantastic job!”
        </blockquote>
        <p className="mt-4">— Real Estate Videographer & Photographer, USA</p>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-pink-600 to-red-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Create Your Brand Jingle with Nimble Auity
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Nimble Auity is your professional partner for ad jingle creation. We craft memorable jingles that reflect your brand’s mission and USP. Dependable, scalable, and always on time.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default AdJingleCreation;
