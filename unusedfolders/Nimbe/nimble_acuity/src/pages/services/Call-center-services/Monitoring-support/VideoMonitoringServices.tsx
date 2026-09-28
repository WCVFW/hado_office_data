import React from "react";
import CCmainmenu from "../CCmainmenu";

const VideoMonitoringServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Video Monitoring Services
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Experience HD video monitoring with real-time alerts for unparalleled
            clarity and response. Contact us to eliminate blind spots today!
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <p className="mb-6 text-lg">
          At <strong>Nimble Auity</strong>, we address the key challenges of
          video monitoring—poor image quality, data security, and system
          integration. Our UHD and 4K camera recommendations ensure clear
          footage, even in low light. With encrypted cloud storage, GDPR/CCPA
          compliance, and seamless integration with existing infrastructures, we
          deliver secure and efficient surveillance solutions.
        </p>
        <p className="mb-6 text-lg">
          Using AI-powered, Poka–Yoke–enabled systems, we scan videos in real
          time, detect anomalies, and send instant alerts. Edge computing reduces
          bandwidth strain for faster local processing. Our{" "}
          <strong>DMAIC lifecycle</strong> approach validates improvements across
          every monitoring touchpoint.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nimble Video Monitoring Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Live Security Camera Monitoring",
              points: [
                "Real-time surveillance and immediate alerts",
                "Continuous monitoring by dedicated personnel",
                "Alarm verification and evidential footage recording",
              ],
            },
            {
              title: "Remote Video Surveillance",
              points: [
                "Access feeds from any location",
                "Monitor multiple sites simultaneously",
                "Secure platform for remote management",
              ],
            },
            {
              title: "24/7 Video Monitoring",
              points: [
                "Observe live feeds from monitoring centers",
                "Identify suspicious activities and alert owners",
                "Ensures comprehensive security coverage",
              ],
            },
            {
              title: "Commercial Video Monitoring",
              points: [
                "Identify anomalies like masked individuals and tailgating",
                "Integration with existing security infrastructure",
                "Enhances asset protection and safety",
              ],
            },
            {
              title: "Construction Site Monitoring",
              points: [
                "Continuous surveillance to prevent theft and vandalism",
                "Compliance with regulatory and data privacy standards",
                "Ideal for dynamic, high-activity environments",
              ],
            },
            {
              title: "Residential & Home Monitoring",
              points: [
                "Remote access via apps and web portals",
                "Instant alerts to homeowners across platforms",
                "Motion-based detection and alert triggers",
              ],
            },
            {
              title: "Outdoor Video Monitoring",
              points: [
                "All-weather robust systems",
                "Suitable for residential, industrial, manufacturing",
                "Capture evidence to deter crime",
              ],
            },
            {
              title: "Motion Detection Monitoring",
              points: [
                "Analyze scene movements accurately",
                "Identify moving objects and anomalies",
                "Filter unwanted movement to reduce false alarms",
              ],
            },
            {
              title: "Cloud Video Surveillance",
              points: [
                "Record, store, and access remotely",
                "Real-time monitoring and playback",
                "User account and update management",
              ],
            },
            {
              title: "Wireless Video Monitoring",
              points: [
                "Easy installation with flexible connectivity",
                "High-definition recording & alarm verification",
                "Seamless access to live/recorded footage",
              ],
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 px-6 md:px-20 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">Tools We Use</h2>
        <p className="mb-4">
          <span className="font-semibold">Disclaimer:</span> We use third-party
          tools solely for operational purposes and do not endorse or affiliate
          with these entities.
        </p>
        <p className="italic">
          iSpy, Security Monitor Pro, Blue Iris, Zoneminder, Luxriot Evo, Netcam
          Studio, Genius Vision, XProtect Essential+, ContaCam
        </p>
      </section>

      {/* Differentiators */}
      <section className="bg-white py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8">
          How Do Our Video Monitoring Services Make a Difference?
        </h2>
        <ul className="list-disc space-y-3 pl-6 text-lg text-gray-700">
          <li>
            <strong>Dynamic Video Compression:</strong> Optimize storage by
            eliminating Non-Value Added (NVA) segments.
          </li>
          <li>
            <strong>Multi-tenant Platform:</strong> Centralized workflows with
            SIPOC-modeled SOPs.
          </li>
          <li>
            <strong>Anomaly Detection:</strong> AI-driven unusual pattern
            recognition for proactive risk management.
          </li>
          <li>
            <strong>High Availability:</strong> Failover SOPs with SLA-tested
            infrastructure.
          </li>
          <li>
            <strong>Role-based Access Control:</strong> Secure privileges for
            sensitive data access.
          </li>
          <li>
            <strong>Geo-fencing:</strong> Location-based monitoring and targeted
            alerts for unauthorized access.
          </li>
        </ul>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-100 py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
        <ul className="space-y-4 text-lg">
          <li>
            <strong>
              Nimble Solves European Gym's Compliance Monitoring Challenge
            </strong>
          </li>
          <li>
            <strong>
              Revamping CCTV Monitoring Boosts Security and Productivity for
              Restaurant Chain
            </strong>
          </li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6">Clients Speak</h2>
        <blockquote className="border-l-4 border-blue-600 pl-4 italic mb-6">
          We have partnered with Nimble recently and they have been supplying us
          with a bespoke CCTV monitoring system. Nimble has great customer
          service and is always available for our needs.
        </blockquote>
        <blockquote className="border-l-4 border-blue-600 pl-4 italic">
          I am assertive about the services of Nimble and can endorse them with
          confidence. They tailored their service to meet our very specific
          requirements.
        </blockquote>
        <p className="mt-4 font-semibold">– Director, Property Management Company, Nottingham, UK</p>
      </section>

      {/* Closing */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Choose Nimble Video Monitoring Services
        </h2>
        <p className="max-w-3xl mx-auto text-lg">
          Get 360-degree coverage with AI analytics to eliminate vulnerabilities.
          Enhance security, efficiency, and compliance with tailored solutions
          from Nimble Auity.
        </p>
      </section>
    </div>
  );
};

export default VideoMonitoringServices;
