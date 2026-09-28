import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DatabaseServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Database Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Increase the accessibility of your data with comprehensive database management services that include day-to-day maintenance and monitoring.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you struggling to find talented resources with your organization's database requirements? Is it becoming too expensive to have an in-house database solutions team? Then, it is time you outsource database services to an experienced third-party service provider. Outsourcing can give you ample time to concentrate on your core competencies and access highly skilled resources to handle database solutions.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a premier database service provider that offers a one-stop shop for all your offshore database requirements. Our highly talented and experienced team of software and database experts can help you with services like database management, database administration, database migration, and database design services.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Database Consulting Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We cater to the needs of clients from different industries and have the required capability to handle complex tasks and deliver results within a quick turnaround time. Our database solutions include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">DBaaS (Database-as-a-Service)</h4>
                                <p>
                                    Our services take care of everything from backups to periodic upgrades to ensure that your database remains secure and available 24/7. Our DBaaS (Database-as-a-Service) solutions offer significant financial, operational, and strategic benefits to your organization.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cloud Database Services</h4>
                                <p>
                                    We manage, migrate, and modernize cloud databases to improve agility. Our services test, validate, and operationalize new opportunities and business ideas.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Database Warehouse Services</h4>
                                <p>
                                    Our database warehouse services lead to data consistency, improve data quality, data security, and business intelligence. Reach out to us today to save time and costs and enhance ROI by up to 50%.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Database Migration Services</h4>
                                <p>
                                    Our team of database experts can help you migrate your existing database to any other database. We ensure we migrate all your data securely and keep the source database operational during the process, helping minimize the downtime of applications that depend on the source database.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Database Management Services</h4>
                                <p>
                                    We provide comprehensive database management services that include day-to-day maintenance and monitoring. It leaves your internal team enough time to concentrate on other innovative tasks. Our services help you with troubleshooting and monitoring.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Database Development Services</h4>
                                <p>
                                    Almost all businesses today depend on data provided by databases for all kinds of day-to-day operations. Having a stable database for your organization has become essential. Our team can provide you with quality database development services by seamlessly integrating it with your RDBMS (Relational Database Management Systems), be it Oracle, MS Access, Microsoft SQL Server, etc.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Database Design Services</h4>
                                <p>
                                    We have the required expertise to provide clients with high-quality database design services. We provide a secured, well-defined, and highly customized database design that perfectly suits client requirements.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Database Administration Services</h4>
                                <p>
                                    We consider database administration a strategic priority, as it lays the foundation for what your organization will achieve next. Our database administrators manage and protect your data and unleash its full potential.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Database Services Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            The Database Services Process We Follow
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our database solutions come with a transparent workflow that can be validated at every instant. Here is a snapshot of the process we follow:
                        </p>
                        <ul className="list-decimal list-inside space-y-4 text-gray-700">
                            <li>
                                <strong>Planning & Requirement Evaluation:</strong> We work side-by-side with your team to understand requirements and develop a detailed plan that is customized for your business.
                            </li>
                            <li>
                                <strong>Design Conceptualization:</strong> Once we understand your needs, our team will design a prototype for the proposal that will include an illustrative example of the final implementation.
                            </li>
                            <li>
                                <strong>Database Design:</strong> Inputs and modifications (if any) will be implemented after a detailed consultation with your team. The design will be optimized, and approval will be sought before development.
                            </li>
                            <li>
                                <strong>Database Implementation:</strong> The database services will commence depending on your budget capacity and the primary needs. The implementation will be completed in the stipulated time.
                            </li>
                            <li>
                                <strong>Maintenance:</strong> We will roll out routine updates as part of maintenance to ensure your database system stays consistent with the trending needs.
                            </li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Should You Pick Our Database Consulting Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a pioneer in providing quality database solutions to clients from different industry verticals. Outsourcing to us can give you access to the following benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Fast Turnaround Time:</strong> We can deliver the best services within a quick turnaround time without compromising on quality through our multiple delivery centers spread across time zones.</li>
                            <li><strong>Ease of Scalability:</strong> We are fully equipped with the bandwidth to scale up and scale down the service requirements as and when your business needs change.</li>
                            <li><strong>Single Point of Contact:</strong> When you outsource services to us, we assign a dedicated project manager who will be a single point of contact for all your queries and will keep you updated about the project status whenever you ask.</li>
                            <li><strong>Experienced Team:</strong> We have a team of highly experienced and skilled database experts, managers, and administrators who can handle even the most complex database tasks and deliver high-quality services.</li>
                            <li><strong>Best Infrastructure:</strong> We have access to state-of-the-art infrastructure in terms of uninterrupted network connections, world-class office spaces, and the latest database management tools and technologies.</li>
                            <li><strong>24/7 Availability:</strong> Our database experts, sales team, and call center agents are available 24/7 at your service to address all your issues and answer all your queries.</li>
                            <li><strong>Affordable Services:</strong> We provide our clients with highly flexible pricing options for our database solutions. You pay only for the services you opt for, the number of resources, and the time involved in the project.</li>
                            <li><strong>Information Security:</strong> We are an ISO 27001:2103 ISMS certified organization; we ensure that only authorized personnel have access to your information during database management, administration, and migration.</li>
                            <li><strong>Data Accuracy:</strong> We are an ISO-certified organization that ensures we deliver high-quality database design, development, migration, and management services to clients.</li>
                        </ul>
                    </div>

                    {/* Additional Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Additional Data Management Services for Business Enhancement
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">AWS Database Service</h4>
                                <p>Our services make it easy to operate, set up, and scale a relational database in the cloud.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Azure Database Service</h4>
                                <p>Our easy-to-use migration tools make it possible to shift to Azure with minimum downtime.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Oracle Database Service</h4>
                                <p>We provide a secure hybrid cloud environment that executes quick backup and recovery.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">IBM Database Services</h4>
                                <p>Our services include IBM cloud backup, block storage, file storage, mass data migration, and more.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Google Cloud Database</h4>
                                <p>We facilitate easy collaboration through remote access and unmatched security.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SQL Server Database</h4>
                                <p>Using SQL queries, we enable you to retrieve voluminous records from a database at an increased speed.</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Database Services to Strategize Your Business
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of quality database services and a series of other software development services to clients around the globe. We have been developing custom database service projects for over 26+ years and have gained enough experience to cater to global clients in 160+ countries. Our team comprises database experts and software developers who hail from the top institutes in the world. We understand the importance of data security and ensure that all your technical, financial, legal, and customer data is safe with us. For reliable, cost-effective, and efficient services, look no further.
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

export default DatabaseServices;