import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Globe, Activity, HeartPulse, Layers3, Building2 } from "lucide-react"
import { motion } from "framer-motion"
import NavigationMenu from "../MegaMenu"

export default function HealthcareMarketSegmentationPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
        <NavigationMenu/>

      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Nimble Healthcare Market Segmentation Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Find niche healthcare audiences segmented by age, gender, location, lifestyle, and habits —
          and serve high-converting digital ads starting at just <span className="font-semibold">$14/hour</span>.
        </p>
        <Button size="lg" className="rounded-2xl shadow-lg">Get Started</Button>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Reach Your Healthcare Audience Effectively</h2>
        <p className="text-gray-700 leading-relaxed">
          Healthcare market segmentation, if done right, helps you identify where your audience is concentrated
          and what efforts are needed to engage them before competitors do. At Nimble Acuity, we leverage over
          two decades of experience to create bespoke segmentation strategies that drive awareness, loyalty, and conversions.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Healthcare Market Segmentation Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "Demographic Segmentation", desc: "Analysis by age, gender, income, and media behavior to identify high-potential leads." },
            { icon: Globe, title: "Geographic Segmentation", desc: "Mapping healthcare demand across regions to shape location-based strategies." },
            { icon: Activity, title: "Attitudinal Segmentation", desc: "Studying lifestyle, interests, and buyer sentiments to optimize messaging." },
            { icon: HeartPulse, title: "Product Usage Segmentation", desc: "Analyzing product usage patterns to capture switching and unmet needs." },
            { icon: Layers3, title: "Decision Process Segmentation", desc: "Understanding buying journeys to influence decision-making and loyalty." },
            { icon: Building2, title: "Firmographic Segmentation", desc: "Segmenting B2B healthcare clients by revenue, industry depth, and size." }
          ].map((item, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <item.icon className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Healthcare Market Segmentation Process
        </h2>
        <ol className="space-y-4">
          {[
            "Determine preliminary segmentation criteria.",
            "Identify critical price drivers for value proposition.",
            "Discover operational constraints for early demand detection.",
            "Develop primary and secondary constraints for accuracy.",
            "Create clear and accessible segment descriptions.",
            "Establish measurable and trackable segmentation metrics.",
            "Deliver a comprehensive client report with insights."
          ].map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-green-600 font-bold">{`0${idx + 1}`}</span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          Other Services You Can Benefit From
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["CATI Web Surveys", "News Abstraction", "Qualitative Research", "Industry Analysis"].map((service, idx) => (
            <span
              key={idx}
              className="bg-white px-4 py-2 rounded-2xl shadow text-gray-700 font-medium"
            >
              {service}
            </span>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Why Nimble Healthcare Market Segmentation Services to Us?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {[
            "ISO-certified quality assurance at every stage.",
            "Affordable and competitive pricing.",
            "Strict data security and confidentiality.",
            "24/7 availability and faster turnaround.",
            "Experienced team with domain expertise.",
            "Proven practices for reliable outcomes.",
            "One-stop provider for healthcare research.",
            "Dedicated support via phone, email, and chat."
          ].map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">CATI Services for Global Client</h3>
              <p className="text-gray-600">
                Helped increase productivity and reduce operating costs for a leading customer through efficient CATI solutions.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Research Support for Strategy Firm</h3>
              <p className="text-gray-600">
                Delivered consumer insights, product details, and in-depth reports to a top global marketing strategy company.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-center bg-green-600 text-white">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto italic text-lg">
          "Let me thank you for the professional way in which you are managing the project and meeting our deadlines."
        </blockquote>
        <p className="mt-4 font-semibold">— CEO, Technology Company, UK</p>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Reach Your Healthcare Audience?</h2>
        <p className="text-gray-600 mb-6">
          Nimble healthcare market segmentation services to Nimble Acuity and gain a competitive edge today.
        </p>
        <Button size="lg" className="rounded-2xl shadow-lg">Talk to Our Experts</Button>
      </section>
    </div>
  )
}
