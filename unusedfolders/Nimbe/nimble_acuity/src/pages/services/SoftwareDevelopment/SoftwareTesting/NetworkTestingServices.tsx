import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const NetworkTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Network Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Access cutting-edge and comprehensive network testing services from experienced QAs.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Whether you are a vendor providing a networking solution or an end-user, you need to know that your network can handle traffic correctly at all times. Information flows are now massive for most organizations. Corporations reorganize, data centers move to the cloud, and businesses expand nationally and internationally, all of which mean increases in communication. Quality network testing solutions are therefore extremely critical.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Network testing is performed to ensure that the network configuration works as expected. While similar to software testing, a key difference is that network testing frequently needs to happen in the production environment after configuration changes have been made.
            </p>
          </div>

          {/* Our Network Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Network Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Engineers at **Nimble Acuity** use the latest network testing software to offer the highest levels of network testing expertise, together with cost-effective applications of test automation technology. Rapid test cycles and other networking requirements can be met overnight thanks to our advanced network testing tools that make the most of time-zone differences. Additionally, we have excellent internet bandwidth infrastructure that allows us to carry out effective testing by connecting to your network lab through VPN tunnels without any delay.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our experts in networking protocol stacks and architectures become part of your team, interacting efficiently and effectively with your in-house resources for optimal and accelerated results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Circuits or Site Turn-up */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Circuits or Site Turn-up Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  If you install a new WAN link or remote site, we can verify whether you get the bandwidth requested of your carrier using tools like iPerf. We also perform ping operations to confirm that your circuit doesn’t suffer from any packet loss.
                </p>
              </div>
              
              {/* Routing Policy Change */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Routing Policy Change Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Due to network complexity, larger networks have a higher risk that routing policy changes can have unexpected consequences. We use distributed monitoring agents to perform continuous traceroute and ping tests to validate in real-time whether your routing policy changes are modifying your routing table as designed.
                </p>
              </div>

              {/* Firewall Rules Updating */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Firewall Rules Updating Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  We understand the importance of confirming that new firewall rulesets are successfully implemented. To verify that firewalls have been updated successfully, we use port scanners like nmap or perform ping tests from unprotected to protected networks.
                </p>
              </div>
              
              {/* Quality of Service */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Quality of Service</h4>
                <p className="text-gray-700 leading-relaxed">
                  It's not easy to apply a quality of service (QoS) configuration to networks. Therefore, we perform extensive testing to confirm that your network is marking, classifying, and queuing the traffic as expected.
                </p>
              </div>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a leading network testing services company. Partnering with us provides you with a host of benefits, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-effective Prices:</strong> We offer both quality and affordability, helping you bring each project in on time and within budget.</li>
              <li><strong>Network Testing Expertise:</strong> As a leading provider of network testing services, we are aware of all the latest practices and tools to provide exceptional services every time.</li>
              <li><strong>Experienced Team:</strong> We have highly experienced and qualified network testing professionals committed to ensuring your product functions as expected and without glitches.</li>
              <li><strong>Project Quality:</strong> We are an ISO 9001:2015 certified company and follow all industry best practices to ensure our service levels are of the highest quality.</li>
              <li><strong>Continuous Improvement:</strong> Our team maintains an active technology watch to constantly enhance its testing capabilities.</li>
              <li><strong>Testing for New Technology and Solutions:</strong> We have extended our reach to test new web architectures, hybrid clouds, network security enhancements, and VoIP.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Secure Your Network Performance?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading network testing service provider with experience providing high-quality solutions to clients across the globe. When you partner with us, you can realize the full benefits of network testing and ensure your product functions as expected.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Whether you are a network product company or an end-user corporation, now is the time to talk to us about the advantages of outsourcing your network testing requirements. Get in touch with us today to find out more!
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

export default NetworkTestingServices;