import { motion } from "framer-motion";
import { CheckCircle, FileText, BarChart3, Users, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function CompanyProfilingReports() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nimble Company Profiling and Industry Reports Services
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Gain powerful insights into your enterprise, customers, competitors,
          and market position with Nimble Acuity’s expert company profiling
          and industry report services.
        </motion.p>
        <Button size="lg" variant="secondary">
          Get a Free Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Your Proficient Research Partner</h2>
        <p className="text-lg leading-relaxed mb-6">
          Nimble Acuity works as a proficient research partner to help you
          gauge enterprise strength while providing critical insights on
          customers, competition, market positioning, and business credibility.
          With two decades of expertise, we deliver advanced company profiling
          and industry reports based on foresight-driven research rather than
          hindsight.
        </p>
        <p className="text-lg leading-relaxed">
          Our analysts evaluate your company structure, financials, articles,
          SEC filings, and other important data to deliver actionable reports
          that help you plan ahead and stay competitive.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Company Profiling & Industry Reports We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Background and Introduction",
            "Executive Synopsis & Business Status",
            "Organizational Structure & Key Facts",
            "Financial Performance & Ownership",
            "Executive Board & Biographies",
            "Chief Executive’s Address",
            "Key Competitors by Product Segments",
            "Stock Market Performance",
            "Media Monitoring",
            "Market Position",
            "Recent Financial Highlights",
            "Business Operations & Global Alliances",
            "Strategic Position",
            "Advancements in Technology & Products",
            "OEM Details",
            "Product Categories & Industry Solutions",
            "Competitive Landscape & Profiling",
            "Advanced R&D and SWOT Analysis",
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03, duration: 0.6 }}
            >
              <Card className="shadow-md hover:shadow-lg transition rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg">{service}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          6 Benefits of Outsourcing Company Profiling & Industry Reports
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            "Popularize your brand, strengthen customer relationships, and generate leads cost-effectively",
            "Flexibility to choose message and media channels with multi-message support",
            "Build trust with customers, increase loyalty, and boost profits",
            "Full control over research methods and media used",
            "Stay updated with the latest market trends to address audience needs",
            "Profiles created using global research practices & international quality standards",
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Acuity?
        </h2>
        <ul className="space-y-4 max-w-4xl mx-auto text-lg">
          <li>✅ Insights to promote your brand and generate leads cost-effectively</li>
          <li>✅ Flexibility to choose preferred media channels with full control</li>
          <li>✅ Industry reports that build trust and customer loyalty</li>
          <li>✅ Skilled resources to craft multi-message company profiles</li>
          <li>✅ Regular updates on the latest market trends</li>
          <li>✅ Adherence to international research standards and best practices</li>
        </ul>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Case Studies of Our Company Profiling Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Ecolab Profiling",
              desc: "Comprehensive profiling helped identify growth opportunities and market positioning.",
            },
            {
              title: "Vanguard Group Profiling",
              desc: "Delivered in-depth competitor insights and strategic recommendations.",
            },
          ].map((caseStudy, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{caseStudy.title}</h3>
                <p className="text-gray-700">{caseStudy.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Nimble Company Profiling & Industry Reports to Us
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          With skilled analysts and multiple delivery centers, we provide
          accurate and cost-effective company profiling services to help you
          stay ahead of the competition.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
