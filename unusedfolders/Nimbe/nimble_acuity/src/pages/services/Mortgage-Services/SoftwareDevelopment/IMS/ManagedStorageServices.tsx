import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ManagedStorageServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Managed Storage Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get 99.99% SLA-backed and completely secure managed storage solutions from Nimble Acuity at affordable rates.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Businesses of all scales and sizes generate a huge amount of data that is critical to their day-to-day operations. All this data needs to be stored and protected in a systemized and secured manner for smooth functioning as well as quick recovery in case of any data loss incidents in the future.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity's comprehensive range of data storage solutions is scalable and completely dependable, strategically designed to ensure the highest level of protection for all digital business assets and data. We develop both onsite physical storage infrastructure and cloud-based storage environments based on your specific demands. Our team of leading storage specialists ensures that all your storage, backup, archiving, and other related needs are successfully met through cutting-edge storage technologies.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Managed Storage Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We offer a wide spectrum of managed storage services to our clients, including onsite, offsite, and cloud-based storage management solutions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Disk Storage and Backup Services</h4>
                                <p>
                                    For physical storage, our team advises and successfully deploys physical storage infrastructure consisting of hard disks, tapes, blades, and highly advanced AI-driven flash storage devices as per your requirements.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cloud Storage Solutions</h4>
                                <p>
                                    When offering cloud storage and management services, our team assures proper integration with all your enterprise software applications to offer complete visibility and easy access to stored data.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Virtualized and Unified Storage Solutions</h4>
                                <p>
                                    Our team consolidates and simplifies complex storage systems through leading-edge storage technologies like Flash, SCM, NVMe, and hybrid multi-cloud to ensure efficiency.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Data Backup and Archival Services</h4>
                                <p>
                                    Nimble Acuity's specialists regularly monitor and maintain storage backups to ensure complete data protection against any data loss incidents, disasters, or cybercrimes. Our team also preserves data for future purposes via proper data structuring and cleansing.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Patch Management Services</h4>
                                <p>
                                    While working on the project with you, our team ensures timely up-gradation and installation of firmware, software, and hardware needed for undisrupted and smooth storage operations.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Data Monitoring Services</h4>
                                <p>
                                    Storage utilization, performance monitoring, and reporting are all undertaken by our expert team, relieving you of any worry regarding efficient data storage so that you can focus on your key business areas.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Data Replication and Storage Provisioning</h4>
                                <p>
                                    We offer mirroring and replication of data, manual or auto-provisioning of data by optimizing server disk drive space, and configuration of data storage systems.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Data Storage Advisory Services</h4>
                                <p>
                                    We also extend our expertise through our advisory and consultancy services. We analyze your business storage needs and design a custom storage framework with complete governance and application requirements within your budgets.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Managed Storage Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We follow a standard yet flexible work methodology to provide high-quality services to our clients every time.
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Requirement Analysis:</strong> Our team first assimilates all the information, gaps, and business goals to establish the scope of work.</li>
                            <li><strong>Deployment of the team:</strong> An onsite or offshore team is assigned, headed by a project manager to oversee operations and maintain a single point of communication with the client.</li>
                            <li><strong>Implementation:</strong> The team enables physical and virtual storage systems and carries out other functions of storage management.</li>
                            <li><strong>Continuous Management:</strong> Our team continuously monitors and manages the stored data to ensure its efficiency.</li>
                            <li><strong>Contingent Recoveries:</strong> In case of disasters or data loss incidents, our team quickly facilitates recovery response systems for data retrieval.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            What makes us your ideal managed storage service provider is our commitment to our projects and clients. We go that extra mile to deliver the highest quality results. Here's what makes us stand apart from our competitors:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Flexible Pay Options:</strong> Our service packages are flexible and come in various options, enabling large organizations and SMBs to leverage our services.</li>
                            <li><strong>High-quality Services:</strong> Nimble Acuity's QoS ensures that the storage application performance stays efficient and consistent, facilitating top-quality managed storage solutions.</li>
                            <li><strong>Increased IT Flexibility:</strong> Our team enables a shared, secured, and well-connected storage infrastructure, allowing your IT support team to magnify their data center savings and boost overall efficiency.</li>
                            <li><strong>24/7 Business Support:</strong> Our globally situated centers give us the edge to be available for customer support 24/7, enabling us to catch discrepancies immediately and decrease recovery time.</li>
                            <li><strong>Assured Data Protection:</strong> We guarantee complete data safety and security and have established industry-standard security systems at all levels to ensure your data is fully protected at all times.</li>
                            <li><strong>Scalable Solutions:</strong> We offer optimized scalability, enabling you to expand your data capacity up to multiples of petabytes.</li>
                            <li><strong>99.99% Data Durability SLA:</strong> We offer a service-level agreement-backed guaranteed 99.9999% uptime, triple parity RAID, and easy replication to multiple storage applications.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Optimize Your Storage Ecosystem?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Comprehensive storage solutions by Nimble Acuity enable your business to efficiently manage consequential data growth, helping you optimize your storage investments for better efficiency and value. We gain deep insight into your existing storage infrastructure and help in designing a more extensive, future-oriented, and resilient storage framework, preparing you for the future market. Upgrade your storage ecosystem and add to your business growth with Nimble Acuity.
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

export default ManagedStorageServices;