import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function SurveyProgrammingServices() {
  return (
    <div className="p-8 space-y-10">
      {/* Header */}
      <NavigationMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-purple-700">
          Nimble Survey Programming Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Get help with critical data gathering and building custom questionnaires with our 
          survey programming services at prices starting at just <span className="font-semibold">$14/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto space-y-4 text-gray-700">
        <p>
          Is your company struggling to gather critical data and develop customized questionnaires for decision making? 
          Are you unable to find the right set of resources who can handle your survey programming service requirements? 
          Then, the best option for your firm would be to Nimble survey programming services to an experienced provider.
        </p>
        <p>
          Nimble Acuity is one such survey programming company that can be your one-stop-shop for all your needs. 
          Our skilled and experienced survey programming experts leverage the latest tools and technologies to 
          deliver top-notch services.
        </p>
      </section>

      {/* Services Offered */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-purple-700 text-center">
          Survey Programming Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Survey Design",
              desc: "Accurate survey design services tailored to meet unique business requirements.",
            },
            {
              title: "Survey Website Hosting",
              desc: "Reliable and high-quality survey hosting using the latest tools and tech.",
            },
            {
              title: "Quality Assurance Services",
              desc: "Thorough QA processes ensure accurate and error-free surveys.",
            },
            {
              title: "Database Support Services",
              desc: "Expert handling of database support needs with precision and security.",
            },
            {
              title: "Online & Real-Time Monitoring",
              desc: "Continuous monitoring for surveys to ensure efficient and reliable results.",
            },
          ].map((service, index) => (
            <Card key={index} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-purple-700 text-center">
          Why Choose Nimble Acuity for Survey Programming Services?
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 max-w-4xl mx-auto list-disc pl-5">
          <li>Affordable & flexible pricing options</li>
          <li>ISO/IEC 27001:2022 ISMS certified for data security</li>
          <li>Talented and experienced survey programming team</li>
          <li>ISO certified for superior quality services</li>
          <li>Access to modern infrastructure and tools</li>
          <li>Dedicated single point of contact (SPOC)</li>
          <li>Easily scalable services as per client needs</li>
          <li>Quick turnaround with global delivery centers</li>
          <li>24/7 project management & customer support</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-purple-700 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Secondary Research for a Swiss Hospitality Company",
              desc: "Delivered reliable secondary research within a quick turnaround time.",
            },
            {
              title: "Updating KOL List for American Healthcare Firm",
              desc: "Provided cost-effective support to update & manage healthcare compliance data.",
            },
          ].map((story, index) => (
            <Card key={index} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">{story.title}</h3>
                <p className="text-gray-600">{story.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-purple-700">
          Nimble Survey Programming Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          With 26+ years of experience, Nimble Acuity delivers scalable, secure, and high-quality survey programming services 
          that empower businesses to gather insights and make data-driven decisions. 
          Get in touch with us today to explore how we can help your business.
        </p>
        <Button className="bg-purple-700 hover:bg-purple-800 text-white rounded-2xl px-6 py-3">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
