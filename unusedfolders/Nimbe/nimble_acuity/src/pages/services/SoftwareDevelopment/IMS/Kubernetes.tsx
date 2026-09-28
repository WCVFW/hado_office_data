import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const Kubernetes: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Kubernetes Consulting Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Manage containerized workloads and improve productivity with our expert Kubernetes services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you constantly facing challenges in managing containerized applications across different platforms? Do you want to harness the power of the Kubernetes platform to innovate at scale and orchestrate containerized workloads? We suggest you leverage the expertise of a reputed **Kubernetes consulting company** like ours. **Nimble Acuity** helps you manage multiple containerized applications in complex environments. With extensive experience in deploying the Kubernetes tool, our expert team of developers helps you with continuous deployment and testing for efficient application delivery at a much faster rate.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Kubernetes Consulting Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As a leading company offering Kubernetes services, we provide a wide range of solutions that help businesses reap the benefits of Kubernetes and accelerate their growth. Our important services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CI/CD Pipeline Implementation</h4>
                                <p>
                                    Our team of experts will help you with the implementation process of the CI/CD pipeline and assist with the development of products and services using this powerful tool.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Kubernetes Implementation</h4>
                                <p>
                                    We will efficiently review your business processes, technology stacks, and workloads to help you develop an actionable plan to embrace Kubernetes, ensuring easy and seamless deployment.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Kubernetes Support</h4>
                                <p>
                                    When you partner with us, we continuously track and monitor your solutions to detect issues and abnormalities, ensuring all errors are fixed before they impact performance.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Application Containerization</h4>
                                <p>
                                    With our solutions, you can properly transform your legacy applications by converting them into microservice-based Kubernetes architecture. We have extensive experience in offering container orchestration solutions worldwide.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Kubernetes Advisory Service</h4>
                                <p>
                                    Our team of experts and advisors assists you in making the most out of the technology, providing actionable insights about development and offering reliable solutions for Kubernetes adoption.
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
                            Outsourcing Kubernetes consulting services to us will open up a world full of opportunities for you. Our benefits include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective Rates:</strong> Our flexible pricing options ensure you only pay for the services you need, making our rates highly competitive.</li>
                            <li><strong>Dedicated and Certified Experts:</strong> Our team consists of highly qualified experts with experience in a range of consulting services, who will work closely with you to diagnose and fix issues for the best outcome.</li>
                            <li><strong>Project Quality and Data Security:</strong> We are a reliable company that ensures businesses can effectively adopt the technology without hindrance, and we adhere to stringent security measures to keep your data safe.</li>
                            <li><strong>Accelerated Deployment:</strong> We focus on agile methods to ensure quick delivery, so you can rest assured knowing our services will give you the best results in record time.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready for Container Orchestration?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            We deliver scalable consulting services that will benefit both your organization and your team members. If you lack the bandwidth to manage deployment on your own, we empower you with extra bandwidth. Our support helps you:
                            <br />
                            <br />
                            • Develop production-grade containerization solutions
                            <br />
                            • Manage and distribute components across a diverse infrastructure
                            <br />
                            • Create, execute, monitor, and track multiple containers
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

export default Kubernetes;