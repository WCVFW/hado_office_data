import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const WorkflowAutomationServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Workflow Automation Software Development
                        </h2>
                        <p className="text-lg text-gray-600">
                            Automate your workflow processes and boost productivity with our high-quality workflow automation software development services, starting at $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Does your organization deal with large amounts of paperwork on a daily basis? Are large work volumes and the absence of a single location to store information making it difficult for your employees to access required information on time? Consider outsourcing your workflow automation software development to Nimble Acuity.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our workflow automation software can help you effectively execute, track, and archive your business processes, making them easily accessible to your employees. Nimble Acuity's workflow development services can bring about a significant increase in your organization's productivity and efficiency, giving you a competitive edge.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Workflow Automation Software Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading workflow automation software development company, providing a complete range of workflow automation development services, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Process Modeling</h4>
                                <p>
                                    Our unique solutions enable easy point-and-click modeling, business activity monitoring (BAM), and automated routing. You can graphically model and construct processes that require neither software development nor advanced IT resources.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Rules & Forms Creation</h4>
                                <p>
                                    Users can create forms, workflows, and business rules easily without advanced IT help. Our automated solutions ensure that vital documents and critical information are properly routed, reviewed, and revised.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Integration with Existing Systems</h4>
                                <p>
                                    Our modern tools integrate with user directories like LDAP or Active Directory, enabling your entire staff to participate. Solutions can automatically notify users of newly assigned tasks via email.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Document & Task Routing</h4>
                                <p>
                                    Our solutions automatically route documents, tasks, and forms according to predefined or ad-hoc processes. This aligns your business processes with job responsibilities and goals, bringing together people, business, and technology.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Business Process Improvement</h4>
                                <p>
                                    We enable rapid business process improvement by providing process owners the ability to analyze “what-if” scenarios to accurately predict the impact of a hypothetical or anticipated delay.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Quick Application Development</h4>
                                <p>
                                    Our solutions allow for rapid application development. We provide a completely web-based graphical user interface (GUI) workflow builder for business users who can efficiently build processes without prior programming experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Advantages of Using Nimble Acuity's Workflow Automation Software
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading provider of workflow automation software development services. Here are some of the reasons you should choose our solutions:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Documentation & Data Security:</strong> Our software helps you document business processes and ensures there is no loss of valuable data during execution.</li>
                            <li><strong>Efficient Scheduling & Tracking:</strong> We enable easy scheduling and allow you to easily track the progress of processes, even those with sequential or parallel tasks.</li>
                            <li><strong>Reduced Paperwork:</strong> You can easily control and track the flow of paper documents, helping your organization deal with ever-increasing paper loads.</li>
                            <li><strong>Easy File Retrieval:</strong> Our efficient software helps you retrieve important documents and files with ease, even among multiple versions.</li>
                            <li><strong>Thorough Understanding:</strong> We make sure to thoroughly understand how your business processes work before automating them to ensure a seamless transition.</li>
                            <li><strong>Customized Solutions:</strong> We customize the software to be as similar as possible to your existing processes, ensuring minimal adjustment and maximum employee productivity.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Workflow Automation to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity's workflow automation software can help you effectively document, track, and schedule your business processes. With an efficient workflow application, you will see a marked improvement in your business. If you are looking for an efficient, reliable, and cost-effective provider of workflow automation solutions, get in touch with us today.
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

export default WorkflowAutomationServices;