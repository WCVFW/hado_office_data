import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MobileCommerceDevelopmentServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Mobile Commerce Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Boost your sales and revenues manifold with a highly experienced and skilled team of software developers at affordable costs.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            In the last decade or so, m-commerce has grown exponentially to claim a majority of business conducted over e-commerce. People have continuously chosen to scroll or swipe on their handhelds as a more agreeable means to access goods and services. The upshot is that mobile commerce application development has been one of the core services of digital solutions across the world.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity has been at the forefront of digital solutions and technological support for businesses for decades. Our reputation is global, and we are trusted by customers of several industries and varied business scales with their mobile commerce services.
                        </p>
                    </div>

                    {/* Solutions Offered */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Mobile Commerce Development Solutions We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We provide comprehensive, end-to-end mobile commerce services, from planning and development to deployment and support. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Solution 1 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Custom Application Development</h4>
                                <p className="text-gray-700">Our expert developers ensure high-quality mobile commerce platforms for B2B and B2C needs, compatible across Android, iOS, and other Operating Systems.</p>
                            </div>
                            {/* Solution 2 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Specialized App Development</h4>
                                <p className="text-gray-700">We create specialized applications like digital wallets, money transfer apps, online booking systems, and apps for education and information.</p>
                            </div>
                            {/* Solution 3 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Media, Gaming & Shopping Apps</h4>
                                <p className="text-gray-700">We build high-performance applications for media and entertainment, gaming, and shopping, with smooth functionality and engaging user experiences.</p>
                            </div>
                        </div>
                    </div>

                    {/* Comprehensive Solutions & Support */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Comprehensive Mobile Commerce Solutions and Support
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We take care of both the generic and unique requirements of mobile commerce development with equal efficiency and commitment. We assist in perfecting:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li>Appealing themes and visuals</li>
                            <li>CRM development and integration</li>
                            <li>Secure payment gateway integration</li>
                            <li>Customer login and verification features</li>
                            <li>Engaging content curation and creation</li>
                            <li>Easy navigation and browsing</li>
                            <li>Social media sharing and real-time notifications</li>
                            <li>Wish list, favorites, and cart options</li>
                            <li>Reviews, feedback, and customer support</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Advantages of Partnering with Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            When you partner with us for your m-commerce development strategies, you get the following key benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Flexible Pricing:</strong> Packages are designed to suit your business requirements and budget.</li>
                            <li><strong>Data Security:</strong> We are ISO certified, ensuring complete data security and confidentiality.</li>
                            <li><strong>Dedicated Support:</strong> Round-the-clock support via phone or email, with a dedicated project manager assigned to you.</li>
                            <li><strong>Competitive Edge:</strong> Gain a considerable advantage over your competitors and the ability to reap market benefits.</li>
                            <li><strong>Enhanced Brand Perception:</strong> Build a better brand perception and guarantee customer loyalty through high-quality apps.</li>
                            <li><strong>Cost-effectiveness:</strong> Our solutions offer a high return on investment with efficient and functional application platforms.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Mobile Commerce Development to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            We are a leading mobile commerce development service provider offering a series of other mobile app development services. With our services, you get a trustworthy and sustainable platform with efficient back-up to conduct your mobile commerce operations.
                        </p>
                        <p className="text-gray-700 mb-8 font-medium">
                            We simply help you up your game and stay relevant in the fast-paced market. If you are planning on outsourcing mobile commerce development, look no further.
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

export default MobileCommerceDevelopmentServices;