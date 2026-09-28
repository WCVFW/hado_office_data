import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SoftwareDevelopmentForIndustries: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Software Development for Industries
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get access to high-quality, reliable, and cost-effective software development services irrespective of which industry you belong to.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking for efficient and effective software development services such as programming, testing, designing, planning, and bug-fixing for your specific industry vertical? Do you want to increase your productivity and efficiency by outsourcing your software development to a reliable and professional partner? Has your business grown beyond what your existing software can support? If so, you are at the right place.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity provides professional and reliable software development solutions for various industries, with over two decades of experience in delivering state-of-the-art software. We offer a complete range of services, from concept to code, with expertise in handling many different types of projects for clients across a wide variety of industry verticals.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Software Development Services We Offer for Various Industries
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity provides a complete range of software development services for all industry verticals. Whatever your industry and software development requirements, we can help.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom Software Development</h4>
                                <p className="leading-relaxed">
                                    We provide custom software development for a wide variety of industries, including insurance, banking, media, e-commerce, and travel. We have extensive experience in building medical and biometric applications, SQL server and MySQL database programming, Java, and web applications, among other solutions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Mobile App Development</h4>
                                <p className="leading-relaxed">
                                    Mobile app development is one of our key service offerings. We have a lot of experience and expertise in developing and deploying mobile apps for phones, wearables, and tablets using programming languages such as Swift, HTML5, and Ionic.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Software Development Consulting</h4>
                                <p className="leading-relaxed">
                                    Our experts provide a complete range of strategic consulting services on every facet of your application development process, from pre-project planning and defining scope to creating staffing plans and implementing tools.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">IT Staffing</h4>
                                <p className="leading-relaxed">
                                    We provide professional IT staffing and staff augmentation services for clients across the world, sourcing qualified and experienced personnel such as Java developers, .Net developers, and mobile app developers for long-term, short-term, or contract work.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Existing Software Maintenance and Upgradation</h4>
                                <p className="leading-relaxed">
                                    Our team of software development specialists are adept at helping you upgrade your existing software to meet changing business requirements. Our services include data migration, cloud migration, and comprehensive migration support.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Legacy Software Transformation</h4>
                                <p className="leading-relaxed">
                                    Legacy software modernization and upgradation is more than just an update. Our specialists provide a range of services related to legacy software transformation and modernization, including legacy systems migration, cloud migration, and ongoing maintenance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Industries We Serve */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Industries Our Software Development Services Cater To
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our software development services cater to almost every industry. You are sure to find value in our services, no matter your sector.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <ul className="list-disc list-inside">
                                    <li>Aerospace</li>
                                    <li>Customs Brokerage</li>
                                    <li>Education</li>
                                    <li>Banking and Financial</li>
                                    <li>Travel and Hospitality</li>
                                    <li>Healthcare</li>
                                    <li>Automotive</li>
                                    <li>Media and Entertainment</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <ul className="list-disc list-inside">
                                    <li>Recruitment Management</li>
                                    <li>Food and Beverage</li>
                                    <li>Consumer Goods</li>
                                    <li>Publishing and Advertising</li>
                                    <li>Agriculture</li>
                                    <li>Real Estate</li>
                                    <li>Manufacturing</li>
                                    <li>Retail</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <ul className="list-disc list-inside">
                                    <li>eCommerce</li>
                                    <li>Engineering</li>
                                    <li>IT & ITES</li>
                                    <li>Pharmaceuticals</li>
                                    <li>Telecommunications</li>
                                    <li>Gems and Jewelry</li>
                                    <li>Steel</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Partner with Nimble Acuity for Your Software Development Needs
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a pioneer in providing quality software development services to clients worldwide from a wide variety of industries. Our services are flexible and agile enough to meet your every need. If you are looking for a reliable, professional, and cost-effective software development service provider, get in touch with us today!
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

export default SoftwareDevelopmentForIndustries;