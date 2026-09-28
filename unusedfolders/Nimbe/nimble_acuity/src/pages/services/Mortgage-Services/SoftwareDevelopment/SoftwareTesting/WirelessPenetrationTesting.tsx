import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const WirelessPenetrationTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Wireless Penetration Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Maintain and improve the security of your wireless networks and infrastructure at prices starting at just $20/hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you part of a company that relies on wireless networks to conduct its daily business activities? Do you use wireless networks to perform a range of activities involving sensitive data, such as completing orders or transferring money? Are you worried that your critical wireless network may act as an entry point for cybercriminals who could steal valuable data?
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading provider of wireless penetration testing services with over two decades of experience in performing a wide range of software and hardware testing. We are the go-to partner for companies looking to ensure that adequate security controls are in place and that all sensitive data and systems are secure. Our penetration testing is performed by experienced and skilled ethical hackers who mimic the ways a cyber attacker would function to expose and exploit critical data.
            </p>
          </div>

          {/* Wireless Penetration Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Wireless Penetration Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** can help you achieve the highest return on investment from your wireless testing. Our services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Requirement Scoping</h4>
                <p>
                  Our testing experts will work with you to understand your specific wireless testing needs and formulate an appropriate strategy.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Existing Wireless Network Reconnaissance</h4>
                <p>
                  Our pen testing experts combine their deep knowledge of wireless networks with the latest intelligence-gathering techniques to fully understand your firm's network.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Vulnerability Identification and Analysis</h4>
                <p>
                  Our experienced testers ethically hack your network to identify all security vulnerabilities. Potential weaknesses we expose include:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-gray-700">
                  <li>Rogue access points</li>
                  <li>Weak encryption</li>
                  <li>Guest WiFi weaknesses</li>
                  <li>Bruteforce weaknesses</li>
                  <li>Default router setups</li>
                  <li>WPA key vulnerabilities</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Vulnerability Solutions</h4>
                <p>
                  Once all vulnerabilities have been identified, our experts will compile a detailed report on how you can address them to create a bullet-proof wireless network.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We have significant experience providing customized and expert testing services to address your exact requirements.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Experienced Team:</strong> Our highly qualified and skilled security experts use their deep intelligence to provide highly advanced services.</li>
              <li><strong>Affordable Services:</strong> We use streamlined processes to cut down on costs, passing significant savings on to our clients.</li>
              <li><strong>Customized Solutions:</strong> Our engineers will work closely with you to understand your requirements and identify all threats, flaws, and vulnerabilities.</li>
              <li><strong>Fast Turnaround:</strong> You will always receive sophisticated expertise at timelines that are the fastest in the industry.</li>
              <li><strong>Multi-domain Experience:</strong> Our team is highly experienced and capable of performing a comprehensive range of software and hardware testing.</li>
              <li><strong>Security:</strong> We ensure all data we obtain from our clients are handled with the utmost adherence to strict security protocols.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Secure Your Wireless Network?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading wireless penetration testing company that has catered to the software and hardware testing requirements of a diverse clientele from across the world. Our team of testing experts comprises professionals with several years of in-depth experience. Our security experts work with great attention to detail and use their deep expertise to mimic the activity of advanced hackers and expose any threat, flaw, or vulnerability in your wireless network.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Free Quote
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default WirelessPenetrationTesting;