import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

const ReportAutomationServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Nimble Report Automation Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Nimble report automation services to Nimble Acuity for high-quality outcomes and intelligence that you can depend on. <span className="font-semibold text-blue-600">Prices start at $14/hour</span>.
        </p>
        <div className="mt-6">
          <Button size="lg">Get in Touch</Button>
        </div>
      </section>

      {/* Why Report Automation */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Why Automate Reports?
          </h2>
          <p className="text-gray-600 mb-4">
            Manual reporting often results in errors, delayed deliveries, and high costs due to maintaining a full team. Report automation eliminates these problems, delivering accurate, up-to-date reports from multiple sources in one place.
          </p>
          <p className="text-gray-600">
            With automation, you spend less time collecting data and more time analyzing it for business growth.
          </p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6">
          <ul className="space-y-3 text-gray-700">
            <li>✔ Save time & reduce manual errors</li>
            <li>✔ Access real-time accurate reports</li>
            <li>✔ Integrate data from multiple sources</li>
            <li>✔ Boost decision-making efficiency</li>
          </ul>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Report Automation Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Report Development",
              desc: "Get all your data in one place – from sales analysis to schedules – without tedious manual maintenance.",
            },
            {
              title: "Report Automation",
              desc: "Automate delivery with scheduling, email reports, and error-free data collection.",
            },
            {
              title: "Mobile Reports",
              desc: "Access reports on the go from your mobile device to keep processes fast and seamless.",
            },
            {
              title: "Reports for Data Visualization",
              desc: "Turn complex data into dashboards with intuitive visuals for faster decisions.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Flexible Pricing",
            "Well-established Infrastructure",
            "Stringent Quality Checks",
            "Latest Technology",
            "Global Delivery Centers",
            "Streamlined Workflow Management",
            "Scalability",
            "Quick Turnaround Time",
            "24/7 Availability",
          ].map((point, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-gray-700 mb-2">{point}</h3>
              <p className="text-gray-600 text-sm">
                We deliver efficient, reliable, and secure solutions tailored to your business needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies & Testimonials */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Company Profiling for Investment Firm</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Delivered high-quality company profiling services for a Texas-based private investment firm.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Business Families Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Provided family business profiling to a global wealth management firm, enabling better decision-making.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Ready to Automate Your Reports?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Contact us today to Nimble report automation services at pocket-friendly prices and transform your reporting workflow.
        </p>
        <Button size="lg">Contact Us</Button>
      </section>
    </div>
  );
};

export default ReportAutomationServices;
