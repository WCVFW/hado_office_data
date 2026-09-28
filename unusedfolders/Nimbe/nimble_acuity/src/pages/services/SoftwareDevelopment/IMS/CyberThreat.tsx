import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CyberThreat: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Cyber Threat Intelligence Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Eliminate cyber vulnerabilities and strengthen your protection against cyber threats with our expert services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Every business today faces the risk of cyber threats, making it essential to create a strong defense. A cyber threat can cause indefinite loss in terms of revenue and reputation. Analyzing cyber threats is the first step in building a robust cybersecurity strategy. **Nimble Acuity** is a reliable cyber threat intelligence services providing company that has effectively helped numerous businesses with detection, risk mitigation, and strategic cybersecurity operations. Partnering with us strengthens your defense against cyber threats with tailor-made programs catering to your specific IT landscape.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Cyber Threat Intelligence Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading cyber threat intelligence service provider that uses advanced detection techniques to develop a perfect-fit security posture for your business. Our spectrum of services includes:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cyber Threat Detection</h4>
                                <p>
                                    Advanced cloaking techniques like phishing and malware attacks require expert detection. We provide human expertise along with AI-backed automation to detect malicious attacks before they harm your business.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Structured Security Posture</h4>
                                <p>
                                    We assess the levels, types, and targets of threats based on industry and geographical analysis. Our security experts provide data-driven insights to help you develop a robust front-line defense.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cybersecurity Optimization</h4>
                                <p>
                                    We enhance your cybersecurity efficiency by optimizing incident response and threat prevention plans to strengthen your overall security strategy.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cyber Threat Intelligence Analysis</h4>
                                <p>
                                    Our team offers continuous monitoring to produce data-driven analysis, providing reports and alerts based on critical observations. This analysis provides a strong base for building actionable security intelligence.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Enhanced Cyber Threat Response</h4>
                                <p>
                                    We optimize every stage of your cyber threat response to ensure faster detection and mitigation as soon as a security breach is suspected.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cyber Threat Alerts</h4>
                                <p>
                                    Our team continuously analyzes and interprets intelligence data, alerting you to potential threats and planning the best course of action. Automated alerts are also set to notify respective teams of any suspected attack.
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
                            Our services provide actionable and data-driven insights to build your defense. With our unmatched expertise, you can enjoy these advantages:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>A Dedicated Team of Experts:</strong> We hire the best-in-class cyber experts with proven experience, ensuring you receive world-class services.</li>
                            <li><strong>Value for Money:</strong> Our services are customized and affordable, giving you the most reasonable rates without compromising quality.</li>
                            <li><strong>Best of Both Worlds:</strong> We leverage AI automation and human expertise to provide you with superlative quality cyber threat intelligence services.</li>
                            <li><strong>Round-the-clock Monitoring:</strong> Our experts deliver real-time insights from intelligence data, providing essential visibility into upcoming threats.</li>
                            <li><strong>Proactive Approach:</strong> Our cybersecurity experts adopt a proactive approach, preparing for foreseeable threats to prevent any cybersecurity breach.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Build a Stronger Defense?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Get cutting-edge services for your business by partnering with the leading cyber threat intelligence services company. We provide comprehensive services to monitor and detect cyber threats, mitigate attacks, and implement prevention plans. Stop worrying about cyber threats by outsourcing your needs to us.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Contact Our Experts
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CyberThreat;