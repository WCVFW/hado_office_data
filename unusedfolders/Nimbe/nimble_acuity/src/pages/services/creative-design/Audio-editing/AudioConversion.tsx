import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, Music, Settings, Headphones, Mic, Disc, Wrench, Shield } from "lucide-react";
import CSmainmenu from "../CSmainmenu";

const AudioConversion: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Audio Conversion Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          We convert your audio file from an analog format to a high-quality digital format using digitization tools without harming the actual quality — starting from <b>$10/hour</b>.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p>
          If you have analog audio files that are on the verge of destruction, retrieval can be a complex task without the right expertise or tools. Therefore, audio conversion by experts makes sense to most. If you have files that are too valuable for trial and error, we, at <b>Nimble Auity</b>, will eliminate your concerns with high-quality audio conversion services. It not only cuts down the risk of loss but also assures you the best quality results that last well on the Cloud or other digital storage points.
        </p>
        <p>
          Nimble audio conversion services let us take away a major chunk of your worries by designating professionals with decades of experience to handle the audio conversion at a budget. Our team will turn your old audio and convert it into digital files using advanced audio conversion technology.
        </p>
      </div>

      {/* Services */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Audio Conversion Services We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Format-to-format Conversion", icon: Disc, desc: "We convert MP3, AAC, M4A, AC3, FLAC, OGG, WAV, AMR, WMA, and more into robust formats playable without quality loss." },
              { title: "Making Old Audio Last", icon: Music, desc: "Digitize old records, music, interviews, and analog files to retain content in original quality." },
              { title: "Extraction of Audio from Corrupted Tape", icon: Wrench, desc: "We repair tapes damaged by moisture, dust, or wear and tear before extracting audio." },
              { title: "Reel-to-reel Recording Conversion", icon: Headphones, desc: "Our experts revive reel-to-reel recordings with precision and care." },
              { title: "Conversion of Digital to Analogue Data", icon: Settings, desc: "We can also convert digital signals back into analog, customized for your needs." },
              { title: "Noise Removal from Recording", icon: Volume2, desc: "We use advanced noise removal tools to eliminate buzzing, crackle, and hiss." },
              { title: "Recovery of Audio using Advanced Methods", icon: Mic, desc: "We revive audio with advanced frequency editing tools for crystal-clear output." }
            ].map((service, idx) => (
              <Card key={idx} className="shadow-md rounded-2xl">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <service.icon className="w-10 h-10 text-indigo-600 mb-4" />
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
        <h2 className="text-3xl font-bold text-center mb-10">Our Audio Conversion Process</h2>
        <ol className="space-y-6">
          {[
            "Accepting Analog Format Files securely.",
            "Cleaning the Audio on Analogue Tapes/Records using cleaning tools.",
            "Audio Editing with advanced frequency tools to remove popping noises.",
            "Soundtrack Pro refinement to fix harsh notes and unwanted sounds.",
            "Quality Check by experts to ensure client expectations are met.",
            "Final Format encoding in 32-bit and 44.1kHz AIFF or as required."
          ].map((step, i) => (
            <li key={i} className="flex items-start">
              <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
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
          <h2 className="text-2xl font-bold text-center mb-6">Other Services You Can Benefit From</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["Video Editing Services", "Artwork Services", "Storyboard Services", "Digital Advertising Services"].map((srv, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">{srv}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nimble Auity?</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {[
            "Competitive Prices with unmatched value.",
            "Broad List of Formats supported.",
            "Ear-trained Specialists attentive to details.",
            "24-hour Support with no waiting.",
            "High Definition Output with 100% accuracy.",
            "Data Privacy Guarantee with strict confidentiality."
          ].map((reason, i) => (
            <li key={i} className="flex items-start">
              <Shield className="text-indigo-600 w-6 h-6 mr-3 mt-1" />
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
                <h3 className="font-semibold mb-2">Audio Speakers Catalog Design for a Hong Kong Client</h3>
                <p>Delivered in just 24 hours as per the client’s specifications.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Designing Restaurant Menus for a Reputed Printing Company</h3>
                <p>Nimble designed 200+ bespoke menus with 98% accuracy in a tight TAT.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic">
          “This is FANTASTIC! I am very happy with the result. Your turn-around is great, quality is great, and the price is great also. I will send you many more projects. Fantastic job!”
        </blockquote>
        <p className="mt-4">— Real Estate Videographer & Photographer, USA</p>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Convert Your Audio with Nimble Auity</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Nimble Auity is the first choice for audio conversion services in Asia — reliable, affordable, and ISO-certified. Get 100% accurate results with quick TAT and expert handling.
        </p>
        <Button size="lg" variant="secondary">Contact Us</Button>
      </div>
    </section>
  );
};

export default AudioConversion;
