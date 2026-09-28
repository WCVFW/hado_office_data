import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const OpenSourceCMS: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Open Source CMS Development
                        </h2>
                        <p className="text-lg text-gray-600">
                            Create stunning websites and web applications and increase the reach of your products and services with our cost-effective open-source content management system development services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Do you have a website you want to attract more visitors to? Are you looking for the best, most cost-effective solutions to create, edit, and publish your content on the web? If so, you need to seriously consider an open-source content management system (CMS). At Nimble Acuity, we are a leading open-source CMS web development company with years of experience providing services to a diverse global clientele, including corporate clients, bloggers, and government organizations.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            As the world moves toward more collaborative content generation, you need to minimize your dependency on a web developer for day-to-day content tasks. The speed at which your website reflects the right content to the right people is crucial. We can help you leverage open-source CMS to efficiently manage content on your website or intranet site. While many open-source CMS platforms are freely available, they require customization to meet specific business needs. Partner with us to attract more customers and build a strong online presence.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Open Source CMS Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We offer a comprehensive range of open-source CMS services. Our team of expert developers is skilled in customizing, integrating, and deploying the most popular platforms to suit your unique business requirements.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">WordPress Development</h4>
                                <p>
                                    As the most widely used open-source CMS, WordPress has evolved from a blogging tool into a full-fledged content management system with thousands of extensions and templates. We provide comprehensive WordPress development services to build and optimize your website for seamless content management and SEO.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Joomla & Drupal Development</h4>
                                <p>
                                    We harness the full power of popular platforms like Joomla and Drupal to create excellent websites. Our team has deep expertise in customizing these robust systems, leveraging their extensive extensions and modular layouts to build scalable and highly functional web solutions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">eCommerce CMS Development</h4>
                                <p>
                                    We specialize in open-source eCommerce platforms like Magento and PrestaShop. From developing flexible online stores to integrating essential features, we provide expert services that help you manage product listings, payments, and shipping with ease.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom CMS Development</h4>
                                <p>
                                    In addition to popular platforms, we can also develop a unique, custom CMS tailored to your specific needs. Using technologies like PHP, MySQL, and Linux, we build bespoke, stable, and flexible systems for managing your website, blogs, forums, or news sections.
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
                            Nimble Acuity is your ideal partner for open-source CMS development, offering a host of reasons to choose us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Experienced Team:</strong> Our highly qualified and experienced developers are experts in a wide variety of open-source technologies, ensuring we provide the best solution for your requirements.</li>
                            <li><strong>Superior Infrastructure:</strong> We operate with an international-standard infrastructure, providing our professionals with the latest tools and technology to deliver outstanding results every time.</li>
                            <li><strong>Transparent Process:</strong> We follow a reliable and efficient process, from detailed requirement gathering and design to development, testing, and deployment. You’ll be involved every step of the way.</li>
                            <li><strong>100% Data Security:</strong> As an ISO/IEC 27001:2022 certified company, we have a strong commitment to safeguarding your data. All our professionals adhere to strict security guidelines.</li>
                            <li><strong>Dedicated Project Manager:</strong> Each project is assigned a dedicated project manager who serves as your single point of contact, ensuring all your queries are addressed promptly.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Build Your Digital Presence?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity can help you choose the best open-source CMS to meet your business objectives. Leverage our expertise to deliver greater value to your customers and achieve a strong digital presence.
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

export default OpenSourceCMS;