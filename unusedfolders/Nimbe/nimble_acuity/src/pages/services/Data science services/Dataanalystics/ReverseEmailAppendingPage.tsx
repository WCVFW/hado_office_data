import { motion } from "framer-motion";
import { Database, CheckCircle2, Timer, Headset, Shield } from "lucide-react";
import DSMainMenu from "../mainmenu";

export default function ReverseEmailAppending() {
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
            Nimble Reverse Email Appending Services
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            Purge the disparities in your database and increase the outreach of
            your new marketing channels at prices starting at $6/hour
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-5xl px-4 py-12 space-y-6">
        <p>
          Having a database with insufficient information is as good as not
          having one. At Nimble Acuity, we offer reverse email appending
          services that enable you to fill up the gaps in your database. With
          the disparities out of the way, you can now save time and money and
          personalize your marketing campaigns easily.
        </p>
        <p>
          Nimble Acuity is one of the leading reverse email appending service
          providers with 22+ years of industry experience. Over the years, we
          have provided tailored solutions to clients across industries and time
          zones. We update our databases regularly to ensure lead validity so
          that you can make the most of your direct marketing campaigns.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Reverse Email Appending Services We Offer
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Data Mining Services",
                desc: "Incomplete data can cost businesses hundreds of dollars. Our services enable you to be on the right side of data. We take the guesswork out of lead generation activities by decluttering your enterprise data.",
              },
              {
                title: "Data Matching Services",
                desc: "We run your data through our pre-maintained databases. Once we find matches, we enhance your enterprise database by adding missing details like contact number, zip code, postal address, and phone number.",
              },
              {
                title: "Data Verification Services",
                desc: "Our experts comb your mailing database for discrepancies. From duplication to spelling errors and inaccurate numbers, we scan and rectify every glitch to improve usability.",
              },
              {
                title: "Additional Appending Services",
                desc: "Name & Address, Contact Number, Domain, Connection Type & IP Address, Parsed Name & Address Elements, Date Stamp.",
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
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Why Nimble Reverse Email Appending Solutions to Nimble Acuity?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              icon: <Database className="h-6 w-6 text-blue-600" />,
              title: "Affordable Services",
              desc: "We customize prices according to your requirements and offer flexible payment options.",
            },
            {
              icon: <CheckCircle2 className="h-6 w-6 text-green-600" />,
              title: "100% Accurate Data",
              desc: "With over two decades of experience, we provide highly accurate services and retain long-term clients.",
            },
            {
              icon: <Shield className="h-6 w-6 text-indigo-600" />,
              title: "Certified Provider",
              desc: "We comply with ISO 9001:2015 regulations and international standards.",
            },
            {
              icon: <Timer className="h-6 w-6 text-orange-600" />,
              title: "< 24-hour TAT",
              desc: "We deliver most data appending projects in less than 24 hours.",
            },
            {
              icon: <Headset className="h-6 w-6 text-purple-600" />,
              title: "24x7 Availability",
              desc: "Our experts are available around the clock with dedicated project managers.",
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
                Nimble Acuity Provided Data Entry and Image Tagging Services
              </h3>
              <p className="text-gray-600">
                An Irish Sports Management and Analytics company was looking for
                affordable data entry services. We exceeded client expectations.
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
                Data Entry for Analytics & Optimization Provider
              </h3>
              <p className="text-gray-600">
                The client needed high-volume data handling. We completed the
                project within 9 months and delivered comprehensive solutions.
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
          "I am more than pleased with the way the project has turned out, and
          with the overall experience itself. I have been raving about your
          company to everyone I know, and I will be sending you more projects in
          the future."
        </blockquote>
        <p className="mt-4 font-semibold">
          CEO, Top Logistics Company in the US
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Nimble Email Appending Services to Nimble Acuity
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          We empower your marketing campaigns and reduce lead acquisition costs.
          With 18000+ clients served, we ensure accurate and reliable database
          solutions.
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
