import React from 'react';
   import { Link } from "react-router-dom";
   import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

   const PlantDesignEngineering: React.FC = () => {
       return (
           <>
               <ESmainmenu />

               <section className="py-24 bg-white">
                   <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                       {/* Hero Section */}
                       <div className="max-w-4xl mb-12 pt-6">
                           <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                               Plant Design Engineering Services
                           </h2>
                           <p className="text-lg text-gray-600">
                               Get access to meticulous and precise design engineering services for optimum operational efficiency.
                           </p>
                       </div>

                       {/* Introduction */}
                       <div className="max-w-5xl mb-16 space-y-4">
                           <p className="text-gray-700 leading-relaxed">
                               Nimble Acuity has over two decades of experience in providing outstanding plant design engineering services (PDMS services) to clients all over the world. We specialize in multi-discipline design engineering services such as design engineering concept and process, plant piping and layout, plant electrical, and plant instrumentation disciplines.
                           </p>
                           <p className="text-gray-700 leading-relaxed">
                               We specialize in providing quality services at a lower cost. Also, we have a proven track record of handing over your plant to you on time. Be it an end-to-end EPCM project or the meticulous design of the whole or a part of your project, we leverage our experience in designing numerous plants to deliver the best design services.
                           </p>
                       </div>

                       {/* Our Services */}
                       <div className="max-w-6xl mb-16">
                           <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                               Plant Design Engineering Services We Offer
                           </h3>
                           <p className="text-gray-700 leading-relaxed mb-6">
                               We provide a range of plant design engineering solutions. Some of these include:
                           </p>
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Concept Development Services</h4>
                                   <p className="leading-relaxed">
                                       We assist our clients in identifying the right project delivery methodology. This includes end-to-end concept development and a detailed execution plan. We provide specific inputs on customization and parts that can be modularized.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Feasibility Studies</h4>
                                   <p className="leading-relaxed">
                                       We carry out a detailed study to assist you with understanding the project viability and feasibility of the technological solution. Our studies will help you identify challenges, opportunities, costs, and risks.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Basic Design Engineering Services</h4>
                                   <p className="leading-relaxed">
                                       Our basic and extended engineering services ensure constructability to meet all sorts of plant component requirements. Our design engineering services cover all disciplines of plant requirements.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Detail Engineering Services</h4>
                                   <p className="leading-relaxed">
                                       We provide detailed engineering services across all disciplines. When the basic engineering is done, we put the plans into practice by specifying all the equipment and structures in detail to install, construct, and operate the plant.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Electrical Engineering Instrumentation Design Services</h4>
                                   <p className="leading-relaxed">
                                       With this service, we take care of the electrical network protection of your plant. Our clients rely on us to ensure efficient energy utilization and get complete control and monitoring of electrical engineering requirements.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Safety Engineering</h4>
                                   <p className="leading-relaxed">
                                       Our engineering services also take care of all plant safety requirements. This accounts for both fire and other safety protection. We provide this service only after acquiring expert knowledge of specific safety regulations, legal requirements, and local safety standards.
                                   </p>
                               </div>
                           </div>
                       </div>

                       {/* Why Choose Us */}
                       <div className="max-w-6xl mb-16">
                           <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                               Benefits of Outsourcing Plant Design Engineering Services
                           </h3>
                           <p className="text-gray-700 leading-relaxed mb-6">
                               Outsourcing design engineering services offers a host of benefits. When you outsource to us, we guarantee the following:
                           </p>
                           <ul className="list-disc list-inside space-y-2 text-gray-700">
                               <li><strong>Cost-Effective Solutions:</strong> We guarantee quality design services at the most competitive pricing. We have our locations in countries where quality resources are available at cost-effective pricing, and we pass on this benefit to our clients.</li>
                               <li><strong>Expert Resources:</strong> Outsourcing gives you access to the best resources in design engineering. Our resources have established technical expertise in designing to accurate specifications for all sorts of domains.</li>
                               <li><strong>Cutting-Edge Design and Simulation Tools:</strong> Outsourcing helps you leverage advanced software and 3D modeling applications. We leverage advanced tools to help you adhere to industry codes and standards.</li>
                               <li><strong>Global Footprint:</strong> When you outsource plant design engineering services, you get access to experts from around the world. As a multinational company, we have a partnership with over 200 plant design engineers and agencies.</li>
                           </ul>
                       </div>

                       {/* CTA */}
                       <div className="max-w-4xl mt-16">
                           <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                               Outsource Plant Design Engineering Services to Nimble Acuity
                           </h3>
                           <p className="text-gray-700 mb-6">
                               Nimble Acuity's design engineering services are driven by expert resources. Our clients rely on their experience and knowledge to design services for quick plant set-ups as well as plant ramp-ups and ramp-downs. We provide our resources with well-defined operating models and tools to help them accomplish all tasks accurately and within deadlines. We also make these services available at cost-effective prices.
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

   export default PlantDesignEngineering;