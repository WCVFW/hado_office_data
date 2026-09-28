import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function BIM5DCostEstimation() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble BIM 5D Cost Estimation Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get realistic, reliable, and professional BIM 5D cost estimation for your construction projects at affordable rates.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Predicting construction costs accurately is vital for project success. Nimble Acuity offers expert BIM 5D cost estimation services to help reduce wastage, optimize budgets, and ensure timely project delivery. With over 26 years of experience, our team provides accurate, realistic, and efficient cost analysis for construction companies worldwide.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">BIM 5D Cost Estimation Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Bid Cost Estimation Services", desc: "Competitively estimate project costs based on location and project conditions to win tenders." },
            { title: "Project Risk Analysis Services", desc: "Analyze risks related to material cost changes and deadlines with detailed analytical reports." },
            { title: "Quantity Take-Off Estimation Services", desc: "Detailed breakdown of materials, labor, and machinery required for project completion." },
            { title: "Material Cost Escalation Services", desc: "Predict and adapt to potential material cost increases to ensure project timelines are met." },
            { title: "Cost-Loaded Scheduling Services", desc: "Sequence project activities based on resources and cost estimates to meet deadlines efficiently." }
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

      {/* BIM 5D Process Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">BIM 5D Cost Estimation Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          <li>
            <strong>Requirement Gathering:</strong> Our executives collect all necessary details using specific spreadsheets and documents to ensure precise estimation.
          </li>
          <li>
            <strong>Requirement Analysis, Quotations, and Resource Allocation:</strong> Analyze requirements, allocate resources, assign a point of contact, and provide quotations with milestones.
          </li>
          <li>
            <strong>Cost Estimation:</strong> Using the BIM 5D model and latest tools, our experts estimate project costs at any stage of the construction.
          </li>
          <li>
            <strong>Weekly Review:</strong> Dedicated project coordinator conducts weekly reviews to ensure accuracy and alignment.
          </li>
          <li>
            <strong>Estimation Delivery:</strong> All cost estimation reports and documents delivered within the agreed turnaround time.
          </li>
        </ol>
      </section>

      {/* Other Services Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["Revit Modeling Services", "Point Cloud Services", "Millwork Drawings Services", "Building Information Model"].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
              <p className="text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "World-Class Infrastructure",
            "High Quality and Accuracy",
            "Flexible Pricing",
            "Single Point of Contact",
            "Dedicated Team",
            "Quick Turnaround Time",
            "Data Security ISO/IEC 27001:2022 Certified",
            "24/7 Customer Support",
            "Scalable Services"
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="text-gray-700">{benefit}</p>
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
              <h3 className="text-xl font-semibold mb-2">Nimble Provided As-Built Drawings to US Architectural Firm</h3>
              <p className="text-gray-600">
                Worked across 230 sites with 11 members for two months to resolve client concerns and deliver accurate CAD models.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Nimble Provided Revit MEP Services to UK Engineering Consultants</h3>
              <p className="text-gray-600">
                Delivered efficient Revit MEP services, helping the client save significant time and resources.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “Hyde Engineering is very satisfied with Nimble's services. They met all deadlines and exceeded expectations in quality. A valuable part of our team.”
        </blockquote>
        <p className="mt-2 text-gray-600">— Spokesperson, Oil Exploration Company, US</p>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch with Nimble Acuity Today</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          For the most realistic BIM 5D cost estimation and MEP services, contact our experts and receive a free estimate.
        </p>
        <Button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
