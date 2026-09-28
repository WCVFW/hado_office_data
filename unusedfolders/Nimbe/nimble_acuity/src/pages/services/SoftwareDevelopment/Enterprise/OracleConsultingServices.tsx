import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const OracleConsultingServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Oracle Consulting Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Take your business to the next level by availing our specialized Oracle consulting services, starting at $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you getting distracted from your core business issues due to complex integrated Oracle application portfolios, high maintenance costs, and scarce support skills? Are you looking for end-to-end Oracle technology services tailored exclusively for your business needs? If so, you are in the right place.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading Oracle consulting services provider with a presence in multiple locations around the world. We provide a host of Oracle consulting services that take into account each client’s unique requirements to help them optimize their investments in Oracle ERP. We provide a full portfolio of onsite and offshore services including Oracle-related implementation, integration, upgrade, maintenance, and lifecycle management.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Oracle Consulting Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We have a specialized team of certified consultants who can work on any Oracle JD Edwards project, and we offer a wide spectrum of services, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Functional Services for Oracle Applications</h4>
                                <p>
                                    Our top-of-the-line services are designed to deliver maximum enterprise efficiency. Our experts can guide you through every aspect of the migration and implementation process, assessing your existing Oracle ecosystem to make it more flexible and competent.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Oracle Implementation and Upgrades</h4>
                                <p>
                                    With expertise in the complete Oracle E-Business Suite, we offer comprehensive methodology-based implementation and customization services to help you go live on a firm schedule. We can also help you upgrade to the latest version of Oracle smoothly.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Oracle Customization and Integration</h4>
                                <p>
                                    Nimble Acuity provides support for Custom Forms, Reports, Interfaces, and other Business Process Specific Customizations. We have wide integration experience, especially around Oracle E-Business Suite, to deliver quick results at a dramatically lower cost.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Oracle Maintenance and Support</h4>
                                <p>
                                    We provide 24/7 support for your Oracle database, applications, and network infrastructure, reducing software and infrastructure maintenance costs significantly. Our help-desk services include problem resolution, analysis, and deployment of new solutions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Resale of Oracle Products</h4>
                                <p>
                                    Nimble Acuity offers end-to-end consulting for a wide range of Oracle products, including the resale of different types of Oracle Application, Technology, and Hardware Systems.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Other Oracle Consulting Services</h4>
                                <p>
                                    In addition to the above, we also have expertise in the Oracle EPM Space (Oracle BI and Hyperion), Primavera Installation, Oracle Technology Consulting, and Enterprise Mobile Solutions with Oracle EBS & Mobility Integration.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Advantages of Using Our Oracle Consulting Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a premier Oracle consulting provider. Here are some key reasons why you should work with us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Prices:</strong> We provide extremely affordable Oracle consulting services compared to our competitors while maintaining the highest quality.</li>
                            <li><strong>Experienced and Skilled Team:</strong> Our Oracle consultants are highly-qualified and skilled at providing superior services. We hire only the brightest and best to work on your project.</li>
                            <li><strong>Modern Infrastructure:</strong> Our Oracle consultants work out of state-of-the-art facilities and use the latest tools and technologies to achieve their objectives.</li>
                            <li><strong>100% Data Security:</strong> We are committed to protecting your data at all costs and are ISO/IEC 27001:2022-certified, demonstrating our strong commitment to security.</li>
                            <li><strong>24/7 Availability:</strong> Our call center representatives are available round-the-clock to provide instant support as and when you need it.</li>
                            <li><strong>Ease of Scalability:</strong> We allow you to easily ramp up or ramp down the number of consultants working on your project, ensuring you only get the resources you need.</li>
                            <li><strong>Quick Turnaround Times:</strong> We leverage our presence in multiple global delivery centers to provide our services extremely rapidly, always meeting deadlines.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Oracle Consulting Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a top Oracle consulting provider with a longstanding association with Oracle as a partner, which puts you on the fast track for executing seamless Oracle implementation. By outsourcing Oracle consulting to us, you get an enviable team of experts, within-budget price structures, industry-specific solutions, dedicated services, and much more.
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

export default OracleConsultingServices;