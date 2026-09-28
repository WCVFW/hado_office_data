import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const EnterpriseApplicationServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Enterprise Application Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get user-friendly, intuitive, and innovative enterprise mobile applications to streamline work processes, improve efficiency, and grow your business at rates starting at $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Safe storage and exchange of information, third-party collaborations, workflow management, and unified data access have become pressing issues for growing enterprises with operations at multiple locations. It has become the need of the hour to develop innovative enterprise solutions to bring varied systems, processes, data, and teams to a common platform and make it easy for them to collaborate and make decisions.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With over 26 years of experience in enterprise app development and mobility services, Nimble Acuity has earned its position as a most favored enterprise application development company. We cater to the mobile application development needs of our clients from varied sectors, ranging from healthcare, retail, IT, finance, to manufacturing and telecommunications.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Nimble Acuity's Enterprise App Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We provide a complete range of customized enterprise app development services to global clients belonging to diverse industry verticals. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Strategizing and Consulting Services</h4>
                                <p>
                                    We understand the unique needs of your business, identify pain points, and then strategize a mobility process with robust apps that are customized to meet your precise needs.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Native App Development Services</h4>
                                <p>
                                    Our expert software developers have exhaustive knowledge of tools like Xcode, Visual Studio, and Android Studio, enabling them to build customized and innovative mobile apps that cover all client specifications.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Modernization of Legacy Applications</h4>
                                <p>
                                    We provide complete solutions for the smooth migration and modernization of legacy applications to help businesses optimize their operations and generate higher productivity without losing any data.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cloud-based Application Development</h4>
                                <p>
                                    Our developers leverage various cloud technologies to successfully deploy and integrate various processes, creating a high-functioning cloud platform for your business.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cross-platform Enterprise App Development</h4>
                                <p>
                                    We use the power of tools like Sencha, Ionic, and Xamarin to provide mobile access to enterprise applications, creating cross-platform apps that are fully supported on all mobile operating systems.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Mobile App Management</h4>
                                <p>
                                    We provide end-to-end solutions for application maintenance, upgrades, feature-enhancements, testing, bug-fixing, and other support services.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Enterprise Application Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity has successfully reinvented hundreds of businesses with our cutting-edge application development solutions. We offer several unique advantages:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Expert Developers:</strong> We have a vast team of expert designers, developers, and QA specialists with high proficiency and qualifications in their respective fields.</li>
                            <li><strong>ISO 9001:2015 Certified:</strong> Our quality processes are ISO certified, making us a highly qualified and reliable choice.</li>
                            <li><strong>Affordable Pricing:</strong> Our focus is always on customizing enterprise app development services, so you only pay for what you need.</li>
                            <li><strong>Vast Experience:</strong> Our esteemed client base includes companies from Fortune 500 to budding entrepreneurs, making us a trusted service provider.</li>
                            <li><strong>Highly Scalable Operations:</strong> We are fully equipped to manage high-volume work with our flexible and adaptable services.</li>
                            <li><strong>Outstanding Customer Support:</strong> Our varied time-zone operations ensure we are always there for our customers.</li>
                            <li><strong>Confidentiality Guarantee:</strong> We are committed to maintaining 100% data security, backup, and confidentiality with advanced security protocols.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Get Expert Enterprise Application Development
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of enterprise application development services, giving new wings to start-ups and large-scale businesses with our innovative and intuitive custom mobile solutions. Our creative solutions can cut down more than 40% of the development cost.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get in touch
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EnterpriseApplicationServices;