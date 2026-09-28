import React from 'react';
   import { Link } from "react-router-dom";
   import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

   const PrototypingAndRapidPrototyping: React.FC = () => {
       return (
           <>
               <ESmainmenu />

               <section className="py-24 bg-white">
                   <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                       {/* Hero Section */}
                       <div className="max-w-4xl mb-12 pt-6">
                           <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                               Prototyping and Rapid Prototyping Services
                           </h2>
                           <p className="text-lg text-gray-600">
                               Nimble Acuity helps manufacturers bring ideas to life with its prototyping and rapid prototyping services, ensuring you reach the market faster with quality products.
                           </p>
                       </div>

                       {/* Introduction */}
                       <div className="max-w-5xl mb-16 space-y-4">
                           <p className="text-gray-700 leading-relaxed">
                               Acknowledging the harsh competition in the market, it's crucial to reach the market sooner than before. Nimble Acuity enables manufacturers to bring out quality products at just the right time. At Nimble Acuity, our skilled mechanical engineers create rapid prototypes of various products, ideas, and concepts using high-end technologies like Polyjet 3D printing, Stereolithography printing (SLA), Selective Laser Sintering (SLS), and high-speed CNC machining. Our rapid prototyping services offer high-precision models, design iterations, and flexible timelines to help our clients create a realistic, functionally sound prototype.
                           </p>
                           <p className="text-gray-700 leading-relaxed">
                               Our decades-long experience in 3D modeling and drafting allows us to assist clients with choosing the appropriate technology and material to ensure inclusion of essential features in the prototypes. Through Etching, 3D Printing, and other additive layer manufacturing software, our team takes up prototype design and CAD environment simulation assignments of varied complexities and delivers the best.
                           </p>
                       </div>

                       {/* Our Services */}
                       <div className="max-w-6xl mb-16">
                           <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                               Rapid Prototyping Services Offered by Nimble Acuity
                           </h3>
                           <p className="text-700 leading-relaxed mb-6">
                               Assisting our clients to innovate quickly and gain an edge over their competition, Nimble Acuity works closely with you to understand the requirement, market conditions, and cost factors to ensure the prototype design proves to be good for use in the first design itself. Our rapid prototyping services include:
                           </p>
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Stereolithography (SLA Prototyping)</h4>
                                   <p className="leading-relaxed">
                                       We use stereolithography to create complex and intricate parts of a prototype that look closer to a finished product with fully functional features. This is the latest and most popular trend in rapid prototyping.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Selective Laser Sintering (SLS) Prototyping</h4>
                                   <p className="leading-relaxed">
                                       At Nimble Acuity, we also use SLS to create parts by using layers of thin polymer powder. We walk our clients through the prototype creation process for all complex requirements.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Polyjet 3D Printing</h4>
                                   <p className="leading-relaxed">
                                       Our mechanical engineers use Polyjet 3D printing to provide a superior quality finished prototype.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">3D CAD Modeling</h4>
                                   <p className="leading-relaxed">
                                       Nimble Acuity offers CAD modeling expertise to provide a high-class prototype at a considerably short turnaround time.
                                   </p>
                               </div>
                           </div>
                       </div>

                       {/* Our Process */}
                       <div className="max-w-6xl mb-16">
                           <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                               Rapid Prototyping Process We Follow
                           </h3>
                           <p className="text-gray-700 leading-relaxed mb-6">
                               To offer the best business benefits to our clients, we adhere to a streamlined and systematic process for our rapid prototyping services.
                           </p>
                           <ul className="list-decimal list-inside space-y-2 text-gray-700">
                               <li><strong>Requirement Analysis:</strong> We analyze the project scope, finalize timelines, and allocate resources.</li>
                               <li><strong>Create Prototype:</strong> We create a CAD model, convert it to an STL file, and use it to build the physical model before finishing it.</li>
                               <li><strong>Quality Check:</strong> The prototype undergoes functional testing and requires client approval.</li>
                               <li><strong>Final Delivery:</strong> Upon client approval, we deliver the final product and close the project.</li>
                           </ul>
                       </div>

                       {/* Why Choose Us */}
                       <div className="max-w-6xl mb-16">
                           <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                               Benefits of Outsourcing to Nimble Acuity
                           </h3>
                           <p className="text-gray-700 leading-relaxed mb-6">
                               It's proven that rapid prototyping can significantly reduce design costs. If you lack in-house staff, Nimble Acuity works as an extension of your existing team and helps you design well-designed smart prototypes within a short span of time. Our services help you create prototypes that can work as a proof of concept for a new product or one that inherits the functionality of an existing product.
                           </p>
                           <ul className="list-disc list-inside space-y-2 text-gray-700">
                               <li><strong>One-Stop Service Provisioning:</strong> We are a full-service rapid prototyping provider with a wide range of technologies.</li>
                               <li><strong>Short Turnaround Time:</strong> We offer customized rapid prototyping services based on your existing standards to ensure a short turnaround time and reduced cost.</li>
                               <li><strong>High Accuracy:</strong> Our rigorous application of quality processes ensures that drafting, modeling, conversion, and tolerancing errors are detected at multiple levels of QC before delivery.</li>
                               <li><strong>High-Quality Finishing:</strong> We use proven methodologies at various stages to ensure the accuracy and quality of the finished prototype.</li>
                           </ul>
                       </div>

                       {/* CTA */}
                       <div className="max-w-4xl mt-16">
                           <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                               Outsource Prototyping and Rapid Prototyping to Nimble Acuity
                           </h3>
                           <p className="text-gray-700 mb-6">
                               At Nimble Acuity, we work as a team and build long-term relationships through our superior quality rapid prototyping services. If you are looking for a partner with the capability to understand your design ideas, outsourcing to Nimble Acuity is the answer. Tell us more about your business and needs and let our experts help you out.
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

   export default PrototypingAndRapidPrototyping;