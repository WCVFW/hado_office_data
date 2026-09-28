import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ToktivBusinessVoip: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Toktiv - Business VoIP Phone Service
            </h2>
            <p className="text-lg text-gray-600">
              TokTiv by **Nimble Acuity** is a fast, affordable, and scalable virtual cloud phone system for businesses.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With Voice over Internet Protocol (VoIP) technology, you can make and receive phone calls using the internet in real-time. Implementing effective VoIP services within your organization will revolutionize your consumer engagement outcomes. But doing it in-house can be an expensive affair! Outsource your requirement to **Nimble Acuity**. We offer business VoIP phone services at cost-effective rates and without any need for programming whatsoever!
            </p>
            <p className="text-gray-700 leading-relaxed">
              TokTiv by **Nimble Acuity** is a cloud phone system that makes consumer engagement simple and easy. With the unified callbox feature, users can handle and monitor business calls, recorded conversations, texts, and voicemails, all from a single window. It is available on Android, iOS, Windows, macOS, and Web platforms. Leverage our cloud phone system today to enhance your business goals!
            </p>
          </div>

          {/* Business VoIP Phone Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Business VoIP Phone Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer the best business VoIP phone services. Our cloud phone system acts as a companion app for Twilio. Twilio is more suited for developers, but with our services, you can effortlessly benefit from Twilio's fantastic voice and message facilities.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Calls & SMS:</strong> As one of the best business VoIP providers, we enable you to make calls and send SMS to any Twilio-supported number, whether national or international.
              </li>
              <li>
                <strong>Conferencing:</strong> Our VoIP services include business conferencing and teleconferencing. Our solution comes with a brilliant user interface that requires zero technical knowledge.
              </li>
              <li>
                <strong>Call Transfer & Forwarding:</strong> The TokTiv app comes with seamless call transfer and call forwarding features. It lets you add and manage up to 9,999 members.
              </li>
              <li>
                <strong>IVR Services:</strong> We bring you programmable IVR services at the most affordable rates. Our cloud-based call management solution tracks, monitors, and routes calls with multi-level IVR functionalities.
              </li>
            </ul>
          </div>

          {/* Other Services You Can Benefit From */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Twilio Consultancy Services</li>
              <li>Twilio Integration Services</li>
              <li>Twilio Flex Services</li>
              <li>Business Application Development</li>
            </ul>
          </div>

          {/* Why Outsource to Nimble Acuity? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Business VoIP Phone Services to **Nimble Acuity**?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is a reputed business VoIP provider with over 26 years of industry experience. The benefits of partnering with us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Services:</strong> We offer Toktiv VoIP services at the most affordable rates.</li>
              <li><strong>Quality Services:</strong> We offer the best cloud phone service. Our solution is user-friendly and requires no technical knowledge.</li>
              <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022 certified organization, we have a robust ISMS system in place and leverage our state-of-the-art IT infrastructure to prevent any unauthorized data access.</li>
              <li><strong>Round-the-Clock Support:</strong> We operate from 10+ global delivery centers, and our agents are available 24/7 for support.</li>
              <li><strong>Highly Scalable Services:</strong> As one of the best business VoIP providers, we have the infrastructure and resources required to scale up our services on short notice.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Looking for the Best Cloud Phone Service?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** offers the best business VoIP phone services to users across verticals. Due to its affordability, our solutions are a boon for small to medium businesses. We also extend a range of software development services to clients across time zones. Our team works with you to identify your specific needs and deliver tailored services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Reach out to us today to get the most effective business VoIP phone services at the most affordable rates!
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

export default ToktivBusinessVoip;