import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ManagedBackupServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Managed Backup Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Protect your data and retrieve it whenever you want without incurring hefty infrastructure costs by outsourcing managed backup to Nimble Acuity.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Data, systems, and information backup is imperative for any business, small, medium, or large-scale. Creating an in-house backup infrastructure, managing it, and accessing it is not only time-consuming but very expensive too.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Onboarding a reputable managed backup service provider like Nimble Acuity helps in a systematic and safety-assured backup of your data. With a proficient team for data management and a highly advanced, robust backup infrastructure, Nimble Acuity has the right expertise and ample resources to manage your data, avoid data loss incidents, and offer a quick recovery response in case data loss happens. We ensure complete transparency, giving you full oversight into our systems and processes, which makes us one of the most trusted managed backup service providers.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Managed Backup Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity offers extensive managed backup and disaster recovery services with the assurance of industry-compliant standards. Our managed backup solutions include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Data Protection Design and Advisory Services</h4>
                                <p>
                                    Our team helps in establishing clear accountability and aids your company in taking suitable action to secure your data and systems. We simplify management processes and help design a high-success rate protection plan, along with offering our expertise and guidance on data backup frameworks and technologies.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Data Backup Implementation Services</h4>
                                <p>
                                    With SLA-backed operations, our team ensures a systematic deployment of data backup solutions. We offer end-to-end, multivendor backup infrastructure setup and management so that you can focus on your core business tasks without the continuous worry of data loss risk.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Data Backup Monitoring & Recovery Services</h4>
                                <p>
                                    Apart from well-rounded backup, we offer 24/7 data backup management services. Our team continuously monitors your data to identify any small blip and rectify it before it turns into something risky. We also offer fast data recovery solutions in cases where data loss occurs due to unforeseen circumstances.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Swift Recovery for Most Operating Systems</h4>
                                <p>
                                    Our exceptional team provides instant data recovery for systems like VMware, Hyper-V, Windows, and Linux in a record 15-minute priority 1 response time.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Deployment of Physical Onsite Backup Appliances</h4>
                                <p>
                                    Nimble Acuity creates a relevant physical backup appliance for complete onsite data protection that can be controlled via a centralized cloud-management system.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Data Protection for Hybrid Environments</h4>
                                <p>
                                    Our team and systems ensure your data is protected wherever it resides, as modern IT ecosystems combine physical, virtual, and cloud data environments requiring complete data backup.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Fully-Automated Cloud-Based Disaster Recovery</h4>
                                <p>
                                    Our team stays prepared to handle any risk and ensures valuable data recovery after any disaster, failover, failback, or testing scenarios.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Ransomware & Cyber Crime Protection Services</h4>
                                <p>
                                    Our specialized services also include protection from any cyber threats and elimination of any penetrated malware, along with the successful recovery and restoration of your valuable data in sound condition.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Work Process for Managed Backup Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We follow a clear process to provide managed backup services:
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Understanding the scope of work:</strong> Our team identifies the requirements and gathers important information to establish a data backup framework.</li>
                            <li><strong>Deployment of team and physical backup appliance:</strong> We assign an onshore or offshore team and set up a physical backup appliance within your network to enable a faster backup system.</li>
                            <li><strong>Cloud backup:</strong> Our team makes required copies of data, encrypts them, and replicates them to your internal as well as our company's cloud infrastructure.</li>
                            <li><strong>Regular testing and maintenance:</strong> We diligently perform backup data testing and ensure regular upkeep to meet recovery time and recovery point objectives.</li>
                            <li><strong>Facilitating disaster recovery:</strong> In the case of outages or any unforeseen data loss incidents, our team restores the valuable data via a physical backup appliance or private cloud.</li>
                            <li><strong>Continuous monitoring:</strong> Once all secure backup systems and processes are implemented, we take care of full-time monitoring to catch any incident at the earliest.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Choosing Nimble Acuity as your managed backup service provider comes with many benefits, some of which are:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective Service Packages:</strong> We are a popular choice for businesses of all sizes, mainly due to our highly flexible and affordable pricing structure.</li>
                            <li><strong>A Trusted Technological Service Provider:</strong> We have a strong IT infrastructure with a highly proficient team working around-the-clock to offer you end-to-end managed backup solutions.</li>
                            <li><strong>A Dedicated Team:</strong> When you partner with us, we assign a team headed by a project manager. This gives you the advantage of a single point of contact and a passionate team committed to serving you.</li>
                            <li><strong>Agile Service Deliveries:</strong> We understand the importance of quick response time. Our team works 24/7 to ensure there is no service delay and issues can be resolved quickly.</li>
                            <li><strong>Assurance of Transparent Operations:</strong> We are committed to fair business practices and ensure complete transparency and visibility for our clients.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Safeguard Your Data?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity enables global businesses to store, protect, and access their data whenever and wherever they want without the hassle of data loss and associated risks. We are a well-rounded managed backup service provider with standardized SLA-backed delivery and among the fastest recovery response times. If you are looking for physical, virtual, cloud, and SaaS-based data backup solutions, get in touch with one of our experts today.
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

export default ManagedBackupServices;