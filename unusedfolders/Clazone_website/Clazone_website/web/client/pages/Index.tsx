import React, { useMemo, useState } from "react";
import { useMutation, useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Link } from "react-router-dom";

// Define a type for your service data
interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
}

// A simple utility function for currency formatting
const formatINR = (amount: number): string => {
  if (typeof amount !== 'number') return String(amount);
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

const queryClient = new QueryClient();

// The new top-level component that provides the QueryClient context.
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Index />
    </QueryClientProvider>
  );
}

// The main application component, now correctly nested within the provider.
function Index() {
  const { data: services } = useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      // Mock API call to simulate fetching data
      return new Promise<Service[]>(resolve => {
        setTimeout(() => {
          resolve([
            { id: 1, name: "FSSAI Registration", description: "Food Safety and Standards Authority of India (FSSAI) license for food businesses.", price: 2499 },
            { id: 2, name: "Trademark Registration", description: "Secure your brand name and logo with government registration.", price: 7999 },
            { id: 3, name: "GST Registration", description: "Get your Goods and Services Tax (GST) number for tax compliance.", price: 1499 },
            { id: 4, name: "Company Registration", description: "Register a Private Limited Company or LLP with the Ministry of Corporate Affairs.", price: 4999 },
            { id: 5, "name": "Accounting & Compliance", "description": "End-to-end accounting services and annual compliance filings.", price: 9999 },
            { id: 6, "name": "Import Export Code", "description": "Obtain an IEC for your business to start importing and exporting goods.", price: 1999 },
          ]);
        }, 500);
      });
    },
  });

  return (
    <main className="bg-white">
      <Hero />
      <ServicesSection services={services} />
      <Testimonials />
      <ContactForm services={services ?? []} />
      {/* <CTABanner /> */}
    </main>
  );
}

// ------------------ HERO COMPONENT ------------------
function Hero() {
  return (
    <header className="relative bg-gradient-to-b from-white via-gray-50 to-white text-black overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Build Your Business with <span className="text-indigo-600">Passion</span>.
              <br />Run It Smarter with{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Zolvit
              </span>.
            </h1>

            <p className="mt-6 text-lg text-gray-700 max-w-2xl">
              Simplifying <span className="font-semibold">Legal, Tax, and Compliance</span>,
              the AI-driven way. Trusted by millions.
              Backed by real experts.
            </p>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "FSSAI Registration",
                "Trademark Registration",
                "GST Registration",
                "Company Registration",
                "Accounting & Compliance",
              ].map((item, i) => (
                <button
                  key={i}
                  className="px-5 py-2 rounded-full border bg-white shadow-sm hover:bg-indigo-50 hover:border-indigo-300 transition"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Testimonial */}
            <blockquote className="mt-8 border-l-4 border-indigo-500 pl-4 italic text-gray-700">
              “Registration, Filing, and Legal help in one app just makes sense” —{" "}
              <span className="font-semibold">Sanjivani Awale</span>
            </blockquote>

            {/* Reviews */}
            <div className="mt-6 flex items-center gap-6 flex-wrap text-sm">
              <span className="text-gray-600">⭐ Google Reviews</span>
              <span className="font-semibold text-gray-900">4.5/5</span>
              <span className="text-gray-600">19k+ Happy Clients</span>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Image */}
            <div className="rounded-2xl overflow-hidden border shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                alt="AI business"
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

// ------------------ SERVICES COMPONENT ------------------
function ServicesSection({ services }: { services?: Service[] }) {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="hidden">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-100 blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-100 blur-[160px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Popular Services</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Handpicked solutions designed to streamline your business operations.</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services?.map((s) => (
            <motion.article
              key={s.id}
              className="relative group p-8 rounded-2xl border bg-white shadow-md hover:shadow-2xl transition overflow-hidden"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="hidden" />

              <div className="relative w-14 h-14 rounded-xl border-2 border-[#2E8B57] text-[#2E8B57] bg-white flex items-center justify-center shadow mb-6">
                <span className="text-2xl">⚡</span>
              </div>

              <h3 className="relative text-xl font-semibold text-black">{s.name}</h3>

              <p className="relative mt-3 text-gray-800 text-sm line-clamp-3">{s.description}</p>

              <div className="relative mt-8 flex items-center justify-between">
                <span className="text-lg font-bold text-black">{formatINR(s.price)}</span>
                <a href="#contact" className="text-sm font-medium text-black hover:underline">Enquire →</a>
              </div>
            </motion.article>
          ))}

          {!services &&
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-48 rounded-xl border bg-gray-100 animate-pulse" />
            ))}
        </div>
      </div>
    </section>
  );
}

