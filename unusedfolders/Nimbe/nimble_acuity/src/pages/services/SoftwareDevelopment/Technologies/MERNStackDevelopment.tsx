import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const MERNStackDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            MERN Stack Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get fast, secure, and scalable MERN stack web development services to build enterprise-grade web applications and interactive websites.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            The MERN stack, comprised of **MongoDB, Express.js, React.js, and Node.js**, is a powerful, integrated bundle for building robust web applications and platforms. This JavaScript-based technology is highly effective for creating modern, fast, and scalable solutions.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With over two decades of domain expertise, Nimble Acuity is a leading provider of **MERN stack development services**. We combine our extensive experience with advanced technologies to offer cutting-edge web solutions for a wide range of industries. Our highly qualified and dedicated MERN stack developers focus on building professional, customized, and user-centric applications. You can hire our team on a full-time or hourly basis to leverage our expertise.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our MERN Stack Web Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We offer a full suite of MERN stack development services and custom solutions tailored to your needs. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Enterprise Application Development</h4>
                                <p>
                                    Scale your business growth with tailored enterprise applications. Our developers use the MERN stack to deliver full-stack enterprise solutions that significantly enhance user experiences.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Web Application Development</h4>
                                <p>
                                    Our team of experienced MERN developers is well-versed in building everything from simple to complex web platforms with outstanding functionality. We create secure and exceptionally aesthetic web applications for all business verticals.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">eCommerce Website Development</h4>
                                <p>
                                    We create best-in-class eCommerce website solutions. We integrate necessary APIs and develop high-performing, intuitive web stores using Node.js to support backend services.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom CMS Development</h4>
                                <p>
                                    We deploy effective and custom CMS solutions to fit your unique requirements, allowing you to manage content with a highly efficient system. We also provide full development support for these projects.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C] space-x-2">Migration and Integration</h4>
                                <p>
                                    If you are working with a legacy system, we help you upgrade its capabilities with the MERN stack. We streamline the migration and integration process with minimal disruption to your daily operations.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">ERP Development</h4>
                                <p>
                                    Manage and automate your back-office functions with effective ERP solutions using MongoDB and Node.js. Our team helps you build a perfect ERP solution, leveraging the power of clustering, sharding, and schema.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Web Services and API Development</h4>
                                <p>
                                    Our team provides complete API development services to code RESTful web services using the MERN stack. We develop and configure the right APIs for your mobile, desktop, and cloud applications.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom Application Development</h4>
                                <p>
                                    For truly customized application development, our outstanding team can't be beaten. We can use the React CRUD app with the MERN stack to create perfectly tailored solutions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SPA and Real-time App Development</h4>
                                <p>
                                    Our developers use React to build dynamic **Single Page Applications (SPAs)** that load a single HTML page. We also have a deep specialization in creating highly efficient real-time applications.
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
                            Hiring Nimble Acuity as your MERN stack development service provider comes with the following advantages:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Adaptable Pricing Models:</strong> Our high-quality services come with flexible pricing to accommodate the unique needs of various businesses.</li>
                            <li><strong>Proficient Team:</strong> We have a vast team of committed and experienced programmers, developers, and experts dedicated to their work.</li>
                            <li><strong>Proven Track Record:</strong> We have successfully delivered numerous MERN stack development projects across the world, building a strong portfolio of highly effective services.</li>
                            <li><strong>2X Faster Turnaround Time:</strong> We take timelines seriously and ensure that we deliver projects well ahead of time, with a focus on quick turnarounds.</li>
                            <li><strong>Scalable Solutions:</strong> We ensure that all our applications are scalable for future growth, maximizing your ROI.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Build with the MERN Stack?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            With our well-structured and intelligently executed MERN stack web development services, we enhance the technological capabilities of your enterprise, web, and cloud applications. Partner with Nimble Acuity to get a leg up on your competition and stay at the top of your industry.
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

export default MERNStackDevelopment;