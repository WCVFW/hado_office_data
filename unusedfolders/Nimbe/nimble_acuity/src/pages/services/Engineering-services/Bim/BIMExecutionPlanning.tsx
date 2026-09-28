import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function BIMExecutionPlanning() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble BIM Execution Planning Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Starting at $12/hour, hire the best BIM execution planning specialists to make your project a success.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Stop wasting time and money hiring FTEs. Nimble Acuity provides experienced BIM execution planning professionals who design robust project plans to meet your goals efficiently.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">BIM Execution Planning Services We Offer</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Creating Action Plan With BIM",
              desc: "Develop a detailed action plan covering BIM usage, information-sharing policies, items to be modeled, and technology requirements."
            },
            {
              title: "Information Requirement with BIM",
              desc: "Capture software and BIM role details before the project begins. Create a BEP to ensure swift realization of BIM benefits."
            },
            {
              title: "BIM Execution Planning Across Enterprise",
              desc: "Custom BIM execution planning for contractors, business owners, and project consultants to streamline workflows."
            }
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our BIM Execution Planning Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          <li>Nimble Acuity specialists collaborate with clients to understand project needs and goals.</li>
          <li>Tasks are assigned to professionals based on qualification and cultural fit.</li>
          <li>Estimated TAT, costs, and project details are communicated after evaluation.</li>
          <li>Quality control experts liaise with the project team to ensure compliance and quality.</li>
          <li>Projects are delivered ahead of schedule with reports for all stakeholders.</li>
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble BIM Execution Planning?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "High-quality execution plans with multi-tier quality checks",
            "Affordable, customizable services",
            "Robust infrastructure with top-tier software and hardware",
            "ISO 9001:2015 certified provider",
            "100% data security compliant with ISO/IEC 27001:2015",
            "Quick turnaround time for tight schedules",
            "Scalable services to meet evolving project requirements",
            "Dedicated SPOC for project updates and queries",
            "Professional engineers, architects, and design specialists with 6+ years of experience",
            "Round-the-clock support via email, phone, or webchat"
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-gray-700">
              {benefit}
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Revit MEP Services for UK Engineering Consultants</h3>
              <p className="text-gray-600">
                Delivered high-quality Revit MEP models on time for engineering consultants in the United Kingdom.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">AutoCAD Conversion for Interior Design Client</h3>
              <p className="text-gray-600">
                Provided accurate AutoCAD conversions for a US-based interior design firm with exceptional client satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-purple-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “Nimble Acuity has been a tremendous resource for our engineering department. They are precise, attentive, and quick to learn our procedures.”
        </blockquote>
        <p className="mt-2 text-gray-600">— General Partner, Manufacturing Company, US</p>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble BIM Execution Planning</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Share your requirements and customize BIM execution planning services at nominal rates.
        </p>
        <Button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
