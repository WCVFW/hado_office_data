import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const DatingAppDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Dating App Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Increase your user engagement with full-featured apps & websites that are high on usability, navigation, and interface.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a custom dating app development solutions provider. Whether you are trying to update an existing app or build one from scratch, our developers can help you reach your objective in less time and at reduced costs. Our globally qualified developers have proven expertise in dating mobile app development for all the popular platforms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our solutions include attractive features and interactive UI/UX that will give you a competitive edge in the market. With over two decades of experience, we are proficient in delivering dating app designs that help businesses acquire a large customer base.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Dating Portal Development Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>iOS Dating Apps:</strong> Our developers create top dating app platforms with key features that support all smart devices and offer added flexibility to users.</li>
              <li><strong>Android Dating Apps:</strong> Our versatile developers create innovative and unique apps for Android users. We customize our on-demand dating app development services as per your users and competitors.</li>
              <li><strong>LGBTQ Dating Apps:</strong> We facilitate businesses to help anyone locate suitable partners, irrespective of their preferences.</li>
              <li><strong>Community-based Dating Apps:</strong> We offer high-end and personalized services that enable people to find partners from a particular caste or community.</li>
              <li><strong>Religious Dating Apps:</strong> Partner with us to develop customized dating platforms for people wanting to date those with similar religious beliefs.</li>
            </ul>
          </div>

          {/* Value-Added Features */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Online Dating Application Development - Value Added Features
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Live-Chat & Instant Messaging (IMs)</li>
              <li>Webcasts & Message boards</li>
              <li>Popular profiles and featured profiles</li>
              <li>Multi-language support</li>
              <li>Admin Tools with statistics</li>
              <li>Attention to Member Privacy</li>
              <li>Focus on Internet Security</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We have an outstanding track record of delivering superior dating website development solutions to clients. The benefits of partnering with us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-effective Prices:</strong> We provide top-notch services at highly affordable rates.</li>
              <li><strong>Quick Turnaround Time:</strong> Our experts work around the clock to deliver high-quality services with quick turnaround times.</li>
              <li><strong>Complete Data Security:</strong> We are an ISO/IEC 27001:2022-certified company, leveraging the latest data security tools to protect your data.</li>
              <li><strong>Fully Scalable:</strong> We have the infrastructure and resources to scale up or down within short notice.</li>
              <li><strong>Single Point of Contact:</strong> We assign you a dedicated project manager who will keep you updated on all developments in real-time.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Launch Your Dating App?
            </h3>
            <p className="text-gray-700 mb-6">
              We are a globally reputed dating app development company that offers a range of website, app, and software development services to various business entities. By partnering with us, our clients gain access to global expertise. We enable our clients to speed up the dating application development process without compromising quality.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Reach out to us for user-friendly dating websites and apps with seamless navigation and an interactive user interface.
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

export default DatingAppDevelopment;