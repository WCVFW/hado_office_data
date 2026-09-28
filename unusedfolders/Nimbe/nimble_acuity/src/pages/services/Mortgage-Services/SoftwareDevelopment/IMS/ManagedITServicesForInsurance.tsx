import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ManagedITServicesForInsurance: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Managed IT Services for Insurance
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get our managed IT services for strategic IT planning, monitoring IT infrastructure, and fixing IT issues to give you peace of mind.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            The secure storage of copious amounts of data is a crucial activity and a huge challenge for insurance companies. Instant, anytime access is critical; any downtime could result in loss of time and revenue. Ensuring the stability of your IT infrastructure is a top priority; your systems, especially core applications, need to have near-zero downtime. You also need to have the capabilities to properly harness and exploit the customer data you collect to get maximum ROI.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            At Nimble Acuity, we have been providing custom managed IT services for businesses in a range of industries, including insurance companies. We offer scalable suites of software, cloud hosting, network protocols, ERP, Project Management, CRM, and other services that are critical for businesses for storing customer details.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Managed IT Services for Insurance Companies We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading provider of managed IT services for insurance companies. We have been a go-to partner for hundreds of clients worldwide. Our managed IT services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Storage Management</h4>
                                <p>
                                    We ensure maximum uptime with rock-solid storage management solutions. Our solutions are scalable to handle excess storage needs during peak times or for future business growth.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">IT Infrastructure and Security</h4>
                                <p>
                                    Our professionals implement regulatory standards like HIPAA, PCI DSS, SOX, and GLBA. Our customers receive exemplary services like state-of-the-art data protection, network security, and access controls.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Risk Management and Disaster Recovery</h4>
                                <p>
                                    We offer superior disaster recovery services, leveraging our expertise in cloud computing and remote hosting. We have the capabilities to get your systems up and running in the least amount of time during outages.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Data Center Optimization</h4>
                                <p>
                                    By outsourcing to us, you can drastically reduce your data hosting costs. We analyze your requirements, predict trends, and optimize your data centers to help you bring diversity to your services without incurring extra expenditure.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Software Development and Virtualization</h4>
                                <p>
                                    We provide bespoke software suites by building virtual tools customized for your specific workflow. This allows you to shorten turnaround times for policy approval and claims processing and cut down on hardware investment expenses.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cloud Services</h4>
                                <p>
                                    We provide cloud hosting and backup services so all your critical business apps are up and running 24/7. Our dedicated cloud services provide robust support and allow for lower process redundancy.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Managed IT Services for Insurance - Our Process
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">01. Initial Consultation</h4>
                                <p>
                                    Our team holds detailed discussions with you to understand your specific business requirements and draw up a plan for execution.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">02. Planning and Implementation</h4>
                                <p>
                                    Based on your insurance policies, we plan our services and begin the implementation process once you approve the design and functionalities.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">03. Strategic Deployment</h4>
                                <p>
                                    Managers are assigned to oversee various elements of the implementation. They identify areas for improvement and incorporate them into the solution deployment strategy.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">04. Ongoing Support</h4>
                                <p>
                                    Our team offers 24/7 support to resolve technical issues, with support deployed based on the SLAs.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">05. Vulnerability Monitoring</h4>
                                <p>
                                    Your network is closely monitored and scanned for vulnerabilities that can be exploited by hackers, and all such issues are resolved proactively.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource IT Consulting Services for Insurance Companies to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Here are some of the benefits you get by choosing our services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Pocket-friendly Pricing:</strong> Our services are offered at affordable rates and can be further customized to fit your exact needs and budget.</li>
                            <li><strong>High Accuracy and Quality:</strong> Our services are thoroughly audited by QA experts to ensure you get the best possible quality.</li>
                            <li><strong>Experienced Team:</strong> We assign dedicated project managers and have a team of highly experienced IT experts with relevant training and knowledge of the latest tools.</li>
                            <li><strong>Secure Infrastructure:</strong> We provide unparalleled network security through top-notch protocols, port scanning, and intrusion detection.</li>
                            <li><strong>Certified Provider:</strong> We are an ISO 9001:2015 certified managed IT services provider, meeting HIPAA and PCI compliance.</li>
                            <li><strong>Data Security:</strong> We have strict security protocols and manage BYOD regulations to prevent data loss. We also offer robust data backup and recovery solutions.</li>
                            <li><strong>Modern Infrastructure:</strong> We constantly maintain and upgrade our systems to ensure our teams have access to the latest tools and technology.</li>
                            <li><strong>Round-the-clock Support:</strong> We provide 24/7 support, both onsite and remote, so help is always within reach.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Align Your IT with Your Business Goals?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading managed IT service provider for the insurance industry. We have extensive experience in infrastructure management services and have served thousands of clients. Our team builds software applications that help your process teams record customer information and gain secure access when business tasks need to be accomplished. We ensure your systems have maximum uptime and run smoothly and flawlessly.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ManagedITServicesForInsurance;