import React from 'react';
   import { Link } from "react-router-dom";
   import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

   const ModularPlantDesign: React.FC = () => {
       return (
           <>
               <ESmainmenu />

               <section className="py-24 bg-white">
                   <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                       {/* Hero Section */}
                       <div className="max-w-4xl mb-12 pt-6">
                           <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                               Modular Plant Design Services
                           </h2>
                           <p className="text-lg text-gray-600">
                               Get access to streamlined workflow processes and ensure products are designed right the first time with our services.
                           </p>
                       </div>

                       {/* Introduction */}
                       <div className="max-w-5xl mb-16 space-y-4">
                           <p className="text-gray-700 leading-relaxed">
                               Are you looking to streamline your plant design processes and get the product designs right the first time? Are you on the lookout for skilled and experienced resources who can cater to all your needs? Then, the best option for you would be to outsource plant design services to a talented and skilled plant design service provider.
                           </p>
                           <p className="text-gray-700 leading-relaxed">
                               Nimble Acuity is a leading modular plant design service providing company that can take care of all your plant design needs. We have some of the most skilled resources who can leverage the power of the latest and best design tools to deliver the best quality services to clients.
                           </p>
                       </div>

                       {/* Our Services */}
                       <div className="max-w-6xl mb-16">
                           <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                               Modular Plant Design Services We Offer
                           </h3>
                           <p className="text-gray-700 leading-relaxed mb-6">
                               Nimble Acuity has been a leader in providing the best quality plant design services to customers around the world for over two decades. We have the required resources and skills to understand each customer's unique business needs and provide them with customized design solutions. Some of the key services we offer include:
                           </p>
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">P&ID Diagram Design Services</h4>
                                   <p className="leading-relaxed">
                                       Our team of engineers can help you quickly create piping and instrumentation designs for your plant. We ensure that all the designs meet industry and international guidelines. With the help of CAD, we can also help you create some of the most comprehensive 3D models for the process plant.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Piping Design Services</h4>
                                   <p className="leading-relaxed">
                                       Piping design is one of the key steps when it comes to solid edge plant design. We can help you with the design and automation of the construction and alteration of 3D pipe systems. Our team can help you check all the necessary parameters and use the information to create an error-free piping assembly.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Express Route Design Services</h4>
                                   <p className="leading-relaxed">
                                       Once the piping path is defined, a solid model of all the piping structures is created and a virtual mock-up is developed. Our team can help you define and alter the attributes of the structure and automatically position the fittings and components.
                                   </p>
                               </div>
                           </div>
                       </div>

                       {/* Why Choose Us */}
                       <div className="max-w-6xl mb-16">
                           <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                               Why Choose Nimble Acuity for Plant Design Services?
                           </h3>
                           <p className="text-gray-700 leading-relaxed mb-6">
                               Outsourcing modular plant design services to Nimble Acuity can give you access to a series of benefits that you can take advantage of. Some of the key factors for you to choose us as your design service providing company are listed here:
                           </p>
                           <ul className="list-disc list-inside space-y-2 text-gray-700">
                               <li><strong>Affordable Pricing Options:</strong> We help our customers with flexible and affordable pricing options which will suit their business requirements and budget perfectly.</li>
                               <li><strong>World-class Infrastructure:</strong> We know the importance of having great infrastructure and have access to world-class workspaces and the latest design tools and software.</li>
                               <li><strong>Superior Quality Services:</strong> We are an ISO-certified organization. This ensures that all the design services delivered by our team will be of the best quality and error-free.</li>
                               <li><strong>Information Security:</strong> Being an ISMS-certified firm, you can rest assured that all the data you share with us will be completely safe and secure at all times.</li>
                               <li><strong>Experienced Team:</strong> Our team comprises some of the most talented and skilled designers who can cater to all your design requirements with ease.</li>
                               <li><strong>Highly Scalable Services:</strong> We have the required resources, bandwidth, and skills to scale up the service requirements and team size as and when the client asks for it.</li>
                               <li><strong>Dedicated Manager:</strong> When you partner with us for design services, we will assign a dedicated manager to you. This manager will be the single point of contact for all your queries and issues.</li>
                               <li><strong>Short Turnaround Time:</strong> We operate through different delivery centers across the globe. This allows us to deliver the best quality services within a quick time.</li>
                               <li><strong>Round the Clock Support:</strong> Our teams including project management, sales, marketing, and customer support are available 24/7 to answer your queries and resolve any issues that you may have.</li>
                           </ul>
                       </div>

                       {/* CTA */}
                       <div className="max-w-4xl mt-16">
                           <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                               Outsource Modular Plant Design Services to Nimble Acuity
                           </h3>
                           <p className="text-gray-700 mb-6">
                               Nimble Acuity is one of the leading providers of modular plant design services and a series of other mechanical engineering services to clients around the world. We leverage the power of the latest and best design software and technologies while delivering superior quality services. We have some of the most experienced designers on our team who can cater to all your needs with ease.
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

   export default ModularPlantDesign;