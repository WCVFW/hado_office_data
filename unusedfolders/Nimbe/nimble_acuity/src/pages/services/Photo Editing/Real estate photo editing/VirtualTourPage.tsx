import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PEMainMenu from "../PEmainmenu";


const Section: React.FC<{ title?: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="my-12">
    {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
    <div className="space-y-6">{children}</div>
  </section>
);

const ServiceList: React.FC<{ services: string[] }> = ({ services }) => (
  <ul className="grid md:grid-cols-2 gap-4">
    {services.map((s, idx) => (
      <li
        key={idx}
        className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
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
          Seamless Panorama Stitching for Portland Client
        </h3>
        <p>
          Delivered efficient panorama stitching services for a leading Portland
          real estate client. Swift and budget-friendly solutions ensured
          impactful marketing visuals.
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold">Image Editing & Video Creation</h3>
        <p>
          Enhanced 3D real space visualizations through professional image
          editing and video creation services. Delivered tailored solutions for
          impactful results.
        </p>
      </CardContent>
    </Card>
  </div>
);

const Testimonials: React.FC = () => (
  <div className="space-y-4">
    <blockquote className="italic border-l-4 pl-4 text-gray-700">
      “I got to see the photos you edited for the Millennium Towers project and
      they were amazing. It's a thumbs up from me to your editors as the images
      were perfect quality-wise.”
    </blockquote>
    <p className="font-semibold">
      – Managing Director, Real Estate Photography Company, USA
    </p>
  </div>
);

const VirtualTourPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Navigation */}
      <PEMainMenu />

      {/* Hero Section */}
      <header className="text-center mb-12 mt-6">
        <h1 className="text-3xl font-bold">
          Nimble Real Estate Virtual Tour Services
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Enhance Listings with Professional Real Estate Virtual Tour Services!
        </p>
        <p className="mt-2 text-gray-500">
          We tackle 360° complexities, delivering captivating tours that engage
          buyers and spotlight your properties.
        </p>
      </header>

      {/* Intro */}
      <Section title="Why Virtual Tours Matter">
        <p>
          Creating a virtual tour is more than just visuals – it’s about
          engagement. Our team bridges technical complexity by managing the
          entire process: from capturing footage to seamless editing, marketing
          integration, and quick delivery.
        </p>
      </Section>

      {/* Services */}
      <Section title="Real Estate Virtual Tour Solutions We Offer">
        <ServiceList
          services={[
            "360-Degree Virtual Tour Creation – immersive walkthroughs with hotspots",
            "Virtual Reality Tour Services – optimized 3D experiences for VR platforms",
            "Customized Navigation – intuitive user paths with clickable navigation points",
            "Floor Plans & Maps Integration – blending tours with accurate layouts",
            "High-Quality Image & Video Enhancement – optimized visuals for marketing",
            "Hotspot Annotations – interactive details with text, media & popups",
            "Voiceover & Audio Integration – immersive soundscapes for property tours",
            "Aerial Drone Photography Tours – unique aerial perspectives",
            "Architectural Photography Tours – immersive experiences for aesthetics",
          ]}
        />
      </Section>

      {/* Software */}
      <Section title="Software We Use">
        <ServiceList
          services={[
            "Adobe Lightroom",
            "Adobe Photoshop",
            "PTGui",
            "3D Vista",
          ]}
        />
      </Section>

      {/* Clients */}
      <Section title="Clientele We Serve">
        <ServiceList
          services={[
            "Property Developers",
            "Commercial Real Estate Professionals",
            "Architects & Interior Designers",
            "Property Management Companies",
            "Real Estate Agents & Brokers",
            "Home Sellers",
            "Real Estate Photographers & Dealers",
            "Interior Designing Companies",
            "Luxury Real Estate Dealers",
            "Rental Companies",
          ]}
        />
      </Section>

      {/* Process */}
      <Section title="Our 360° Virtual Tour Process">
        <ol className="list-decimal list-inside space-y-2">
          <li>Information Gathering – understanding client needs</li>
          <li>
            Scoping & Sampling – creating a sample tour with cost & timeline
          </li>
          <li>
            Documentation – recording project requirements & approvals
          </li>
          <li>
            File Processing – stitching & editing per client specifications
          </li>
          <li>
            Delivery – final quality check and secure FTP file transfer
          </li>
        </ol>
      </Section>

      {/* Why Choose Us */}
      <Section title="Why Choose Us?">
        <ServiceList
          services={[
            "Professional Expertise from skilled editors & photographers",
            "Project Security with ISO-certified standards",
            "Robust Quality Management with checks at every stage",
            "Fast Turnaround – 2 to 24 hours",
            "ISO/IEC 27001:2022 Information Risk Management",
            "Advanced Infrastructure with VPN, software & secure networks",
            "Scalability with flexible resource allocation",
            "24/7 Customer Support",
            "Affordable Pricing Options",
          ]}
        />
      </Section>

      {/* Additional Services */}
      <Section title="Additional Services We Offer">
        <ServiceList
          services={[
            "Real Estate Image Editing",
            "Panorama Image Stitching",
            "Real Estate HDR Image Blending",
            "3D Floor Plan Conversion",
          ]}
        />
      </Section>

      {/* Case Studies */}
      <Section title="Customer Success Stories">
        <CaseStudies />
      </Section>

      {/* Testimonials */}
      <Section title="Testimonials">
        <Testimonials />
      </Section>

      {/* CTA */}
      <div className="text-center mt-12">
        <Button size="lg" className="px-8 py-4 text-lg">
          Contact Us Today
        </Button>
      </div>
    </div>
  );
};

export default VirtualTourPage;
