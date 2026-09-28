
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Camera, Video, Film, Wand2 } from "lucide-react";
import CSmainmenu from "../CSmainmenu";

const WeddingVideoEditing: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="relative w-full bg-gradient-to-r from-pink-100 via-rose-50 to-pink-100 py-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
          360° Wedding Video Editing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
          Transform your raw wedding footage into cinematic, breathtaking films
          crafted with storytelling, artistry, and emotion.
        </p>
        <Button size="lg" className="rounded-2xl px-8 py-6 text-lg">
          Get a Free Quote
        </Button>
      </section>

      {/* Services Offered */}
      <section className="py-20 w-full max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Core Wedding Editing Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Video className="h-10 w-10 text-rose-500" />,
              title: "Wedding Video Editing for Videographers",
              desc: "Send us your best footage, we’ll cut, polish, and deliver cinematic-quality films."
            },
            {
              icon: <Film className="h-10 w-10 text-rose-500" />,
              title: "New Wedding Video Editing",
              desc: "Compile guest clips or personal footage into one engaging, emotional story."
            },
            {
              icon: <Camera className="h-10 w-10 text-rose-500" />,
              title: "Wedding Photos to Videos",
              desc: "No footage? We’ll create a photo-based slideshow montage with music & effects."
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

      {/* Advanced Editing */}
      <section className="bg-gray-50 py-20 w-full px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Advanced Editing Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[ 
              "Photo background enhancement & replacements",
              "Skin retouching, blemish removal, body reshaping",
              "Creative cuts, transitions, pacing & tone adjustments",
              "Color correction, exposure & vibrancy balance",
              "Time remapping – slow motion & condensed highlights",
              "Lighting effects, vignettes, and cinematic mattes"
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
              "Send us your raw footage/photos securely",
              "Choose customized services",
              "Receive first draft video",
              "Request edits (free revisions)",
              "Get your stunning final video"
            ].map((step, i) => (
              <Card key={i} className="rounded-2xl shadow-md">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="bg-rose-100 text-rose-600 w-12 h-12 flex items-center justify-center rounded-full font-bold mb-4">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 text-sm">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-rose-600 py-20 w-full text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Outsource to O2I for Stunning Wedding Videos
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg">
          With certified editors, global delivery, quick turnaround times, and
          affordable pricing, we’re the trusted partner for 360° wedding video
          editing services.
        </p>
        <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 rounded-2xl px-8 py-6 text-lg">
          Contact Us Today
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

export default WeddingVideoEditing;
