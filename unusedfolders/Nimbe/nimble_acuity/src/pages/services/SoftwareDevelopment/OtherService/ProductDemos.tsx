import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ProductDemos: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Product Demos & Simulations
                        </h2>
                        <p className="text-lg text-gray-600">
                            Create compelling product demos and simulations that speak for themselves, reducing sales and marketing overheads while accelerating your business growth.
                        </p>
                    </div>

                    {/* Why Use Product Demos */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why use product demos?
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Product demonstrations are an invaluable tool for presenting ideas, concepts, and products through audiovisuals, animations, and interactive multimedia simulations. They create a "touch and feel" experience for customers, allowing them to better relate to the product before they buy.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Online demos can significantly reduce real costs and eliminate opportunity costs. By virtue of their accessibility, they offer a wide reach and provide instant customer feedback, putting your company on a fast-growth track.
                        </p>
                    </div>

                    {/* Use Cases */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            How nimble acuity Can Help You
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our dedicated team of visual and instructional designers, animators, and software engineers provides innovative and customized demo solutions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Improve Sales & Marketing</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>We create realistic, dynamic product demonstrations that highlight your key features.</li>
                                    <li>We build intuitive and sophisticated user interfaces based on your team's input.</li>
                                    <li>Our demos can help streamline and shorten your sales cycle by influencing buying decisions.</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Enhance e-Learning</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>We can create engaging and effective training modules that are interactive and can be distributed to large audiences.</li>
                                    <li>Our team can integrate new modules with other e-Learning applications.</li>
                                    <li>We can build features like attendance tracking, scoring, and quiz templates to enhance the learning experience.</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Train Customer Service & Support</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>We create visual modules and "how-to" tutorials for your staff, enabling them to handle basic issues efficiently and focus on complex problems.</li>
                                    <li>We formulate self-service support modules—dynamic technical simulations and tutorials for 24-hour customer support—reducing costs associated with one-on-one contact.</li>
                                    <li>We prepare effective training modules for new and existing employees to get them up to speed on new products and features.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Who Can Benefit */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Who can benefit from product demos?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Demos and simulations provide product-based and e-Learning solutions across a wide range of industries, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Finance - Banking & Insurance</li>
                            <li>Healthcare & Pharmaceuticals</li>
                            <li>Communications - IT & Telecom</li>
                            <li>Retail & Consumer Goods</li>
                            <li>Manufacturing</li>
                            <li>Media & Entertainment</li>
                            <li>Professional Services</li>
                            <li>Distance Education & Online Universities</li>
                            <li>Government, Defense & NGOs</li>
                        </ul>
                    </div>

                    {/* Customized Solutions */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Customized Solutions for Your Needs
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            All our demos and simulations are created with a deep understanding of your objectives. We use the latest tools, such as Macromedia Captivate, to create interactive, compelling, and innovative experiences that simulate real application environments.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>We can **localize** demos in multiple languages, helping you reduce marketing costs and enter new markets.</li>
                            <li>We can also **convert** your product demo into **3D** to make it more interactive and realistic.</li>
                            <li>We publish demos, simulations, and tutorials in a variety of formats (web, CDROM, DVD) depending on your specific needs.</li>
                            <li>Our rich media projects are created to be **easily accessible** by a wide audience, with high resolution and small file sizes for easy streaming and emailing.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Your Product Demo Development to nimble acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            If you are considering outsourcing your product demo development, nimble acuity is your ideal partner. We will create interactive demos using the principles of instructional design to ensure maximum effectiveness.
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

export default ProductDemos;