import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const NetworkInfrastructures: React.FC = () => {
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
                            Improve end-to-end operations of your business by upgrading the network infrastructure with our secure and compliant network infrastructure management services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Amplify your operational efficiency and drive substantial growth through a strategic partnership with our network infrastructure management services. Nimble Acuity's approach to managing your network infrastructure is deep-rooted in leveraging advanced technologies backed by Lean Six Sigma methodologies.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            As a reputable network infrastructure management business, we operate as a partner to your IT leadership by providing decisive network infrastructure assistance using **SD-WAN optimization, L1–L3 issue resolution, round-the-clock monitoring, and operational efficiency supported by SLAs**. This guarantees that your teams stay committed to innovation while we make sure the platform they use is quick, safe, and always available.
                        </p>
                    </div>

                    {/* Core Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Range of Network Infrastructure Management Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We provide comprehensive network infrastructure support to empower your business by improving collaboration, ensuring business continuity, and increasing compliance.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Network Design and Architecture Management Services</h4>
                                <p>
                                    Enterprise-grade network plans are created by our team to meet the scalability, security, and geographic distribution requirements of individual businesses. We provide flexible and future-ready environments by aligning network architecture with cloud adoption, application development requirements, and compliance standards, and we use load balancing, segmentation, and efficient routing techniques to design throughput efficiency and latency reduction.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Network Integration and Operations Services</h4>
                                <p>
                                    We maximize compatibility and minimize disruption by integrating legacy, on-premises, and cloud technologies into a unified ecosystem. We handle cross-platform protocols and devices to streamline control and lessen fragmentation. We also offer services for worldwide and multi-location networks, including configuration, lifecycle management, and operational optimization.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Network Monitoring and Performance Management</h4>
                                <p>
                                    We monitor key metrics including throughput, packet loss, and latency to guarantee service continuity and SLA compliance. By detecting degradation patterns early, our analytics-driven strategy avoids downtime that could negatively affect corporate operations. We also make periodic alterations to distributed networks to ensure optimal traffic flow and congestion mitigation.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Network Security Management Services</h4>
                                <p>
                                    We use behavioral monitoring systems, firewalls, and IPS/IDS to protect the entire attack surface. We deploy security at the cloud and edge levels to counteract application-layer and volumetric threats. Our network infrastructure support also ensures that environments are compliant and threat-resilient through patch automation and assessments.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cloud and Hybrid Network Integration</h4>
                                <p>
                                    We create and deploy smooth network overlays for AWS, Azure, and GCP that are connected to your on-premises infrastructure. We implement cloud-native firewalls and VNFs to provide seamless routing and adaptive privacy. Direct Connect, ExpressRoute, and VPN tunnels are configured by the team to provide secure, low-latency access.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Disaster Recovery and Redundancy Planning</h4>
                                <p>
                                    We design failover clusters that are either active-active or active-passive to provide uninterrupted network services. Our professionals create network topologies that keep users connected even when there are regional outages, and we integrate automatic backup and restoration into essential network functions to achieve low RTO/RPO.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Documentation and Compliance</h4>
                                <p>
                                    To facilitate operations and audits, we produce comprehensive inventory records and topology graphics. We provide complete documentation that meets your regulatory requirements, such as HIPAA, PCI DSS, and ISO 27001, and we provide policy supervision and controlled access, enabling you to fully and effectively outsource network infrastructure management.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Should You Choose Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            By choosing Nimble Acuity for your network infrastructure management services, you gain a strategic ally who will evolve with your business needs.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Intelligent Traffic Engineering:</strong> Our usage of **AI and ML models** allows for dynamic path optimization according to throughput, delay, and latency parameters in real time.</li>
                            <li><strong>Enhanced Security Protocols:</strong> Employ threat detection and prevention techniques using our state-of-the-art security measures, ensuring your data is always protected.</li>
                            <li><strong>Predictive Maintenance:</strong> Foresee potential network issues before they arise by employing our advanced **AI and ML technologies** that offer predictive maintenance services.</li>
                            <li><strong>Comprehensive Compliance Support:</strong> We provide comprehensive compliance support that simplifies the complex landscape of industry regulations and reduces the risk of non-compliance.</li>
                            <li><strong>Dynamic Bandwidth Allocation:</strong> Our intelligent network architecture uses usage patterns, application demands, and policy controls to prioritize and distribute bandwidth dynamically.</li>
                            <li><strong>Seamless Integration with Existing Systems:</strong> Ensure smooth integration of your new solutions with your existing systems, minimize disruptions, and enhance operational continuity.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Transform Your Network?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Give your business a competitive edge with robust network infrastructure management services. By partnering with us, you can leverage our expertise to ensure your network is fast, secure, and reliable.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Talk to Our Experts Today
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NetworkInfrastructures;