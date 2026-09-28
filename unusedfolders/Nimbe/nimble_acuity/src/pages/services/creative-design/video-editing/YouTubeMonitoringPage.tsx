
import React, { useState } from "react";
import CSmainmenu from "../CSmainmenu";

type Service = {
  id: string;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    id: "music",
    title: "Music Video Content Monitoring",
    description:
      "Accurate, copyright-safe monitoring for independent musicians — monetization help and rights protection.",
  },
  {
    id: "corporate",
    title: "Corporate Video Content Monitoring",
    description:
      "Protect corporate video assets from abuse and help monetize/claim rightful usage across YouTube.",
  },
  {
    id: "personal",
    title: "Personal Video Content Monitoring",
    description:
      "Safeguard personal creator content and ensure it is not copied or republished without permission.",
  },
  {
    id: "business",
    title: "Business Video Content Monitoring",
    description:
      "Domain-specific monitoring for hospitality, real estate, sports, news, education and more — reach and monetize.",
  },
];

export default function YouTubeMonitoringPage(): JSX.Element {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // This form is non-functional by default. Wire up to your API or email provider.
    alert("Thanks! Your request has been received. (This is a demo form.)");
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <div>\<CSmainmenu/>
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-md bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold">
              O2I
            </div>
            <div>
              <h1 className="text-xl font-semibold">Outsource2india — YouTube Monitoring Services</h1>
              <p className="text-sm text-gray-500">Protect, monetize and grow your video content</p>
            </div>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a className="hover:text-indigo-600" href="#services">Services</a>
            <a className="hover:text-indigo-600" href="#how-we-work">How we work</a>
            <a className="hover:text-indigo-600" href="#pricing">Pricing</a>
            <a className="hover:text-indigo-600" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">YouTube monitoring that protects & monetizes your brand</h2>
            <p className="text-gray-600 mb-6">
              Are you looking to monitor your YouTube video content and boost your brand image? Outsource2india (O2I)
              provides end-to-end YouTube monitoring services backed by experienced analysts and industry-leading
              tools — so you can focus on creating while we handle protection and monetization.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="p-4 bg-white rounded-md shadow-sm">
                <h4 className="font-semibold">Dedicated Project Manager</h4>
                <p className="text-sm text-gray-500">Single SPOC for fast communication and on-time delivery.</p>
              </li>
              <li className="p-4 bg-white rounded-md shadow-sm">
                <h4 className="font-semibold">ISMS-certified & secure</h4>
                <p className="text-sm text-gray-500">We keep client data private and secure — always.</p>
              </li>
              <li className="p-4 bg-white rounded-md shadow-sm">
                <h4 className="font-semibold">24/7 Support</h4>
                <p className="text-sm text-gray-500">Global delivery centers ensure round-the-clock availability.</p>
              </li>
              <li className="p-4 bg-white rounded-md shadow-sm">
                <h4 className="font-semibold">Affordable pricing</h4>
                <p className="text-sm text-gray-500">Flexible plans tailored to creators, SMEs and enterprises.</p>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md font-medium shadow hover:opacity-95">Get a free quote</a>
              <a href="#samples" className="inline-block border border-gray-200 px-5 py-3 rounded-md text-sm">View samples</a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-indigo-50 p-6 rounded-2xl shadow-2xl">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">YouTube Video Monitoring Services We Offer</h3>
              <p className="text-sm text-gray-600">Select a service below to learn more and view a sample workflow.</p>

              <div className="grid grid-cols-1 gap-3">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    className={`text-left p-4 rounded-lg border cursor-pointer ${selectedService === s.id ? 'border-indigo-300 bg-indigo-50' : 'border-gray-100 bg-white'} `}
                  >
                    <h4 className="font-semibold">{s.title}</h4>
                    <p className="text-sm text-gray-500">{s.description}</p>
                  </button>
                ))}
              </div>

              <div className="pt-4">
                <h4 className="font-semibold">Other services</h4>
                <div className="flex gap-2 flex-wrap mt-2">
                  <span className="text-xs px-3 py-1 bg-white rounded shadow-sm">Drone Video Editing</span>
                  <span className="text-xs px-3 py-1 bg-white rounded shadow-sm">Video Clipping</span>
                  <span className="text-xs px-3 py-1 bg-white rounded shadow-sm">Video Tagging</span>
                  <span className="text-xs px-3 py-1 bg-white rounded shadow-sm">Video Stabilizing</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="how-we-work" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">How we work</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow">
              <h5 className="font-semibold">Discovery</h5>
              <p className="text-sm text-gray-500">Understand your content, rights and priorities.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h5 className="font-semibold">Monitoring & Detection</h5>
              <p className="text-sm text-gray-500">Continuous scanning using automated tools and manual review.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h5 className="font-semibold">Action & Monetization</h5>
              <p className="text-sm text-gray-500">Claims, takedowns, revenue recovery and reporting.</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Pricing</h3>
          <p className="text-sm text-gray-600 mb-6">Starts @ $10/hour — flexible monthly and project pricing available.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow">
              <h4 className="font-bold">Starter</h4>
              <p className="text-sm text-gray-500">Ideal for independent creators — basic monitoring & monthly report.</p>
              <div className="mt-4 text-xl font-semibold">$10 / hr</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow border-2 border-indigo-100">
              <h4 className="font-bold">Business</h4>
              <p className="text-sm text-gray-500">For SMEs — extended monitoring, claims & optimization support.</p>
              <div className="mt-4 text-xl font-semibold">Custom pricing</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h4 className="font-bold">Enterprise</h4>
              <p className="text-sm text-gray-500">Enterprise-grade SLA, dedicated team, and global delivery centers.</p>
              <div className="mt-4 text-xl font-semibold">Custom pricing</div>
            </div>
          </div>
        </section>

        <section id="case-studies" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Client Success Stories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <article className="p-6 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Live Video Editing for Swedish Film Production House</h4>
              <p className="text-sm text-gray-500">Delivered high-quality live editing that met the client's tight timelines.</p>
              <a href="#" className="text-sm text-indigo-600 mt-3 inline-block">Read the case study →</a>
            </article>
            <article className="p-6 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Wedding Photo & Video Editing for Italian Photographer</h4>
              <p className="text-sm text-gray-500">Handled 70 weddings and 3,000 images per wedding for high-quality delivery.</p>
              <a href="#" className="text-sm text-indigo-600 mt-3 inline-block">Read the case study →</a>
            </article>
          </div>
        </section>

        <section id="testimonials" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Testimonials</h3>
          <blockquote className="p-6 bg-white rounded-lg shadow">
            <p className="text-gray-700">“The quality of Artwork delivered during the trial period was exceptional and that helped us to decide on our new Outsourced Partner from a couple of quotes from companies across the globe."</p>
            <footer className="mt-3 text-sm text-gray-500">— Director - Operations, Leading pharmaceutical company in the Netherlands</footer>
          </blockquote>
        </section>

        <section id="contact" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Contact Us & Request a FREE QUOTE</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium">Name*</span>
                  <input name="name" value={form.name} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium">Email*</span>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium">Phone</span>
                  <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium">Enter your requirements*</span>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" />
                </label>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md">Get a FREE QUOTE</button>
                <span className="text-sm text-gray-500">Decide in 24 hours whether outsourcing will work for you.</span>
              </div>

            </form>

            <aside className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Quick info</h4>
              <p className="text-sm text-gray-500 mt-2">Have specific requirements? Email us at: info@outsource2india.com</p>

              <div className="mt-6">
                <h5 className="font-semibold">Samples & Pricing</h5>
                <p className="text-sm text-gray-500">View samples, pricing and how we work from the links on this page.</p>

                <div className="mt-4">
                  <h6 className="text-sm font-semibold">Our Clients</h6>
                  <div className="flex gap-3 flex-wrap mt-3">
                    <span className="text-xs px-3 py-1 bg-gray-100 rounded">Alcon</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 rounded">ARI</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 rounded">Maximus</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 rounded">Yale</span>
                  </div>
                </div>

                <div className="mt-6 text-sm text-gray-500">
                  <p>Starts @ $10/hour — Avail best-in-class services at affordable rates.</p>
                </div>

              </div>
            </aside>
          </div>
        </section>

        <footer className="mt-12 border-t pt-6 text-sm text-gray-500">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Outsource2india — All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600">Samples</a>
              <a href="#" className="hover:text-indigo-600">Pricing</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
    </div>
  );
}


