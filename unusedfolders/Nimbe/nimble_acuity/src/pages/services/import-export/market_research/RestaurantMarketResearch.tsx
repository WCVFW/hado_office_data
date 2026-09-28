import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import NavigationMenu from "../MegaMenu";

export default function RestaurantMarketResearch() {
  return (
    <div className="space-y-12 p-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold"
        >
          Nimble Restaurant Market Research Services
        </motion.h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Focus your efforts to build or rebuild your restaurant business with Nimble Acuity's affordable market research services, starting at just $14 an hour.
        </p>
        <Button size="lg">Get Started</Button>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Restaurant Market Research Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Restaurant Ingredient Review",
              desc: "Extensive research to help you review and optimize your menu based on customer lifestyles, food availability, and supplier risks.",
            },
            {
              title: "Restaurant Menu Optimization",
              desc: "Enhance your brand value with a menu tailored to customer demand and designed to maximize appeal.",
            },
            {
              title: "Interior & Exterior Design Research",
              desc: "Leverage real-time insights to create restaurant designs that attract and retain customers.",
            },
            {
              title: "Ethnographic Research",
              desc: "Understand customer behavior and lifestyle to curate customized menus that delight diners.",
            },
            {
              title: "Market Segmentation",
              desc: "Gain insights into social, economic, and emotional touchpoints influencing your customers.",
            },
            {
              title: "Restaurant Brand Optimization",
              desc: "Develop strong brand positioning strategies backed by real-time customer insights.",
            },
            {
              title: "Customer Analysis",
              desc: "Understand eating habits, spending patterns, and preferences to serve your customers better.",
            },
            {
              title: "Competitor Analysis",
              desc: "Track competitor strategies, promotions, and performance to stay ahead in the market.",
            },
            {
              title: "Revenue & Risk Analysis",
              desc: "Identify key revenue streams and potential risks to safeguard your business growth.",
            },
          ].map((service, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Why Choose Nimble Acuity for Restaurant Market Research?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Affordable and Flexible Pricing Options",
            "ISO/IEC 27001:2022 Certified Data Security",
            "26+ Years of Industry Experience",
            "Agile Team of Skilled Researchers",
            "World-class Infrastructure & Tools",
            "Scalable and On-demand Research Experts",
          ].map((benefit, i) => (
            <div key={i} className="flex items-start space-x-3">
              <CheckCircle2 className="text-green-600 mt-1" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-center">Client Testimonials</h2>
        <blockquote className="text-center text-gray-700 max-w-3xl mx-auto italic">
          “Let me thank you for the professional way in which you are managing the project and meeting our deadlines. Unfortunately, our second supplier I cannot say the same for and they have let us down considerably.”
        </blockquote>
        <p className="text-center font-medium">– CEO, Technology Company, UK</p>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">
          Retain Relevance and Growth: Nimble Restaurant Market Research Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Partner with us to uncover real-time insights, optimize your brand, and stay ahead in the competitive restaurant industry.
        </p>
        <Button size="lg">Contact Us Today</Button>
      </section>
    </div>
  );
}
