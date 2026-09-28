import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SoftwareDevelopmentForISVs: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Software Development for ISVs
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our FTEs adhere to the deadlines and stringent quality requirements of independent software vendors with our exemplary software development expertise.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            As Independent Software Vendors (ISVs), you face distinctive challenges, with the key one being the ability to adhere to tight deadlines while delivering software that satisfies quality specifications. These challenges often hamper an ISV's ability to capture the market and even to keep the business running in the long term. At Nimble Acuity, we have created processes that help ISVs—whether they are start-ups or established businesses—to overcome these challenges.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With two decades of experience in software development, Nimble Acuity is ideally placed to offer its services to ISVs. We have delivered excellent software products to several independent software vendors, which has helped them meet their product development requirements. Our extensive domain and in-depth technical expertise, along with the implementation of industry best practices at every stage of development, enable us to provide you with the best services.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Software Development Services We Offer to ISVs
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            From ideation to implementation, we at Nimble Acuity provide end-to-end solutions, helping our ISV clients deliver superior quality software to their customers and adapt to dynamic market requirements. We follow modern agile development methods to ensure flawless products are delivered within the specified timeline.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Product Consulting</h4>
                                <p className="leading-relaxed">
                                    Our team has the expertise to provide consultation for developing products with a unique variation. We can help you create a roadmap, provide product engineering services from start to finish, and offer comprehensive product support.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Outsourced Product Development (OPD)</h4>
                                <p className="leading-relaxed">
                                    We help our ISV clients manage the entire product or specific sections of the development process. Our combination of technical expertise and the latest tools provides a distinct competitive advantage.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Product Enhancement & Maintenance</h4>
                                <p className="leading-relaxed">
                                    ISVs can leverage our expertise to add new functionalities and improve existing software products. Our maintenance and support services ensure the software stays bug-free, with regular updates to keep it relevant.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Product Migration and Porting</h4>
                                <p className="leading-relaxed">
                                    We have expertise in migration and porting, from changing platforms and OS to migrating to a new programming language. We ensure a seamless transition to the latest mobile and web platforms without compromising the original software's scope.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Product Testing Services</h4>
                                <p className="leading-relaxed">
                                    It is important to ensure that the software has no errors and functions smoothly. We specialize in an array of testing services, including security, functional, and performance testing, to ensure your software modules meet technical and business needs.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Product Engineering</h4>
                                <p className="leading-relaxed">
                                    We offer end-to-end product engineering services, from gap analysis and ideation to legacy conversion and system integration. We are also adept at product re-engineering, where we perform a complete redesign and modify the product's architecture.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Solution Architecture</h4>
                                <p className="leading-relaxed">
                                    To get the maximum ROI and finest business outcomes, ISVs can make use of our solution architecture services. We offer everything from architecture maturity evaluation and planning to building architecture prototypes based on industry best practices.
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
                            At Nimble Acuity, we have established a foolproof workflow process to ensure the success of your project. Our methods will ensure you know everything we do at every stage.
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Gathering Requirements:</strong> We gather customer requirements through detailed discussions, including market trends and competitor products.</li>
                            <li><strong>Roadmap Creation:</strong> We understand the scope of the project and prepare a roadmap for development.</li>
                            <li><strong>Budget & Deadline Estimation:</strong> We discuss how we can add value and provide an estimated budget and deadlines.</li>
                            <li><strong>Team Assignment:</strong> The project is assigned to an expert team with relevant experience, led by a senior manager.</li>
                            <li><strong>Development:</strong> The product development process gets underway.</li>
                            <li><strong>Extensive Testing:</strong> Extensive testing is conducted to identify and remove bugs.</li>
                            <li><strong>Final Delivery:</strong> Final testing ensures the smooth functioning of the product, followed by handover or deployment. Our team assists with implementation and integration with legacy systems.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Your ISV Needs?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            For over 26+ years, we have been developing and implementing high-octane software products for ISV customers. Here are the advantages you can enjoy:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>ISO Certified Provider:</strong> We are recognized for our quality services with international certifications like ISO.</li>
                            <li><strong>100% Data Security:</strong> We take data security seriously, with a complete risk management strategy and employees who are educated on software and cybersecurity.</li>
                            <li><strong>Scalable Engagement Models:</strong> Our services are cost-effective, and we can scale up or down the teams to suit your needs.</li>
                            <li><strong>Proven Expertise:</strong> Our professionals have a minimum of 10 years of expertise in software development and are innovative, excelling in drawing up thorough testing plans.</li>
                            <li><strong>Top-Notch Infrastructure:</strong> Nimble Acuity prides itself on access to the latest and most powerful technologies and tools, enabling us to craft high-octane software that performs perfectly.</li>
                            <li><strong>24/7 Support:</strong> Thanks to our global delivery centers, we can offer support to our customers round the clock.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Partner with Nimble Acuity for Your ISV Solutions
                        </h3>
                        <p className="text-gray-700 mb-6">
                            At Nimble Acuity, we have extensive experience helping ISVs across industries deliver different types of software. Our robust, well-rounded internal teams have assisted innumerable ISVs worldwide, freeing your in-house resources to concentrate on core tasks or innovative projects.
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

export default SoftwareDevelopmentForISVs;