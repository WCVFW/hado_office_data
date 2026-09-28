import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, FileText, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import NavigationMenu from "../MegaMenu";

export default function SyndicatedResearchReports() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20">
      {/* Hero Section */}
      <NavigationMenu/>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nimble Syndicated Research Reports Services
        </h1>
        <p className="text-lg text-gray-600">
          Gain a comprehensive understanding of specific markets or technologies with
          highly detailed, secure, and GDPR-compliant reports that keep you ahead of
          the competition.
        </p>
      </motion.div>

      {/* Services Offered */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Information Analysis",
            desc: "Leverage customer surveys, field reports, and available intelligence to build impactful insights.",
            icon: <BookOpen className="h-10 w-10 text-indigo-600" />,
          },
          {
            title: "Data Collection",
            desc: "Specialized data mining and extraction tailored to your requirements using the latest tools.",
            icon: <FileText className="h-10 w-10 text-indigo-600" />,
          },
          {
            title: "Reports Design",
            desc: "Presentable, engaging reports perfect for stakeholders and investor presentations.",
            icon: <Users className="h-10 w-10 text-indigo-600" />,
          },
          {
            title: "Report Writing",
            desc: "Skilled writers ensure clarity, structure, and actionable insights in every report.",
            icon: <Globe className="h-10 w-10 text-indigo-600" />,
          },
        ].map((service, i) => (
          <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg transition">
            <CardHeader className="flex flex-col items-center text-center">
              {service.icon}
              <CardTitle className="mt-3 text-xl font-semibold">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Sample Reports */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Ready-to-Purchase Syndicated Reports
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Artificial Intelligence in Healthcare Market",
              pages: "150 Pages",
              price: "$3,350",
            },
            {
              title: "Global Industrial Robotics Market",
              pages: "121 Pages",
              price: "$3,350",
            },
            {
              title: "Blockchain Technology Market",
              pages: "104 Pages",
              price: "$3,350",
            },
          ].map((report, i) => (
            <Card
              key={i}
              className="rounded-2xl shadow-md flex flex-col justify-between"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {report.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-2">{report.pages}</p>
                <p className="font-bold text-indigo-600 mb-4">{report.price}</p>
                <div className="flex space-x-2">
                  <Button className="w-full">Get a Quote</Button>
                  <Button variant="outline" className="w-full">
                    Request Customization
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Why Nimble Syndicated Research Reports to Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Top-notch Infrastructure",
            "Flexible Costing",
            "Superior Quality",
            "Experienced Team",
            "Global Delivery Model",
            "Exceptional Data Security Measures",
            "Dedicated Project Managers",
            "24/7 Support",
            "Ease of Scalability",
          ].map((benefit, i) => (
            <div key={i} className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <p className="text-gray-700 text-sm">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Looking for reliable and cost-effective syndicated research reports?
        </h3>
        <Button size="lg" className="px-8 py-3 text-lg">
          Contact Us Today
        </Button>
      </div>
    </div>
  );
}
