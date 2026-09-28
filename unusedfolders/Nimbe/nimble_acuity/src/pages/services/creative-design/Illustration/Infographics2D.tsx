import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Layers, Globe, Clock, Shield, Users } from "lucide-react";
import CSmainmenu from "../CSmainmenu";

const Infographics2D: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <CSmainmenu/>
      <header className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Nimble Auity — 2D Infographics Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Make your brand communications more effective with engaging, interactive, and appealing 2D infographic design
            services.
          </p>
          <Button size="lg" className="bg-white text-emerald-600 font-semibold hover:bg-gray-100">
            Request a Quote
          </Button>
        </div>
      </header>

      {/* INTRO */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          2D infographics leverage compelling graphics to represent your business information. The impact of your brand
          communication relies on how you present the core facts and whether you make them ingestible. Professionally
          handled 2D infographics not only make data palatable for your audience but also paint your brand in a distinctive
          light.
        </p>

        <p>
          Need 2D infographic services in bulk? Partner with <strong>Nimble</strong> and talk to our customer service reps to
          avail the best volume discounts. We are an ISO-certified 2D infographic service provider with a remarkable global
          presence. We gather company data, sort it to form the brand narrative, and represent it via riveting designs.
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">2D Infographic & Video Production Services We Offer</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">2D Animation Infographic</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  We make your infographic more eye-catching by animating the key elements. Leverage our services to
                  elevate your online brand presence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">2D Infographics Videos</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  We turn your infographic into short 2D videos and present concepts more effectively to improve campaign
                  success rates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">2D Animation Motion Graphics</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Our 2D motion graphics magnify your brand presence and improve recall using advanced animation techniques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">Story Infographic Services</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  We create infographics that depict a sequence of events to raise brand awareness and increase revenue.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">Bulk & Enterprise Infographic Services</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Large-volume infographic programs with dedicated teams, workflow automation, and enterprise-grade
                  delivery.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">Quick Turnaround Projects</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Agile teams for short-deadline infographic projects without compromising quality or accuracy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* APPROACH / PROCESS */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Approach to 2D Animation Infographic Services</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="p-4 border rounded-lg bg-white">
              <h4 className="font-semibold">01. Understand Your Needs</h4>
              <p className="text-gray-600 text-sm mt-2">
                We sit with you to understand the topic, research the audience, and identify the best narrative angle.
              </p>
            </div>

            <div className="p-4 border rounded-lg bg-white">
              <h4 className="font-semibold">02. Assign the Best Specialists</h4>
              <p className="text-gray-600 text-sm mt-2">
                A dedicated team consolidates your data, identifies building blocks, and prioritizes information.
              </p>
            </div>

            <div className="p-4 border rounded-lg bg-white">
              <h4 className="font-semibold">03. Initiate The Infographic Design</h4>
              <p className="text-gray-600 text-sm mt-2">
                Designers craft digestible, visually appealing chunks that communicate the core message clearly.
              </p>
            </div>

            <div className="p-4 border rounded-lg bg-white">
              <h4 className="font-semibold">04. Delivery Outcomes & Collect Feedback</h4>
              <p className="text-gray-600 text-sm mt-2">
                Completed designs are reviewed and revised as needed, then delivered for final approval.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-emerald-50">
            <h3 className="text-xl font-semibold mb-3">Why Choose Nimble Auity for 2D Infographics?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Skilled team of 2D infographic artists</li>
              <li>Advanced tools: Adobe Animate, After Effects, Illustrator, Photoshop</li>
              <li>Pixel-perfect, shareable 2D infographics</li>
              <li>Cost-effective rates and volume discounts</li>
              <li>Fast turnaround times based on your needs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Additional Services You Can Benefit From</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="px-4 py-2 bg-gray-100 rounded shadow">Graphic Design Services</span>
            <span className="px-4 py-2 bg-gray-100 rounded shadow">Animation Services</span>
            <span className="px-4 py-2 bg-gray-100 rounded shadow">Audio Editing Services</span>
            <span className="px-4 py-2 bg-gray-100 rounded shadow">Video Editing Services</span>
            <span className="px-4 py-2 bg-gray-100 rounded shadow">Artwork Services</span>
            <span className="px-4 py-2 bg-gray-100 rounded shadow">Storyboard Services</span>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Customer Case Studies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Nimble Provided High-quality Rotoscoping Services to a Leading South Asian Media Firm</h4>
                <p className="text-gray-600 text-sm">Learn how Nimble's rotoscoping professionals provided exclusive solutions at a cost-effective rate that helped the client save 50%.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Nimble Provided Creative Artwork Services to a Leading Investment Firm</h4>
                <p className="text-gray-600 text-sm">We functioned as the customer's virtual studio after winning the trust with an initial free sample.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <footer className="bg-emerald-600 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Outsource 2D Infographics Services to Nimble Auity</h3>
          <p className="mb-6">We are a 2D animation motion graphics company with deep knowledge of creating interactive infographics for diverse needs. Our clients keep returning because we innovate, secure data, and allocate dedicated SPOCs.</p>
          <Button size="lg" className="bg-white text-emerald-600 font-semibold hover:bg-gray-100">Contact Us</Button>
        </div>
        <div className="mt-8 text-sm text-emerald-100">© {new Date().getFullYear()} Nimble Auity</div>
      </footer>
    </div>
  );
};

export default Infographics2D;
