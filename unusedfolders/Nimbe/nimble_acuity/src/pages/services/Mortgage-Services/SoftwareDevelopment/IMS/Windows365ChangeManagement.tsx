import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const Windows365ChangeManagement: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Windows 365 Change Management Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Contact us to get seamless, effective, and smooth Windows 365 change management for your organization.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Microsoft 365 is enriched with several easy-to-use and reliable features that most businesses love to use. Thus, most businesses are looking for Windows 365 change management throughout their organization. It offers seamless communication between users and allows storing all business information on the cloud with high security. But businesses can find it cumbersome to handle Windows 365 management themselves. So, the best option is by outsourcing the Windows 365 change management requirements to a trustworthy and experienced service provider like Nimble Acuity.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading Windows 365 change management service providing company with a huge workforce of experts, a robust data security system, state-of-the-art architecture, and more to help clients achieve successful change management.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Windows 365 Change Management Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our Windows 365 change management services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cloud Deployment</h4>
                                <p>
                                    We set up and configure the Microsoft cloud platform for your usage. We sit down with you to carefully understand your exact requirements and then come up with a robust plan for cloud deployment that we will implement.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Windows 365 Deployment</h4>
                                <p>
                                    This includes installing Windows 365 at end-user workspaces. Windows 365 is a great tool for employee collaboration, and we will deploy it as per your business requirements.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Configuring Functionalities</h4>
                                <p>
                                    We configure the Windows 365 tool to align with customer needs and objectives. To make full use of your Windows 365 tools, you need to configure them properly, and that's exactly what we will do.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">End-User Training</h4>
                                <p>
                                    We offer completely effective Windows 365 training to business users to make a smooth transition. Our experts will provide comprehensive end-user training to ensure your team optimally uses Windows 365.
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
                            When you outsource change management services to us, you get the following advantages:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-Effective:</strong> We charge our clients strictly based on the resources involved, the complexity of a project, and the time required to complete it.</li>
                            <li><strong>ISO Certification:</strong> Nimble Acuity is an ISO-certified change management service provider bound to follow international standard services. All our professionals are certified, trained, and experienced in handling complex Windows 365 change management requirements.</li>
                            <li><strong>Quick Setup:</strong> We are aware that businesses have quick deliverables and other commitments, so we work under tight deadlines and yet provide efficient services.</li>
                            <li><strong>Global Delivery Centers:</strong> We have set up multiple delivery centers around the globe. This enables us to cater to a global clientele in various time zones as well as offer 24/7 customer support.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready for a Seamless Transition?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading change management service provider. With more than two decades of experience in multi-domain industries, we have the necessary workforce, infrastructure, and the latest tools and technologies to cater to all client requirements.
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

export default Windows365ChangeManagement;