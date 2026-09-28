import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

const CallCenterChallenges: React.FC = () => {
  return (
    <div className="px-6 md:px-20 py-12 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-6">
          Strategies for Overcoming Call Center Challenges and Securing Success
        </h1>
        <p className="text-lg leading-relaxed text-gray-600">
          Ever pondered what silently fuels the engine of today’s dynamic businesses? 
          Innovative products, strategic marketing, and decisive leadership all play a role — 
          but uncompromising customer service lies at the core.
        </p>
      </div>

      {/* Section: Introduction */}
      <Card className="mb-10 shadow-lg">
        <CardContent className="p-6 md:p-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Decoding the Imperative of Addressing Call Center Challenges
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            High-caliber contact center services are not just integral, they are the axis 
            around which successful businesses revolve. The vitality they inject into customer 
            relationships dynamically shapes a brand’s image and influence in the market.
          </p>
          <p className="text-gray-600 leading-relaxed">
            In today’s competitive landscape, call centers balance business growth with customer 
            demand for impeccable service. However, poor routing, long wait times, and insufficient 
            training can erode satisfaction, emphasizing the need for proactive solutions.
          </p>
        </CardContent>
      </Card>

      {/* Section: Challenges & Solutions */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-red-600">Key Challenges</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Manual Process Overdependence leading to inefficiency</li>
              <li>Routing Challenges frustrating customers with repeated transfers</li>
              <li>Lack of performance insights hiding areas for improvement</li>
              <li>Customer satisfaction decline due to outdated systems</li>
              <li>Escalating operational costs without optimized resources</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-green-600">Strategic Solutions</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Embrace automation with AI & robotic process automation</li>
              <li>Implement smart routing for quick agent assignment</li>
              <li>Leverage analytics for performance monitoring</li>
              <li>Use CRM systems to strengthen satisfaction & loyalty</li>
              <li>Adopt virtual call centers for cost-effective innovation</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Section: Why Call Center Services */}
      <Card className="mb-10 shadow-lg">
        <CardContent className="p-6 md:p-10">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700">Why Do You Need Call Center Services?</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="data-security">
              <AccordionTrigger>Data Security</AccordionTrigger>
              <AccordionContent>
                Call centers like Nimble Auity act as guardians of data privacy with strict compliance, encryption, and non-disclosure agreements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tech">
              <AccordionTrigger>Cutting-edge Technology</AccordionTrigger>
              <AccordionContent>
                From AI-driven bots to smart routing algorithms, technology ensures efficient and personalized interactions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="linguistic">
              <AccordionTrigger>Bridging Linguistic Gaps</AccordionTrigger>
              <AccordionContent>
                Multilingual agents enable businesses to engage globally with empathy and ease.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost">
              <AccordionTrigger>Cost Efficiency</AccordionTrigger>
              <AccordionContent>
                Nimble services empower small and large businesses alike with high-quality support at lower operational costs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="focus">
              <AccordionTrigger>Concentrated Business Focus</AccordionTrigger>
              <AccordionContent>
                Nimble services allow businesses to focus on core strategy while experts handle customer interactions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support">
              <AccordionTrigger>Around-the-Clock Support</AccordionTrigger>
              <AccordionContent>
                24/7 availability ensures global reach, customer satisfaction, and loyalty.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Section: Service Spectrum */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          The Call Center Service Spectrum: Beyond Conventional Boundaries
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Inbound Call Center Services", desc: "Efficiently handle inquiries & foster loyalty." },
            { title: "Virtual Assistant Services", desc: "Provide admin support & optimize operations." },
            { title: "Technical Support", desc: "Address hardware/software issues with minimal disruption." },
            { title: "Email Support Services", desc: "Deliver comprehensive responses to customer queries." },
            { title: "Live Chat Support", desc: "Enable real-time conversations & enhance engagement." },
            { title: "Cold Calling Services", desc: "Proactively generate leads and expand customer base." }
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Section: Conclusion */}
      <Card className="mb-12 shadow-lg">
        <CardContent className="p-6 md:p-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Conclusion</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Call centers are more than service hubs; they are vital to customer loyalty and competitive edge. 
            Facing challenges with effective strategies like advanced technology and Nimble outsourcing converts potential setbacks into growth opportunities.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Leveraging BPO call center services not only meets expectations but exceeds them, creating lasting satisfaction and loyalty.
          </p>
        </CardContent>
      </Card>

      {/* Section: Additional Services */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Additional Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Outbound Call Center Services", desc: "Auto-dialing & CRM systems for personalized interactions." },
            { title: "Telemarketing Services", desc: "Predictive dialing & analytics to improve conversions." },
            { title: "Technical Support Services", desc: "AI-powered chatbots & robust ticketing ensure swift resolution." },
            { title: "Lead Generation Services", desc: "AI-driven data mining and CRM integration boost sales pipelines." }
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Knowledge Shared by Our Specialists
        </h2>
        <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
          Talk to Our Experts
        </Button>
      </div>
    </div>
  );
};

export default CallCenterChallenges;
