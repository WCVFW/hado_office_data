import React from "react";
import { CheckCircle, Sparkles, Shield, Clock, Layers, Image as ImageIcon, PenSquare, Zap, PhoneCall, ArrowRight, Star } from "lucide-react";
import PEMainMenu from "../PEmainmenu";

/**
 * Album Design Services – TSX page
 * - TailwindCSS for styling
 * - Accessible headings & semantic sections
 * - Clean, modern, responsive layout
 */

type LinkItem = { label: string; href?: string };

const INDUSTRIES: LinkItem[] = [
  { label: "Online Apparels Shopping" },
  { label: "Online Electronic Store" },
  { label: "Online Automobile Store" },
  { label: "Online Sports Accessories" },
  { label: "Publishing Houses" },
  { label: "Portrait Studios" },
  { label: "Real Estate Companies" },
  { label: "Jewelry Brands" },
  { label: "Fashion Industry" },
];

const TOOLS = [
  "Adobe Photoshop CS6",
  "Autodesk PIXLR",
  "Aviary Photo Editor",
  "Camera+",
  "Canva",
  "Fotor",
  "GIMP",
  "Image Stitching Software",
  "Inkscape",
  "Pixlr",
  "ProCamera 8 HDR",
  "Snappa",
  "Snapseed",
  "VSCO Cam",
];

const EXTRAS: LinkItem[] = [
  { label: "Portrait Photo Color Conversion" },
  { label: "Photo Restoration using Photoshop" },
  { label: "Product Photo Retouching" },
  { label: "Drone Image Editing" },
];

const BENEFITS = [
  {
    title: "Flexible Pricing Options",
    body:
      "Choose the category and duration that fit your needs. Scale up or down without limiting future choices.",
    icon: Layers,
  },
  {
    title: "100% Information Security",
    body:
      "ISO/IEC 27001:2022 certified. Files are encrypted and transferred via secure FTP. Nothing is shared without consent.",
    icon: Shield,
  },
  {
    title: "Ultramodern Infrastructure",
    body:
      "Continuous network coverage, telco-grade data centers, 200% power backup, robust CRM, and the latest editing tools.",
    icon: Sparkles,
  },
  {
    title: "High Quality",
    body:
      "Consistent, print-ready, brand-aligned outputs that lift ROI and fuel growth.",
    icon: Star,
  },
  {
    title: "Short Turnaround Time",
    body:
      "Reduce TAT by up to 50% with streamlined workflows and a large, always-on team.",
    icon: Clock,
  },
  {
    title: "Experienced Team",
    body:
      "100+ album designers and ~100 years of combined management experience working only with best-in-class tools.",
    icon: PenSquare,
  },
  {
    title: "24/7 Availability",
    body:
      "Round-the-clock support ensures instant responses and momentum across time zones.",
    icon: PhoneCall,
  },
  {
    title: "Built to Scale",
    body:
      "Rapidly ramp production with seasoned designers, image editors, and elastic capacity.",
    icon: Zap,
  },
];

const STYLES = [
  {
    tag: "Simple Design Style",
    title: "Simple Design Style",
    body:
      "Classic, clean layouts for all occasions. Enhanced photo quality with white/black backgrounds and optional borders. Ideal when your clients prefer timeless minimalism.",
  },
  {
    tag: "Classic Design Style",
    title: "Classic Design Style",
    body:
      "Evergreen aesthetics with subtle color accents. Simple strokes around images on white or black backgrounds—let emotions in the photos tell the story.",
  },
  {
    tag: "Contemporary Design Style",
    title: "Contemporary Design Style",
    body:
      "Also called “Contempo.” Textured backgrounds, gradients, color accents, highlights, and dynamic image placements for a bold, modern look.",
  },
];

