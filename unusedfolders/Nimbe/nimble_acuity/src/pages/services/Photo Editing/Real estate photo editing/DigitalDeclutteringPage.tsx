import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PEMainMenu from "../PEmainmenu";


const Section: React.FC<{ title?: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="my-10">
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    <div className="space-y-4">{children}</div>
  </section>
);

const ServiceList: React.FC<{ services: string[] }> = ({ services }) => (
  <ul className="grid md:grid-cols-2 gap-3">
    {services.map((s, idx) => (
      <li
        key={idx}
        className="p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
      >
        {s}
      </li>
    ))}
  </ul>
);

const CaseStudies: React.FC = () => (
  <div className="grid md:grid-cols-2 gap-6">
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold">
          Portrait Restoration for South Korean Client
        </h3>
        <p>
          Delivered 1400 completed images per week for a photo restoration
          company in South Korea, ensuring high satisfaction and repeat
          business.
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold">
          Image Clipping & Retouching for Jewelry Expert
        </h3>
        <p>
          Helped a Minnesota-based jewelry merchant enhance product images for
          e-commerce, improving appeal and driving online sales.
        </p>
      </CardContent>
    </Card>
  </div>
);

const Testimonials: React.FC = () => (
  <div className="space-y-4">
    <blockquote className="italic border-l-4 pl-4 text-gray-700">
      “No matter where you are around the world, if you need any photo editing
      services, I would highly recommend giving Nimble Acuity a chance to
      showcase their work on your business.”
    </blockquote>
    <p className="font-semibold">– Photography Enthusiast, USA</p>
  </div>
);

const DigitalDeclutteringPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Navigation Bar */}
      <PEMainMenu />

      <header className="text-center mb-12 mt-6">
        <h1 className="text-3xl font-bold">
          Nimble Real Estate Digital Decluttering Services
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Enhance the aesthetic value of your listings with clutter-free,
          professionally edited images that drive faster sales.
        </p>
      </header>

      <Section title="Why Digital Decluttering Matters">
        <p>
          Cluttered or untidy images can reduce the visual appeal of your
          property listings. We strategically declutter images to highlight key
          features like spacious living rooms, modern kitchens, and inviting
          outdoor spaces—helping buyers better visualize themselves in the
          property.
        </p>
      </Section>

      <Section title="Our Real Estate Image Decluttering Services">
        <ServiceList
          services={[
            "Real Estate Photo Fix",
            "Flash Shadow Removal",
            "Sky Replacement Services",
            "Contrast & Brightness Adjustment",
            "White Balance Adjustment",
            "Perspective Correction",
            "Virtual Staging Solutions",
            "HDR Blending Services",
            "Panorama Stitching Services",
            "Color Cast Removal",
          ]}
        />
      </Section>

      <Section title="Software We Leverage">
        <ServiceList
          services={[
            "Adobe Lightroom",
            "Adobe Photoshop",
            "PTGui",
            "3D Vista",
          ]}
        />
      </Section>

      <Section title="Industries We Serve">
        <ServiceList
          services={[
            "Real Estate Photographers",
            "Real Estate Dealers",
            "Real Estate Companies",
            "Interior Designing Companies",
            "Virtual Tour Creators",
            "Luxury Real Estate Dealers",
            "Real Estate Rental Companies",
          ]}
        />
      </Section>

      <Section title="Additional Services">
        <ServiceList
          services={[
            "Real Estate Image Editing Services",
            "Portrait Services",
            "Photoshop Services",
            "Clipping Path Services",
          ]}
        />
      </Section>

      <Section title="Why Choose Nimble Acuity?">
        <ServiceList
          services={[
            "Cost-effective Pricing",
            "Use of Latest Software",
            "Experienced Editing Team",
            "Strict Quality Control",
            "Quick Turnaround Time",
            "Data Security & Confidentiality",
            "Scalable Services",
            "Robust Infrastructure",
          ]}
        />
      </Section>

      <Section title="Client Success Stories">
        <CaseStudies />
      </Section>

      <Section title="Testimonials">
        <Testimonials />
      </Section>

      <div className="text-center mt-12">
        <Button size="lg" className="px-8 py-4 text-lg">
          Contact Us Today
        </Button>
      </div>
    </div>
  );
};

export default DigitalDeclutteringPage;
