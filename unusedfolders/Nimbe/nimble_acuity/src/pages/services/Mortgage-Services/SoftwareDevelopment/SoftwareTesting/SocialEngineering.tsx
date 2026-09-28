import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SocialEngineering: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Social Engineering Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide high-value services that simulate the actions of real-world attackers by persuading employees to reveal sensitive information, with rates starting at $20 per hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              One of the most serious security concerns that businesses face is social engineering. Because the attacks are compelling and deceitful, they are incredibly effective. Social attacks can take a variety of shapes and sizes. The psychological manipulation of people into completing acts of exposing personal information is known as social engineering. This is a challenge that requires a strong-handed approach.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading Social Engineering service provider with over two decades of experience in fixing identified and under-investigation vulnerabilities to improve the security of your operation and assets. As part of social engineering penetration testing, we look for weak points in your networks and recommend countermeasures to secure them.
            </p>
          </div>

          {/* Social Engineering Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Social Engineering Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** provides a continuum of social engineering solutions—both manual and automated—to immunize businesses from cyber threats. Our team of testers, with their knowledge of the latest strategies employed by cybercriminals, helps fortify vulnerable businesses. Our services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Email Phishing</h4>
                <p>
                  We perform vulnerability assessments and penetration testing on all emails to prevent your sensitive information from leaving the security bubble. This helps protect against phishing, which is an attempt to trick people into giving up personal or sensitive information.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C] ">Vishing</h4>
                <p>
                  For organizations that deal with a large volume of calls, we assess the security layout of your firm and place checkpoints to intercept calls in real-time. This helps thwart vishing attacks, where victims are tricked into providing sensitive information over the phone.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Smishing</h4>
                <p>
                  SMS phishing, or smishing, is a type of attack where a cybercriminal uses text messages to trick victims into revealing sensitive details. Our team is experienced in assessing and intercepting these text messages to ensure secure information flow between trusted sources.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Security Awareness Training</h4>
                <p>
                  We train your employees to prevent unauthorized access and validate your security controls. Our team will prepare your staff to foresee attacks and take countermeasures wherever needed, creating a human firewall for your organization.
                </p>
              </div>
            </div>
          </div>
          
          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We follow a streamlined process to ensure a frictionless experience and deliver a comprehensive report of our findings and recommendations.
            </p>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Initial Consultation:</strong> Every engagement starts with a conversation to understand your company's cybersecurity objectives.
              </li>
              <li>
                <strong>Team Assignment:</strong> A security engineer and project manager will be assigned to help create and manage your phishing campaigns.
              </li>
              <li>
                <strong>Testing & Simulation:</strong> We simulate phishing, spear phishing, and vishing attacks to conduct thorough testing.
              </li>
              <li>
                <strong>Reporting & Recommendations:</strong> Observations are structured into an executive report, which includes detailed remediation measures.
              </li>
              <li>
                <strong>Project Analysis:</strong> We compile project reports that can be analyzed for informed decision-making.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              For over two decades, **Nimble Acuity** has helped clients protect their networks and IT infrastructure. The following are some of the benefits you'll receive by choosing us.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Solutions:</strong> Our customizable services are highly affordable, allowing businesses of all sizes to secure their infrastructure without a strained budget.</li>
              <li><strong>100% Data Security:</strong> We ensure complete data security by strictly adhering to data security policies. Our team also signs a confidentiality agreement, so you can rest assured your information is safe.</li>
              <li><strong>Well-established Infrastructure:</strong> We have an impressive infrastructure equipped with the latest technology, secure networks, and comprehensive power backup, allowing our teams to operate smoothly and efficiently.</li>
              <li><strong>Single Point of Contact:</strong> We assign you a dedicated project manager who will be the single point of contact for all your needs and provide timely reports on progress.</li>
              <li><strong>Quick Turnaround Times:</strong> With our offices located across various parts of the world, we offer services with quick turnaround times to ensure your project is completed well within the stipulated timeframe.</li>
              <li><strong>Round-the-Clock Support:</strong> Our customer service representatives are available 24/7 to answer your questions and clear up any misunderstandings via phone, email, or our live chatbox.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Secure Your Team and Assets?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a seasoned and skilled services provider that stands out for its sheer expertise, transparency, and highly talented team of seasoned experts. We understand how critical it is for businesses to keep their systems, apps, networks, and assets safe from cyber-attacks. By outsourcing social engineering services to us, you can rest assured that your project will be completed on time and within budget.
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

export default SocialEngineering;