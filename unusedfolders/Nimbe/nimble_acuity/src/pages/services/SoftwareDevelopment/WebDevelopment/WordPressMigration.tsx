import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const WordPressMigration: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">
                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            WordPress Migration Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Secure your WordPress migration with our enterprise-grade backup architecture, leveraging block-level deduplication and geo-redundant off-site storage.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            For businesses migrating their WordPress site, data integrity is paramount. Our service provides a comprehensive backup solution designed to mitigate risks during the migration process. We use **block-level deduplication** to reduce storage needs and enhance transfer speeds, while **geo-redundant storage** ensures your data is replicated across multiple physical locations, safeguarding against data loss and ensuring rapid availability.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With our meticulous approach, you can avoid common migration issues like unplanned downtime and data corruption. Our rapid restore capabilities ensure that in the event of a disruption, your WordPress environment can be promptly reinstated to a pre-migration state, minimizing operational disruption and maintaining business continuity. Your migration journey is underpinned by a strategic safety net, allowing for a transition that is both smooth and secure.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Advanced WordPress Migration Solutions
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Undergo a seamless transition with our comprehensive pre-migration audits and strategic blueprinting. Our services include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Domain Change:</strong> Meticulous planning and execution for a smooth domain transition, ensuring minimal downtime and business continuity.</li>
                            <li><strong>Website Cloning:</strong> We create an exact replica of your site, preserving the user interface, design, and functionality, followed by rigorous testing.</li>
                            <li><strong>Website Optimization:</strong> We enhance user experience by optimizing load speed, mobile responsiveness, and SEO, driving higher engagement and conversions.</li>
                            <li><strong>Updates and Maintenance:</strong> Our proactive approach ensures your site stays up-to-date with the latest security patches and technological trends.</li>
                        </ul>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our WordPress Migration Process Flow
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We focus on minimal business disruption, ensuring a seamless transition and operational continuity:
                        </p>
                        <ol className="list-decimal list-inside space-y-4 text-gray-700">
                            <li><strong>Comprehensive Analysis:</strong> We perform an in-depth scrutiny of your existing site to identify potential hurdles and formulate precise solutions.</li>
                            <li><strong>Migration Execution:</strong> Using cutting-edge technologies, we ensure the migration is carried out with precision, for a smooth transition to WordPress.</li>
                            <li><strong>Preparing for Migration:</strong> Our meticulous preparation mitigates risks, providing you with a planned, predictable, and controlled process.</li>
                            <li><strong>Post-Migration Assistance:</strong> We fine-tune your new site for optimal performance and provide prompt resolution for any issues, ensuring a seamless adaptation.</li>
                        </ol>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our expertise and strategic approach set us apart. Entrust your digital assets with a team that has a proven track record of managing sophisticated migrations with precision.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Site Backup:</strong> We implement real-time replication to secondary systems with geo-redundancy to ensure no data is lost.</li>
                            <li><strong>WordPress File Transfer:</strong> Our process preserves the integrity of active plugins and complex data structures with zero data loss.</li>
                            <li><strong>Database Import & Management:</strong> We use advanced scripting to ensure a swift and error-free database migration and optimize performance post-migration.</li>
                            <li><strong>Domain Configuration:</strong> We provide comprehensive DNS management, including failover strategies and geo-DNS configurations.</li>
                            <li><strong>Site Testing:</strong> Our rigorous testing includes load and stress testing under simulated high-traffic conditions, along with security vulnerability assessments.</li>
                            <li><strong>SSL Installation:</strong> We deploy SSL certificates in alignment with the latest cryptographic standards to maintain the highest level of encryption.</li>
                            <li><strong>Troubleshooting Support:</strong> We offer an escalated tier of troubleshooting, tapping into our vast repository of historical incident data.</li>
                            <li><strong>Website Speed Optimization:</strong> We leverage the latest HTTP protocols and minification techniques to enhance page load times.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Migrate Your Site?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Engaging with **Nimble Acuity** guarantees a partnership with a provider steeped in the nuances of technical migration logistics. We deliver a surgical migration process, ensuring that every byte is accounted for and every setting is meticulously calibrated for peak performance.
                        </p>
                        <p className="text-gray-700 mb-8 font-medium">
                            Partner with us to redefine your WordPress platform's capabilities and secure a competitive edge in digital performance.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Contact Us Today
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WordPressMigration;