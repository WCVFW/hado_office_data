import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const VAPTServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Vulnerability Assessment and Penetration Testing (VAPT) Services
            </h2>
            <p className="text-lg text-gray-600">
              Safeguard your network infrastructure, web apps, mobile apps, and cloud environments from threats and risks.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              When you work with networks, web apps, mobile applications, or IoT devices, it's crucial to safeguard them from potential threats. VAPT is a vital service that helps you ensure your systems and networks have foolproof cybersecurity. These services not only find existing threats but also help you stay safe from future ones. By working with a professional VAPT provider, you can gauge security weaknesses before they're detected by attackers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading VAPT service provider with over two decades of experience helping clients identify vulnerabilities and improve the security of their digital infrastructure. Our team of testers can find weak points in your networks through comprehensive vulnerability assessment and penetration testing, keeping your organization safe from threats.
            </p>
          </div>

          {/* VAPT Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              VAPT Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We provide both manual and automated VAPT solutions to help clients keep their systems safe from cyber threats. Our team of VAPT testers has full knowledge of ethical hacking techniques and follows a systematic approach based on your specific requirements. The following are the VAPT services we offer:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Vulnerability Management</h4>
                <p>Our vulnerability management services assess your IT infrastructure to identify vulnerable points. We simulate real-world threats to help you manage your systems and networks and keep your business assets safe. This includes Network Scanning, Interactive Attack Path Mapping, and Web Application Scanning.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Penetration Testing</h4>
                <p>We safely exploit vulnerabilities to test and secure your infrastructure. This includes testing applications, operating systems, and improper configurations, helping you validate the effectiveness of your security policies. Our services include Web Application, Wireless Network, and Network Penetration Testing.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you work with us, you get a series of benefits that set us apart from the rest.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Solutions:</strong> Our customizable VAPT services are highly affordable, allowing enterprises of all sizes to secure their infrastructure without budget being a challenge.</li>
              <li><strong>100% Data Security:</strong> We ensure complete data security by strictly adhering to data security policies. Our team also signs confidentiality agreements so you can rest assured your data is completely safe with us.</li>
              <li><strong>Well-established Infrastructure:</strong> We have an impressive infrastructure equipped with the latest systems and secure networks, allowing our teams to operate smoothly and efficiently.</li>
              <li><strong>Dedicated Project Manager:</strong> We assign you a project manager as a single point of contact for all your queries and to provide timely reports.</li>
              <li><strong>Quick Turnaround Times:</strong> With our offices located across various parts of the world, we offer VAPT services with quick turnaround times to ensure your project is completed well within the stipulated timeframe.</li>
              <li><strong>Round-the-Clock Support:</strong> Our team of customer care executives is available around the clock to answer your queries via calls, emails, or our live chatbox.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Secure Your IT Infrastructure?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is an experienced and skilled VAPT services company that stands out for its expertise, transparency, and talented team. Since attackers and hackers are always coming up with new ways to access business-critical information, it's necessary to frequently test your systems and networks. By outsourcing VAPT services to us, you ensure that professionals with years of experience are catering to your needs.
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

export default VAPTServices;