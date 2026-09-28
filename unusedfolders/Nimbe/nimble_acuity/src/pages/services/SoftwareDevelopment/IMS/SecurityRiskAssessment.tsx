import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SecurityRiskAssessment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Security Risk Assessment Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Secure all your company data and identify potential risks by choosing our team's superior quality security assessment services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            A cybersecurity risk assessment helps an organization identify and secure all its information technology assets that are essential to day-to-day operations. The assessment is carried out to mitigate possible risks and proactively thwart incidents that can lead to costly breaches. In the process, it helps organizations to be in line with regulatory and compliance issues and create a more risk-aware culture.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity has extensive experience in assisting businesses to identify weak points in their IT assets and environment to fortify them from cyber-attacks. Our robust Information Security Assessment is designed for businesses across all industry verticals.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Security Risk Assessment Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As a specialized Security Risk Assessment Service Provider, we offer a range of services to businesses. Some of these include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Network Security Assessment</h4>
                                <p>
                                    We stress-test the security of your network connections (hosting, virtual private networks, etc.) and the IT network of our clients. We examine the security of your emails, chats, and other communication nodes.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Hardware Security Assessment</h4>
                                <p>
                                    With this service, we fortify all the hardware components of your business. Given that desktops, laptops, routers, and phones are integral to your IT system, we help you secure them from all types of attacks.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cloud Security Risk Assessment</h4>
                                <p>
                                    Our cloud risk assessment service is tailored to assist you in accessing, collecting, and processing data in a highly secure and compliant manner.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Software Asset Management</h4>
                                <p>
                                    This service is used to audit the security of all your software by ensuring that your software licenses are compliant with vendor requirements. The process also involves evaluating software assets to ensure they are up-to-date in terms of architecture and security patches.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Applications & Databases</h4>
                                <p>
                                    This service is geared towards safeguarding your front-end apps against existing and evolving cybersecurity threats. We audit the integrity of your database and equip it with secure access control to limit data access.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Assess Internal Processes</h4>
                                <p>
                                    We examine the physical, administrative, and technical safeguards of your business. This includes evaluating your identity management and access management processes with tips on improvements.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Cybersecurity Risk Assessment Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As a renowned security risk assessment service company, we follow a well-defined process to determine IT security. It consists of:
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Risk and Vulnerability Assessment:</strong> We determine the scope of the assessment, whether it's your entire business unit or a particular aspect like a web application.</li>
                            <li><strong>Make a List of Assets:</strong> We identify and list inventories of all assets that come within the scope of the risk assessment.</li>
                            <li><strong>Identify Risks and All that Could Go Wrong:</strong> After the asset list is ready, we identify possible threats, tactics, and techniques that may be used by hackers.</li>
                            <li><strong>Prioritize and Treat Risks:</strong> We classify the risks as "Likely" or "Highly Likely" and prioritize any scenario that is above the agreed-upon tolerance level.</li>
                            <li><strong>Complete Documentation:</strong> This is the last step, where we document all identified risk scenarios. The document covers risk scenarios, identification date, current risk level, current security controls, etc., and serves as a future reference.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We provide our clients with a range of security assessment benefits. Some of these include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Wide Experience:</strong> Outsourcing security assessment to us gives you access to knowledgeable and experienced security specialists.</li>
                            <li><strong>Objective Security Review:</strong> When you partner with us, you gain a more objective approach because we are not influenced by any internal ties or biases.</li>
                            <li><strong>Educate Stakeholders:</strong> Our risk assessment service also involves educating all stakeholders on possible threats and ways to counter them.</li>
                            <li><strong>Save on Time and Resources:</strong> By outsourcing, you won't have to devote your employees to the assessment. As we are experienced in dealing with complex environments, we provide a detailed plan to heighten safeguards.</li>
                            <li><strong>Reduced Costs:</strong> As a Security Risk Assessment Company, the biggest advantage we provide is quality service at reduced costs, offering risk audits within your budget.</li>
                            <li><strong>Round-the-clock Service:</strong> We provide expert 24/7 support services to bridge the skills gap of your employees.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Fortify Your Business Security?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has extensive experience in providing Risk and Vulnerability Assessment services to businesses around the world. We specialize in both application- and process-specific risk assessments as well as end-to-end resource-intensive assessments. We have served clients across a range of domains such as finance, logistics, healthcare, and technology firms. If your business is looking for experienced and reliable security risk assessment services, get in touch with us now.
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

export default SecurityRiskAssessment;  