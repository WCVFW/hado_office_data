import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const EducationSoftwareDevelopment: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Education Software Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Impart education in a contemporary way by developing custom e-learning software solutions at an affordable price!
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            The education sector is a people-focused industry that syncs rapidly with modern learning methodologies. To survive and evolve in today's cutthroat educational industry, you must adopt new methodologies that keep up with technological shifts.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading provider of education software development services with over a decade of experience in the field. We have a gamut of programmers, solution architects, analysts, developers, designers, and coders who can create solutions to transform the way you impart education. With our services, you can empower instructors, administrators, and students with useful, state-of-the-art tools.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Education Software Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We develop e-learning software solutions that help you with academic schedules, attendance management, library management, and content management. We can provide a plethora of other services for your educational institute, such as:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Learning Management System</h4>
                                <p className="leading-relaxed">
                                    We develop complete operational solutions for learning management, including content management, reporting tools, course management, and performance evaluation.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Educational Website</h4>
                                <p className="leading-relaxed">
                                    With over 10 years of expertise, we create advanced e-learning websites and portals using technologies like jQuery, HTML 5, Java, and Angular.js to support class management, course curriculum, and newsfeeds.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Web-Based Training Software</h4>
                                <p className="leading-relaxed">
                                    We can build portals for conducting online training sessions, webinars, and one-on-one courses. We can consolidate custom features like eCommerce and content management systems to reflect your brand.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Course Design & Development</h4>
                                <p className="leading-relaxed">
                                    Our software developers can design and develop your institute's course content, incorporating video, voice, graphics, and animated quizzes to create engaging educational materials.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Integrated Student Information System</h4>
                                <p className="leading-relaxed">
                                    We develop a customized student information system with features like AI and predictive analytics to create a centralized repository for student access and communication, which can also be integrated with other educational software.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">School Management Software</h4>
                                <p className="leading-relaxed">
                                    We develop school management software that enables your institute to streamline its operations by bringing multiple school events together and integrating them with communication channels for easy sharing.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Education Software Development Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            When you outsource education software development to us, we follow a validated and streamlined process to ensure your project's success.
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Requirement Gathering:</strong> We define the core objective of your website, establish goals, and determine product feasibility.</li>
                            <li><strong>Design Preparation:</strong> We begin by building a sitemap and a wireframe, which we share with you for confirmation before designing the final layout.</li>
                            <li><strong>Coding:</strong> Our developers bring your product idea to life by writing the code and integrating it with your chosen server.</li>
                            <li><strong>Testing:</strong> We test the website with our set of unit codes to find any bugs or performance issues, including a complete validation of forms, functionality, and compatibility.</li>
                            <li><strong>Deployment:</strong> We launch the website for internal testing. Once the desired outcome is achieved, we deliver it to you with all necessary documentation.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity has domain expertise in education software development, and we customize our solutions to meet your specific needs. Here are a few benefits of outsourcing to us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective:</strong> Our software developers can minimize development costs while providing robust software at a competitive rate.</li>
                            <li><strong>100% Data Security:</strong> Our ISO/IEC 27001:2022 certification demonstrates our commitment to safeguarding all your data.</li>
                            <li><strong>Modern Infrastructure:</strong> Our workstations and delivery centers have ultra-modern infrastructure and the latest tools for design, coding, and testing.</li>
                            <li><strong>Expert Team:</strong> We handpick our experts who can leverage modern data architecture to create simple and complex education software with 100% transparency at each stage.</li>
                            <li><strong>Quality Standards:</strong> All our software goes through a stringent testing process, adhering to international coding standards to ensure it performs to your expectations.</li>
                            <li><strong>Faster TAT:</strong> We have an agile process that allows us to boost the speed of our turnarounds, so you can go to market faster.</li>
                            <li><strong>Scalability:</strong> Our development process is well-tuned to scale up your requirements, eliminating unnecessary investments on your part.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Partner with Nimble Acuity to Enhance Education
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is one of the leading providers of education software development services. Our developers and designers work to assure higher scalability and flexibility for your educational software, delivering quality solutions at reasonable rates. Get in touch with us today to leverage the power of education software that evolves with your institute and lays the groundwork for long-term success.
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

export default EducationSoftwareDevelopment;