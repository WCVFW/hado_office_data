import React from 'react';
   import { Link } from "react-router-dom";
   import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

   const DetailedEngineeringDesign: React.FC = () => {
       return (
           <>
               <ESmainmenu />

               <section className="py-24 bg-white">
                   <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                       {/* Hero Section */}
                       <div className="max-w-4xl mb-12 pt-6">
                           <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                               Detailed Engineering Design Services
                           </h2>
                           <p className="text-lg text-gray-600">
                               Get access to accurate and error-free detailed engineering designs by outsourcing your needs to our skilled and experienced team of engineers.
                           </p>
                       </div>

                       {/* Introduction */}
                       <div className="max-w-5xl mb-16 space-y-4">
                           <p className="text-gray-700 leading-relaxed">
                               Is your company looking for highly accurate and superior quality detailed engineering designs for your business? Are you on the lookout for skilled and experienced mechanical engineers who can take care of all your needs? Then, the best option for you would be to outsource detailed engineering design services to a skilled and experienced service provider.
                           </p>
                           <p className="text-gray-700 leading-relaxed">
                               Nimble Acuity is a detailed engineering design service company that can cater to all your needs. We have some of the most experienced and skilled engineers who can deliver superior quality designs within a quick time. We leverage the latest design tools and software while delivering the best quality services.
                           </p>
                       </div>

                       {/* Our Services */}
                       <div className="max-w-6xl mb-16">
                           <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                               Detailed Engineering Design Services We Offer
                           </h3>
                           <p className="text-gray-700 leading-relaxed mb-6">
                               Nimble Acuity is one of the leading engineering design and drafting companies that has been catering to clients around the globe for over two decades. We have the skills to understand each client's unique requirements and provide them with customized services. Some of the key detailed design processes we can help you with include:
                           </p>
                           <ul className="list-disc list-inside space-y-2 text-gray-700">
                               <li>Preparing general arrangement drawings</li>
                               <li>Front-end engineering designs (FEED)</li>
                               <li>Datasheet preparation</li>
                               <li>Clarifications during contract finalization</li>
                               <li>Detailed manufacturing drawings</li>
                               <li>Bill of material preparation</li>
                               <li>Detailed design drawings and reports</li>
                               <li>Strength and heat load calculations</li>
                               <li>Duct support and fabrication drawings</li>
                               <li>Selection/design of equipment</li>
                               <li>Specifications of raw materials</li>
                               <li>Duct designs according to industry standards</li>
                               <li>Civil loading details for equipment</li>
                               <li>Material take-off</li>
                               <li>Purchase specifications for items</li>
                           </ul>
                       </div>

                       {/* Why Choose Us */}
                       <div className="max-w-6xl mb-16">
                           <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                               Why Choose Nimble Acuity for Detailed Engineering Design Services?
                           </h3>
                           <p className="text-gray-700 leading-relaxed mb-6">
                               Outsourcing detailed engineering design services to Nimble Acuity gives you access to a gamut of benefits. Some of the key reasons to choose us as your partner are:
                           </p>
                           <ul className="list-disc list-inside space-y-2 text-gray-700">
                               <li><strong>Affordable Pricing Plans:</strong> We provide our clients with highly affordable and flexible pricing options that will suit their budget and business requirements perfectly.</li>
                               <li><strong>Information Security:</strong> Being an ISO/IEC 27001:2022 ISMS certified firm, you can rest assured that all the data you share with us will be completely safe and secure.</li>
                               <li><strong>High-quality Services:</strong> We are an ISO-certified organization, which ensures that all the services delivered by our team will be of the best quality and completely error-free.</li>
                               <li><strong>State-of-the-art Infrastructure:</strong> We have access to the latest design software and tools along with world-class workspaces.</li>
                               <li><strong>Experienced Team:</strong> We have some of the most experienced and certified mechanical engineers on board who can cater to all your needs in a hassle-free manner.</li>
                               <li><strong>Dedicated Manager:</strong> We will assign a dedicated manager who will be the single point of contact for all your needs.</li>
                               <li><strong>Highly Scalable Services:</strong> Our team has the required skills and bandwidth to scale up the service requirements and team size as and when the client asks for it.</li>
                               <li><strong>Round the Clock Support:</strong> Our teams are available 24/7 via phone or email to resolve your queries.</li>
                               <li><strong>Short Turnaround Time:</strong> Our team operates through several delivery locations across the globe, enabling us to deliver the best quality services within a quick turnaround time.</li>
                           </ul>
                       </div>

                       {/* CTA */}
                       <div className="max-w-4xl mt-16">
                           <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                               Outsource Detailed Engineering Design Services to Nimble Acuity
                           </h3>
                           <p className="text-gray-700 mb-6">
                               Nimble Acuity has been a pioneer in providing top-quality detailed engineering design services and a plethora of other mechanical engineering services to global clients. We have some of the most skilled and talented engineers on board who can deliver high-quality services within a quick time. We leverage the latest tools and technologies while delivering the best quality services to clients.
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

   export default DetailedEngineeringDesign;