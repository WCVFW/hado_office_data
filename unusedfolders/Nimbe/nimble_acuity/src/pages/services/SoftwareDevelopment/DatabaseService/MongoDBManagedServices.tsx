import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const MongoDBManagedServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            MongoDB Managed Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Manage your database challenges while ensuring scalability, privacy, availability, and data compliance by outsourcing MongoDB managed services starting at $20 per hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Is managing your database becoming cumbersome? If your team is stretched to their limits, resulting in corner-cutting and compromised quality, it means your approach to MongoDB management isn't fine-tuned. This is where you need to think about outsourcing MongoDB managed services to experts like Nimble Acuity. What we do is take care of the heavy lifting to lessen the load off your backend team's shoulders. Does it enhance their productivity? Certainly! When you outsource MongoDB managed services, our professionals architect custom MongoDB managed solutions for specific challenges without causing downtime to your business.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a top MongoDB managed service provider that has served businesses of all sizes by managing and optimizing their MongoDB database on Microsoft Azure, Amazon Web Services, and so on.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            MongoDB Managed Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Nimble Acuity, we effectively address issues in MongoDB managed services by understanding the operating limits of businesses. Our expert methodologies and best MongoDB management practices ensure the epic performance of your backend. Our MongoDB managed solutions include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">MongoDB Database Sharding</h4>
                                <p>
                                    We offer sharding support where your database is broken down into smaller subsets and spread across multiple dashboards. We do this with deftness and precision to avoid disruption. Our team has many years of experience in database sharding and we do it on your chosen infrastructure.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">MongoDB Scaling and Query Analysis</h4>
                                <p>
                                    Maybe you are planning to scale your existing data. It requires time and effort to ensure the data mapping is complete without errors. This is completely taken care of by Nimble Acuity's team. We work as an extension of your team to complete scaling and query analysis so your team is free to focus on apps and other front-end roles.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">MongoDB Schema Design</h4>
                                <p>
                                    As a top MongoDB managed service provider, we offer schema design services where we perform delivery planning and execution. We design waterfall and agile models to streamline your database performance. This is in addition to performing change and risk management.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">MongoDB Architectural Consultation</h4>
                                <p>
                                    If you need advisory on driving strategic IT initiatives, roadmap development, optimization of the operating model, portfolio assessment, and more, just come to us and we'll make sure you receive the best MongoDB architectural consultation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            MongoDB Managed Implementation Process We Follow
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity has a highly streamlined process for MongoDB managed services that ensures all deliverables are as per the SLA. Our process is as follows:
                        </p>
                        <ul className="list-decimal list-inside space-y-4 text-gray-700">
                            <li>
                                <strong>Strategy and Proposal:</strong> We collaborate with the client to capture their business needs and understand challenges.
                            </li>
                            <li>
                                <strong>Solution Proposal:</strong> After determining the business need, we propose a solution that's suitable for their chosen budget.
                            </li>
                            <li>
                                <strong>MongoDB Managed Service:</strong> The MongoDB managed services are carried out by seasoned database professionals with years of experience.
                            </li>
                            <li>
                                <strong>Quality Check:</strong> As a top provider of MongoDB managed services, we ensure quality in each step to avoid missteps and complications.
                            </li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity For Outsourcing MongoDB Managed Services?
                        </h3>
                        <p className="text-700 leading-relaxed mb-6">
                            What makes Nimble Acuity one of the topmost MongoDB managed service providers? Here are some of our key differentiators:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective pricing:</strong> MongoDB managed services from Nimble Acuity have always been cost-effective solutions that help save money. You can customize your service needs and we'll offer you a cost-effective quote.</li>
                            <li><strong>High-quality Services:</strong> The quality of MongoDB managed services we offer has remained uncompromised. We always ensure our clients are highly satisfied.</li>
                            <li><strong>Rapid TAT:</strong> Our MongoDB managed services are provided by teams with rich experience and knowledge of the MongoDB framework.</li>
                            <li><strong>Scalable Solutions:</strong> The MongoDB managed solutions are scalable to your needs. If you need more resources, it can be done on the go.</li>
                            <li><strong>ISO Certified Provider:</strong> As a trusted provider of MongoDB managed services, we are an ISO 9001:2015 certified solutions provider because of our consistent success in ensuring quality, timeliness, and security.</li>
                            <li><strong>100% Data Security:</strong> The safety of your business data is ensured in each step and we do not share your data with third parties under any circumstances.</li>
                            <li><strong>Round-the-clock Support:</strong> We offer 24/7 support to help you with queries and other support from any geography.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource MongoDB Managed Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            At Nimble Acuity, we are well-managed in terms of teams, technologies, and infrastructure to follow the best MongoDB principles. We are recognized as a top provider of MongoDB Managed services by our clients because of our stringent practices and experience. From basic database consultation to advanced backend management and everything in between, we offer all types of MongoDB managed solutions. With over 26+ years of experience in database services, we have developed a healthy reputation as a top MongoDB managed services provider.
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

export default MongoDBManagedServices;