import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const NetworkPenetrationTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Network Penetration Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Identify critical vulnerabilities and strengthen your network security by choosing our expert services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Network security is no longer a simple buzzword. A cyber-attack occurs every 39 seconds in the United States, with 43% of these attacks targeting small businesses. In 2020 alone, the global average cost of a data breach amounted to $3.9 million across global SMBs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This is the terrifying reality of conducting business online today. As an organization, you must do everything you can to protect your cyber assets and customer information.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity**'s penetration testing allows you to strengthen asset security by finding critical vulnerabilities and misconfigurations throughout your network architecture. This, in turn, enhances your network security, reduces risk, improves efficiency, facilitates compliance, and, most importantly, enhances customer trust.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Network Penetration Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Network security will always remain an ongoing task. Our holistic approach to penetration testing goes beyond standard vulnerability analysis and helps you identify every single vulnerability down to a line of code. Our network penetration testing services include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* External */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">External Network Penetration Assessment</h4>
                <p className="text-gray-700 leading-relaxed">
                  External perimeter networks are often extremely vulnerable. Our services include in-depth external testing to identify significant vulnerabilities in your software or cloud architecture and servers accessible from the internet.
                </p>
              </div>
              
              {/* Internal */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Internal Network Penetration Assessment</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our network testing engineers approach the process with the mindset of a hacker looking for loopholes within your architecture. We leverage a variety of proprietary tools to try and uncover secure user information, sensitive assets, and credentials.
                </p>
              </div>

              {/* Wireless */}
              <div className="md:col-span-2">
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Wireless Network Penetration Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  Wireless-based networks pose the highest security risk. We test the entire range of wireless networks to identify potential vulnerabilities, including extreme tests to check for 'Wireless Bleeding' and lock in distances within which a potential attacker cannot pick up your wireless signal.
                </p>
              </div>
            </div>
          </div>
          
          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Penetration Testing Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We begin by formulating a series of primary and secondary tasks which depend on the client's requirements. Our process consists of the following steps:
            </p>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>**Determining the Scope:** We communicate with your team to work on an operating environment that suits both teams.</li>
              <li>**Information Gathering:** Our team collects information using OSINT (Open Source Intelligence) tools to understand your operating conditions.</li>
              <li>**Vulnerability Scanning and Security Enumeration:** We leverage a variety of automated proprietary tools and cutting-edge information-gathering methods.</li>
              <li>**Systemized Attack and Penetration Tests:** We simulate attack vectors in a controlled environment to find network vulnerabilities while preserving the integrity of your network.</li>
              <li>**Penetration Test Reporting and Documentation:** We provide concise reports with the necessary documentation for your management and security vendors.</li>
              <li>**Remediation Testing:** As an additional service, we retrace our steps after your organization has patched vulnerabilities to ensure all changes were implemented correctly.</li>
            </ul>
          </div>
          
          {/* Why Test */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Do You Need a Network Penetration Test?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              With **Nimble Acuity**, you are in the right position to enhance your safeguards against security risks, reduce the overall chances of getting attacked, and improve your operational efficiency. Some of the key advantages include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Reveal Critical Vulnerabilities</li>
              <li>Showcase Risks Involved</li>
              <li>Test Existing Capabilities</li>
              <li>Retain Proper Business Continuity</li>
              <li>Remain Compliant with Regulations</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Network Penetration Testing to **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              At **Nimble Acuity**, we leverage our entire suite of proprietary network penetration testing processes and tools for enhanced threat intelligence. With us, you can gain sustained insight into attacker patterns that try to gain unauthorized access to your network environment. Our team of elite network testers empowers your organization to secure existing defenses and implement new ones while enhancing your security posture.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Consult our team of testing experts right now and overcome safety, security, and client retention challenges.
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

export default NetworkPenetrationTesting;