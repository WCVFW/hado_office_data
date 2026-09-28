import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const AEMDevelopmentServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            AEM Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Make content management easy and effortless by outsourcing your Adobe Experience Manager (AEM) design and development requirements to us.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Adobe Experience Manager (AEM) is a comprehensive content management system that allows organizations to handle mobile and website content and marketing from a single location. Businesses are increasingly using advanced AEM solutions to tailor and deliver personalized digital experiences, engaging every prospect who interacts with their brand.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is an expert Adobe Experience Manager development service provider. We have leveraged AEM to meet the CMS needs of diverse industry verticals, helping our clients create unmatched customer experiences across both in-person and online channels. Our services boost loyalty and demand while assisting businesses in managing their brand identity across multiple content channels with less effort and time.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our End-to-End AEM Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As a leading AEM development company, we offer a full suite of services to our clients, ensuring a seamless journey from strategy to implementation and support.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">AEM Consulting & Development</h4>
                                <p>
                                    Our consulting services help businesses optimize their content development process, reduce the time needed to create assets, and accelerate the content cycle across multiple channels.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">AEM Marketing Implementation</h4>
                                <p>
                                    We assist in setting up and optimizing marketing campaigns. Our AEM developers will help you not only realize your marketing objectives but also align them with your broader business goals.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Platform Integration with AEM</h4>
                                <p>
                                    We seamlessly integrate Adobe Experience Manager with external platforms like Salesforce and Marketo. We also integrate AEM with Adobe Marketing Cloud tools to help you run campaigns simultaneously across multiple channels.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">AEM Migration & Upgrade</h4>
                                <p>
                                    Our Adobe Experience Manager developers perform complex migrations from other CMS platforms, such as Drupal, SharePoint, and Sitecore. We also specialize in upgrading your existing AEM setup to the latest version.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Managed Services</h4>
                                <p>
                                    We offer managed services for both on-premise and cloud implementations. This includes automated backups, security checks, and support during disaster recovery to ensure your system is always protected.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Team Augmentation</h4>
                                <p>
                                    Reinforce your internal team with a specialized Adobe Experience Manager professional from Nimble Acuity to support your specific CMS needs and project requirements.
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
                            As an expert Adobe Experience Manager development enterprise, we provide a range of unique benefits to our clients:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Expert Developers:</strong> Our AEM development process is handled by a team of expert AEM developers with profound experience in developing and implementing AEM solutions.</li>
                            <li><strong>Time and Cost Savings:</strong> We help you leverage AEM's intuitive tools to deliver engaging content quickly and efficiently, reducing the overall time and cost of content development.</li>
                            <li><strong>Centralized Asset Management:</strong> We assist you in leveraging AEM’s Digital Asset Management feature to store and manage your digital assets securely on the cloud.</li>
                            <li><strong>Personalized Content:</strong> Our services help you use AEM to build custom customer profiles based on location-oriented data and local languages, enabling you to deliver truly personalized content.</li>
                            <li><strong>Security and Scalability:</strong> Our AEM services make full use of AEM’s privacy features to guarantee data protection. Our solutions are also designed to be highly scalable to grow with your business.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Elevate Your Digital Experience?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            As a reputable AEM development company, we deliver solutions that adapt to your present and future business needs. Our developers create solutions that boost content value and get your brand to market in the shortest possible time.
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

export default AEMDevelopmentServices;