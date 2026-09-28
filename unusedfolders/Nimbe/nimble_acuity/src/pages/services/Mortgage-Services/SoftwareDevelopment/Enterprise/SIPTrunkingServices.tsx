import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SIPTrunkingServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            SIP Trunking Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Nimble Acuity helps enterprises measure and improve their voice infrastructure. We give you a transparent view of your network and help identify areas for improvement.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            With the help of VoIP, you can save money and improve your telephony without increasing your expenses. If you require SIP trunking services from an experienced third-party provider, Nimble Acuity is a leading provider of SIP trunking services. With our solutions, you keep all the bells and whistles of traditional telephony while saving up to 50% monthly. You could also save an extra 25% to 50% on converged networks.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity has been providing reliable global Session Initiation Protocol (SIP) trunking services for years. We deliver these services with billions of minutes of annual traffic. We provide reliable and secure business-grade VoIP services in all of our global markets. With our comprehensive feature set and highly reliable service, businesses can easily migrate from legacy telephony to VoIP without having to worry about security or compliance issues.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            SIP Trunking Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            When you outsource SIP Trunking services to Nimble Acuity, you are counting on the efforts of our team to manage your voice portfolio with care. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Enterprise SIP Trunking Solutions</h4>
                                <p>
                                    Nimble Acuity's enterprise SIP trunk facility can provide your business with a seamless and unified international communication experience. It can also streamline and reduce communication costs for your organization.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Elastic SIP Trunking</h4>
                                <p>
                                    With our elastic SIP trunking service, you can easily scale up or down to meet your bandwidth needs. It's easy, fast, and efficient compared to trunking from other providers.
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
                            Nimble Acuity is a visionary SIP trunking services company that understands what enterprises need. Some of the key reasons to choose us are as follows:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Services:</strong> With our flexible pay-as-you-go pricing, you can choose how you want to use elastic SIP trunking. No contracts or channel fees are required.</li>
                            <li><strong>High-Quality Support:</strong> We believe in delivering impeccable quality and continuously check our work before we sign off on a project.</li>
                            <li><strong>Experienced Consultants:</strong> You can quickly and easily transform your communications with minimal effort as your requirements are placed in expert hands.</li>
                            <li><strong>Secure Data Management Practices:</strong> We provide comprehensive security features to prevent fraud and safeguard your assets from anywhere in the world.</li>
                            <li><strong>Scalable Solutions:</strong> Our SIP trunking services can be scaled to meet your current and future needs, making the process seamless and efficient.</li>
                            <li><strong>24/7 Support:</strong> We have global delivery capabilities and serve customers continually from all quarters via phone, email, and web chat support.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource SIP Trunking Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of VoIP and other Enterprise Software solutions. We have been working with many global clients for years and have a team of experts who can help you get started with implementing VoIP and other related services. We offer a continuum of software enterprise solutions that shape your business with a game-changing formula.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get in touch
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SIPTrunkingServices;