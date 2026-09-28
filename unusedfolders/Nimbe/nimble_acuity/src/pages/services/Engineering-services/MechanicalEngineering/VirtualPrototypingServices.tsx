import React from 'react';
   import { Link } from "react-router-dom";
   import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

   const VirtualPrototypingServices: React.FC = () => {
       return (
           <>
               <ESmainmenu />

               <section className="py-24 bg-white">
                   <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                       {/* Hero Section */}
                       <div className="max-w-4xl mb-12 pt-6">
                           <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                               Virtual Prototyping Services
                           </h2>
                           <p className="text-lg text-gray-600">
                               Leverage the power of a virtual prototype-based development approach with our team's error-free and superior quality services.
                           </p>
                       </div>

                       {/* Introduction */}
                       <div className="max-w-5xl mb-16 space-y-4">
                           <p className="text-gray-700 leading-relaxed">
                               Are you looking to deploy a virtual prototype-based development process for your business? Are you on the lookout for skilled and experienced virtual prototyping experts who can handle your needs? Then, the best option for you would be to outsource virtual prototyping services to an experienced and skilled provider.
                           </p>
                           <p className="text-gray-700 leading-relaxed">
                               Nimble Acuity is a virtual prototyping service company that can take care of all your project requirements. We have some of the most skilled and talented virtual prototyping specialists who can cater to all your needs with ease. We leverage the latest virtual prototyping software while delivering the best quality services.
                           </p>
                       </div>

                       {/* Our Services */}
                       <div className="max-w-6xl mb-16">
                           <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                               Virtual Prototyping Services We Offer
                           </h3>
                           <p className="text-gray-700 leading-relaxed mb-6">
                               Nimble Acuity is a leading provider of virtual prototyping services to clients around the world for over two decades. We understand each client's unique requirements and provide them with services that suit their business needs. Some of the key virtual prototyping solutions we offer include:
                           </p>
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Architecture Design Services</h4>
                                   <p className="leading-relaxed">
                                       Our team has the required skills and bandwidth to provide clients with accurate and error-free architecture design services for their prototyping needs. We can help with project planning, architecture model creation, traffic capture, simulation, and data analysis.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Model Creation Services</h4>
                                   <p className="leading-relaxed">
                                       We have some of the most experienced and skilled model creation experts who can help you with all your model creation needs within a quick time. We use the latest virtual prototyping software and deliver the best quality, error-free models for your project.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Full Virtual Prototype Creation</h4>
                                   <p className="leading-relaxed">
                                       We help clients with end-to-end full virtual prototype creation services. We take care of all your requirements, including designing, modeling, assembling, and delivering the virtual prototype to your teams. We customize the prototype to suit your needs within a short turnaround time.
                                   </p>
                               </div>
                           </div>
                       </div>

                       {/* Why Choose Us */}
                       <div className="max-w-6xl mb-16">
                           <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                               Why Choose Nimble Acuity for Virtual Prototyping Services?
                           </h3>
                           <p className="text-gray-700 leading-relaxed mb-6">
                               Outsourcing virtual prototyping services to us can give you access to a gamut of benefits. Some of the key reasons to choose us as your virtual prototyping service providing company are:
                           </p>
                           <ul className="list-disc list-inside space-y-2 text-gray-700">
                               <li><strong>Flexible Pricing Plans:</strong> We help our clients with highly cost-effective and flexible pricing options that will suit their business requirements and budget perfectly.</li>
                               <li><strong>Data Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified firm, ensuring that all the data you share with us will be completely secure.</li>
                               <li><strong>Superior Quality Services:</strong> Being an ISO-certified organization, you can rest assured that all the services delivered by us will be of the best quality and completely error-free.</li>
                               <li><strong>Best Infrastructure:</strong> We have access to the latest virtual prototyping tools and technologies along with world-class office spaces.</li>
                               <li><strong>Skilled Team:</strong> Our team comprises some of the most experienced and skilled virtual prototyping experts who can cater to all your requirements in a hassle-free manner.</li>
                               <li><strong>Single Point of Contact:</strong> When you choose to outsource to us, we will assign a dedicated manager to you.</li>
                               <li><strong>Easily Scalable Services:</strong> We have the required bandwidth and resources to scale up the service requirements and team size as and when the client asks for it.</li>
                               <li><strong>24/7 Support:</strong> Our teams are available 24/7 to answer your queries via phone or email.</li>
                               <li><strong>Quick Turnaround Time:</strong> We operate through several delivery locations across the globe, which allows us to deliver the best quality services within a quick time.</li>
                           </ul>
                       </div>

                       {/* CTA */}
                       <div className="max-w-4xl mt-16">
                           <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                               Outsource Virtual Prototyping Services to Nimble Acuity
                           </h3>
                           <p className="text-gray-700 mb-6">
                               Nimble Acuity has been a pioneer in providing top-quality virtual prototyping services. We have some of the most talented and skilled virtual prototyping experts on board who cater to all your needs efficiently. We leverage the latest virtual prototyping tools and technologies while delivering top-notch services to clients around the world.
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

   export default VirtualPrototypingServices;