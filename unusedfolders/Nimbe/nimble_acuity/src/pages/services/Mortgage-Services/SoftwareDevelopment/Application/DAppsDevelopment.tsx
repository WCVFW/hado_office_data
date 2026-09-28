import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const DAppsDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              DApps Development Services
            </h2>
            <p className="text-lg text-gray-600">
              We passionately build DApps that incorporate a savvy interface, forward-focused features, and smart contract add-ons.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Thinking about decentralized applications but not sure where to begin? Outsource DApps development services to **Nimble Acuity** to have our professionals leverage some of the best product development knowledge to help you use an important part of blockchain technology. We do so many things for our clients, ranging from smart contracts and applications to decentralized exchanges. As the world is getting more decentralized, we'll help you stay ahead of the change.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a top DApps development service provider because we have been consistent, quality-defining, timely, and committed when it comes to DApps development services.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              DApps Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Nimble Acuity, we offer superb DApps development services that break the barriers of convention with an approach that's not just rare but substantially beneficial to you. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Minimum Viable Product (MVP) Consulting:</strong> We do our best at analyzing your ideas to decide if you can succeed, helping you get to the depths of technical aspects.</li>
              <li><strong>Custom User Interface Development:</strong> Your apps will have a better and sophisticated interface when you choose to outsource DApps development to us.</li>
              <li><strong>Development of Decentralized Exchange:</strong> We are professionals at building exchange platforms that are interfaced via distributed APIs and shared order books.</li>
              <li><strong>Cloud Support:</strong> If you want to embed DApps in microservices, we will enable encapsulation, further externalized by an API, and offer Cloud data storage.</li>
              <li><strong>Porting DApps:</strong> We offer the next level of porting support for DApps to allow the reusability of the codebase on OS.</li>
              <li><strong>Upgrading DApps:</strong> We offer clients migration support where we effortlessly upgrade services wherever possible, executing smart contracts and upgrading microservices.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Outsourcing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You might wonder, what makes us the top DApps Development service provider in the market? Here are some of our key differentiators:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-effective Pricing:</strong> We offer unmatched prices for our DApps development services without compromising on quality.</li>
              <li><strong>High-quality Services:</strong> Our DApps development services are designed to give you the ultimate value.</li>
              <li><strong>Rapid TAT:</strong> Our DApps development services are always fast as we work with agility to meet delivery timelines and never go back on our assurances.</li>
              <li><strong>Scalable Solutions:</strong> We offer highly scalable DApps development solutions that let you add more resources if needed.</li>
              <li><strong>100% Data Security:</strong> Your data is safe with us as we take great care to keep your data protected and in safe hands.</li>
              <li><strong>Round-the-clock Support:</strong> We are always available to rescue you at the time of need. You may contact our agents via your preferred channels and get a response in an instant.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your DApp?
            </h3>
            <p className="text-gray-700 mb-6">
              At **Nimble Acuity**, we have expert teams exploiting advanced DApps development technologies to offer world-class services. From the implementation of simple features to full-scale development, we take on complete roles effortlessly.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              With experience of over two decades in software technologies, we are undeniably a top DApps development service provider in the industry. To know more, get in touch with us now. We guarantee to provide a quick quote.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DAppsDevelopment;