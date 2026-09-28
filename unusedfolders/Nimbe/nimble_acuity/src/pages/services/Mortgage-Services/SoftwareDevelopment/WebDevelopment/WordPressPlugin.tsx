import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const WordPressPlugin: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">
                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            WordPress Plugin Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get access to custom WordPress plugin solutions that are high-impact and increase productivity, with prices starting at $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Do you want to extend the functionality of your WordPress site with a new custom plugin? Or do you need to tweak an existing one to meet your business objectives? If so, you stand to benefit from our **WordPress plugin development services**.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            **Nimble Acuity** is a leading provider of **WordPress plugin development services** to clients worldwide. We have vast experience in handling a wide variety of requirements and will work closely with you to understand your needs before creating a bespoke solution. Whether you need a new plugin from scratch or customization of an existing one, we are here to help.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our WordPress Plugin Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We are a leading WordPress plugin development company and can help you with a wide range of requirements, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Custom Plugin Development:</strong> We create custom WordPress plugins from the ground up, allowing you to extend your site's functionality or sell them as new products.</li>
                            <li><strong>User Experience Design:</strong> We equip plugins with native interactions, making them simple to use and understand for even novice users.</li>
                            <li><strong>Add-on/Extension Development:</strong> We create add-ons and extensions to expand the functionality of your WordPress plugins.</li>
                            <li><strong>Plugin Customization:</strong> If you have an existing plugin that is no longer serving its purpose, we can tweak it to meet your business requirements.</li>
                            <li><strong>Third-Party Software Integration:</strong> We can integrate a wide range of services, from payment gateways to specific APIs, at highly affordable rates.</li>
                            <li><strong>Plugin Maintenance:</strong> We provide ongoing support to ensure your plugins continue to perform at optimal levels and remain compatible with newer WordPress versions.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We are a leading provider of WordPress plugin development services for a host of reasons, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Affordable Pricing:</strong> Our solutions are priced very reasonably, providing the highest return on investment.</li>
                            <li><strong>Structured Process:</strong> We use a streamlined and structured process to ensure consistent, high-quality delivery.</li>
                            <li><strong>Experienced Team:</strong> Our team has over 26 years of experience in providing a full spectrum of software and plugin development services.</li>
                            <li><strong>High-Quality Services:</strong> We are an ISO-certified company and use multi-level quality checks to ensure the highest quality plugins.</li>
                            <li><strong>Data Security:</strong> Your data is of prime importance to us. We comply with all international data security and privacy laws.</li>
                            <li><strong>Short Turnaround:</strong> You will always receive our services well within the agreed-upon timeframe.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Develop a Plugin?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            **Nimble Acuity** is a pioneer in providing a wide range of **WordPress plugin development services**. Our team is comprised of highly experienced and qualified software developers with significant expertise in creating bespoke plugins for a variety of requirements.
                        </p>
                        <p className="text-gray-700 mb-8 font-medium">
                            If you are looking for high-quality, robust, and affordable WordPress plugin development services, get in touch with us today.
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

export default WordPressPlugin;