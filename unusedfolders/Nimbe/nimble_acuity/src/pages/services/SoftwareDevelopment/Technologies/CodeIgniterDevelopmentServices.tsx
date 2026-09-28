import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CodeIgniterDevelopmentServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            CodeIgniter Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get access to agile, feature-rich web applications while meeting your budgetary constraints and deadlines.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking to build robust, fully functional web apps at competitive prices and within tight deadlines? Do you want to leverage the power of CodeIgniter, a popular open-source PHP framework for rapid business web app development? If so, you're in the right place. Nimble Acuity is a leading CodeIgniter web development company that can help you build highly robust and dynamic web apps from scratch.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We take the time to deeply understand your specific business case and needs. Our team then crafts a detailed CodeIgniter development plan to create a solution that perfectly meets your requirements. We offer a wide range of services, from developing customized web apps, portals, and e-commerce stores to enterprise websites and ongoing support.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our CodeIgniter Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity provides a full range of CodeIgniter development services to meet a diverse set of requirements, delivered with complete transparency and robust communication.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom Web Application Development</h4>
                                <p>
                                    Our experienced CodeIgniter development experts can turn your ideas into reality. We analyze your requirements in detail to create data-driven, scalable, and robust web applications. We can also develop a web backend for your mobile apps using CodeIgniter.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Web Portal Development</h4>
                                <p>
                                    We help you gain increased visibility with state-of-the-art web portals. We use PHP CodeIgniter and MySQL to ensure your web portal project is fully functional and meets all your needs.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom E-commerce Website Development</h4>
                                <p>
                                    Using the powerful CodeIgniter framework, we develop highly robust e-commerce websites. Our services ensure your online business runs smoothly by utilizing the CI framework and AJAX-based shopping carts to handle sensitive payment information securely.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Third-Party API Integration</h4>
                                <p>
                                    If you need to integrate third-party APIs—such as those for email services, social media, payment gateways, or Google Analytics—we provide the services needed to make your app robust and highly scalable.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Web 2.0-based CMS Development</h4>
                                <p>
                                    Our CodeIgniter development experts can build efficient and powerful Web 2.0-based Content Management Systems (CMS) with strong functionality, all delivered within the stipulated time.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Website Maintenance and Support</h4>
                                <p>
                                    We provide efficient and effective support and maintenance for your CodeIgniter website. We are available around the clock to ensure your website runs smoothly and can upgrade your app to the latest version for optimal performance.
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
                            As a leading provider of CodeIgniter development services, we can help you bring your ideas to life quickly and affordably. Here are a few reasons to choose us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable & High-Quality Services:</strong> Our CodeIgniter development services are priced to provide you with the highest return on investment. As an ISO-certified provider, we use robust QA processes to ensure consistent quality.</li>
                            <li><strong>Experienced Team:</strong> Our CodeIgniter development team is backed by years of experience in providing a wide range of software development services to a global clientele.</li>
                            <li><strong>Structured Process:</strong> We use an efficient, structured process to deliver all our services, ensuring your project is completed on time, every time.</li>
                            <li><strong>Data Security:</strong> We take the security of your sensitive data very seriously. Our stringent data security processes are designed to ensure your information is always safe and secure.</li>
                            <li><strong>Single Point of Contact:</strong> We assign a dedicated technical lead to every project. This ensures a single, reliable point of contact for all your questions and needs.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Build Your Next Web App?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of high-quality CodeIgniter development services. Our service philosophy is to provide the highest quality solutions at competitive prices, ensuring all our clients get the most value for their money. If you are looking for reliable, feature-rich, and affordable CodeIgniter development services, get in touch with us today!
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

export default CodeIgniterDevelopmentServices;