import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Palette,
  Type,
  Users,
  PenTool,
  Zap,
  Layers,
  RefreshCw,
  Shapes,
  Quote,
} from "lucide-react";
import CSmainmenu from "../CSmainmenu";

const BrandDesignPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* HERO */}
      <CSmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Brand Design Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90 mb-8">
          Harmonize brand communications across all touchpoints with consistent
          logos, color palettes, and interface designs. Build trust and drive
          customer loyalty with Nimble Auity.
        </p>
        <Button className="bg-white text-blue-700 hover:bg-blue-100 px-6 py-3 rounded-full text-lg">
          Schedule Free Consultation
        </Button>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our End-to-End Professional Branding Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Color Palette Development",
              icon: Palette,
              points: [
                "Color psychology integration",
                "AI-driven trend analysis",
                "Cross-platform consistency",
              ],
            },
            {
              title: "Typography Design",
              icon: Type,
              points: [
                "Custom font creation",
                "Kerning optimization",
                "Cross-format legibility",
              ],
            },
            {
              title: "Brand Experience",
              icon: Users,
              points: [
                "Multisensory interaction",
                "User journey mapping",
                "Emotional engagement metrics",
              ],
            },
            {
              title: "Brand Identity",
              icon: Layers,
              points: [
                "Visual identity systems",
                "Logo scalability",
                "Cross-channel consistency",
              ],
            },
            {
              title: "Naming & Tagline",
              icon: PenTool,
              points: [
                "Linguistic analysis",
                "SEO keyword integration",
                "Trademark checks",
              ],
            },
            {
              title: "Rebranding Services",
              icon: RefreshCw,
              points: [
                "Market repositioning",
                "Stakeholder alignment",
                "Brand equity preservation",
              ],
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="shadow-md hover:shadow-lg transition-all rounded-2xl border border-gray-200"
            >
              <CardContent className="p-6">
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {service.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose Nimble Auity?
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Strategic Brand Positioning",
              desc: "We use competitive analysis and psychographic profiling to build impactful visuals that increase market penetration.",
              icon: Zap,
            },
            {
              title: "Culturally Adaptive Design",
              desc: "Geo-design principles ensure brand acceptance across multilingual and multicultural markets.",
              icon: Users,
            },
            {
              title: "Data-Driven Visual Strategies",
              desc: "Our data-centric design approach ensures marketing campaigns resonate with your target demographics.",
              icon: Layers,
            },
            {
              title: "AI-Powered Design Processes",
              desc: "We combine creative expertise with automation tools for efficiency, scalability, and high precision.",
              icon: Shapes,
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <item.icon className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Testimonials
        </h2>
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-md border border-gray-200 rounded-2xl">
            <CardContent className="p-6 text-center">
              <Quote className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <p className="text-gray-700 italic mb-4">
                “Thanks for your fast turnaround time and attention to detail
                for our busy Australian ad agency, appreciate your hard work.”
              </p>
              <h4 className="font-semibold text-gray-800">
                CEO, Digital Marketing Agency (Australia)
              </h4>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Optimize Your Brand Identity with Nimble Auity
        </h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          Drive customer engagement, build loyalty, and strengthen market
          leadership with our professional brand design services.
        </p>
        <Button className="bg-white text-blue-700 hover:bg-blue-100 px-6 py-3 rounded-full text-lg">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default BrandDesignPage;
