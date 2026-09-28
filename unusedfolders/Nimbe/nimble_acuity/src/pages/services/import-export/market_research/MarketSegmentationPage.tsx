import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Target, Globe, Brain, Activity } from "lucide-react"
import { motion } from "framer-motion"
import NavigationMenu from "../MegaMenu"

export default function MarketSegmentationPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
    <NavigationMenu/>
      
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Nimble Market Segmentation Analysis Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Maximize ROI by effectively segmenting your client base and targeting them better —
          starting at just <span className="font-semibold">$14/hour</span>.
        </p>
        <Button size="lg" className="rounded-2xl shadow-lg">Contact Us</Button>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Why Market Segmentation Matters</h2>
        <p className="text-gray-700 leading-relaxed">
          Building loyalty means making clients feel valued. Market segmentation allows you to
          divide your large client base into smaller, well-defined categories, ensuring your
          marketing is impactful and relevant. With 26+ years of expertise, Nimble Acuity
          provides 360-degree analysis to help you understand, retain, and grow your clients.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Market Segmentation Analysis Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, title: "Demographic Segmentation", desc: "Analysis by gender, age, income, ethnicity, location, etc." },
            { icon: Globe, title: "Geographic Segmentation", desc: "Targeting by city, state, country, or location radius." },
            { icon: Brain, title: "Psychographic Segmentation", desc: "Insights into interests, values, lifestyle, motivations, and attitudes." },
            { icon: Activity, title: "Behavioral Segmentation", desc: "Buying patterns, brand interactions, and spending habits." }
          ].map((item, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Market Segmentation Analysis</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {[
            "Target clients with impactful, tailored messages.",
            "Leverage the most effective marketing tactics.",
            "Run hyper-targeted ads across multiple parameters.",
            "Differentiate your business from competitors.",
            "Deliver exactly what customers need and expect.",
            "Identify and tap into niche market opportunities."
          ].map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Cost-effective services tailored to your budget.",
            "100% data security with strict confidentiality.",
            "Experienced team of global professionals.",
            "Cutting-edge infrastructure and tools.",
            "Quick turnaround times without quality loss.",
            "24/7 support with a dedicated project manager."
          ].map((point, idx) => (
            <Card key={idx} className="rounded-2xl shadow">
              <CardContent className="p-6">
                <p className="text-gray-700">{point}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Primary Research for Chinese Trade Consultants
              </h3>
              <p className="text-gray-600">
                Delivered accurate primary research services for trade advisors in Shanghai.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Research for Digital Transformation Company
              </h3>
              <p className="text-gray-600">
                Provided primary & secondary research support to an Ohio-based tech leader.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto italic text-lg">
          "We are highly impressed with the meticulous details with which you are conducting your audits."
        </blockquote>
        <p className="mt-4 font-semibold">— VP, Leading STM Publisher, USA</p>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Segment Your Market Effectively?</h2>
        <p className="text-gray-600 mb-6">
          Contact us today for ISO-certified market segmentation analysis services at affordable rates.
        </p>
        <Button size="lg" className="rounded-2xl shadow-lg">Get Started</Button>
      </section>
    </div>
  )
}
