import InquiryForm from "@/components/InquiryForm";
import OnboardingForm from "@/components/OnboardingForm";
import SEO from "@/components/SEO";
import { useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export type PricingPlan = {
  name: string;
  priceLabel: string;
  highlight?: boolean;
  bullets: string[];
};

export type Section =
  | { kind: "overview"; title: string; paragraphs: string[] }
  | { kind: "list"; title: string; items: string[]; ordered?: boolean }
  | { kind: "process"; title: string; items: string[] }
  | { kind: "table"; title: string; headers: string[]; rows: string[][] }
  | { kind: "faq"; title: string; qa: { q: string; a: string }[] };

type TemplateVariant = "default" | "professional";

type FormType = "inquiry" | "onboarding";

const LLPRegistration = () => {
  const title = "LLP Registration Online";
  const subtitle =
    "Complete LLP registration in just 14 business days with expert assistance.";
  const ctaLabel = "Get Started";
  const gradientFrom = "from-blue-700";
  const gradientTo = "to-indigo-700";
  const serviceLabel = "LLP Registration";
  const formType: FormType = "onboarding";
  const serviceKey = "llp";
  const heroImage =
    "https://images.pexels.com/photos/7731330/pexels-photo-7731330.jpeg";
  const heroImageAlt = "Meeting discussing LLP agreements";
  const variant: TemplateVariant = "professional";

  const pricing: PricingPlan[] = [
    {
      name: "Standard",
      priceLabel: "₹1,499 + Govt. fee",
      bullets: [
        "Expert assisted process",
        "Name reservation 2–4 days",
        "DSC in 4–7 days",
        "LLP incorporation filing in 21 days*",
        "Incorporation Certificate",
        "LLP agreement filing (post incorporation)",
        "PAN + TAN, DIN for partners",
      ],
    },
    {
      name: "Fastrack",
      priceLabel: "₹2,499 + Govt. fee",
      highlight: true,
      bullets: [
        "Name reserved in 24 hours*",
        "DSC in 24 hours*",
        "Incorporation filing in 14 days*",
        "LLP agreement in 7 days (post incorporation)",
        "Digital welcome kit with compliance checklist",
      ],
    },
    {
      name: "Premium",
      priceLabel: "₹10,999 + Govt. fee",
      bullets: [
        "Includes Standard benefits",
        "Form 8 & 11 filing (1 year)",
        "DIR 3 KYC (for 2 partners)",
        "One year Income Tax filing (upto turnover 20 lakhs)",
        "Accounting & Bookkeeping (upto 100 txns)",
        "Financial statements + software (1-year license)",
      ],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "Limited Liability Partnership (LLP) blends partnership flexibility with limited liability and lower compliance.",
        "We handle RUN-LLP, DSC, DPIN/DIN, agreement drafting and ROC filings end-to-end.",
      ],
    },
    {
      kind: "list",
      title: "Key Features",
      items: [
        "Separate legal entity",
        "Limited liability for partners",
        "Flexible internal management",
        "Perpetual succession",
        "Taxed as partnership",
        "Minimum compliance",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "PAN/Aadhaar/Passport for partners",
        "Address proofs",
        "Registered office proof",
        "LLP Agreement",
        "DSC for all partners",
      ],
    },
    {
      kind: "list",
      title: "LLP Registration Process",
      ordered: true,
      items: [
        "Consultation & planning",
        "Name reservation & RUN-LLP",
        "Document preparation + Agreement",
        "DSC issuance",
        "Form 2 filing with ROC",
        "Verification & Approval",
        "Certificate of Incorporation",
        "Post-incorporation compliance",
      ],
    },
    {
      kind: "faq",
      title: "FAQs",
      qa: [
        {
          q: "How long does LLP take?",
          a: "Usually 14–21 business days depending on readiness and ROC timelines.",
        },
        { q: "Minimum partners?", a: "Minimum two partners; no upper limit." },
        { q: "Capital requirement?", a: "No minimum capital mandated." },
      ],
    },
  ];

  const isProfessional = variant === "professional";

  const heroSectionClass = isProfessional
    ? "bg-white text-gray-900 py-16 px-6 border-b"
    : `bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white py-16 px-6`;
  const subtitleClass = isProfessional
    ? "mt-3 text-gray-600 max-w-prose"
    : "mt-3 text-emerald-100/90 max-w-prose";
  const chipClass = isProfessional
    ? "bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
    : "bg-white/15 px-3 py-1 rounded-full";
  const ctaClass = isProfessional
    ? "mt-8 inline-block rounded-xl bg-gray-900 text-white font-semibold px-6 py-3 hover:bg-black"
    : "mt-8 inline-block rounded-xl bg-white text-black font-semibold px-6 py-3 hover:bg-gray-100";

  const overviewText = useMemo(() => {
    const ov = sections.find((s) => s.kind === "overview") as
      | Extract<Section, { kind: "overview" }>
      | undefined;
    return ov ? ov.paragraphs.join(" ") : "";
  }, [sections]);

  const effectiveSeo = useMemo(() => {
    const computedTitle = (`${title} | BizSuite`).trim();
    const baseDesc = subtitle || overviewText || title;
    const computedDescription =
      baseDesc.length > 200 ? `${baseDesc.slice(0, 197)}...` : baseDesc;
    const baseKeywords = ([] as string[])
      .concat([serviceLabel, "registration", "compliance", "online", "India"])
      .concat(title.split(/\s+/).filter((w) => w.length > 2));
    const dedup = Array.from(new Set(baseKeywords.map((k) => k.toLowerCase())));

    const schema: Record<string, any> = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: title,
      serviceType: serviceLabel || title,
      areaServed: "IN",
      provider: {
        "@type": "Organization",
        name: "BizSuite",
      },
    };

    return {
      title: computedTitle,
      description: computedDescription,
      keywords: dedup,
      jsonLd: schema,
    };
  }, [
    title,
    subtitle,
    overviewText,
    serviceLabel,
  ]);

  function pickHeroImage(seed: string) {
    const s = `${(serviceKey || seed).toLowerCase()}`;
    if (s.includes("plc") || s.includes("private"))
      return "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg";
    if (s.includes("llp"))
      return "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg";
    if (s.includes("opc") || s.includes("one person"))
      return "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg";
    if (
      s.includes("ngo") ||
      s.includes("section 8") ||
      s.includes("trust") ||
      s.includes("society")
    )
      return "https://images.pexels.com/photos/6646915/pexels-photo-6646915.jpeg";
    if (s.includes("iec") || s.includes("import") || s.includes("export"))
      return "https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg";
    if (s.includes("iso"))
      return "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg";
    if (s.includes("fssai") || s.includes("food"))
      return "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg";
    if (s.includes("trademark"))
      return "https://images.pexels.com/photos/590037/pexels-photo-590037.jpeg";
    if (s.includes("dubai") || s.includes("uae"))
      return "https://images.pexels.com/photos/1386291/pexels-photo-1386291.jpeg";
    if (s.includes("singapore"))
      return "https://images.pexels.com/photos/318312/pexels-photo-318312.jpeg";
    if (s.includes("hong"))
      return "https://images.pexels.com/photos/2157/city-lights-night-hong-kong.jpeg";
    if (s.includes("nether") || s.includes("netherlands"))
      return "https://images.pexels.com/photos/461757/pexels-photo-461757.jpeg";
    if (s.includes("uk") || s.includes("united kingdom"))
      return "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg";
    if (s.includes("usa") || s.includes("united states"))
      return "https://images.pexels.com/photos/3997721/pexels-photo-3997721.jpeg";
    if (s.includes("loan"))
      return "https://images.pexels.com/photos/4386334/pexels-photo-4386334.jpeg";
    if (s.includes("pitch") || s.includes("fundraising"))
      return "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg";
    if (s.includes("liquor"))
      return "https://images.pexels.com/photos/1267305/pexels-photo-1267305.jpeg";
    if (s.includes("metrology"))
      return "https://images.pexels.com/photos/3669167/pexels-photo-3669167.jpeg";
    if (s.includes("hallmark"))
      return "https://images.pexels.com/photos/4466287/pexels-photo-4466287.jpeg";
    if (s.includes("msme") || s.includes("udyam"))
      return "https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg";
    if (s.includes("fieo") || s.includes("exporters"))
      return "https://images.pexels.com/photos/163726/trade-packets-asia-infrastructure-163726.jpeg";
    if (s.includes("spice"))
      return "https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg";
    if (s.includes("drug") || s.includes("cosmetic"))
      return "https://images.pexels.com/photos/6941882/pexels-photo-6941882.jpeg";
    if (s.includes("digital signature") || s.includes("dsc"))
      return "https://images.pexels.com/photos/955390/pexels-photo-955390.jpeg";
    if (s.includes("clra") || s.includes("labour"))
      return "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg";
    if (s.includes("ad code"))
      return "https://images.pexels.com/photos/4241792/pexels-photo-4241792.jpeg";
    return "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg";
  }

  let derivedServiceKey = serviceKey;
  try {
    const parts = window.location.pathname.split("/").filter(Boolean);
    const last = parts.length > 0 ? parts[parts.length - 1] : "";
    if (!derivedServiceKey && last) derivedServiceKey = last.toLowerCase();
  } catch {}

  const heroImg = heroImage || pickHeroImage(title);
  const heroAlt = heroImageAlt || title;

  return (
    <>
      <SEO
        title={effectiveSeo.title}
        description={effectiveSeo.description}
        keywords={effectiveSeo.keywords}
        jsonLd={effectiveSeo.jsonLd}
      />
      <main className="bg-gray-50 text-gray-900">
        <section className={heroSectionClass}>
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                {title}
              </h1>
              {subtitle && <p className={subtitleClass}>{subtitle}</p>}
              {heroImg && (
                <img
                  src={heroImg}
                  alt={heroAlt}
                  className="mt-6 w-full rounded-xl border shadow object-cover max-h-64"
                  loading="eager"
                />
              )}
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className={chipClass}>Expert assistance</span>
                <span className={chipClass}>Fast filing</span>
                <span className={chipClass}>PAN • TAN • DSC</span>
              </div>
              <a
                href={
                  formType === "onboarding"
                    ? `/get-started/${serviceKey ?? "plc"}`
                    : "#form"
                }
                className={ctaClass}
              >
                {ctaLabel}
              </a>
            </div>
            <div
              id="form"
              className="rounded-2xl bg-white text-gray-900 p-6 shadow-xl border"
            >
              <h3 className="text-xl font-bold mb-3">
                {formType === "onboarding"
                  ? "Get Started"
                  : "Request a callback"}
              </h3>
              {formType === "onboarding" ? (
                <OnboardingEntry serviceKey={serviceKey ?? "plc"} />
              ) : (
                <InquiryForm serviceLabel={serviceLabel} />
              )}
            </div>
          </div>
        </section>

        {pricing && pricing.length > 0 && (
          <section id="plans" className="py-16">
            <div className="container max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center">
                Right Plan For Your Business
              </h2>
              <div className="mt-10 grid md:grid-cols-3 gap-6">
                {pricing.map((p) => {
                  const borderClass = p.highlight
                    ? isProfessional
                      ? "border-gray-900"
                      : "border-indigo-600"
                    : "border-gray-200";
                  const priceClass = isProfessional
                    ? "mt-1 text-2xl font-extrabold text-gray-900"
                    : "mt-1 text-2xl font-extrabold text-indigo-600";
                  const buttonClass = isProfessional
                    ? "mt-6 inline-block rounded-lg bg-gray-900 text-white px-4 py-2 hover:bg-black"
                    : "mt-6 inline-block rounded-lg bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700";
                  return (
                    <div
                      key={p.name}
                      className={`p-6 rounded-2xl border bg-white shadow ${borderClass}`}
                    >
                      <h3 className="text-xl font-semibold">{p.name}</h3>
                      <p className={priceClass}>{p.priceLabel}</p>
                      <ul className="mt-4 space-y-2 text-sm text-gray-700">
                        {p.bullets.map((b, i) => (
                          <li key={i}>• {b}</li>
                        ))}
                      </ul>
                      <Link
                        to={`/plans/${derivedServiceKey ?? "plc"}`}
                        state={{ pricing, title: serviceLabel || title }}
                        className={buttonClass}
                      >
                        Choose Plan
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="py-12">
          <div className="container max-w-5xl mx-auto grid gap-10">
            {sections.map((s, idx) => (
              <div key={idx}>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  {s.title}
                </h2>
                {s.kind === "overview" && (
                  <div className="space-y-4 text-gray-700">
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                )}
                {s.kind === "list" &&
                  (s.ordered ? (
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      {s.items.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {s.items.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  ))}
                {s.kind === "process" && (
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    {s.items.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ol>
                )}
                {s.kind === "table" && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border">
                      <thead>
                        <tr className="bg-gray-100">
                          {s.headers.map((h, i) => (
                            <th key={i} className="px-3 py-2 border text-left">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.rows.map((row, ri) => (
                          <tr
                            key={ri}
                            className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}
                          >
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className="px-3 py-2 border align-top"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {s.kind === "faq" && (
                  <div className="space-y-3">
                    {s.qa.map((qa, i) => (
                      <details key={i} className="rounded-lg border p-4">
                        <summary className="font-medium cursor-pointer">
                          {qa.q}
                        </summary>
                        <p className="mt-2 text-sm text-gray-700">{qa.a}</p>
                      </details>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

function OnboardingEntry({ serviceKey }: { serviceKey: string }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          try {
            const key = `onboarding.${serviceKey}`;
            const prev = sessionStorage.getItem(key);
            const merged = {
              ...(prev ? JSON.parse(prev) : {}),
              email,
              phone,
              city,
            } as Record<string, unknown>;
            sessionStorage.setItem(key, JSON.stringify(merged));
          } catch {}
          navigate(`/get-started/${serviceKey}`);
        }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        <input
          className="w-full h-11 rounded-md border px-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full h-11 rounded-md border px-3"
          placeholder="Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          className="w-full h-11 rounded-md border px-3"
          placeholder="City/Pincode"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button className="w-full sm:col-span-2 h-11 rounded-md bg-gray-900 text-white px-4 hover:bg-black">
          Get Started Now
        </button>
      </form>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-700">
        <span className="px-2 py-1 rounded-full border bg-white">
          ⭐ 4.5/5 Google Rating
        </span>
        <span className="px-2 py-1 rounded-full border bg-white">
          ✅ MCA Approved Experts
        </span>
        <span className="px-2 py-1 rounded-full border bg-white">
          🚀 10L+ Companies Registered
        </span>
      </div>
    </div>
  );
}

export default LLPRegistration;
