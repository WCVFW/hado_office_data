import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ITAuditServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            IT Audit Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            If you're willing to safeguard the systems that contain all the information pertaining to your organization, an IT audit is indispensable. Outsource IT audit to ensure that your information assets are well protected.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Most firms today deal with large amounts of data and information. An organization succeeds only by ensuring complete data integrity and that all systems are in conjunction with its objectives. With a large amount of data comes the responsibility of ensuring that the information systems and IT infrastructure are safeguarding it all. This is why companies work with an IT audit service provider or an IT auditor. An IT audit involves evaluating and reviewing the automated systems that process all the information in a firm.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            IT auditing is an intensive process requiring proficiency in the IT audit process and significant experience in making accurate judgments pertaining to risk assessment, compliance audit, and more. Outsourcing IT audit services can be more cost-effective than hiring a full-time professional, allowing you to work with absolute professionals at the most pocket-friendly prices. Nimble Acuity is the leading IT audit service provider, with a diverse team and rich experience working with various industries. We help reduce IT costs and eliminate the gap between IT and your business goals.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            IT Audit Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Here at Nimble Acuity, we offer a range of IT audit services. Our team of expert IT auditors is well-familiarized with software compliance and IT system audit procedures. We also specialize in a risk-based audit approach that helps make several important decisions. Here are the services we offer:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">IT Process and Control Audit</h4>
                                <p>
                                    We review existing IT processes, internal controls, and policies and help develop new ones to improve overall business performance. This involves creating control reviews that help understand business processes and come up with appropriate IT and infrastructural controls.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Risk Assessment Audit</h4>
                                <p>
                                    We help our clients understand if their IT strategies and processes are risk-free and compliant with laws and regulations. We offer risk assessment and mitigation solutions to ensure maximum congruence between business goals and IT processes.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Security Audit</h4>
                                <p>
                                    Our IT auditing team runs security audits, tests for penetration and attacks, and assesses cybersecurity threats so you can undertake the best practices to safeguard your IT systems from data leaks, fraud, and other threats.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">ERP/Application Audit</h4>
                                <p>
                                    We investigate the adequacy of your applications and ERP by assessing application controls and their effectiveness. We check for overall integrity, confidentiality, efficacy, and compliance and recommend improved controls for optimal performance.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Internal IT Audit</h4>
                                <p>
                                    Our internal IT auditing services help senior executives and board members gain insights into implementing best management practices to minimize risks and improve the effectiveness and quality of internal auditing.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SOD Audit</h4>
                                <p>
                                    SOD (Segregation of Duties) is crucial to ensure a company is not at risk of fraudulent transactions. We offer SOD audits to ensure no single person has complete control over financial dealings and operations, thus mitigating risk.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Pre/Post Implementation Review</h4>
                                <p>
                                    Our services include planning internal control audits (pre-implementation) and testing and assessing if the system complies with internal and external guidelines (post-implementation). This includes reviewing business processes, security, and data conversion.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Compliance Audit</h4>
                                <p>
                                    Our team has complete knowledge of compliance regulations and laws. We identify and assess controls to evaluate whether they comply with internal guidelines and external laws. Our compliance audit includes financial audits, quality management, and security issues.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Review of IT Projects</h4>
                                <p>
                                    Reviewing your IT projects helps you find ways to meet stakeholder expectations. Our process includes project risk assessment, project management review, and delivery follow-up. We have a systematic analytics protocol to ensure a high level of accuracy.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Data Analytics</h4>
                                <p>
                                    We offer data analytics as part of our IT audit to help businesses understand their data, derive insights related to business risk, and better understand industry trends. We use the best tools to perform data analytics, allowing structured testing and implementation to improve control over your IT systems.
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
                            Nimble Acuity is one of the best companies for IT audit services for a plethora of reasons. We have years of experience and are ISO/IEC 27001:2022 certified, meaning our processes and methodologies meet international quality standards. In addition, the following are the benefits of opting for our solutions:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Fair Pricing:</strong> Our services are customizable, and we assess your requirements carefully before deciding on costs.</li>
                            <li><strong>Data Security:</strong> We understand the importance of data security and take stringent measures to comply with standards. All of our auditors sign a non-disclosure agreement.</li>
                            <li><strong>Leading IT Auditors:</strong> We have an in-house team of qualified, passionate, and experienced IT auditors. When you outsource to us, you get to work with leading professionals at a budget-friendly price.</li>
                            <li><strong>Well-Established Infrastructure:</strong> We have an impressive infrastructure that allows us to offer efficient IT audit services. We deploy the best systems and tools to handle many of the operations, increasing our process's efficacy.</li>
                            <li><strong>24/7 Support:</strong> Our customer support team is available round-the-clock via call, email, or our website to answer any queries.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Optimize Your Systems?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            IT audit services require complete cognizance and expertise to be accurate and unerring. This is why working with IT auditors who have the required qualifications and experience can fetch the best outcomes for your business. Outsourcing to a professional service provider like Nimble Acuity can help you minimize IT risks and optimize overall systems and IT controls. If you're looking for a professional and completely transparent IT auditing partner, Nimble Acuity is the right choice for you.
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

export default ITAuditServices;