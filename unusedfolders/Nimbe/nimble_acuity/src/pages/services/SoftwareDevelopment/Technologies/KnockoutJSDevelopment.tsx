import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const KnockoutJSDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Knockout.js Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            We build powerful and responsive web applications with modern elements using the Knockout.js platform.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            We provide a full suite of Knockout development services with modern design elements that are part of the latest web development trends, with options for linear scaling. Nimble Acuity's Knockout web development services aim to eliminate inconsistencies in your code and user experience. We build interoperable web apps that give you a competitive advantage with enhanced maintainability and security at a low development cost.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With over two decades of experience, Nimble Acuity has been at the forefront of Knockout development, serving businesses that target a new generation of web users by incorporating modern design philosophies. We develop high-quality web applications that consistently meet or exceed your expectations, which is why we are a well-respected Knockout development company.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Knockout.js Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            When you partner with Nimble Acuity for your web development, you get access to a team that will work with you to capture your exact vision. Our Knockout.js development services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Knockout.js Front-End Development</h4>
                                <p>
                                    We build an intuitive and visually pleasing front end that helps your customers navigate effortlessly to your services. Our focus on modern design ensures fast loading times and a bug-free interface.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Knockout.js Application Consultation</h4>
                                <p>
                                    We offer consultation services to have a close discussion with you, providing expert advice on techniques and methods that are proven to fetch the best results for your project.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Knockout.js Application Migration</h4>
                                <p>
                                    If you need to move out of an outdated platform to something more adaptive and scalable, we provide Knockout.js application migration services without affecting the underlying architecture.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Knockout.js Custom Development</h4>
                                <p>
                                    For a unique, template-free idea, we will shape a custom user experience using Knockout.js that drives engagement and traffic to your site.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Knockout.js Maintenance</h4>
                                <p>
                                    We provide comprehensive application maintenance to keep your apps consistent with modern changes, ensuring low attrition and continuous growth.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Knockout.js Integration Services</h4>
                                <p>
                                    We can enhance the form and functionality of your existing web application by integrating new features without affecting its performance, such as automatic UI updates and declarative data binding.
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
                            Choosing Nimble Acuity is a standard choice for many clients. We are a leading Knockout.js development company with global delivery centers. Here are some of the benefits of partnering with us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Customized Services:</strong> We offer both express and custom solutions, ensuring you get web development that fits your budget.</li>
                            <li><strong>High Quality:</strong> Our Knockout development services are tried, tested, and ISO 9001:2015 certified for quality.</li>
                            <li><strong>Experienced and Professional:</strong> Our web development professionals are adept at the Knockout.js framework and use modern strategies to build powerful applications.</li>
                            <li><strong>Data Security:</strong> We take great care to ensure your data is secure, and we are compliant with ISO/IEC 27001:2022 standards.</li>
                            <li><strong>Maintainable and Scalable:</strong> Our projects are developed with future maintainability and scalability in mind.</li>
                            <li><strong>Agile Development:</strong> We use agile development techniques to complete your project efficiently and within a tight deadline.</li>
                            <li><strong>Friendly Support:</strong> We offer multilingual, round-the-clock support to help clients from across the globe communicate their needs through any preferred channel.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Build Your Web Application?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            At Nimble Acuity, we interpret your custom software development needs and provide trailblazing solutions with a quick turnaround time. Our strategic approach and ability to create intuitive web features elevate user satisfaction and drive future growth.
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

export default KnockoutJSDevelopment;