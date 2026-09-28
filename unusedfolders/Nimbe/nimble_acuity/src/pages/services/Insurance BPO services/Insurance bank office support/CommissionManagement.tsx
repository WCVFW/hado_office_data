import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Imainmenu from "../Imainmenu";

export default function CommissionManagement() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Insurance Commission Management Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Gain complete transparency, automation, and control over your commission
          management process with Nimble Acuity’s expert solutions.
        </p>
        <Button size="lg" className="bg-white text-blue-900 font-semibold">
          Get Started Today
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Insurance Commission Management Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Application Maintenance", "Commission Management Enhancements", "Commission Accounting", "Producer Commission Payable", "Commission Entry Services", "Document Management", "Production Report Generation"].map(
            (service, idx) => (
              <Card key={idx} className="shadow-md">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-medium mb-2">{service}</h3>
                  <p className="text-gray-600 text-sm">
                    Efficient, reliable, and tailored to streamline your commission processes.
                  </p>
                </CardContent>
              </Card>
            )
          )}
        </div>
        <div className="text-center mt-8">
          <Button size="lg" className="bg-blue-900 text-white">
            Try 1 Week Free Trial
          </Button>
        </div>
      </section>

      {/* Software Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Software We Leverage
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-700 mb-6">
          We ensure accuracy and efficiency by leveraging industry-leading platforms
          such as <strong>Bitrix24, CommissionTrac, CommissionsEZ, EvolveSPM, GoalPost, GreenWave, Iconixx, Incentive SPM, inLOGIC.ca</strong>.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Flexible Pricing",
            "Stringent Data Security (ISO 27001:2022 ISMS Certified)",
            "Quick Turnaround with Global Delivery Centers",
            "Experienced Insurance Software Experts",
            "High-quality, Error-free Services",
            "Scalable Solutions",
            "Dedicated Project Managers",
            "24/7 Availability",
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle className="text-blue-900 w-6 h-6" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-2">
                US-based Insurance Agency
              </h3>
              <p className="text-gray-600 text-sm">
                Nimble Acuity maintained insurance accounts with speed and accuracy, ensuring
                compliance and efficiency.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-2">
                Miami-based Insurance Firm
              </h3>
              <p className="text-gray-600 text-sm">
                We streamlined back-office operations and reduced costs significantly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Transform Your Commission Management with Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          With 26+ years of proven expertise, we deliver secure, scalable, and
          cost-effective commission management solutions. Let’s connect today!
        </p>
        <Button size="lg" className="bg-white text-blue-900 font-semibold">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
