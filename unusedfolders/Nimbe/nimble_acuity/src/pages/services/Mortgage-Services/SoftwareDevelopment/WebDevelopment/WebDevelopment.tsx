import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const WebDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">
                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Web Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            We deliver enterprise-level web development services for business portals, e-commerce sites, open-source software, and more.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Enterprise website development needs are complex and require a service partner who truly understands technology. Our approach at **Nimble Acuity** relies on a strong adherence to methodology and standards, a skilled resource base, and highly competent project managers. We pay close attention to detail, ensuring real-time information exchange, robust server architecture, and thorough application testing.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our solutions include B2B and B2C portals, e-commerce development, web applications for business, and enterprise information systems. With over 24 years of experience, we have served numerous Fortune 1000 enterprises and delivered benefits that have lowered costs by up to 50%.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Custom Web Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We provide a complete range of custom web development services, from needs analysis to implementation, testing, and maintenance. Our offerings include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Web Development:</strong> We offer services that encompass custom application development, reverse engineering, application customization, integration, and porting.</li>
                            <li><strong>Web Design and Development:</strong> Our functional and highly efficient services are designed to match your business expectations, with a focus on rich, easy-to-use web interfaces.</li>
                            <li><strong>Cross-Platform Application Development:</strong> We develop powerful applications that can be accessed on any device, with a strong focus on UI/UX for a feature-packed and user-friendly experience.</li>
                            <li><strong>Web-Based Database Programming:</strong> We perform database optimization and tuning for distributed servers and complex databases to achieve optimal performance.</li>
                            <li><strong>Application Maintenance:</strong> We ensure your web applications remain functional and efficient, minimizing downtime with services that include issue incident management and root cause analysis.</li>
                            <li><strong>Web and Enterprise Portal Development:</strong> We can help build custom web-based enterprise portals to boost employee efficiency, enabling easy group interactions and real-time information exchange.</li>
                            <li><strong>Open-Source Software Integration:</strong> We help you leverage the power of open-source technologies to build custom applications from scratch, assisting with architecture planning and integration.</li>
                            <li><strong>Architecture Consulting and Design:</strong> Our highly confidential web architecture consultation services help you optimize your applications and provide in-depth requirements analysis and development planning.</li>
                        </ul>
                    </div>

                    {/* Our Expertise */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Web Development Expertise
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We strive to deliver the most advanced and flexible web development services for our clients. Our solutions are scalable, platform-independent, and include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li>Online Recruiting Applications</li>
                            <li>Web-based Survey Applications</li>
                            <li>E-commerce Solutions</li>
                            <li>Call Center Applications</li>
                            <li>Document Management Systems</li>
                            <li>Customer Relationship Management (CRM)</li>
                            <li>and more...</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Web Development?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We combine functionality and creativity to offer intuitive web designs at a lower cost. Here's how we benefit you:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Efficient Architecture:</strong> Our robust and flexible architecture reduces development time and ensures long-term scalability.</li>
                            <li><strong>Enhanced Usability:</strong> Our solutions are in tune with the latest technologies, ensuring a rich graphical UI for better conversions and higher customer satisfaction.</li>
                            <li><strong>Improved Scalability:</strong> We ensure our web development solutions can scale effortlessly, allowing you to grow your business through a superior online presence.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Build Your Web Solution?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            **Nimble Acuity** can capably execute the most complex and ambitious web development projects while ensuring future scalability, performance, and seamless system integration.
                        </p>
                        <p className="text-gray-700 mb-8 font-medium">
                            For high-quality and cost-effective web application development, contact us today.
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

export default WebDevelopment;