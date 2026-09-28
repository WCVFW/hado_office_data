import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SymfonyDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Symfony Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Obtain high-end, robust, and flexible Symfony development solutions from professional developers.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking to harness the power of Symfony for your web projects? Do you want to speed up the creation and maintenance of your PHP applications, eliminate repetitive coding tasks, and gain better control over your code? If you're looking for an experienced and reliable partner to help you build optimized web applications, we are here to help.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading provider of Symfony development services, helping clients with a wide range of development requirements. We have extensive experience using the Symfony framework to create highly robust and flexible applications. We adopt the best industry practices and innovative development approaches, allowing us to tackle even the most complex projects and fully leverage the features of the Symfony framework to create applications that are customized to our clients' needs.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Symfony Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a highly reputed Symfony development service provider, catering to a wide variety of clients across industries. We work closely with you to determine your exact requirements and provide services that perfectly meet your needs.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Symfony Web Development</h4>
                                <p>
                                    We offer top-of-the-line Symfony web development solutions that are fully customizable and flexible to cover any business requirement. With our services, you get access to expert coding professionals who can take your web development to the next level.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Strategy Development</h4>
                                <p>
                                    We will work closely with you to understand your requirements in detail and then come up with a comprehensive Symfony development strategy that ticks all the boxes. We check the robustness of every design and development idea before implementation to ensure the result is fully optimized.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Enterprise Application Development</h4>
                                <p>
                                    If you are a large enterprise looking for custom enterprise-level application development, your search ends with us. We have experience powering the web projects of many enterprises by fully leveraging the great features of the Symfony framework.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Theme Integration</h4>
                                <p>
                                    Our Symfony development team is comprised of highly experienced professionals who can help you integrate custom themes to ensure your web project looks and feels appealing. You can be sure of getting maximum efficiency in your projects with us.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Support Solutions</h4>
                                <p>
                                    Beyond high-quality development, we also provide high-performance maintenance and support, including support for migrations. Our team will always be proactive and provide you with the support you need.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom Development</h4>
                                <p>
                                    As a leading Symfony development company, we also provide professional-grade and scalable solutions that perfectly complement your business's requirements. We can also design and develop custom add-ons for your project.
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
                            We are a highly professional and reliable Symfony application development company that has worked with diverse clients worldwide. Outsourcing Symfony development services to us provides a host of benefits, such as:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing:</strong> We provide our Symfony development solutions at highly affordable rates, helping you build world-class applications cost-effectively.</li>
                            <li><strong>Structured Process:</strong> We use highly robust and streamlined processes to deliver all our solutions.</li>
                            <li><strong>Experienced Team:</strong> Our Symfony development team has over 26 years of experience in providing the highest quality software development services.</li>
                            <li><strong>High-quality Services:</strong> We are an ISO-certified provider of Symfony development services and have robust QA processes to always provide the highest quality services.</li>
                            <li><strong>Tools and Technologies:</strong> As a leading provider of Symfony development services, our team is fully aware of all the latest best practices and will implement them in your project.</li>
                            <li><strong>Data Security:</strong> The safety of your data is of primary importance to us. We also comply with all standard data security and privacy laws.</li>
                            <li><strong>Short Turnaround:</strong> You will always receive our solutions on time because we take deadlines very seriously.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready for Professional Symfony Development?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            We are a leading provider of Symfony development solutions, and our highly qualified and experienced developers have the necessary background to efficiently and effectively address any of your Symfony development needs. We also provide our services at highly cost-effective rates, helping you make the most out of your investment with us. If you are looking for professional and reliable Symfony development services, get in touch with us today.
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

export default SymfonyDevelopment;