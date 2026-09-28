import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DigitalCommerceServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Digital Commerce Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Transform the way you engage, interact, and connect with your customers. Our digital commerce services help enterprises make commerce more human at competitive prices.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            The world of digital commerce is fast-changing and becoming extensively customer-centric. Buyer experience is at the center of everything. Companies today are fast deploying artificial intelligence and cloud-ready solutions at every touchpoint throughout their customer's journey, right from finding the product to making the final purchase.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity offers end-to-end services and digital commerce solutions to help companies thrive in the immensely competitive digital commerce landscape. Our digital commerce services are geared to help enterprises transform the way they engage, interact, and service their customers. By leveraging integrated next-gen capabilities, we help digital enterprises bring in the right expertise, experience, and vigor to entice their customers and turn them into brand evangelists.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Digital Commerce Services Offered by Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As a premium digital commerce service provider, Nimble Acuity helps brands re-imagine digital commerce for profitable growth and agility. We use state-of-the-art tools and technologies to enhance your service capabilities and define roadmaps for success.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Digital Commerce Consulting Services</h4>
                                <p>
                                    We can help you re-imagine your e-commerce strategy. Our digital consultants analyze your landscape to design a powerful strategy that makes the shopping experience frictionless. We do it all to help you chart a successful digital commerce journey.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Digital Commerce Development & Implementation</h4>
                                <p>
                                    We help clients successfully implement and integrate e-commerce platforms and third-party software for digital marketing. Our solutions can help you re-architect your services to meet and interact with your customers on the platforms they love.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Digital Commerce Management</h4>
                                <p>
                                    Our digital commerce specialists can rewire your organization's commerce strategy for unmatched digital growth. They can help you implement, upgrade, and optimize your e-commerce solutions and integrate them with other business operations to reduce internal complexities.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Digital Content Management</h4>
                                <p>
                                    A well-thought digital content strategy is highly important for the success of your e-commerce business. We enable you to build proven digital content management capabilities to empower your teams and significantly reduce the dependency on IT staff.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Digital Commerce Transformation Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Digital Commerce Transformation Process We Follow
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As a leading digital commerce service provider, we at Nimble Acuity help brands stay on par with changing e-commerce needs. Our experts quickly evaluate your customers' needs and optimize the performance of your websites to drive profitable growth.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">01. Evaluating Your Digital Presence</h4>
                                <p>
                                    Our expert analysts study your brand to evaluate your existing digital presence, find gaps, and identify the scope of improvement. We also monitor your competitors and customers to understand their needs and behaviors.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">02. Designing a Strategy</h4>
                                <p>
                                    We then build a digital commerce strategy that helps you seamlessly connect with your customers on the platform of their choice, rebuild your relationship with them, and deliver the right digital experience.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">03. Implementing the Plan</h4>
                                <p>
                                    We integrate various adaptive third-party services and solutions into your platform to improve and enhance the way you connect and collaborate with your customers.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">04. Maintaining and Running the System</h4>
                                <p>
                                    We also assist you in maintaining and running your new and improved platform to resolve technical glitches. We continuously optimize and upgrade your digital commerce platform to help you successfully thrive in the digital world.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Benefits of Outsourcing */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Benefits of Outsourcing Digital Commerce Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing digital commerce services to experts like Nimble Acuity can help enterprises:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Discover newer ways to connect and interact with their buyers</li>
                            <li>Find potential opportunities to build trust and enhance customer experience</li>
                            <li>Build new purchase pathways</li>
                            <li>Ensure multi-channel presence</li>
                            <li>Personalize their customers' experience and journey</li>
                            <li>Meet their customers' needs and expectations</li>
                            <li>Simplify, integrate, and optimize internal business processes</li>
                            <li>Maximize their marketing and sales potential</li>
                            <li>Improve their customer base and revenue</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource Digital Commerce Services to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading digital commerce service provider delivering world-class digital transformation services to global enterprises. We are led by a team of agile and highly experienced specialists who leverage their rich knowledge and skills to enable enterprises to make their digital commerce experiences future-ready.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>World-class Services:</strong> Leveraging our rich industrial experience and latest technical knowledge, we provide the best digital commerce services that help you traverse the complex digital landscape with confidence.</li>
                            <li><strong>Certified Team of Experts:</strong> Our in-house digital experts are masters in their trade. With comprehensive knowledge and experience, they can help you solve all digital commerce challenges quickly and easily.</li>
                            <li><strong>Competitive Prices:</strong> Our services are available at the most economic rates. Our pocket-friendly prices and plans help all our customers easily avail of our expert services.</li>
                            <li><strong>Customized Solutions:</strong> We provide our expert services based on your business needs. Our business analysts find all the challenges you are facing to provide customized solutions that can help you run your business more efficiently.</li>
                            <li><strong>Quick Turnover Time:</strong> Thanks to our global delivery centers and a team of experts, we deliver our services fast, ensuring you always stay ahead of your competitors.</li>
                            <li><strong>Complete Data Privacy:</strong> Our encrypted servers and strict data protection norms keep your business data completely safe with us.</li>
                            <li><strong>24/7 Customer Service:</strong> Our customer service executives are available 24/7, 365 days a year to ensure instant availability and timely resolution of all your queries and concerns.</li>
                            <li><strong>Complete Peace of Mind:</strong> We take care of all your business transformation needs, allowing you to focus on growing your business and revenue.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Elevate Your Digital Commerce Strategy?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            With everything going the digital route, digital commerce services are the need of the hour. Nimble Acuity can help you grow and flourish your business in today's multi-channel landscape. Our agile solutions and best-in-class practices can help you optimize your services and empower you to compete in the new digital paradigm. Our offerings are built to provide a unified, end-to-end solution that helps you seamlessly connect with your target audience and provide them with personalized solutions just the way they want.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get in Touch
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DigitalCommerceServices;