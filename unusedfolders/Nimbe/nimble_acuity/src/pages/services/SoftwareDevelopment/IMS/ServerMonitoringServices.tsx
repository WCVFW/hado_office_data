import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ServerMonitoringServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Server Monitoring Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Server uptime is critical for modern businesses. We ensure your on-premise and cloud servers are always functioning optimally to prevent costly downtime.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Server unavailability or overload can severely impact a company's bottom line in just a few minutes. As the complexity and number of servers increase, along with the varied geographical locations of global businesses, it has become essential to monitor the performance of each server effectively.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Rather than involving in-house resources, it's more efficient to outsource server monitoring to professionals. This helps you significantly reduce overhead costs. At Nimble Acuity, we offer quick and efficient server monitoring services to global clients.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Server Monitoring Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Nimble Acuity, we offer a complete range of server monitoring services tailored to your business requirements.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Server Monitoring System Setup</h4>
                                <p>
                                    We first understand your server hierarchy and build a flow of dependencies, impacts, applications, and rules. We either use your current setup or consult on selecting and implementing additional tools for effective monitoring.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">On-premise & Cloud Server Monitoring</h4>
                                <p>
                                    We monitor both physical in-house servers (like Windows or Linux) and cloud-based servers such as AWS, Microsoft Azure, and more, providing simultaneous oversight for all your infrastructure.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Server Performance Analytics</h4>
                                <p>
                                    During the monitoring process, we perform analytics on critical factors like server uptime, CPU/disk/memory usage, load, and bandwidth utilization. These provide vital insights into the health of your servers.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Proactive Issue Resolution & RCA</h4>
                                <p>
                                    Our professionals proactively take steps to resolve problems and prevent incidents from escalating. If downtime occurs, we provide a Root Cause Analysis (RCA) report with in-depth details and suggest corrective measures.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Automated and Manual Monitoring</h4>
                                <p>
                                    We use a mix of popular tools for automated monitoring and deploy resources for manual oversight to keep an eye on any deviations.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Server Maintenance</h4>
                                <p>
                                    We conduct manual or automated server maintenance activities to reduce load and memory usage and increase server uptime, keeping your systems lean and efficient.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Alerts and Notifications</h4>
                                <p>
                                    We provide instant notifications via email, phone, or SMS about any errors or downtime, alerting the necessary stakeholders about the severity of the incident.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Dashboard and Reporting</h4>
                                <p>
                                    We provide periodic reports on server availability, health trends, and network maps. Clients can also access a dashboard at any time to check the status of company-wide servers.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Server Monitoring?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a premium provider of IT infrastructure monitoring services. When you partner with us, you can be assured of the following benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Flexible Pricing Structure:</strong> We offer flexible pricing that is billed based on the skills of the resources and time taken, providing quality services at affordable rates.</li>
                            <li><strong>Strict Quality Standards:</strong> Our professionals follow strict project evaluation methods to ensure that only the best practices are deployed to complete your project.</li>
                            <li><strong>Expertise in Diverse Tools:</strong> Having worked with hundreds of global clients, our team has experience leveraging a wide range of server monitoring tools and technologies to meet your specific requirements.</li>
                            <li><strong>24/7 Monitoring:</strong> Our team works in rotation to ensure your servers are monitored around the clock, without fail.</li>
                            <li><strong>Proactive Management:</strong> We ensure that minor incidents do not escalate into severe issues through proactive management and quick troubleshooting.</li>
                            <li><strong>Significant Cost Reduction:</strong> Our clients enjoy significant cost savings due to reduced server downtime and more efficient operations.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Ensure Your Server Uptime?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a global outsourcing firm with rich, multi-domain industry experience. We provide professional services that will reduce your server downtime and increase business effectiveness. We also offer other infrastructure management services, such as Dynamics 365 setup and data center services. If you're looking for a partner for server monitoring services, your search ends here.
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

export default ServerMonitoringServices;