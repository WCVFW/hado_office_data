import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const MicroservicesArchitectureServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Microservices Architecture Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our microservices are designed to make application development loosely coupled and independently deployable, maintainable, and testable.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Microservice architecture is the process of developing software by breaking logical domains into smaller, independent services. It involves breaking down monolithic applications into smaller components so that businesses can connect to a variety of environments quickly and seamlessly. The biggest advantage of breaking down a monolith is the ability to update or interchange specific component layers without deploying the complete code base.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading microservices architecture service provider. We make solutions more flexible to keep pace with today's technologies. Our clients rely on our microservice architecture design, testing, deployment, and monitoring solutions to create consistent environments across systems, build a separate version control strategy for each service, and include backward endpoints for service endpoints.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Microservices Architecture Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As a specialized microservices architecture company, we offer a range of services to our clients. These include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Microservice Architecture Building</h4>
                                <p>
                                    We rely on our expertise and best practices to deliver microservice architecture building services. We have a proven track record of building the best microservice architectures because we differentiate microservices from business services and functions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Microservices Testing</h4>
                                <p>
                                    Since developing distributed systems entails a lot of complexities, we make sure it becomes less complex with our end-to-end testing services. We carry out every service independently, ensuring modules are properly tested for seamless interconnection.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Microservices Monitoring</h4>
                                <p>
                                    As a leading microservices architecture service provider, we assist you in effectively monitoring and getting important insights across all your distributed systems. We help you consolidate all your monitored data into one stack.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Microservices Deployment</h4>
                                <p>
                                    We follow the best practices to deploy microservice architectures successfully. This includes designing cloud services for production infrastructure and accommodating different types of server failures.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Microservices Consulting</h4>
                                <p>
                                    Our consulting services are designed to provide the right microservice architecture building, testing, and implementation strategy. We deliver services with the goal of creating an agile enterprise.
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
                            As an expert microservices architecture company, we offer a range of benefits to our clients. These include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Expert Services with Experience:</strong> We are driven by a team of experts with extensive experience in microservices for large and mid-size companies.</li>
                            <li><strong>Powerful Frameworks for Custom-built Microservices:</strong> We specialize in leveraging the best frameworks, including Eclipse Vert, GoMirco, Oracle Helidon, and Molecular.</li>
                            <li><strong>Understanding Compliance Needs:</strong> Our microservices architecture design services consider all measures to ensure industry compliance and address coupling and integration challenges.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Transform Your Architecture?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has wide experience in meeting a range of microservice requirements, including microservices design patterns, development, and AWS microservices architecture. Our clients depend on our vast exposure to meet the ever-increasing need for innovation to reduce complexity and costs. If you are looking for specialized microservices architecture services, get in touch with us now.
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

export default MicroservicesArchitectureServices;