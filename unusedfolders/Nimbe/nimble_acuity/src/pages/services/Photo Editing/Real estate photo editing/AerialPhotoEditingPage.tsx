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
          Hair Masking for European Photographer
        </h3>
        <p>
          Provided exceptional hair masking services for 700+ images for a
          Holland-based client, ensuring outstanding quality and satisfaction.
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold">High-quality Image Clipping</h3>
        <p>
          Delivered 700+ clipped images within 1 day for a Danish client, with
          precision and industry-leading turnaround time.
        </p>
      </CardContent>
    </Card>
  </div>
);

const Testimonials: React.FC = () => (
  <div className="space-y-4">
    <blockquote className="italic border-l-4 pl-4 text-gray-700">
      “Nimble Acuity will have a positive effect on any business processes. I
      do not doubt that.”
    </blockquote>
    <p className="font-semibold">
      – Marketing Director, Insulation Company, UK
    </p>
  </div>
);

const AerialPhotoEditingPage: React.FC = () => {
  return (
    <div><PEMainMenu />
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Navigation Bar */}
      

      <header className="text-center mb-12 mt-6">
        <h1 className="text-3xl font-bold">
          Nimble Real Estate Aerial Photo Editing Services
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Get professional real estate and aerial photo editing services at
          affordable rates and enhance the appeal and quality of your aerial
          real estate photographs.
        </p>
      </header>

      <Section title="Why Choose Aerial Photo Editing?">
        <p>
          Are you trying to find a reliable real estate photo editing firm that
          can provide experienced and professional services of aerially shot
          real estate photo editing? Our experts ensure that your property
          images are enhanced to attract clients and boost sales.
        </p>
      </Section>

      <Section title="Our Aerial Real Estate Photo Editing Services">
        <ServiceList
          services={[
            "Photo Stitching – Creating seamless panoramic aerial views",
            "Photo Enhancement – Transform dull images into stunning visuals",
            "Removing Objects – Eliminate unwanted distractions",
            "HDR Enhancement – Showcase properties with realistic depth and detail",
          ]}
        />
      </Section>

      <Section title="Other Services You Can Benefit From">
        <ServiceList
          services={[
            "Real Estate Image Processing",
            "Image Enhancement Services",
            "Image Manipulation Services",
            "Wedding Photo Editing Services",
          ]}
        />
      </Section>

      <Section title="Why Nimble to Nimble Acuity?">
        <ServiceList
          services={[
            "Flexible Pricing for all business sizes",
            "Strict Information Security (ISO-certified)",
            "Superior Quality Editing",
            "Best-in-class Infrastructure",
            "Experienced Professionals",
            "Customized Editing Solutions",
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
    </div>

  );
};

export default AerialPhotoEditingPage;
