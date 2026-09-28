import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PEMainMenu from "../PEmainmenu";

const Section: React.FC<{ title?: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="my-8">
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    <div className="space-y-4">{children}</div>
  </section>
);

const ServiceList: React.FC<{ services: string[] }> = ({ services }) => (
  <ul className="list-disc pl-6 space-y-1">
    {services.map((s, idx) => (
      <li key={idx}>{s}</li>
    ))}
  </ul>
);

const ProcessSteps: React.FC<{ steps: string[] }> = ({ steps }) => (
  <ol className="list-decimal pl-6 space-y-2">
    {steps.map((s, idx) => (
      <li key={idx}>{s}</li>
    ))}
  </ol>
);

const AdvantagesList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="grid md:grid-cols-2 gap-3">
    {items.map((a, idx) => (
      <li key={idx} className="p-3 bg-gray-50 rounded-lg shadow-sm">
        {a}
      </li>
    ))}
  </ul>
);

const CaseStudies: React.FC = () => (
  <div className="grid md:grid-cols-2 gap-4">
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold">
          Panorama Stitching for Portland-based Client
        </h3>
        <p>
          Delivered panorama stitching services at affordable rates in a quick
          turnaround, boosting the client’s sales.
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold">
          Real Estate Company Saved 60% Costs
        </h3>
        <p>
          Provided panorama stitching and image enhancement services with
          outstanding results and reduced costs.
        </p>
      </CardContent>
    </Card>
  </div>
);

const Testimonials: React.FC = () => (
  <div className="space-y-4">
    
    <blockquote className="italic border-l-4 pl-4">
      “What a fantastic service I received from Nimble Acuity! Very quick to
      respond, helpful, and extremely communicative. 24 hours to complete my
      project which helped me massively.”
    </blockquote>
    <p className="font-semibold">– Owner, Photography Company, USA</p>
  </div>
);

const PanoramaStitchingPage: React.FC = () => {
  return (
    <div>
        <PEMainMenu/>
    
    <div className="max-w-5xl mx-auto px-4 py-10">
        
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold">
          Nimble Real Estate Panorama Stitching Services
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Perfect panoramas that impress buyers, boost sales, and save you time.
        </p>
      </header>

      <Section title="What is Real Estate Panorama?">
        <p>
          A real estate panorama is a wide-angle view of a property, often used
          in 360° virtual tours. We stitch multiple images together seamlessly,
          ensuring details are maintained across the entire picture.
        </p>
      </Section>

      <Section title="Services We Offer">
        <ServiceList
          services={[
            "Image Cropping and Rotation",
            "Full-view Stitching (Circular, Rectilinear, Full Frame)",
            "Horizontal & Vertical Image Stitching",
            "Brightness and Contrast Correction",
            "Wires and Switchboard Removal",
            "Aligning, Warping and Positioning",
            "Color Replacement",
            "Photo Filters Application",
            "Unwanted Object Removal",
            "Curve & Level Adjustment",
            "QuickTime Movie Conversion",
            "Image Enhancement",
          ]}
        />
      </Section>

      <Section title="Our Process">
        <ProcessSteps
          steps={[
            "Collect requirements and project challenges",
            "Plan editing approach and discuss with client",
            "Provide estimated timeline and sample edits",
            "Assemble team with relevant expertise",
            "Process panoramas per client specs under SLA",
            "QA team verifies accuracy of edited panoramas",
            "Deliver final files securely via SFTP or VPN",
          ]}
        />
      </Section>

      <Section title="Why Choose Nimble Acuity?">
        <AdvantagesList
          items={[
            "ISO 9001:2015 certified provider",
            "100% data security (ISO/IEC 27001:2022 compliant)",
            "High-quality editing standards",
            "Quick turnaround times",
            "Advanced editing tools like Photoshop, PTGui",
            "Affordable and cost-efficient",
            "Scalable services for large projects",
            "Dedicated SPOC for communication",
            "Experienced panorama editors",
            "24/7 customer support",
          ]}
        />
      </Section>

      <Section title="Client Success Stories">
        <CaseStudies />
      </Section>

      <Section title="Testimonials">
        <Testimonials />
      </Section>

      <div className="text-center mt-10">
        <Button size="lg">Contact Us Today</Button>
      </div>
    </div>
    </div>
  );
};

export default PanoramaStitchingPage;
