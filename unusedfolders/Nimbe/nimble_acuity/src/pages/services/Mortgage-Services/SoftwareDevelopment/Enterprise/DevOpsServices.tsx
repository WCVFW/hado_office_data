import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DevOpsServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            DevOps Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            DevOps development is ideal when you need professionals for containerization, server support, and virtualization. Outsource today to achieve enhanced agility and better code quality.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            DevOps is the combination of development philosophies, time-bound practices, and tools that enable an organization to develop and deliver applications and other services in a fast-paced manner. At the same time, it ensures that the products themselves keep improving over time, ensuring their customers always feel better served. By outsourcing DevOps software development services to Nimble Acuity, you can shorten the distance to your business goals.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            In today's competitive business landscape, Nimble Acuity's DevOps software development services allow organizations to bridge the gap between software development, IT operations, and quality assurance. We help to improve your inter-departmental collaboration and overall process efficiency, helping you build a better operational and quality footprint. Our services leverage all the positives of cloud computing, artificial intelligence, and ML-based process optimizations to speed up the development process while ensuring better quality throughput.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our DevOps Software Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            With years of presence in the software development industry, Nimble Acuity is well-positioned to offer custom DevOps solutions. If you want to find the right balance between swift incremental releases and a stable system, our services are ideal for you.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">DevOps Assessment</h4>
                                <p>
                                    Our team scrutinizes your existing business processes and assesses your readiness for a DevOps shift. We then provide a complete DevOps roadmap, leveraging our automation tools and best practices.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">DevOps Management</h4>
                                <p>
                                    We provide an end-to-end management process designed to ensure all your requirements are met while maximizing collaboration and functionality.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">DevOps Release Management</h4>
                                <p>
                                    We simplify things from planning to delivery, ensuring your product release date is never delayed and proper accountability is maintained throughout all verticals.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">DevOps Automation</h4>
                                <p>
                                    We offer an exhaustive list of DevOps automation services, including measures for continuous and streamlined development, testing, integration, and delivery.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">DevOps Integration</h4>
                                <p>
                                    We bring a host of lean methodologies to your existing processes, reducing manual hand-offs and ensuring different tools used by different teams follow the same objective.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">DevOps Configuration Management</h4>
                                <p>
                                    We provide you with an extensive set of tools that allow you to detect issues faster and move towards a more agile operative procedure, ensuring the quality of your services remains unmatched.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Continuous Integration and Deployment</h4>
                                <p>
                                    Our services ensure continuous integration and delivery, promoting a better quality of code build, test, and release.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">DevOps PaaS (Platform-As-A-Service)</h4>
                                <p>
                                    We are one of the few companies that offer DevOps as a service, leveraging our expertise in cloud computing to provide a unique operational strategy.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our DevOps Implementation Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our team of DevOps specialists, consultants, and developers works together to implement DevOps processes within your premises without any downturn. Our process consists of the following steps:
                        </p>
                        <div className="space-y-4 text-gray-700">
                            <ul className="list-decimal list-inside space-y-2">
                                <li><strong>Business Planning:</strong> We understand your organizational goals and identify the ideal approach and technologies for your business.</li>
                                <li><strong>Development:</strong> We start by assimilating the codebase and creating multiple pipelines, ensuring everything works within your existing structure.</li>
                                <li><strong>Continuous Testing:</strong> We perform testing at various stages to catch all performance-related glitches and bugs.</li>
                                <li><strong>Product Deployment:</strong> Once we are satisfied, we deploy the final solution into your production environment.</li>
                                <li><strong>Monitoring:</strong> We regularly monitor the application for performance metrics and release scheduled updates.</li>
                                <li><strong>Feedback and Optimization:</strong> Based on your feedback, we enhance the performance of the solution, ensuring it keeps pace with the latest developments.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We have always stressed that automation, collaboration, communication, and integration are the four pillars of our DevOps software development program. By ensuring agile delivery channels and removing bottlenecks, we ensure a faster time to market.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective Rates:</strong> Our rates are some of the best you can find, with services that fit right under your budget.</li>
                            <li><strong>Expert Team:</strong> Our strong team of experienced developers, consultants, and project managers ensures all your requirements are met with utmost professionalism.</li>
                            <li><strong>Wholesome Execution:</strong> Continuous integration, continuous delivery, and continuous testing mean your company always benefits from our services.</li>
                            <li><strong>Specialized Toolsets:</strong> Our team is familiar with the most common and several proprietary DevOps tools, such as Docker, Chef, and Puppet.</li>
                            <li><strong>Agile Operational Process:</strong> Our Agile processes can swiftly react to changing market patterns and customer demands.</li>
                            <li><strong>Faster Development:</strong> With our help, clients can achieve up to 40% faster development times, directly affecting their bottom line and market readiness.</li>
                            <li><strong>Security and Confidentiality:</strong> As an ISO/IEC 27001:2022 certified company, we take significant measures to ensure all client material is treated with the highest levels of confidentiality.</li>
                            <li><strong>Enhanced Collaboration:</strong> When you partner with us, we help you create more effective employees who value ownership and accountability.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource DevOps Software Development to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            At Nimble Acuity, the DevOps model we rely on changes based on our clients' requirements, but we ensure that every single time, the model we deploy leads to significant process and operational improvements. By automating manual tasks and helping you achieve complex development environments at any scale, we help you move towards profitability while keeping your competition at bay.
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

export default DevOpsServices;