import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const NetworkInfrastructure: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Network Infrastructure Management Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Effectively manage, enhance, and maintain your IT systems to prevent downtime and mitigate risks.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Today's IT systems are highly complex and diversified, making them difficult for companies to manage and maintain. Improper implementation of network management solutions can lead to huge investments with no considerable improvement. Network management is a time, budget, and resource-intensive task that requires trained professionals. Small and medium businesses often face severe business impacts from network issues and can't dedicate the necessary resources. For this reason, many businesses are now moving toward a **managed services model** for network management to gain better control and have a professional team available to mitigate risks. This is exactly what we provide at **Nimble Acuity**.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Network Management Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Organizations that handle network management in-house often lack the experience to solve complex issues. By outsourcing to us, you get access to a pool of trained resources with the expertise for fast issue resolution. With predefined SLAs (Service Level Agreements), the work is done in the most efficient way possible. We offer a complete range of services for IT infrastructure and network management, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Network design, implementation, configuration, and optimization</li>
                            <li>Network or data migration and integration</li>
                            <li>On-premise as well as remote network management</li>
                            <li>Local Area Networks (LAN) and Wide Area Networks (WAN) management</li>
                            <li>24x7 network monitoring, troubleshooting, and root cause analysis</li>
                            <li>Network utilization, capacity, and performance management</li>
                            <li>Preventive management of risks and probable future issues</li>
                            <li>Change management and configuration management</li>
                            <li>24x7 trouble ticket management and disaster recovery</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            By outsourcing your network management services to us, you can compete with larger companies by gaining access to similar services, technologies, and management models. Even large organizations are now leveraging the benefits we offer. Our major business benefits include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost Reduction:</strong> We minimize your in-house operational costs, allowing you to pay only for the services you use and the SLAs met.</li>
                            <li><strong>Access to Expert Resources:</strong> It's difficult to find and train the right IT resources. By outsourcing, you can focus on hiring professionals who help you drive your business forward.</li>
                            <li><strong>Increased Efficiency with New Technologies:</strong> Implementing network changes can be time-consuming and costly. We can significantly reduce the time taken to implement new technologies and workflows.</li>
                            <li><strong>Increased Compliance and Security:</strong> By following best practices, timely audits, and up-to-date security standards, we ensure your network's compliance and reduce risk.</li>
                            <li><strong>High Project Quality Standards:</strong> We follow standard industry protocols, from initial configuration and timely audits to ongoing support and updated security standards.</li>
                            <li><strong>Dedicated Team:</strong> We deploy a team of experienced network architects, engineers, and administrators who are trained and certified in their respective domains.</li>
                            <li><strong>Improved Network Visibility and Operations:</strong> We provide complete transparency so you get accurate visibility into your network's status, allowing you to focus on your core business.</li>
                            <li><strong>24x7 Network Monitoring:</strong> Our team provides instant alerts and support for issues, conducting proactive analysis and root cause analysis to reduce future incidents.</li>
                            <li><strong>Backup and Recovery:</strong> We ensure your data is secure and can be recovered completely in case of any drastic event.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready for Managed Network Services?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            As a top provider of network management services, Nimble Acuity can take complete responsibility for maintaining the uptime of your network. We strategically implement the right tools and workflows, allocate the right team, set standards and best practices, and manage change. We also offer other infrastructure management services, including IT risk and security management, data center services, and IT help desk services.
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

export default NetworkInfrastructure;