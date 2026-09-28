import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const MaximoDevelopmentServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Maximo Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Minimize asset failures, maximize efficiency, and reduce downtime with our Maximo development services, starting at just $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking for ways to extend the life of your assets and reduce inventory costs? Are you struggling to minimize asset failure, reduce unplanned downtime, and increase asset reliability? Then we suggest you harness the power of Maximo—an Enterprise Asset Management (EAM) application that enables you to track, plan, and manage your organization's assets effectively.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a Maximo development company offering flexible and agile services that enable seamless onboarding and better support. We have skilled and experienced technicians who develop secure and customized Maximo applications at reasonable rates. If you are already leveraging any third-party services, such as IBM Maximo Development, we can help you manage your applications in our cloud.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Maximo Development Services We Offer
                        </h3>
                        <p className="text-700 leading-relaxed mb-6">
                            Nimble Acuity is a reliable Maximo development service provider offering a variety of software development services, including Maximo Java development. We can help you with:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Workflow Management</h4>
                                <p>
                                    Our Maximo integrated solutions, such as predictive maintenance and mobile enablement, will help you track, plan, organize, manage, and review your project and non-project-related tasks regularly.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Supply Chain Management</h4>
                                <p>
                                    Automate inventory management across multiple storerooms, monitor vendor performance, and streamline vendor payments with our Maximo-integrated supply chain management solutions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Health and Safety Environment</h4>
                                <p>
                                    Stay compliant with local and federal health, safety, and environmental standards, and implement risk control strategies with our Maximo-integrated software.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Asset Management</h4>
                                <p>
                                    Streamline your process to track enterprise-wide assets. Our solutions will help you improve asset safety, track usage, analyze costs, and evaluate returns on your investments.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Analytics</h4>
                                <p>
                                    We provide business intelligence and analytics software solutions that help you retrieve, analyze, and convert your organizational data into easy-to-understand visualizations.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Planning and Scheduling</h4>
                                <p>
                                    We develop apps and tools for project scheduling and workflow automation to help you assign tasks to the right personnel and accelerate your schedule optimization.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Our Maximo Development Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We provide customized services that precisely cater to your business requirements. Here are some of the major benefits of choosing our services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Competitive Rates:</strong> You will only pay based on project complexity and the skill sets of the resources involved, ensuring cost-effective services.</li>
                            <li><strong>Skilled Software Development Team:</strong> Our team has top talents and the best minds in the industry, including skilled and experienced software developers, UI designers, testers, and project managers.</li>
                            <li><strong>Advanced Tools & Technologies:</strong> We leverage advanced tools and software to develop customized solutions and asset management applications for our global clients.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Maximo Development Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a reputable software development services firm with over 26 years of experience in providing quick and efficient custom software development, migration, modernization, and integration solutions to global clients. When you choose us, you benefit from our global expertise and world-class infrastructure.
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

export default MaximoDevelopmentServices;