import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const NuxtJsDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Nuxt.js Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Build sophisticated and intuitive web applications to suit your exact business requirements.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking for a Nuxt.js development services provider to build web applications for your business? Do you need a perfect combination of client-side and server-side features to create better-performing, SEO-friendly, and functional websites? All you need is the reliable service of Nuxt.js design and development from Nimble Acuity.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a frontrunner in providing development solutions using the Nuxt.js framework. We are equipped with the tools and technology required to build functional and user-friendly web applications. From providing app support to integrations, we'll take care of everything. Outsource your Nuxt.js needs to us, and you can rest without any worries.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Nuxt.js Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our services for Nuxt.js development include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Planning & Strategy</h4>
                                <p>
                                    We carefully process all your business requirements to create a strategy that delivers outstanding results. From website design to keyword research, we will take care of everything so you can focus on running your business.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Web Development</h4>
                                <p>
                                    We have a team of dedicated developers who build highly functional and versatile web applications. We help create web apps with benefits like optimized build size and faster page loading.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom Development</h4>
                                <p>
                                    We provide top-notch results with our custom development services. We help design static websites, dynamic web apps, and other customized applications with a faster response time and an amazing user experience.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Maintenance & Support</h4>
                                <p>
                                    As a reliable Nuxt.js development company, we offer amazing support and proactive maintenance services. Our support team will help you deal with unpredictable problems, bugs, and other errors.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">App Upgrades</h4>
                                <p>
                                    With our resources, you can upgrade your solutions to the latest versions, saving valuable time and money. We have the latest versions of different frameworks that can help with a better system upgrade.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Plugin Development</h4>
                                <p>
                                    We are the ultimate service providers when it comes to finding the best plugins for your website. We can provide all the plugins that suit your needs.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SSR Development</h4>
                                <p>
                                    We create server-side-rendered apps that load very quickly and are scalable, efficient, and secure. We help you leverage the power of Nuxt.js to enhance your user experience.
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
                            Here are some of the main reasons why outsourcing Nuxt.js development services to us is beneficial:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-Effective Rates:</strong> Our solutions are priced very competitively, ensuring you receive the highest value for your investment.</li>
                            <li><strong>Professional Developers:</strong> Our developers have the expertise and knowledge required to create amazing and user-friendly web apps using the Nuxt.js platform.</li>
                            <li><strong>Data Security:</strong> We value data security above all else. You can rest assured knowing that your valuable company data is safe with us.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Build with a Reliable Partner?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a pioneer in offering reliable Nuxt.js development solutions for your business. If you want to build a great online presence with the help of a reliable web application, there is no better choice. Get in touch with us today, and we'll offer a plan that suits your budget.
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

export default NuxtJsDevelopment;