import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const TerraformServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Terraform Consulting Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Prevent configuration drift and enable agility with our expert Terraform services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you struggling to operationalize diverse infrastructure and expedite application deployment? Unable to automate your complex infrastructure platforms hosted in multi-cloud environments? To thrive in the DevOps era, it's crucial to accelerate your business toward multi-cloud environments. Embracing Terraform helps you source, run, secure, and connect enterprise-wide apps and infrastructure. Our Terraform consulting services enable you to fully understand and implement this tool to your advantage. We are a leading provider of Terraform services, helping businesses deliver outstanding results across various cloud platforms.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Terraform Consulting Solutions
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Rapid digitization and disrupting DevOps have pushed IT companies toward multi-cloud environments. Terraform tools enhance collaboration and governance with self-service workflows, providing modules and workspaces for your growing IT teams. Our company provides comprehensive and customized Terraform consulting solutions to help you unleash better opportunities for growth and DevOps success. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Deployment & Configuration</h4>
                                <p>
                                    We offer comprehensive solutions to deploy multiple infrastructure options and provide reliable consulting and configuration services to set up your tools and technologies.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Management & Orchestration</h4>
                                <p>
                                    Manage and orchestrate your infrastructure and applications across public or on-premise cloud platforms with our management solutions that boost your operational efficiency.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Training and Enablement</h4>
                                <p>
                                    We help IT firms seamlessly orchestrate infrastructure and deploy applications across various cloud platforms, and we can also train your resources to manage the tools effectively.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Licensing and Add-on Support</h4>
                                <p>
                                    Liaising support contracts and enterprise licensing can be cumbersome. We help you with various add-on services, allowing you to focus on your core business.
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
                            As a leading infrastructure management services provider, we offer a range of benefits when you choose our Terraform consulting services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective Rates:</strong> We offer flexible pricing models and cost-effective rates, so you can avail of our services regardless of your budget.</li>
                            <li><strong>Certified Professionals:</strong> Our team is well-versed in harnessing the potential of Terraform, using advanced tools and technology to ensure easy deployment and maintenance of your applications.</li>
                            <li><strong>Project Quality:</strong> We have strict project evaluation practices to ensure that only the right tools and software are deployed to deliver customized services.</li>
                            <li><strong>Complete Data Security:</strong> We follow all security measures and adhere to industry standards to ensure that your company's valuable data remains safe with us.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready for DevOps Excellence?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            We are a leading infrastructure management services provider with over 26 years of experience. Our skilled professionals provide quick and reliable Terraform consulting and support that help you:
                            <br />
                            <br />
                            • Revolutionize your DevOps with full-stack deployment
                            <br />
                            • Manage your infrastructure on multi-cloud platforms
                            <br />
                            • Efficiently track resource changes across your deployments
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

export default TerraformServices;