"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import DSmainmenu from "../DSmainmenu";

export default function DPOPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Nimble Data Protection Officer Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Strengthen your data security with our premier Data Protection Officer services. 
          Guarantee compliance and business protection. Contact us now for enhanced data 
          management solutions.
        </p>
        <Button size="lg" variant="secondary">
          Get a Free Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6 text-gray-700">
        <p>
          Complying with data protection laws and policies has its complexities, and without
          proper training, employees could unknowingly violate these regulations. The challenge
          is further compounded when businesses are expected to respond promptly to GDPR data
          subject rights, such as requests for data access, correction, and deletion.
        </p>
        <p>
          Our Data Protection Officer services provide a solution to these issues. We offer
          comprehensive training for your staff and ensure that data subject requests are
          handled in a timely and compliant manner. The benefits of deploying our services are
          profound: decreased risk of non-compliance, improved data security, and a fortified
          data protection framework.
        </p>
        <p>
          Explore our Data Protection Officer services today and experience the transformative
          impact of professional, tailored data management strategies on your business. Experience
          the difference of working with seasoned experts who understand the intricacies of
          data protection.
        </p>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Nimble Provided e-commerce Data Entry to Bike Accessories Seller
              </h3>
              <p>
                A well-known bike accessories company was looking for a partner who could help
                them with e-commerce data entry services and we were happy to provide
                cost-effective services to the client.
              </p>
              <Button variant="link" className="mt-2 p-0">Read more</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Nimble Provided Online Data Entry to Kansas-based Online Store
              </h3>
              <p>
                A client in Kansas was in need of an online data entry service provider. Nimble
                provided the client with the best quality services.
              </p>
              <Button variant="link" className="mt-2 p-0">Read more</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg text-gray-700">
          "Working with Nimble has been a great experience. They quickly learned our line of
          business, adapted to our requirements, and consistently performed well. They've also
          gone above and beyond their duty. They're reliable. A wonderful partner."
        </blockquote>
        <p className="mt-4 font-semibold">Spokesperson, Executive recruitment firm in the US</p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Data Protection Officer as a Service We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Data Formatting Services",
              points: [
                "Converting data into suitable formats",
                "Ensuring consistency and accuracy",
                "Eliminating redundant and duplicate data",
              ],
            },
            {
              title: "Internet Data Input Services",
              points: [
                "Online data entry and management",
                "Detecting errors in real-time",
                "Securing transmission and storage",
              ],
            },
            {
              title: "Data Licensing Services",
              points: [
                "Facilitating legal use of data",
                "Managing rights and permissions",
                "Ensuring compliance with laws",
              ],
            },
            {
              title: "Data Profiling Services",
              points: [
                "Analyzing for quality and consistency",
                "Identifying patterns and trends",
                "Enabling better decision-making",
              ],
            },
          ].map((service, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">{service.title}</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          DPO Services Process Flow We Follow
        </h2>
        <ol className="space-y-6">
          {[
            "Understanding the Organization's Data",
            "Assessing Compliance",
            "Developing Policies and Procedures",
            "Training and Awareness",
            "Monitoring Compliance and Liaising with Regulators",
            "Reporting",
          ].map((step, i) => (
            <li key={i} className="flex items-start space-x-4">
              <span className="text-blue-600 font-bold text-xl">{String(i + 1).padStart(2, "0")}.</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Reasons */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Reasons to Choose Nimble as Your DPO Partner
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            "Proven Success in GDPR Implementations",
            "Direct Access to a Diverse In-house Team",
            "Risk-Based Strategic Approach",
            "Customizable DPO Program",
            "Holistic Approach to Business Opportunities",
          ].map((reason, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">{reason}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Choose Nimble Auity for High-Quality Data Protection Officer Services
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Data protection is critically important for businesses nowadays. With Nimble Auity as your 
          partner, you gain proactive, strategic, and compliant DPO services that protect your business 
          from risks, enhance customer trust, and ensure long-term growth.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
