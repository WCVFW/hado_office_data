import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, Building2, Layers, CheckCircle, Wrench, Globe, Users, BookOpen } from "lucide-react";
import ESmainmenu from "../ESmainmenu";

export default function ConstructionEngineeringServices() {
  return (
    <div className="min-h-screen text-gray-800 bg-gray-50">
      

      {/* Hero */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-20 px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-extrabold mb-4">
          Outsource Engineering Services for Construction Companies
        </motion.h2>
        <p className="max-w-4xl mx-auto text-lg md:text-xl">
          Take your construction projects to the next level with our comprehensive civil engineering solutions, seismic design offerings, load path analyses, and sustainable energy systems.
        </p>
        <div className="mt-8">
          <Button size="lg" className="bg-white text-indigo-700">Get Started</Button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Engineering Support for Volume Builders & Mega Projects</h3>
        <p className="mb-4">
          Volume-based home builders deal with complex problems that require creative engineering solutions and high technical proficiency. These businesses need a partner who delivers accuracy and reliability while meeting regulatory standards and tight timeframes. Nimble Auity’s CAD engineering services for construction companies use Geographic Information Systems and BIM models to fulfill these demands head-on.
        </p>
        <p className="mb-4">
          We provide detailed project simulations and visualizations which guarantee designs are optimized for cost-effectiveness while reducing errors and rework. Our services incorporate material science and environmental sustainability to improve robustness and longevity, enhancing project value in the long run.
        </p>
        <p>
          Leverage our skilled engineering solutions to enhance mega housing projects and enjoy the confidence that comes from working with a partner who understands the nuances of technical specifications.
        </p>
      </section>

      {/* Success Stories */}
      <section id="clients" className="bg-gray-50 py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-8 text-blue-700">Customer Success Stories</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-lg mb-2">Structural Drafting for Texas Design Firm</h4>
              <p className="text-sm text-gray-700 mb-3">We produced 35 detailed elevations for a care home using AutoCAD, improving productivity despite unreadable markups.</p>
              <a href="#" className="text-indigo-600 font-semibold">Read more</a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-lg mb-2">Construction Drawings for Ohio Manufacturer</h4>
              <p className="text-sm text-gray-700 mb-3">Delivered accurate 2D drawings and 3D modeling with PTC Creo, boosting manufacturing efficiency within 30 days.</p>
              <a href="#" className="text-indigo-600 font-semibold">Read more</a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <blockquote className="italic text-lg text-gray-700 mb-4">“Hyde Engineering is very satisfied with your services. You have met all our deadlines and exceeded our expectations in quality. We consider you a valuable part of our team.”</blockquote>
        <p className="font-semibold">Spokesperson, Oil Exploration Company, US</p>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10 text-blue-700">Manage Challenging Projects Effortlessly</h3>
        <p className="text-center max-w-3xl mx-auto mb-8">We ensure seamless integration and execution across all project phases using the latest technologies and industry best practices.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'MEP Design and Drafting', bullets: ['System Integration','Load Calculations','Code Compliance','Energy Efficiency'] },
            { title: 'BIM Modeling', bullets: ['3D Parametric Modeling','Clash Detection','Lifecycle Management','Data Rich Models'] },
            { title: '3D Modeling / Rendering', bullets: ['Photorealistic Visualizations','Material Texturing','Lighting Simulation','Interactive Walkthroughs'] },
            { title: 'As-Built Drawing Services', bullets: ['Accurate Documentation','Field Verification','Update Records','Project Handover'] },
            { title: 'Technical / Construction Drawing', bullets: ['Detailed Specifications','Section Views','Dimensional Accuracy','Annotation'] },
            { title: 'Facade Engineering', bullets: ['Thermal Performance','Structural Integrity','Aesthetic Design','Weatherproofing'] },
          ].map((s, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">{s.title}</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Expanded Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-8 text-blue-700">Our Expanded Construction Support Services</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {['Millwork Drafting','Thermal / Energy Modeling','HVAC Design','Structural Design and Drafting','Home Plan & Design','Architectural Drafting','Floor Plans & Exterior Design','Bill of Materials','Project Management'].map((item,i)=> (
            <div key={i} className="bg-white p-4 rounded-lg shadow">{item}</div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-8 text-blue-700">Optimized Process Flow for Construction Services</h3>
        <div className="space-y-6">
          {[
            { step: '01', title: 'Project Consultation', desc: "In-depth consultation to determine specific demands, objectives, and constraints." },
            { step: '02', title: 'Feasibility Analysis', desc: "Technical and financial viability study to identify obstacles and solutions." },
            { step: '03', title: 'Conceptual Design', desc: "Develop comprehensive design documents using sustainable practices." },
            { step: '04', title: 'Detailed Engineering', desc: "Produce exact drawings, specifications, and paperwork for construction." },
            { step: '05', title: 'Technical Support', desc: "Provide constant technical support and quality assurance during construction." },
            { step: '06', title: 'Project Management', desc: "Thorough review upon completion to ensure objectives met and lessons learned." },
          ].map((p,idx)=> (
            <div key={idx} className="flex gap-6 items-start">
              <div className="text-indigo-600 font-bold text-2xl">{p.step}</div>
              <div>
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-gray-700">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="bg-gray-50 py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-8 text-blue-700">Clients We Work With</h3>
        <p className="max-w-4xl mx-auto text-center mb-6">Large-scale Residential Home Builders • Property Developers • Construction Companies • Architectural Firms • Contractors • Facilities Managers • Structural Engineers • Consultants • Land Developers • Housing Contractors</p>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-8 text-blue-700">Why Choose Nimble Auity for Large-Scale Projects?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Project Planning & Management</h4>
              <p className="text-sm text-gray-700">Detailed project plans integrated with construction timelines for smooth transitions.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Structural Engineering Solutions</h4>
              <p className="text-sm text-gray-700">Designs that resist environmental stresses while optimizing material usage.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Sustainable & Eco-friendly Design</h4>
              <p className="text-sm text-gray-700">Eco-friendly practices and materials that increase energy efficiency.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Technology Integration</h4>
              <p className="text-sm text-gray-700">VR and BIM integration for better stakeholder collaboration and fewer errors.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Customized Solutions</h4>
              <p className="text-sm text-gray-700">Flexible engineering solutions tailored to client needs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Compliance & Standards</h4>
              <p className="text-sm text-gray-700">Ensuring projects meet safety and quality benchmarks across the lifecycle.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="bg-gray-50 py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-8 text-blue-700">Key Articles for Insight</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Realistic 3D Models of Lighting Solutions</h4>
              <p className="text-sm text-gray-700 mb-3">Case study on realistic lighting simulations for enhanced design decisions.</p>
              <a href="#" className="text-indigo-600 font-semibold">Read more</a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">The Impact of Technological Advancements</h4>
              <p className="text-sm text-gray-700 mb-3">Accept the change in technology that is reshaping civil and construction industries.</p>
              <a href="#" className="text-indigo-600 font-semibold">Read more</a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <h3 className="text-3xl font-bold mb-4">Outsource Engineering Services for Construction Companies to Nimble Auity</h3>
        <p className="max-w-3xl mx-auto mb-6">Leverage our technical expertise, sustainability focus, and agile approach to turn construction challenges into achievable results.</p>
        <Button size="lg" className="bg-white text-indigo-700">Contact Us</Button>
      </section>
    </div>
  );
}
