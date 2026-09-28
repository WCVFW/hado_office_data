import React from "react";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function TownPlanningServices() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Town Planning Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Hire certified town planning engineers starting at just $11/hour to
          complete your town planning projects without extending the delivery
          timeline.
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Intro */}
        <section className="space-y-4 text-center">
          <p>
            Are you in search of professional town planning experts to whom you
            can outsource town planning services at a budget? We are listening!
            Get in touch with us and we will provide you a custom quote on what
            it would cost to have your end-to-end project outsourced to people
            who know exactly how you turn your drawings into reality.
          </p>
          <p>
            Being a top town planning service providing company, Nimble Auity has
            the resource and bandwidth to make your projects a grand success. Our
            team will work with you to grasp your development goals. Through our
            town planning services, we prescribe sustainable models that bring
            the community together with social culture. We provide autonomous
            strategies in addition to planning and design solutions.
          </p>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Town Planning Services We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Drafting Plan Applications",
                desc: "Draft designs that conform to regulatory guidelines while meeting client needs.",
              },
              {
                title: "Validating Design and Access Statements",
                desc: "Verify existing blueprints for compliance with safety standards and local authority layouts.",
              },
              {
                title: "Conducting Site Appraisals",
                desc: "On-site appraisals using point cloud and laser technology to validate planning data.",
              },
              {
                title: "Appointing Technical Team",
                desc: "Assist in finding and hiring the best technical minds to extend your internal team.",
              },
              {
                title: "Providing Strategic Advice",
                desc: "Offer legal and strategic advice to enhance architectural efficiency and compliance.",
              },
              {
                title: "Amending Schemes and Discharge Conditions",
                desc: "Modify plans to ensure full compliance with regulatory requirements.",
              },
              {
                title: "Obtaining Certificate of Lawfulness",
                desc: "Help you navigate the legal process and acquire lawfulness certificates.",
              },
              {
                title: "Assessment of Retail Impact & Economic Statements",
                desc: "In-depth market analysis and preparation of economic statements for stakeholders.",
              },
              {
                title: "Initiating Appeals",
                desc: "Legal experts audit plans and file appeals smoothly when required.",
              },
              {
                title: "Assessing Environmental Impact",
                desc: "Screen environmental impact, provide transparent evaluation, and approval recommendations.",
              },
              {
                title: "Raising Objections",
                desc: "Assist with legal objections against proposals and guide petitioners effectively.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our Town Planning Process
          </h2>
          <ol className="space-y-6 max-w-3xl mx-auto text-gray-700">
            <li>
              <span className="font-bold">01.</span> Collect data and blueprints
              from clients.
            </li>
            <li>
              <span className="font-bold">02.</span> Identify team members with
              best cultural fit and expertise.
            </li>
            <li>
              <span className="font-bold">03.</span> Share estimated TAT and cost,
              sign contract.
            </li>
            <li>
              <span className="font-bold">04.</span> Team works under strong
              leadership for successful execution.
            </li>
            <li>
              <span className="font-bold">05.</span> Quality control monitors
              progress to avoid delays.
            </li>
            <li>
              <span className="font-bold">06.</span> Deliver project on time with
              stakeholder reports.
            </li>
          </ol>
        </section>

        {/* Other Services */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Other Services You Can Benefit From
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-gray-700 font-medium">
            <span className="px-4 py-2 bg-gray-100 rounded">
              Land Development Design
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded">
              3D Architectural Walkthroughs
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded">
              Building Information Model
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded">
              3D Rendering Services
            </span>
          </div>
        </section>

        {/* Why Nimble Auity */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Why Choose Nimble Auity for Town Planning?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li>High-quality Services</li>
              <li>Affordable Solutions</li>
              <li>Superb Infrastructure</li>
              <li>ISO 9001:2015 Certified</li>
              <li>100% Data Security</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Quick Turnaround Time</li>
              <li>Scalable Services</li>
              <li>Single Point of Contact (SPOC)</li>
              <li>Professional FTEs with 6+ years’ expertise</li>
              <li>24/7 Support</li>
            </ul>
          </div>
        </section>

        {/* Case Studies */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Client Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">
                3D Modeling Services for US Fabrication Company
              </h3>
              <p className="text-gray-600">
                Created 5 detailed 3D models from client markups, aiding in
                equipment design and production.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">
                3D Production Animation for Japan-based Manufacturer
              </h3>
              <p className="text-gray-600">
                Delivered precise 3D animations using Maya & 3DS MAX, with
                revisions, achieving accurate motion design.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 p-8 rounded-lg shadow">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Testimonials
          </h2>
          <blockquote className="italic text-lg text-gray-700 max-w-3xl mx-auto">
            “Hyde Engineering is very satisfied with Nimble's services. They have
            met all our deadlines and exceeded our expectations in quality. We
            consider them a valuable part of our team.”
          </blockquote>
          <p className="mt-4 text-center text-sm text-gray-600">
            – Spokesperson, Oil exploration company in the US
          </p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-semibold">
            Outsource Town Planning Services to Nimble Auity
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Want to talk to a town planning specialist? Nimble Auity’s services
            help you save thousands of dollars by paying only for what you need.
            With 26+ years of experience, our team is dedicated to making your
            vision a 100% success.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Get in Touch
          </Button>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-12">
        <p>&copy; {new Date().getFullYear()} Nimble Auity. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
