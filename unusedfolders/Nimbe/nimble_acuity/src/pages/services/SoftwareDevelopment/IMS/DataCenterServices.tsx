import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DataCenterServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Data Center Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Efficiently manage your data center to improve business effectiveness, reduce costs, and enhance operational efficiency.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Data centers serve as the foundation for IT infrastructure. With the steady increase in data volume, organizations face challenges like rising management costs, a lack of proactive monitoring due to limited manpower, and insufficient resources for key business initiatives. To address these issues, global companies are increasingly outsourcing data center management. Nimble Acuity has emerged as a highly competent outsourcing partner, helping you achieve improved operational efficiency, reduced costs, and increased customer satisfaction without compromising on data security.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our End-to-End Data Center Solutions
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We have helped transform data centers from being mere cost centers to important tactical and strategic assets. Our biggest asset is our ability to provide highly reliable and scalable services for setting up and optimizing data centers, helping you meet strategic targets while lowering financial overheads. Our services include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                            <li>Database, Systems, Storage, and Server Management</li>
                            <li>Technical Support for Applications</li>
                            <li>Enterprise Security Solutions including IT risk management and digital forensics</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our domain expertise allows us to address the growing requirement for data center infrastructure management. We have experience in:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Hosting and Facility Management</h4>
                                <p>
                                    We optimize day-to-day data center operations to provide robust hosting and facility management.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Data Migration and Consolidation</h4>
                                <p>
                                    We offer efficient migration and consolidation of data to support high-volume, data-driven business models.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Data Center Architecture Design</h4>
                                <p>
                                    We design and develop data center architecture from the ground up to support both large and small-scale enterprises.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Virtualization and Cloud Support</h4>
                                <p>
                                    We provide support for data center virtualization and other cloud infrastructure, focusing on flexibility and agility.
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
                            Our holistic and transparent approach to designing and streamlining data center solutions offers several tangible benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Significant Cost Savings:</strong> By outsourcing data center services to us, you can significantly reduce your IT expenditure with professionally designed solutions that fit your business requirements.</li>
                            <li><strong>Enhanced Quality, Flexibility, and Scalability:</strong> Our in-depth experience allows us to develop robust quality control checkpoints for every stage of deployment, ensuring our services are completely flexible and scalable.</li>
                            <li><strong>Efficient Customer Support and Delivery:</strong> We have access to highly skilled and efficient manpower, which allows us to provide around-the-clock support for data center solutions.</li>
                            <li><strong>Exceptional Security and Disaster Recovery:</strong> We maintain highly efficient data-backup procedures and security protocols to prevent data loss and keep downtime to a minimum in case of natural or man-made disasters.</li>
                            <li><strong>Support for Industry-Standard Frameworks:</strong> Our knowledge and experience allow us to harness the best practices for delivering data center managed services, with support for widely accepted frameworks like CMMI and ITIL V3.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Transform Your Data Center Operations?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            We enable a holistic approach to deploying and streamlining your data center infrastructure management operations by leveraging a combination of next-generation cloud technologies and globally accepted delivery models. We ensure a focus on agility while migrating your existing systems to the latest technologies without the associated expenses.
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

export default DataCenterServices;