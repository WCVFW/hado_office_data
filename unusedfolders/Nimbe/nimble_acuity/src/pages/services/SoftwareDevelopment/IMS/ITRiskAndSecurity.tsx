import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ITRiskAndSecurity: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            IT Risk & Security Management Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            In today's business world, there is a constant need for robust security solutions to counter against existing and possible cyber threats that attack IT infrastructure. Nimble Acuity offers IT risk & security management that is unparalleled for providing top-notch protection for your assets, employee documents, and customer portfolios.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            IT Security Management Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Nimble Acuity, we offer a diversified portfolio of security and risk management services, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Security Risk Assessments</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 pl-4">
                                    <li>Scoping reviews on security risks in IT</li>
                                    <li>Security risk evaluations</li>
                                    <li>Consulting on counter-terrorism in the IT domain</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Security Systems & Audits</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 pl-4">
                                    <li>Security systems project management with audit, security reviews, and training</li>
                                    <li>Safety plans on security</li>
                                    <li>Formulate third-party security assessments</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Contingency & Business Planning</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 pl-4">
                                    <li>Business continuity planning and contingency services</li>
                                    <li>Crisis management</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Data Protection</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 pl-4">
                                    <li>Executive protection and contract security</li>
                                    <li>Protect ERPs and secure points</li>
                                    <li>Ensure web application security</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            There are more than one or two benefits of partnering with us for IT risk management services. Here are five reasons why you must choose Nimble Acuity:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Maximize Security Structure Effectiveness:</strong> Nimble Acuity offers IT risk and security management solutions that are flexible, economical, and practical to meet the needs of your customers.</li>
                            <li><strong>Easily Frame IT Governance Guidelines:</strong> We will help you frame infallible IT policies with principles based on Information Security Policies and Guidelines, meeting industry-standard security benchmarks.</li>
                            <li><strong>Ensure Web Application Security:</strong> We assist you in auditing web applications and website content. Since most businesses are moving processes to the cloud, we reinforce the security of web-based applications.</li>
                            <li><strong>Protect ERPs and Secure Points:</strong> You can rely on our Business Process Re-engineering team to effectively and smartly invest in ERP audits and reviews. We can help you verify and protect your business-critical ERPs and secure points.</li>
                            <li><strong>Formulate Third-Party Security Assessments:</strong> Our IT security management solutions offer confidentiality on company information and can help you formulate a strong Vendor Risk Assessment model to protect against impending terror and theft issues.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Secure Your Business?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            By partnering with Nimble Acuity, your company can leverage a security and risk management program that uses a specialized threat-based system. With our proactive and cost-efficient solutions, you will not only be saving on rising costs but can also save on time and resources. Nimble Acuity's IT risk management spins around our effective and strong security solutions, providing an efficient mitigation of security threats.
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

export default ITRiskAndSecurity;