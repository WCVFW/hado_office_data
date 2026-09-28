import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const VueJsDevelopmentServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Vue.js Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Harness the power of Vue.js to create dynamic and real-time applications that amaze your clients.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Looking to build great front-end and single-page applications? Do you want to use a powerful framework for your custom application development? If so, Vue.js is a fantastic choice, and we can help you fully tap into its power. Nimble Acuity is a leading provider of Vue.js development services and can help you make full use of this powerful JavaScript front-end framework.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our expert developers have used Vue.js to provide exceptional value on a wide range of projects. We help individuals and businesses better serve their customers by creating unique interfaces that result in impressive and immersive user experiences. Our Vue.js development services cover everything from custom application development to third-party integrations, consulting, migration, and ongoing support.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Vue.js Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity provides end-to-end Vue.js development services to clients from a wide variety of backgrounds. Whatever your requirement, we can help. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Single Page Application (SPA) Development</h4>
                                <p>
                                    With our SPA development services using Vue.js, you'll benefit from quick response times and improved performance, delivering a seamless user experience.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom Application Development</h4>
                                <p>
                                    We use Vue.js to create bespoke applications. Our services begin with an initial consultation and span through planning, final development, and ongoing support.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Third-Party Integration</h4>
                                <p>
                                    Our specialized Vue.js developers can provide seamless third-party integration, allowing you to leverage the full power of this modern framework with your existing systems.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Modernization and Migration</h4>
                                <p>
                                    Our services help you seamlessly migrate to Vue.js, add new features, and optimize performance for a more modern and efficient application.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Support and Maintenance</h4>
                                <p>
                                    We provide comprehensive maintenance and support services to ensure your Vue.js applications run smoothly and stay up-to-date with the latest developments.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Vue.js CMS Development</h4>
                                <p>
                                    Our Vue.js developers can create a state-of-the-art CMS that effectively addresses the needs of your target audience and provides you with a more prominent voice on the web.
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
                            Nimble Acuity is a leading provider of high-quality Vue.js development services to a global clientele. There are several reasons to choose us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Experienced Team:</strong> We ensure that the talent of the Vue.js developers we assign to your project perfectly matches your specific needs, delivering exceptional results.</li>
                            <li><strong>Affordable & High-Quality Services:</strong> We provide highly cost-effective and high-quality Vue.js development services. We are also ISO-certified, ensuring our processes meet international standards.</li>
                            <li><strong>Strict Security:</strong> We sign strict non-disclosure agreements and are ISO/IEC 27001:2022 certified, demonstrating our commitment to maintaining your privacy and data security at all times.</li>
                            <li><strong>Efficient Process:</strong> We follow a well-defined and streamlined development process, from initial requirement analysis to final delivery, ensuring quick turnaround times and flawless results.</li>
                            <li><strong>Single Point of Contact:</strong> We assign a dedicated technical lead to every project. This ensures a single, reliable point of contact to address any of your issues and keep you updated on progress.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Build with Vue.js?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Our Vue.js solutions incorporate the latest trends, allowing you to remain current and competitive. If you're looking for a high-quality and cost-effective partner for Vue.js development, get in touch with us today.
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

export default VueJsDevelopmentServices;