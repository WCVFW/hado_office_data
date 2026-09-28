import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function BIMQuantityEstimation() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble BIM Quantity Estimation Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Leverage BIM for material estimation to avoid inflated expenses. Services start at $11/hour.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Planning construction costs can be tedious. Nimble Acuity’s team of certified civil engineers provides accurate BIM quantity estimation, structural planning, and invoicing for construction materials. Save time, reduce errors, and manage multiple projects seamlessly.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">BIM Quantity Estimation Services We Offer</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Billing Support with BIM",
              desc: "Our engineers use BIM to create accurate quantity take-offs and cost estimations. Transparent billing eliminates errors and helps stakeholders understand cost impacts of proposed changes."
            },
            {
              title: "Bar Bending Schedule with BIM",
              desc: "We manage bar bending schedules for structural reinforcements, linked with 3D rebar models. Perfect for large RCC projects to save time and reduce material waste."
            },
            {
              title: "Cost Analysis with BIM",
              desc: "Our BIM models integrate with databases and spreadsheets to provide itemized cost reports, allowing contractors and building owners to make informed budgetary decisions."
            },
            {
              title: "Bill of Material",
              desc: "We generate detailed bills of materials (BOM) from 3D models, including complex steel or RCC structures, to facilitate cost-effective and efficient procurement."
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
        <h2 className="text-3xl font-bold text-center mb-10">BIM Quantity Estimation Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          <li>Nimble Acuity specialists discuss project needs and goals with the client.</li>
          <li>Task roles are delegated to licensed PE and civil engineers based on expertise and cultural fit.</li>
          <li>Clients are notified of estimated costs, turnaround times, and other relevant details.</li>
          <li>Quality control experts maintain constant liaison to ensure project objectives are met.</li>
          <li>Project completed ahead of schedule, with stakeholder-specific reports provided.</li>
        </ol>
      </section>

      {/* Related Services Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-gray-700">
          {[
            "HVAC Design and Drafting Services",
            "Lidar Mapping Services",
            "GIS Surveying Services",
            "Drainage Design Services"
          ].map((service, idx) => (
            <Card key={idx} className="p-6 rounded-xl shadow hover:shadow-md transition text-gray-700">
              <CardContent>{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nimble BIM Quantity Estimation?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "High-quality services that align with client expectations",
            "Affordable rates with customizable service options",
            "Top-notch infrastructure supporting complex BIM requirements",
            "ISO 9001:2015 certified for quality and ISO/IEC 27001:2022 compliant for data security",
            "Quick turnaround times and scalable service options",
            "Professional engineers, architects, and project managers with 6+ years experience",
            "Dedicated SPOC for project liaison and round-the-clock support"
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
              <h3 className="text-xl font-semibold mb-2">UK-based Engineering Consultants</h3>
              <p className="text-gray-600">
                Provided Revit MEP services accurately and efficiently, delivering results within tight deadlines.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">US-based Interior Design Company</h3>
              <p className="text-gray-600">
                Handled AutoCAD conversion services for multiple projects, earning high praise from the client for accuracy and timeliness.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-green-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “Nimble Acuity has been a tremendous resource for our engineering department. They are precise, attentive, and quickly adapted to our procedures.”
        </blockquote>
        <p className="mt-2 text-gray-600">— General Partner, Manufacturing Company, US</p>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble BIM Quantity Estimation</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Save time and money by letting Nimble handle your BIM quantity take-offs. Contact us to customize a plan for your project.
        </p>
        <Button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
