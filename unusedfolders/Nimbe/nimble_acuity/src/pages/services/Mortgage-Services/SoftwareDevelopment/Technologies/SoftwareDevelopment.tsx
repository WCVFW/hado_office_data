import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SoftwareDevelopment: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Software Development Technologies
                        </h2>
                        <p className="text-lg text-gray-600">
                            Bring your ideas to life and build disruptive business models with our cutting-edge Software Development Technology solutions.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are growing technical debt and delayed software delivery processes bringing your organization to a halt? Is increasing operational overhead preventing you from delivering value to your clients? Either way, we suggest you leverage the expertise of an innovative software development technologies provider like us.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Build and deploy intuitive and intelligent applications with our time-tested software technologies that are designed for continuous disruption. We are an established provider of cutting-edge software development technology solutions serving a global clientele. Our team is abreast with the latest trends in software development and incorporates the right tools, technologies, and best practices to deliver scalable solutions that are easy to implement.
                        </p>
                    </div>

                    {/* Sophisticated Solutions */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Sophisticated Software Development Technology Solutions We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We leverage advanced software development technologies to deliver value to our clients across various industry sectors. Encompassing the most advanced and cutting-edge tools and software, our software development technology solutions include core technologies, web development technologies, mobile app development technologies, front-end frameworks, and more.
                        </p>

                        <div className="space-y-12">
                            {/* Core Technologies */}
                            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                                <h4 className="text-xl font-bold text-[#006A7C] mb-4">Core Technologies</h4>
                                <p className="text-gray-700 mb-4">
                                    Specializing in offering world-class technology solutions to global businesses, here are some of our core technologies for you to leverage:
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 columns-2 md:columns-3">
                                    <li>Java</li>
                                    <li>JavaScript</li>
                                    <li>Python</li>
                                    <li>PHP</li>
                                    <li>C, C++</li>
                                    <li>.Net</li>
                                    <li>GitHub</li>
                                    <li>SQL</li>
                                    <li>Ruby</li>
                                </ul>
                            </div>

                            {/* Web Development Technologies */}
                            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                                <h4 className="text-xl font-bold text-[#006A7C] mb-4">Web Development Technologies</h4>
                                <p className="text-gray-700 mb-4">
                                    Struggling to build progressive web applications? Worry no more. Our cutting-edge web development technologies empower you to build advanced applications.
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 columns-2 md:columns-3">
                                    <li>react.js</li>
                                    <li>Node.js</li>
                                    <li>Angular</li>
                                    <li>Vue.js</li>
                                    <li>HTML</li>
                                    <li>Ember.js</li>
                                    <li>CSS</li>
                                    <li>Magento</li>
                                </ul>
                            </div>

                            {/* Mobile App Development Technologies */}
                            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                                <h4 className="text-xl font-bold text-[#006A7C] mb-4">Mobile App Development Technologies</h4>
                                <p className="text-gray-700 mb-4">
                                    Gain access to a host of the right tools, libraries, components, and other technologies required to develop highly interactive and compatible mobile applications.
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 columns-2 md:columns-3">
                                    <li>Flutter</li>
                                    <li>Android</li>
                                    <li>iOS</li>
                                    <li>PhoneGap</li>
                                    <li>xamarin</li>
                                    <li>React Native</li>
                                    <li>QT</li>
                                    <li>Kotlin</li>
                                </ul>
                            </div>

                            {/* Front End Frameworks */}
                            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                                <h4 className="text-xl font-bold text-[#006A7C] mb-4">Front End Frameworks</h4>
                                <p className="text-gray-700 mb-4">
                                    Develop user-driven platforms, more responsive apps, and intuitive features and benefit from the real-time programming that facilitates rapid development with our front-end frameworks.
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 columns-2 md:columns-3">
                                    <li>React</li>
                                    <li>Angular</li>
                                    <li>JQuery</li>
                                    <li>Backbone</li>
                                    <li>Svelte</li>
                                    <li>Semantic UI</li>
                                    <li>Foundation</li>
                                    <li>Preact</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            What Makes Us the Preferred Partner for Software Development Technologies?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Businesses worldwide are leveraging our tools and software to build and deploy secure, impactful, and easy-to-maintain software solutions. Here are some of the major reasons that set us apart:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>High-quality Services:</strong> We are ISO-certified and also have multi-level quality checks for all our software development processes. Our experienced coders and testers ensure that all software developed are of the highest quality.</li>
                            <li><strong>Modest Pricing Options:</strong> Our software development services are extremely cost-effective and modestly priced. We also provide a flexible pricing structure that considers individual clients' requirements.</li>
                            <li><strong>Excellent Infrastructure:</strong> Our facilities have advanced infrastructure and tools such as internet leased circuits, 200% power backup, and built-in IT redundancies.</li>
                            <li><strong>100% Data Security:</strong> We are an ISO/IEC 27001:2022 ISMS-certified organization, which further demonstrates our strong commitment to ensuring that our customer’s data is protected at all times.</li>
                            <li><strong>Round the Clock Support:</strong> We provide round-the-clock support to all our clients. Our customer support agents are always available to help our clients via phone or email.</li>
                            <li><strong>Experienced Team:</strong> Our management experience exceeds 100 man-years, and all this experience helps us provide an unparalleled experience for our clients.</li>
                            <li><strong>Follow up and Maintenance:</strong> We make sure to constantly follow up with our clients to obtain their feedback to make our software delivery process more efficient and reliable.</li>
                        </ul>
                    </div>

                    {/* Additional Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Additional Services You Can Benefit From
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Web Development Services</h4>
                                <p>Build swift, intuitive, and diverse web-based applications that enhance the user experience for web users.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Enterprise Software Solutions</h4>
                                <p>Centralize processes, manage real-time updates, and ensure superior collaboration with customized enterprise software solutions.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Open Source Development Services</h4>
                                <p>Develop flexible, agile, and secure applications with open source software solutions.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Mobile App Development Services</h4>
                                <p>Create custom mobile applications that are compatible with multiple platforms and assure a great user experience.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Software Testing Services</h4>
                                <p>Evaluate and verify your software products and applications for their functionality with our quick and efficient testing services.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Web Application Development Services</h4>
                                <p>Build easy-to-use and impactful customer-facing and corporate web portals, apps, and more with our reliable solutions.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">eCommerce Development</h4>
                                <p>Tackle complex online store project requirements with our intuitive solutions that work.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">IT Staff Augmentation</h4>
                                <p>Get the right talent on an on-demand basis to scale your software projects with our IT staff augmentation solutions.</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Leverage Our Software Development Technologies to Address Complex Development Needs
                        </h3>
                        <p className="text-gray-700 mb-6">
                            We are a one-stop destination for all your software development technology needs. Our extensive experience and commitment to quality make us the preferred destination for companies across the world. We help you:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                            <li>Prevent technical debt and accelerate software delivery.</li>
                            <li>Eliminate the operational overhead and deliver value.</li>
                        </ul>
                        <p className="text-gray-700 mb-6">
                            Ready to expand the scope of your functions with our mainstream technologies? Get in touch with us now to find out how we can assist you.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SoftwareDevelopment;