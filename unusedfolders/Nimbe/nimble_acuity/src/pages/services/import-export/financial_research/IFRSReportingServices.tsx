import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function IFRSReportingServices() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
        <NavigationMenu/>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nimble IFRS Reporting Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Get access to compliant reports and reduce your capital costs by
          choosing our team's error-free International Financial Reporting
          Standards (IFRS) services. <span className="font-semibold">Prices start at $14/hour</span>
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-gray-600 mb-12 space-y-4">
        <p>
          Looking for professional International Financial Reporting Standards
          (IFRS) services? We offer you an opportunity to reduce your capital
          costs. Avail our services to maintain compliance with the latest
          international financial reporting standards in the industry.
        </p>
        <p>
          Nimble Acuity is one such IFRS reporting service providing company
          that can cater to all your requirements with ease. We have some of the
          most skilled resources that can provide you with customized services.
          We leverage the latest tools and technologies while delivering
          top-notch services to clients.
        </p>
      </div>

      {/* Services */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        IFRS Reporting Services We Offer
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: "IFRS Standards Adoption Services",
            desc: "We help clients implement IFRS standards within existing protocols and resolve issues during the process."
          },
          {
            title: "IFRS Statement Preparation",
            desc: "Our experts ensure financial statements remain consistent and IFRS-compliant."
          },
          {
            title: "IFRS Report Management",
            desc: "We optimize report filing, streamline accounting info, and ensure compliance."
          },
          {
            title: "Policy Restructuring & Training",
            desc: "We restructure accounting systems and provide team training for smooth transitions."
          }
        ].map((service, idx) => (
          <Card key={idx} className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Other Services */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Other Services You Can Benefit From
      </h2>
      <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-700 font-medium mb-12">
        <li>Corporate Finance Support</li>
        <li>Asset Management Support</li>
        <li>Business Valuation Services</li>
        <li>Investment Research Services</li>
      </ul>

      {/* Why Choose */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Why Nimble IFRS Services to Nimble Acuity?
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "Flexible Pricing Packages",
            desc: "Customized options starting at $14/hour."
          },
          {
            title: "State-of-the-art Infrastructure",
            desc: "Compliant with global standards, leveraging latest tools."
          },
          {
            title: "Information Security",
            desc: "ISO/IEC 27001:2022 ISMS certified with strict data safety."
          },
          {
            title: "Superior Quality Services",
            desc: "100% accurate services by global accounting experts."
          },
          {
            title: "Experienced Team",
            desc: "Dedicated project manager with 24/7 availability."
          }
        ].map((benefit, idx) => (
          <Card key={idx} className="rounded-2xl border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Success Stories */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Client Success Stories
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">
              Secondary Research for a Swiss Hospitality Company
            </h3>
            <p className="text-gray-600 text-sm">
              A leading Swiss hospitality company required secondary research.
              We delivered exceptional results within tight deadlines.
            </p>
            <Button variant="link" className="text-blue-600 mt-3 px-0">
              Read more
            </Button>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">
              Primary Research Services to Top Chinese Trade Consultants
            </h3>
            <p className="text-gray-600 text-sm">
              We provided cost-effective primary research services to enhance
              client efficiency and delivery.
            </p>
            <Button variant="link" className="text-blue-600 mt-3 px-0">
              Read more
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 p-8 rounded-2xl mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Testimonials
        </h2>
        <blockquote className="text-gray-700 italic">
          “The services that Nimble Acuity provided helped us achieve
          substantial cost and time savings on several difficult projects.”
        </blockquote>
        <p className="mt-2 text-sm text-gray-600">
          — Senior Vice President, Automotive & Transportation Industry Solutions
          Group
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble IFRS Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Nimble Acuity is a leading provider of IFRS services in India. With
          18000+ happy clients and 10+ global delivery centers, we help you save
          time, cut costs up to 60%, and get reliable reporting services.
        </p>
        <Button size="lg" className="rounded-full px-8">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
