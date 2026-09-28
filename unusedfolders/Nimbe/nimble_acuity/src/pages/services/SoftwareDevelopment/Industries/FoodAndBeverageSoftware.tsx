import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const FoodAndBeverageSoftware: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Software Development for Food and Beverage Industry
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get access to end-to-end customized software development solutions that meet the requirements of your F&B operations, at competitive prices.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            The food and beverage industry has had to undergo significant changes in the products and services they offer, thanks to evolving consumer preferences and behaviors. The modern customer is more discerning and sophisticated, demanding personalized services. The industry also faces unique challenges due to the perishable nature of products, strict compliance regulations, and risks of contamination.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading software development company offering customized services to organizations in the food and beverage industry. Our developers provide end-to-end, personalized solutions by leveraging AI, blockchain, IoT, and other powerful contemporary technologies. We help businesses benefit from technology and revolutionize their offerings to stay on par with rapidly fluctuating market trends.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Software Development Services for the F&B Industry
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We are a leading software development provider for the food and beverage industry and offer a comprehensive range of IT solutions, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Food Ordering System Development</h4>
                                <p className="leading-relaxed">
                                    Our robust software enables restaurants and food chains to cater to more customers, deliver improved service, and boost revenues.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">POS Solution Development</h4>
                                <p className="leading-relaxed">
                                    We build customized POS software to help food operators handle daily tasks, like quickly tracking and managing orders and databases.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Restaurant CRM Solution Development</h4>
                                <p className="leading-relaxed">
                                    We can help you develop custom CRM software that empowers your restaurants to analyze customer behavior and perform lead generation across your outlets.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Food App Development</h4>
                                <p className="leading-relaxed">
                                    Restaurants and food delivery businesses get direct access to the burgeoning home delivery market thanks to our sophisticated and feature-packed food delivery and aggregator apps.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Food Manufacturing ERP System</h4>
                                <p className="leading-relaxed">
                                    Our feature-rich ERP software helps businesses unify all their processes, from procurement through production to sales and accounting.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Food Industry Supply Chain Management</h4>
                                <p className="leading-relaxed">
                                    We build custom supply chain management software to cater to the unique requirements of F&B businesses, especially in relation to the quantity and quality of raw materials.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Menu Creation and Management Software</h4>
                                <p className="leading-relaxed">
                                    Our software simplifies the job of categorizing and organizing menus by cuisine, ingredients, and customer preferences, while also helping maintain nutrition values and cost elements.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Kitchen Management Software</h4>
                                <p className="leading-relaxed">
                                    Our kitchen maintenance and management software works in perfect cohesion with your ERP solution to ensure a smooth flow of processes, helping automate tasks and manage waste.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Software Development Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We are a leading food and beverage industry software development company with standardized processes in place to ensure the smooth end-to-end flow of every project.
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Gathering Client Requirements:</strong> We have detailed discussions to understand your business model, goals, and concerns.</li>
                            <li><strong>Blueprint Creation:</strong> We create a detailed blueprint of the solution to be developed.</li>
                            <li><strong>Technology Selection:</strong> We finalize the technology and tools to be used in development.</li>
                            <li><strong>Software Development:</strong> We begin the development work and roll out the product in iterations.</li>
                            <li><strong>Testing:</strong> The product is intensively tested for any problems and bugs.</li>
                            <li><strong>Deployment:</strong> Once we and the customer are satisfied, the product is deployed.</li>
                            <li><strong>Maintenance:</strong> We provide continuous maintenance and technical support as required.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing your software requirements to an experienced company like Nimble Acuity is one of your best bets, because we offer the following advantages:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective Prices:</strong> Our services are surprisingly affordable, with zero compromise on quality.</li>
                            <li><strong>Experienced Team:</strong> Our team of skilled developers is well-trained to innovate and build custom software for food and beverage businesses.</li>
                            <li><strong>Top-notch Infrastructure:</strong> We have modern office spaces, sophisticated equipment, and access to all the latest tools and technology.</li>
                            <li><strong>Quick Turnaround Time:</strong> We are committed to meeting delivery timelines every single time.</li>
                            <li><strong>Complete Data Security:</strong> As an ISO/IEC 27001:2022-certified company, we employ multiple protocols to ensure your data is secure.</li>
                            <li><strong>Global Delivery Centers:</strong> With delivery centers spread across the world, we can provide our services from a location of your choice.</li>
                            <li><strong>24/7 Support:</strong> Our executives are just a call or email away for tech support, aiming to keep your systems running with minimal downtime.</li>
                            <li><strong>Fully Scalable:</strong> All our products are designed to scale and handle additional tasks with ease, whether you add more products, vendors, or locations.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Partner with Nimble Acuity to Drive Growth
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Drive efficiency, innovation, and productivity with high-performing food and beverage software solutions from Nimble Acuity. With nearly two decades of experience in helping businesses streamline and automate their processes, we are well-placed to be your partner in your journey to accelerated growth.
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

export default FoodAndBeverageSoftware;