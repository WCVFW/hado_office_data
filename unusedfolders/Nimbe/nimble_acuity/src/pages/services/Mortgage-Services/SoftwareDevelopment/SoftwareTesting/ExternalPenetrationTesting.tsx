import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const ExternalPenetrationTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              External Network Penetration Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Protect your networks, devices, and servers from multiple vulnerabilities by choosing our services at prices starting at just $20 an hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Network vulnerabilities become a greater problem when an organization starts growing and moves towards cloud-based systems. This is when it is extremely crucial to handle security flaws that are easily exploited by hackers, thus making sure your organization only keeps growing. Network penetration testing services help you make informed decisions based on the highlighted security flaws, thus ensuring your networks are extremely safe and foolproof at all times. And this is when collaborating with a professional external network penetration testing service provider can help a great deal.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading network penetration testing service provider with a team of experienced and skilled experts who come up with the right strategy to test your networks to identify vulnerabilities. With our external network penetration services, you can identify and fix loopholes in your network, ensuring complete security and safeguarding your organization from third-party unauthorized access and hacks.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              External Network Penetration Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We, at **Nimble Acuity**, offer comprehensive external network penetration testing solutions for your enterprise to maintain network safety and security by identifying any loopholes and troubleshooting them. With our services, we help you explore real-world experiences to deal with attacks. Following are some of the services that are a part of our comprehensive external network pen-test solutions:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Risk Prioritization:</span> With our penetration testing services, we help our clients in prioritizing risks. This is done by identifying all the risks and then analyzing which risk factors may have the greatest impact on your network so that your time and resources are wisely dedicated to such risks first.
              </li>
              <li>
                <span className="font-semibold">Attack Vector Feasibility:</span> Our team of experts determines how attackers could get into your systems, finding the feasibility of attack vectors. This helps in understanding which attack vector is riskier, helping you determine which attack vector to dedicate your resources to.
              </li>
              <li>
                <span className="font-semibold">Compliance Assistance:</span> Many industries, such as the payment card industry, have regulations that make it mandatory for businesses to carry out annual or time-to-time penetration testing to ensure that the networks and servers are completely secure and safe from third-party access and security breaches.
              </li>
              <li>
                <span className="font-semibold">Post-Incident Analysis:</span> If there is an incident of a security breach in your organization's systems and servers, penetration testing services, along with forensic analysis, can help in recreating the exact attack chain so that new strategies can be worked out to make sure similar future attacks can be prevented.
              </li>
              <li>
                <span className="font-semibold">Improving Security Response Time:</span> With our services, we create real-world scenarios of attacks that feel exactly like attacks on your security team. This is to help your security team in understanding how much time it takes for a hacker to attack your systems and, in turn, make it clear as to how prepared your security team is to tackle such attacks.
              </li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Network Penetration Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you outsource penetration testing services to **Nimble Acuity**, a bunch of advantages comes along, which are as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Affordable Testing Solutions:** Our services are offered at a highly competitive price, and we give our clients the option to customize the services as per their requirements.</li>
              <li>**Experienced Team of Testers:** With a team of experienced testers who have the skills and expertise required for performing external as well as internal network penetration testing, we can assure you that our services will ensure complete safety and security for your networks and infrastructure.</li>
              <li>**ISO Certified Organization:** Being an ISO 9001: 2015 certified penetration testing service provider, you can rest assured that our solutions are of high quality and will impact your organization in the most positive ways.</li>
              <li>**Quick Turnaround Time:** With multiple delivery centers located around the globe, we offer external network penetration services with a quick turnaround time.</li>
              <li>**24/7 Assistance:** We have a team of customer care and support executives that is available around the clock to resolve your doubts and queries concerning our services.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              With years of experience in providing external network penetration testing services, we can assure you that when you outsource penetration testing services to us, you can expect the highest form of quality at affordable rates and complete transparency. We are committed to ensuring that our clients are highly satisfied with the outcomes of our services, and thus are completely dedicated to offering unerring solutions after a careful assessment of our client's requirements.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us now to outsource penetration testing services at budget-friendly rates.
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

export default ExternalPenetrationTesting;