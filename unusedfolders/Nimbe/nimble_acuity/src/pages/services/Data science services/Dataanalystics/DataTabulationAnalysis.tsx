import { motion } from "framer-motion";
import {
  Table,
  BarChart3,
  Grid3X3,
  FileSpreadsheet,
  ShieldCheck,
  Timer,
  Building2,
  UserCheck,
  Headphones,
  DollarSign,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

export default function DataTabulationAnalysis() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <DSMainMenu/>
      <section className="bg-white py-16 shadow-sm">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.h1
            className="text-3xl font-bold sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            Nimble Data Tabulation and Analysis Services
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            Need professional data tabulation and data analysis support to clean
            and generate tables accurately? Get started with rates as low as{" "}
            <span className="font-semibold">$7/hour</span>.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-5xl px-4 py-12 space-y-6">
        <p>
          Any set of data is only useful when it is organized systematically and
          logically so that it can be understood. At Nimble Acuity, we provide
          data tabulation and analysis services to compress, simplify, and
          structure raw data for easy analysis.
        </p>
        <p>
          With 26+ years of experience, Nimble Acuity has helped countless
          clients with surveys, studies, and research. Our expert analysts ensure
          accurate tabulation and analysis, helping you draw meaningful
          conclusions from your data.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Data Tabulation and Analysis Services We Offer
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: <FileSpreadsheet className="h-6 w-6 text-blue-600" />,
                title: "Data Cleaning",
                desc: "We remove incorrect, duplicate, or incomplete data to ensure integrity before analysis.",
              },
              {
                icon: <Table className="h-6 w-6 text-green-600" />,
                title: "Data Tabulation",
                desc: "Our experts organize raw data into structured tables of rows and columns for accurate analysis.",
              },
              {
                icon: <Grid3X3 className="h-6 w-6 text-indigo-600" />,
                title: "Cross-tabulation",
                desc: "We assess relationships in categorical data, uncovering hidden insights useful for surveys and studies.",
              },
              {
                icon: <BarChart3 className="h-6 w-6 text-orange-600" />,
                title: "Data Analysis",
                desc: "We transform and evaluate tabulated data to deliver crucial findings and insights.",
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
                {service.icon}
                <h3 className="text-lg font-bold mt-3 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Data Tabulation and Analysis Process We Follow
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { step: "01. Requirement Gathering", desc: "We begin by understanding your unique business challenge and data needs." },
            { step: "02. Extract", desc: "We collect data from relevant sources, removing irrelevant or duplicate entries." },
            { step: "03. Transform", desc: "We process raw data into structured formats that deliver actionable insights." },
            { step: "04. Load", desc: "The processed data is securely delivered via SFTP for your access." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
            >
              <h3 className="font-bold mb-2">{item.step}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Why Nimble Data Tabulation and Analysis Services to Nimble Acuity?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                icon: <DollarSign className="h-6 w-6 text-blue-600" />,
                title: "Affordable Services",
                desc: "Flexible, pocket-friendly pricing models ensure you pay only for what you need.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-green-600" />,
                title: "Data Security",
                desc: "We are ISO/IEC certified and follow stringent data security measures to protect your information.",
              },
              {
                icon: <Timer className="h-6 w-6 text-indigo-600" />,
                title: "Quick Turnaround",
                desc: "Our expert team ensures fast and accurate delivery for both small and large data sets.",
              },
              {
                icon: <Building2 className="h-6 w-6 text-orange-600" />,
                title: "Strong Infrastructure",
                desc: "With modern tools, backup systems, and networks, we ensure seamless project delivery.",
              },
              {
                icon: <UserCheck className="h-6 w-6 text-purple-600" />,
                title: "Dedicated Project Manager",
                desc: "A single point of contact keeps you updated and resolves queries quickly.",
              },
              {
                icon: <Headphones className="h-6 w-6 text-red-600" />,
                title: "24x7 Support",
                desc: "Our support team is available around the clock through calls, emails, and chat.",
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
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow hover:shadow-md">
            <h3 className="font-bold mb-2">
              Scanning & Data Entry for UK Software Firm
            </h3>
            <p className="text-gray-600">
              We provided bespoke data management solutions to streamline
              workload and boost revenue for a Berkshire-based client.
            </p>
            <a href="#" className="mt-3 inline-block text-blue-600 hover:underline">
              Read more
            </a>
          </div>
          <div className="rounded-xl bg-white p-6 shadow hover:shadow-md">
            <h3 className="font-bold mb-2">
              eCommerce Data Entry for Bike Accessories Seller
            </h3>
            <p className="text-gray-600">
              A Poland-based manufacturer Nimbled data mining and entry tasks
              to us. We delivered quality results within a friendly budget.
            </p>
            <a href="#" className="mt-3 inline-block text-blue-600 hover:underline">
              Read more
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="italic text-gray-700 max-w-2xl mx-auto">
          "We were very satisfied with the quality of service Nimble Acuity
          provided. They were able to meet our requests with great
          professionalism and flexibility."
        </blockquote>
        <p className="mt-4 font-semibold">
          Spokesperson, Online Health Lessons Company, Canada
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Nimble Data Tabulation and Analysis Services to Nimble Acuity
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Reduce your burden, cut costs, and improve accuracy by outsourcing your
          tabulation and analysis needs to our ISO-certified experts.
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
