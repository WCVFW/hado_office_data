import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ActiveDirectory: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Active Directory Setup and Migration Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Secure your critical business information in a central location with our quick and efficient Active Directory services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Connecting all the standalone machines in your business network with a single database system is highly recommended. This is possible with the help of a **Microsoft Active Directory setup**. If you don't have one, **Active Directory migration** can help you save critical business information in one location. Our services help companies consolidate and store business data in a central repository, especially on small networks where it is difficult to locate files. Since most companies can't perform these services in-house without a surge in costs, outsourcing your requirements to a service provider like **Nimble Acuity** is an effective solution. We provide quick and efficient Active Directory migration services to companies worldwide.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Active Directory Setup & Migration Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our Active Directory services provide authentication and authorization mechanisms, as well as a framework for other related services. We can help you centralize the settings for different users and computers across your enterprise. Once you partner with us, our professionals will ensure that a maximum amount of information is transferred from your current Active Directory to the destination, accelerating the migration process. We provide the following services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Evaluation:</strong> We carry out a thorough analysis to understand your migration requirements and recommend the best course of action to secure your digital data from unauthorized access.</li>
                            <li><strong>Pre-installation Planning:</strong> We will plan, identify, and deploy templates before installing Active Directory, enabling a seamless setup and migration.</li>
                            <li><strong>Deployment:</strong> We follow all the necessary steps for migration, ensuring an error-free, on-time, and secure deployment of your new setup.</li>
                            <li><strong>Post-Deployment Support:</strong> We use the latest methodologies and tools to fix any bugs that may appear after we have successfully completed the migration.</li>
                        </ul>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Active Directory Setup & Migration Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our professionals understand that Active Directory works by treating everything it tracks as an object, which can share similar attributes. We have a set process in place to provide successful services, which includes:
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                            <li>Analyzing the existing Active Directory domain or domains.</li>
                            <li>Optimizing the existing environment for migration.</li>
                            <li>Conducting workshops to discuss and plan the migration to the new setup.</li>
                            <li>Defining the migration plan and identifying the tools to be used.</li>
                            <li>Preparing a plan for test and pilot migrations.</li>
                            <li>Executing test migrations with test systems and pilot migrations with productive systems.</li>
                            <li>Analyzing the results of the pilot migration.</li>
                            <li>Executing required adaptations based on the analysis results.</li>
                            <li>Rolling out the migration and removing the migration tool once complete.</li>
                        </ol>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We help you minimize the risk of restructuring your Active Directory and streamline your migration process, ensuring users have secure access to resources. We can help you manage and overcome issues like disruption to business operations, complex project procedures, and limited budgets. Additionally, our services come with these key features:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Flexible and Affordable Pricing:</strong> Our pricing model is based on the scope of your requirements, so you only pay for the customized services you receive.</li>
                            <li><strong>Uncompromised Project Quality:</strong> We perform complete due diligence on quality. Our project managers ensure they are in full control and keep you updated at regular intervals.</li>
                            <li><strong>Strategically Located Delivery Centers:</strong> Our delivery centers across different time zones ensure timely service delivery.</li>
                            <li><strong>Quick Turnaround Time:</strong> We respect your time and understand the importance of a quick migration. Our team is trained to complete projects efficiently while maintaining high quality.</li>
                            <li><strong>Stringent Data Security:</strong> We handle your business data with the utmost care, following strict security measures and maintaining confidentiality at all times.</li>
                            <li><strong>Technology Focused:</strong> We use the latest technology, tools, and methodologies to manage your entire project, ensuring there is no compromise on timelines or quality.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Streamline Your Network?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading outsourcing company offering top-quality Active Directory setup and migration services to global clients. With extensive experience, our professionals are well-versed in handling complex projects. We also provide a range of other services, including data center services, remote monitoring, and IT help desk support.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Contact Our Experts
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ActiveDirectory;