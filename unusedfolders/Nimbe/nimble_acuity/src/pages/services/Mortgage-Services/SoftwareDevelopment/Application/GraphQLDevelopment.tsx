import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const GraphQLDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">
                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            GraphQL Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get high-quality web and mobile APIs developed by certified GraphQL developers using the best frameworks. Prices start at $2200 for a minimum of 160 hours.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            GraphQL is a modern architectural approach that helps in developing futuristic APIs. It has streamlined communication between client apps and backend systems, making it a favorite technology among API developers. If you're looking for an API solution to enhance your business and returns, partner with **Nimble Acuity** today!
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            As a leading **GraphQL development service** provider, we use this technology for rapid prototyping of future-ready APIs. Our key differentiators include easy scaling, efficient data sharing, and a shorter time to deployment. Work with us to get top-notch APIs developed within your budget.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our GraphQL Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To build a digital product with cutting-edge features, you need talent from a technological hub. **Nimble Acuity** offers a full range of GraphQL web development services, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>API Design & Architecture:</strong> We offer end-to-end planning, from design and development to testing and delivery of high-quality, enterprise-level applications.</li>
                            <li><strong>Data Integration:</strong> We handle the complete integration process, using a GraphQL gateway to control data from your business systems in the cloud via API scripts.</li>
                            <li><strong>Automated APIs:</strong> We can create high-quality and scalable GraphQL APIs in real-time to suit your specific applications.</li>
                            <li><strong>Type-Safe API Contracts:</strong> We develop type-safe APIs that ensure superior application performance without contract issues.</li>
                            <li><strong>XML/JavaScript/REST-Based APIs:</strong> We provide a wide range of API customization options to enhance your business productivity.</li>
                            <li><strong>API Testing:</strong> Our dedicated testing team runs extensive tests on your GraphQL APIs to ensure they are ready to run on most platforms and devices without a hitch.</li>
                        </ul>
                    </div>

                    {/* Our Approach */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our GraphQL Development Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We follow a streamlined, transparent 5-step process to ensure a smooth development cycle:
                        </p>
                        <ol className="list-decimal list-inside space-y-4 text-gray-700">
                            <li><strong>Strategy and Proposal:</strong> We begin with a detailed discussion to understand your business requirements and challenges.</li>
                            <li><strong>Designing Solutions:</strong> We then determine the most suitable solution to address your specific needs.</li>
                            <li><strong>Client Approval:</strong> Upon your approval of the solution, we commence development according to the project plan.</li>
                            <li><strong>Development and Testing:</strong> Our teams get to work, completing the development and then extensively testing the modules.</li>
                            <li><strong>Quality Check:</strong> We run extensive quality checks throughout the project lifecycle to verify that all steps are correct and adhere to our protocols.</li>
                        </ol>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for GraphQL?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            What makes us a top **GraphQL development service** provider? Here are some of our key differentiators:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Cost-Effective Pricing:</strong> Our pricing is highly competitive and customizable to fit your specific needs.</li>
                            <li><strong>High-Quality Services:</strong> We go to great lengths to ensure you receive top-quality service that meets and exceeds industry standards.</li>
                            <li><strong>Rapid Turnaround:</strong> We are committed to delivering great services within a short timeframe, with one of the fastest turnaround times in the industry.</li>
                            <li><strong>Scalable Solutions:</strong> Our large team and advanced infrastructure allow us to scale our services to handle growing project demands.</li>
                            <li><strong>ISO Certified:</strong> We are an ISO 9001:2015 certified company, ensuring our processes and services meet a high standard of quality.</li>
                            <li><strong>100% Data Security:</strong> We have a robust security infrastructure in place to protect your data and ensure confidentiality.</li>
                            <li><strong>Round-the-Clock Support:</strong> Our support team is available 24/7 via phone, email, and web chat to assist you whenever you need us.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Develop Your API?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            **Nimble Acuity** has a reputation for combining robust infrastructure, advanced technologies, and competent teams to deliver world-class **GraphQL development services**. With over 26 years of experience in various software technologies, we pride ourselves on being a top GraphQL development service provider.
                        </p>
                        <p className="text-gray-700 mb-8 font-medium">
                            To learn more about our GraphQL development services and get a quick quote, get in touch with us now.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Contact Us Today
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GraphQLDevelopment;