import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const MEANStackDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            MEAN Stack Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            We create high-quality, dynamic websites and web applications by leveraging the power of MEAN stack development.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking for a free and open-source software stack to build powerful and dynamic web applications? You should consider leveraging the power of the **MEAN stack** (an acronym for MongoDB, Express.js, Angular.js, and Node.js), which is one of the fastest-growing JavaScript frameworks used by developers to create high-quality web applications.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading provider of MEAN stack development services. Our team of developers uses their extensive JavaScript knowledge to build scalable and efficient web applications. Using this next-gen technology, we've built a variety of applications, from responsive mobile and web portals to interactive social networking platforms. By leveraging our services, our clients have been able to drastically reduce their time to market.
                        </p>
                    </div>

                    {/* Our MEAN Stack Components */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our MEAN Application Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We provide a range of custom MEAN stack development services that combine powerful, scalable, and flexible dynamic JS-based technologies:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">MongoDB</h4>
                                <p>
                                    MongoDB is a powerful, document-oriented NoSQL database that facilitates rapid development. Our professionals are skilled at harnessing the power of MongoDB to provide superior, flexible solutions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Express.js</h4>
                                <p>
                                    Express.js is a stable Node.js framework for web application development. It allows us to craft beautiful, responsive web interfaces that are not only user-friendly but also provide robust feature sets for single-page and multi-page hybrid apps.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Angular.js</h4>
                                <p>
                                    Initially developed by Google, Angular.js enables us to extend complete HTML vocabulary support for your web apps, facilitating fast front-end development. Our team is highly adept at leveraging its full power to create powerful and dynamic applications.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Node.js</h4>
                                <p>
                                    Node.js is a highly efficient platform built on Chrome's JavaScript runtime. Our developers are highly skilled and experienced in using Node.js for a variety of applications, leveraging its robust package manager (NPM) to easily manage project dependencies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Solutions with the MEAN Stack
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We have helped create a range of interactive and user-friendly applications using the MEAN stack. Our services include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>MEAN Stack Web Development</li>
                            <li>Responsive Web App Development</li>
                            <li>API and Web Services Development</li>
                            <li>Enterprise Android Application Development</li>
                            <li>MEAN Stack CMS and ERP Development</li>
                            <li>Customized Business Intelligence and Reporting</li>
                            <li>MEAN Stack e-commerce Development</li>
                            <li>MEAN Stack Migration and Porting</li>
                            <li>MEAN Stack Maintenance & Support</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-700 leading-relaxed mb-6">
                            We are a leading MEAN stack development service provider, catering to clients all over the world. Here are a few reasons to choose us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>High-quality Guaranteed:</strong> We guarantee high-quality services. We are also ISO-certified, which demonstrates our commitment to excellence.</li>
                            <li><strong>Faster Turnaround Time:</strong> Our services are always delivered on time, preventing you from having to deal with delays.</li>
                            <li><strong>Experienced Team:</strong> Our MEAN stack developers are highly qualified and experienced in delivering a variety of projects.</li>
                            <li><strong>Modernization:</strong> We help you modernize your existing applications using MEAN stack technology, making them more effective.</li>
                            <li><strong>Scalable Apps:</strong> We build scalable hybrid apps that combine the strengths of Node.js with other technologies.</li>
                            <li><strong>Streamlined Client-side Orientation:</strong> We help you efficiently shift from traditional server-side page generation to a more streamlined client-side application orientation.</li>
                            <li><strong>Customization:</strong> We use Node.js' immense module library to customize a solution that fits your exact requirements.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to take your business to the next level?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a highly competent and experienced MEAN stack development company. We specialize in showcasing your business more effectively through websites, web apps, or mobile apps. Our proficiency in other open-source technologies also makes us a great partner for global businesses.
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

export default MEANStackDevelopment;