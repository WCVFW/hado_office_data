import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ManagedITServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Managed IT Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Improve operational efficiency and save expenses by outsourcing managed IT services. We'll help you reduce conflicts and enhance performance.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            As the IT landscape evolves, businesses must keep up with the change, which can sometimes be so dynamic that IT and non-IT staff have to shoulder responsibilities outside their usual roles. If this is the scenario in your business, it's time to partner with a managed IT services provider with the right expertise.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a managed IT solutions provider with years of industry experience. We have helped many small and large enterprises with cutting-edge managed IT services. Our solutions and strategy can help keep costs low while propelling productivity to new heights. Our managed IT services also result in enhanced scalability and streamlined vendor management.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Managed IT Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity has been a top choice for managed IT services because our solutions are backed by quality support. The services we offer as part of our offshore managed IT solutions are as follows:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Round-the-clock Monitoring</h4>
                                <p>
                                    We monitor your IT infrastructure and keep track of critical and non-critical systems throughout the year to provide proactive maintenance, allowing you to focus on core business functions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Advanced Threat Detection</h4>
                                <p>
                                    We use sophisticated AI-based systems to predict potential failures and take preventive measures to prevent system and business downtime.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Log Management Solutions</h4>
                                <p>
                                    We use hardware and cloud-based systems to store logs related to IT events. Our tracking systems capture log data and store it in an encrypted file for seamless management and future response.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Security Information and Event Management (SIEM)</h4>
                                <p>
                                    Our SIEM system combines security information and event data into a single stream for real-time analysis, providing quality insight into problems arising within your IT infrastructure.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Protection of Managed Server</h4>
                                <p>
                                    We provide 360-degree protection for your storage systems, enabling you to run maintenance and create backups to prevent downtime. We protect your servers with advanced software to soften the impact of security events.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Device Management Solutions</h4>
                                <p>
                                    We can monitor the health of devices deployed at your workplaces. Our security software scans and secures devices from existing and emerging threats, providing an affordable solution for small and large businesses.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">System Vulnerability Management</h4>
                                <p>
                                    Our scanning software runs on your operational systems to look for vulnerabilities and triggers alerts to notify your IT administration team if a potential threat is discovered.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cloud and Web Application Monitoring</h4>
                                <p>
                                    We have the capabilities to track events on the cloud and your web applications, keeping your IT environment in optimal condition without interruptions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Managed IT Service Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Managed IT Service Process We Follow
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The benefits of managed IT services are significant when you choose to outsource to a partner like Nimble Acuity. We follow a transparent service methodology that is easy to track.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">01. Service Request Management</h4>
                                <p>
                                    Once we receive a service request, we create a log to maintain the nature of the request and other details.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">02. Incident Management</h4>
                                <p>
                                    We conduct a preliminary assessment to understand more about the incident and develop a custom solution.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">03. Problem Management</h4>
                                <p>
                                    Depending on the problem, we decide if the countermeasure should be proactive or reactive.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">04. Change Management</h4>
                                <p>
                                    We initiate a controlled determination and implementation of change in your IT environment to make it safe for real-time operation.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">05. Quality Control</h4>
                                <p>
                                    A team of quality control specialists uses advanced tools to ensure the quality of our services.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Managed IT Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a top name in managed IT services because we are more than just problem solvers. We focus on implementing lasting solutions that prevent issues from stemming in the first place. Here are more reasons why we are a leading provider:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Certified Provider:</strong> We are an ISO 9001:2015 certified company, trusted by many for providing bulletproof managed IT services with minimal investment.</li>
                            <li><strong>Data Security:</strong> We are ISO/IEC 27001:2022 certified, proactively securing your confidential business data.</li>
                            <li><strong>High Accuracy and Quality:</strong> Our specialists provide managed IT services with a high level of accuracy and unmatched quality standards.</li>
                            <li><strong>Short Turnaround:</strong> We work with agility to ensure you can stay focused on your core business functions without missing deadlines.</li>
                            <li><strong>Scalability:</strong> Our services are scalable to your needs, making it easy to scale up or down as required.</li>
                            <li><strong>Pocket-friendly Pricing:</strong> We offer customizable managed IT services that are a perfect fit for your budget.</li>
                            <li><strong>Single-point Contact:</strong> We provide a dedicated project handler to guide you through all stages and serve as your single point of contact.</li>
                            <li><strong>Experienced Team:</strong> Our growing team of enthusiastic IT specialists has extensive experience in various IT services and proactive and reactive approaches.</li>
                            <li><strong>Modern Infrastructure:</strong> We have a fully-equipped infrastructure that allows our specialists to leverage the latest tools and technology from a secure delivery center.</li>
                            <li><strong>Secure File Sharing:</strong> We use SFTP and VPN to ensure a secure channel for sending and receiving files and project data, free from risks.</li>
                            <li><strong>24/7 Availability:</strong> We provide personalized support on a 24/7/365 basis to help you overcome problems and provide timely assistance.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Optimize Your IT Infrastructure?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            At Nimble Acuity, we have worked with dedication for years to address a key concern of IT departments: proactive and reactive IT support. We have succeeded in resolving challenges faced by hundreds of IT companies worldwide. Our enterprise solutions go further to offer what other providers can't, making us a benchmark in the industry.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get in Touch
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ManagedITServices;