const SUCCESS_STORIES = [
  {
    title:
      "Sports & Outdoor Photography for a Swedish Company",
    body:
      "Helped the client reduce operating costs by delivering affordable, on-time photography services.",
  },
  {
    title:
      "360° Virtual Tour Creation by Stitching Drone Footage",
    body:
      "Leveraged PTGui & Autopano Giga to create panoramic virtual tours from drone footage.",
  },
];

const StatPill = ({ value, label }: { value: string; label: string }) => (
  <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
    <span className="text-xl font-semibold text-gray-900">{value}</span>
    <span className="text-sm text-gray-600">{label}</span>
  </div>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <CheckCircle className="mt-0.5 h-5 w-5 flex-none" aria-hidden />
    <span className="text-gray-700">{children}</span>
  </li>
);

const AlbumDesignServicesPage: React.FC = () => {
  return (
    <main className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero */}
      <PEMainMenu/>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">

              <h1 className="mt-0 text-2xl font-bold leading-tight text-gray-800 sm:text-4xl">
                Nimble Album Design Services
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                Short on time or resources to design client albums? Our 100+ dedicated album designers
                craft covers and spreads, upload drafts for review, and finalize to spec — fast.
              </p>
              <p className="mt-3 text-gray-700">
                Competitive pricing, quick turnarounds, and enterprise-grade value make us a
                trusted partner for wedding and professional album design. With{" "}
                <strong>26+ years</strong> in photo editing, we have the talent and infrastructure to
                meet high demand without breaking stride.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <StatPill value="100+" label="Album designers" />
                <StatPill value="26+ yrs" label="Editing experience" />
                <StatPill value="24×7" label="Support availability" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 text-white transition hover:opacity-90"
                >
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#styles"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-50"
                >
                  View Design Styles
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <ImageIcon className="h-6 w-6" aria-hidden />
                  <p className="text-sm font-medium text-gray-900">Albums we design</p>
                </div>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-700">
                  {[
                    "Engagement",
                    "Birthday",
                    "Graduation",
                    "Promotion",
                    "House Warming",
                    "Weddings / Pre-wedding",
                    "Baby Shower",
                    "More…",
                  ].map((t) => (
                    <li key={t} className="rounded-xl bg-gray-50 px-3 py-2">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl bg-blue-50 px-4 py-3 text-sm text-blue-900">
                  We upload proofs for your review and feedback before final submission.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <section id="styles" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900">Album Design Services We Offer</h2>
          <p className="mt-2 text-gray-700">
            Whether your clients love timeless elegance or modern flair, choose from three
            professional styles tailored to your brief.
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STYLES.map((s) => (
            <article
              key={s.title}
              className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <span className="inline-flex rounded-full bg-gray-900/90 px-3 py-1 text-xs font-medium text-white">
                {s.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-700">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold text-gray-900">Industries / Verticals We Serve</h2>
            <p className="mt-2 text-gray-700">
              Trusted by studios, brands, and enterprises across sectors.
            </p>
          </div>
          <ul className="lg:col-span-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {INDUSTRIES.map((i) => (
              <li
                key={i.label}
                className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm"
              >
                {i.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tools */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Album Design Tools We Use</h2>
        <p className="mt-2 text-gray-700">
          Our team is fluent with leading design and enhancement apps to match your workflow.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {TOOLS.map((tool) => (
            <div
              key={tool}
              className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm"
            >
              <Sparkles className="h-4 w-4" aria-hidden />
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Other Services You May Be Interested In</h2>
          <p className="mt-2 text-gray-700">
            Complementary offerings to extend value across your imaging pipeline.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {EXTRAS.map((e) => (
              <li key={e.label} className="group">
                <a
                  className="flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 transition hover:bg-white hover:shadow"
                  href={e.href || "#"}
                >
                  {e.label}
                  <ArrowRight className="h-4 w-4 opacity-70 transition group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900">
            Benefits of Outsourcing Album Design Services to Nimble Acuity
          </h2>
          <p className="mt-2 text-gray-700">
            Secure, scalable, and obsessively quality-driven—built for high-volume creative teams.
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-6 w-6" aria-hidden />
                <h3 className="text-base font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-gray-700">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-gray-900">What you’ll get</h3>
            <ul className="mt-4 space-y-3">
              <Bullet>Encrypted file exchange via secure FTP.</Bullet>
              <Bullet>Proofing workflow with uploads for your review.</Bullet>
              <Bullet>Design aligned to brand guidelines and print specs.</Bullet>
              <Bullet>Elastic capacity to handle seasonal spikes.</Bullet>
            </ul>
          </article>

          <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-gray-900">Why teams choose us</h3>
            <ul className="mt-4 space-y-3">
              <Bullet>ISO/IEC 27001:2022 certified security posture.</Bullet>
              <Bullet>26+ years of photo editing excellence.</Bullet>
              <Bullet>Dedicated PM for single-point communication.</Bullet>
              <Bullet>Global delivery with true 24×7 coverage.</Bullet>
            </ul>
          </article>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold text-gray-900">Customer Success Stories</h2>
            <p className="mt-2 text-gray-700">
              Real outcomes from real clients, delivered on time and on budget.
            </p>
          </div>
          <div className="lg:col-span-7 grid gap-6">
            {SUCCESS_STORIES.map((s) => (
              <article
                key={s.title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-700">{s.body}</p>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <Star className="h-7 w-7" aria-hidden />
            <div>
              <p className="text-lg font-medium text-gray-900">Testimonials</p>
              <blockquote className="mt-2 text-gray-800">
                “We are very satisfied by the excellent work of this company. The order was done very
                fast and was reliable.”
              </blockquote>
              <p className="mt-2 text-sm text-gray-600">
                CEO, Web Agency Germany &nbsp;•&nbsp; <a href="#" className="underline">More Testimonials »</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing / Why Us */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold text-gray-900">Nimble Album Design Services to Nimble Acuity</h2>
            <p className="mt-3 text-gray-700">
              For more than <strong>26+ years</strong>, we’ve delivered album design and photo editing to
              global customers across a wide spectrum of industries. Our deep understanding of client
              workflows lets us tailor solutions precisely to your needs, powered by modern tools and a
              seasoned team.
            </p>
            <ul className="mt-6 space-y-3">
              <Bullet>Custom design aligned to your brand and storytelling.</Bullet>
              <Bullet>Proof-based collaboration before final submission.</Bullet>
              <Bullet>Secure, compliant, and transparent processes &amp; pricing.</Bullet>
            </ul>
          </div>
          <aside
            id="contact"
            className="lg:col-span-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-base font-semibold text-gray-900">Have a custom requirement?</h3>
            <p className="mt-2 text-gray-700">
              Tell us about your album specs, preferred style, and timeline. We’ll reply with a
              tailored quote and sample layout options.
            </p>
            <form className="mt-6 grid gap-3">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none ring-offset-2 focus:ring-2 focus:ring-gray-900"
              />
              <input
                type="email"
                placeholder="Work email"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none ring-offset-2 focus:ring-2 focus:ring-gray-900"
              />
              <textarea
                placeholder="Project details (album type, pages, style, deadline)…"
                rows={4}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none ring-offset-2 focus:ring-2 focus:ring-gray-900"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 text-white transition hover:opacity-90"
              >
                Request Quote <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </aside>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-3xl bg-gray-900 px-8 py-10 text-white shadow-xl">
          <div className="grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-semibold">Ready to elevate your albums?</h2>
              <p className="mt-2 text-white/80">
                Send your photos, pick a style, and we’ll handle the rest — proofs included.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-medium text-gray-900 transition hover:bg-gray-100"
                >
                  Start a Project
                </a>
                <a
                  href="#styles"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-inset ring-white/20 transition hover:bg-white/15"
                >
                  Explore Styles
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AlbumDesignServicesPage;
