import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Database,
  GitBranch,
  TrendingUp,
  Users,
  Activity,
  Search,
  Layers,
  Lightbulb,
  Brain,
  BarChart3,
  Sigma,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function RiskAnalyticsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6 text-center">
        <motion.div {...fadeInUp}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nimble Risk Analytics Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Strengthen accountability, mitigate risks, and make confident
            enterprise-level decisions with our comprehensive Risk Analytics
            solutions.
          </p>
          <Button size="lg" className="px-8">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-gray-800 text-center mb-12"
        >
          Risk Analytics Services We Offer
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Database className="h-8 w-8 text-blue-600" />,
              title: "Preparation of Data",
              desc: "We clean, organize, and store data securely for effective decision-making.",
            },
            {
              icon: <GitBranch className="h-8 w-8 text-blue-600" />,
              title: "Decision Trees",
              desc: "Use event-driven decision trees to prepare your business for all scenarios.",
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
              title: "Trend Analysis",
              desc: "Develop predictive models based on clear industry trends and patterns.",
            },
            {
              icon: <Users className="h-8 w-8 text-blue-600" />,
              title: "Customer Profiling",
              desc: "Segment customers and build detailed profiles for targeted actions.",
            },
            {
              icon: <Activity className="h-8 w-8 text-blue-600" />,
              title: "Power Analysis",
              desc: "Assess hypotheses effectively to determine statistical validity.",
            },
            {
              icon: <Search className="h-8 w-8 text-blue-600" />,
              title: "Pattern Recognition",
              desc: "Identify internal business patterns to support smarter decisions.",
            },
            {
              icon: <Layers className="h-8 w-8 text-blue-600" />,
              title: "Principal Component Analysis",
              desc: "Predict outcomes based on existing organizational components.",
            },
            {
              icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
              title: "Customer Intelligence",
              desc: "Study behavioral patterns across industries for actionable insights.",
            },
            {
              icon: <Brain className="h-8 w-8 text-blue-600" />,
              title: "Predictive Modeling",
              desc: "Develop predictive models aligned with your business strategies.",
            },
            {
              icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
              title: "Bootstrap Analysis",
              desc: "Measure sample accuracy to ensure all data is reliable and precise.",
            },
            {
              icon: <Sigma className="h-8 w-8 text-blue-600" />,
              title: "Statistical Analysis",
              desc: "Apply parametric & non-parametric methods using probability models.",
            },
          ].map((service, idx) => (
            <motion.div key={idx} {...fadeInUp}>
              <Card className="h-full shadow-md rounded-2xl">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Partner with Nimble Acuity */}
      <section className="bg-gray-50 py-16 px-6">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-gray-800 text-center mb-12"
        >
          Why Partner with Nimble Acuity?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            "Expert risk, regulatory, and actuarial analysts",
            "Comprehensive support across CCAR, stress testing & compliance",
            "Advanced statistical tools for data-driven insights",
            "Systematic data presentation for quick decisions",
            "Strict confidentiality with NDAs",
            "Flexible and affordable pricing models",
          ].map((benefit, idx) => (
            <motion.div key={idx} {...fadeInUp}>
              <Card className="shadow-sm rounded-2xl">
                <CardContent className="p-6 text-center font-medium text-gray-700">
                  {benefit}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Nimble Risk Analytics Services to Nimble Acuity
        </motion.h2>
        <p className="max-w-2xl mx-auto text-blue-100 mb-8">
          Mitigate risks, enhance accountability, and strengthen your business
          decisions with our expert analytics services tailored to your needs.
        </p>
        <Button size="lg" variant="secondary" className="px-8">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
