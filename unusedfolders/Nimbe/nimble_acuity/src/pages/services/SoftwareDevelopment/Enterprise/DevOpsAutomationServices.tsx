import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DevOpsAutomationServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            DevOps Automation Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Adopt DevOps automation for enhanced agility, better reliability, and improved code quality with our expert solutions.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            DevOps, a technological framework that harmoniously brought together software development and IT operations, has been a revolutionary trend. With the fast-growing digital world, automation of DevOps has become the need of the hour. Nimble Acuity has established itself as a leading DevOps automation service providing company.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We develop cutting-edge automation solutions for our clients worldwide, leveraging the power of current technologies and advanced innovation. Our team of developers, quality control specialists, and other experts work together to build highly intuitive, agile, and responsive DevOps solutions. Hire us for end-to-end and cost-effective DevOps automation services.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            DevOps Automation Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As a globally trusted DevOps automation service provider, we are experts in the field of DevOps and offer you an integrated set of following automation services:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Infrastructure Automation and Management</h4>
                                <p>
                                    We enable a fully automated infrastructure setup and ensure continuous integration (CI) and continuous deployment (CD). It eliminates hardware costs and can be scaled on demand.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Environment/Configuration Management</h4>
                                <p>
                                    Our team deploys automation tools to manage your code and automate code changes across all servers, ensuring consistent configuration and efficiency.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Deployment Automation</h4>
                                <p>
                                    Deployment automation facilitates testing and production environments with a single click, minimizing risks and enabling quick quality checks and feedback.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Automated Log Management</h4>
                                <p>
                                    Our software developers integrate sophisticated tools that help in aggregation, storage, and analysis of multiple logs in one place, extracting meaningful insights.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Code Inspection and CI Solutions</h4>
                                <p>
                                    We provide in-depth testing of codes to improve their quality and assist in successful integration for enhanced productivity and smooth processes.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Performance Management and Monitoring</h4>
                                <p>
                                    Our team integrates automated tools that can help in real-time performance monitoring of DevOps and can alert you to any errors or issues for quick resolution.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">DevOps Automation Consulting</h4>
                                <p>
                                    Our highly experienced team can also provide assistance and consultation for the development and deployment of a suitable automation infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our DevOps Automation Services Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We have been consistently delivering high-quality DevOps services thanks to our time-tested work methodology:
                        </p>
                        <div className="space-y-4 text-gray-700">
                            <ul className="list-decimal list-inside space-y-2">
                                <li><strong>Assessment:</strong> We analyze your ongoing DevOps process and toolchains to map out measure points.</li>
                                <li><strong>Strategy Building:</strong> We develop a broad framework for the implementation of automation processes.</li>
                                <li><strong>Establishing Tool Stack:</strong> Our team identifies the most suitable tools to integrate into your DevOps ecosystem.</li>
                                <li><strong>Implementation:</strong> We design, automate, and deploy the infrastructure as per your needs.</li>
                                <li><strong>Migration and Assistance:</strong> We enable a smooth transition of your team into the new automated DevOps environment.</li>
                                <li><strong>Support Services:</strong> We deliver the project and offer regular testing and other support services.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a reputed DevOps automation service provider with a global team of experts. Hiring us comes with a lot of advantages:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Experienced Team:</strong> We have a huge team of software developers, DevOps specialists, and IT experts committed to providing top-notch services.</li>
                            <li><strong>Standardized Services:</strong> As an ISO-certified company, our promise of high-quality automation solutions comes with inherent standardized and compliant practices.</li>
                            <li><strong>Flexible Pricing:</strong> We offer flexible and affordable pricing models, ranging from fixed price to hourly rates, depending on your needs.</li>
                            <li><strong>One Point of Contact:</strong> A single point of contact eliminates ambiguity in communication and workflow, ensuring smooth interaction.</li>
                            <li><strong>Top-notch Infrastructure:</strong> We provide our team with state-of-the-art infrastructure and high-tech technological support to deliver the best results.</li>
                            <li><strong>Multiple Time-Zone Advantage:</strong> Our global work centers ensure round-the-clock support services and enable us to handle bulk work while always delivering on time.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Upgrade Your DevOps Today
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Backed by an extraordinary team of dedicated professionals, we enable agile automation solutions to significantly improve your operational efficiency. We have established ourselves as a market leader in DevOps automation due to our creative approach towards the deployment of automation tools and scalable solutions.
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

export default DevOpsAutomationServices;