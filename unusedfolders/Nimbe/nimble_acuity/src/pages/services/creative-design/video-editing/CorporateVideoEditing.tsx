
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Film, Video, Layers, CheckCircle, Star } from "lucide-react";
import CSmainmenu from "../CSmainmenu";

const CorporateVideoEditing: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="relative w-full bg-gradient-to-r from-blue-100 via-indigo-50 to-blue-100 py-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Outsource Corporate Video Editing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
          Transform raw corporate footage into compelling, professional-grade
          films with effects, transitions, and precision editing – starting at
          just <span className="font-bold">$12/hour</span>.
        </p>
        <Button size="lg" className="rounded-2xl px-8 py-6 text-lg">
          Get a Free Quote
        </Button>
      </section>

      {/* Services Offered */}
      <section className="py-20 w-full max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Professional Corporate Video Editing Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Briefcase className="h-10 w-10 text-blue-500" />,
              title: "Conference Video Editing",
              desc: "Cut down lengthy corporate conferences into sharp, engaging highlight reels."
            },
            {
              icon: <Video className="h-10 w-10 text-blue-500" />,
              title: "Training & HR Videos",
              desc: "Edit training content, HR guidance, and interview prep into easy-to-follow visuals."
            },
            {
              icon: <Film className="h-10 w-10 text-blue-500" />,
              title: "Corporate Event Videos",
              desc: "From same-day edits to recap videos – we craft event stories that leave impact."
            },
          ].map((item, i) => (
            <Card key={i} className="rounded-2xl shadow-lg hover:shadow-xl transition">
              <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Advanced Editing Features */}
      <section className="bg-gray-50 py-20 w-full px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Advanced Editing & VFX Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[ 
              "Background replacement & green screen editing",
              "Custom transitions, lower thirds & title animations",
              "Color correction, noise reduction & retouching",
              "Object & people removal from video",
              "Rotoscoping & precision compositing",
              "Audio-video synchronization & subtitles",
              "Music addition, sound enhancements & promo edits",
              "Logo animations & explainer video enhancement"
            ].map((feature, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 w-full px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our Streamlined Editing Process
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[ 
              "Project Requirement Brief",
              "Secure Footage Upload (FTP/Dropbox)",
              "Editing with ISO Quality Standards",
              "Client Review & Revisions",
              "Final Delivery in Preferred Format"
            ].map((step, i) => (
              <Card key={i} className="rounded-2xl shadow-md">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full font-bold mb-4">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 text-sm">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-indigo-50 py-20 w-full px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose O2I for Corporate Video Editing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              { title: "26+ Years Experience", desc: "Trusted by 19,000+ global clients." },
              { title: "Affordable Pricing", desc: "Hourly or FTE options to suit every budget." },
              { title: "High Quality", desc: "ISO-certified workflows with 99% SLA adherence." },
              { title: "Security", desc: "GDPR compliance & strict NDAs ensure confidentiality." },
              { title: "Support", desc: "24/6 assistance with multilingual account managers." },
              { title: "Quick Delivery", desc: "Fast turnaround times tailored to project size." }
            ].map((item, i) => (
              <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg transition">
                <CardContent className="p-6 text-center space-y-2">
                  <Star className="h-8 w-8 text-indigo-500 mx-auto" />
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-20 w-full text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Outsource Corporate Video Editing Today
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg">
          Partner with O2I for cost-effective, high-quality video editing that
          transforms your business communication into impactful visual stories.
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-2xl px-8 py-6 text-lg">
          Contact Us Now
        </Button>
      </section>

      {/* Clients */}
      <section className="py-16 w-full px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">Our Clients</h2>
          <p className="text-gray-600 mb-6">
            Trusted by global leaders across industries
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-500">
            {["Alcon","Yale","Maximus","ARI","Medversant","Loomis"].map((c,i)=>(
              <div key={i} className="px-4 py-2 bg-gray-100 rounded-lg shadow-sm text-sm">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateVideoEditing;
