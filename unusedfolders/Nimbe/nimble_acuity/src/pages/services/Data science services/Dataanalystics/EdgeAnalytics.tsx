import { motion } from "framer-motion";
import {
  Cpu,
  BarChart3,
  Video,
  Code,
  Database,
  CheckCircle2,
  DollarSign,
  Layers,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

export default function EdgeAnalytics() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="relative bg-white py-16 shadow-sm">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.h1
            className="text-3xl font-bold sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            Nimble Edge Analytics Services
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            Choose our sophisticated data analytics services and ensure that your
            organization unlocks the full potential of your data. Prices start at
            just $6/hour.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-5xl px-4 py-12 space-y-6">
        <p>
          With the growing popularity of the Internet of Things, edge and data
          analytics has become a preferred solution for collecting and analyzing
          data. Various businesses stream data from IoT sources. This can result
          in a huge store of data which can get extremely difficult to manage.
          This is when edge and data analytics can prove to be incredibly
          beneficial.
        </p>
        <p>
          Nimble Acuity is an experienced edge analytics service provider with
          over a decade of experience. We have a capable team and all the
          resources to handle your requirements and provide flawless analytics
          services to global clients.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Edge and Data Analytics Services We Offer
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: <Cpu className="h-6 w-6 text-blue-600" />,
                title: "AI Deployment on Edge",
                desc: "We help process AI algorithms on IoT endpoints. Using ML models, you can make intelligent real-time decisions.",
              },
              {
                icon: <Code className="h-6 w-6 text-green-600" />,
                title: "Customized Software for Edge Devices",
                desc: "We design custom software to optimize your edge devices according to your business and enterprise requirements.",
              },
              {
                icon: <BarChart3 className="h-6 w-6 text-indigo-600" />,
                title: "Business Intelligence for Edge Applications",
                desc: "We build interactive dashboards that integrate useful data, enabling organized access and smarter insights.",
              },
              {
                icon: <Video className="h-6 w-6 text-orange-600" />,
                title: "Video Edge and Data Analytics",
                desc: "We analyze real-time video streams, helping you extract rich insights for faster business decision-making.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl bg-white p-6 shadow hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
              >
                <div>{service.icon}</div>
                <h3 className="text-lg font-bold mt-3 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Why Nimble Edge Analytics Services to Nimble Acuity?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              icon: <DollarSign className="h-6 w-6 text-blue-600" />,
              title: "Affordable Prices",
              desc: "We provide highly affordable edge streaming analytics services tailored to your needs.",
            },
            {
              icon: <Layers className="h-6 w-6 text-green-600" />,
              title: "Latest Tools",
              desc: "We leverage the latest technologies and software to meet your cutting-edge analytics needs.",
            },
            {
              icon: <Database className="h-6 w-6 text-indigo-600" />,
              title: "IoT Analytics",
              desc: "We offer specialized edge analytics in IoT and adhere to ISO-certified standards.",
            },
            {
              icon: <CheckCircle2 className="h-6 w-6 text-purple-600" />,
              title: "Proven Expertise",
              desc: "Over a decade of experience delivering successful analytics projects worldwide.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="rounded-xl bg-white p-6 shadow hover:shadow-md flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
            >
              {item.icon}
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Client Success Stories
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow hover:shadow-md">
              <h3 className="font-bold mb-2">
                Nimble Acuity Provided Efficient Data Entry Services
              </h3>
              <p className="text-gray-600">
                A US-based client required online data entry services. We
                provided top-quality results promptly.
              </p>
              <a
                href="#"
                className="mt-3 inline-block text-blue-600 hover:underline"
              >
                Read more
              </a>
            </div>
            <div className="rounded-xl bg-white p-6 shadow hover:shadow-md">
              <h3 className="font-bold mb-2">
                Professional Data Extraction for Legal Firm
              </h3>
              <p className="text-gray-600">
                A Florida-based firm required accurate and reliable data
                extraction. We delivered exceptional results at affordable
                prices.
              </p>
              <a
                href="#"
                className="mt-3 inline-block text-blue-600 hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="italic text-gray-700">
          "Nimble Acuity will have a positive effect on any business processes.
          I do not doubt that."
        </blockquote>
        <p className="mt-4 font-semibold">
          Marketing Director, Insulation Company, UK
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Nimble Edge and Data Analytics Services to Nimble Acuity
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          We offer end-to-end IoT edge stream analytics services, helping
          companies of all sizes harness real-time insights and improve business
          outcomes.
        </p>
        <a
          href="#"
          className="rounded-lg bg-white px-6 py-3 font-medium text-blue-600 shadow hover:bg-gray-100"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