// ------------------ TESTIMONIALS COMPONENT ------------------
function Testimonials() {
  const feedback = [
    { name: "Aarav", text: "BizSuite streamlined our operations by 50% and gave us clarity." },
    { name: "Meera", text: "The dashboard and automations are game changers for our team." },
    { name: "Rahul", text: "Integrations were seamless, and onboarding was super smooth." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {feedback.map((t, i) => (
            <motion.div key={i} className="p-8 rounded-2xl border bg-gray-50 shadow hover:shadow-lg transition" whileHover={{ scale: 1.05 }}>
              <p className="text-gray-600 italic mb-4">“{t.text}”</p>
              <h4 className="font-semibold text-indigo-600">— {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------------ CONTACT FORM COMPONENT ------------------
function ContactForm({ services }: { services: Service[] }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [serviceId, setServiceId] = useState<number | "">("");

  const mutation = useMutation({
    mutationFn: async () => {
      // Mock API call
      return new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.1) {
            resolve({ success: true });
          } else {
            reject(new Error("Failed to submit"));
          }
        }, 1000);
      });
    },
    onSuccess: () => {
      toast.success("Thanks! We’ll reach out shortly.");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setServiceId("");
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  const isDisabled = useMemo(() => !name || !email || !message || mutation.isPending, [name, email, message, mutation.isPending]);

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Let’s talk about your needs</h2>
          <p className="mt-3 text-gray-600">Fill in the form and our experts will connect with you in 24 hours.</p>
          <ul className="mt-6 space-y-2 text-gray-600 text-sm">
            <li>✅ Quick consultation</li>
            <li>✅ Tailored solutions</li>
            <li>✅ Dedicated support</li>
          </ul>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); mutation.mutate(); }} className="bg-white border rounded-2xl shadow p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input className="rounded-lg border px-3 py-2" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input className="rounded-lg border px-3 py-2" type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input className="rounded-lg border px-3 py-2" placeholder="Phone (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <select className="rounded-lg border px-3 py-2" value={serviceId} onChange={(e) => setServiceId(e.target.value ? Number(e.target.value) : "")}>
              <option value="">Select a service (optional)</option>
              {(services || []).map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>
          <textarea className="rounded-lg border px-3 py-2 h-28 w-full" placeholder="How can we help?" value={message} onChange={(e) => setMessage(e.target.value)} required />
          <button disabled={isDisabled} className="w-full rounded-lg bg-black hover:opacity-90 text-white font-semibold py-3 transition disabled:opacity-50">{mutation.isPending ? "Submitting..." : "Request Callback"}</button>
        </form>
      </div>
    </section>
  );
}

// ------------------ CTA COMPONENT ------------------
function CTABanner() {
  return (
    <section className="py-20 bg-white border-t">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="rounded-2xl bg-white p-10 text-center text-black shadow-xl border">
          <h3 className="text-3xl font-bold">Ready to get started?</h3>
          <p className="mt-2 text-gray-800">Unlock full power by setting up your admin & database.</p>
          <Link to="/admin" className="mt-6 inline-block px-8 py-3 rounded-xl bg-black text-white font-semibold hover:opacity-90 transition">Open Admin</Link>
        </div>
      </div>
    </section>
  );
}
