import React, { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { Service } from "@shared/api";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { formatINR } from "@/lib/currency";

export default function Checkout() {
  const { data: services } = useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      const r = await fetch("/api/services");
      return r.json();
    },
  });

  const [serviceId, setServiceId] = useState<number | "">("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [paymentTab, setPaymentTab] = useState<"upi" | "card" | "bank">("upi");
  const [selectedUpiApp, setSelectedUpiApp] = useState<string>("gpay");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const r = await fetch('/api/auth/me', { credentials: 'include' });
        if (!mounted) return;
        if (!r.ok) {
          navigate(`/login?redirect=${encodeURIComponent(location.pathname + location.search)}`);
          return;
        }
        const user = await r.json();
        if (!mounted) return;
        if (!user) {
          navigate(`/login?redirect=${encodeURIComponent(location.pathname + location.search)}`);
        }
      } catch (err) {
        if (mounted) navigate(`/login?redirect=${encodeURIComponent(location.pathname + location.search)}`);
      }
    })();
    return () => { mounted = false; };
  }, [navigate, location]);

  useEffect(() => {
    const savedEmail = localStorage.getItem("bizsuite_user_email") || "";
    const savedName = localStorage.getItem("bizsuite_user_name") || "";
    if (savedEmail) setEmail(savedEmail);
    if (savedName) setName(savedName);

    const sp = new URLSearchParams(location.search);
    const plan = sp.get("plan") || "";
    const amt = sp.get("amount");
    const svc = sp.get("service");
    const base = sp.get("base");
    const discount = sp.get("discount");
    if (plan) setSelectedPlan(plan);
    if (amt && !Number.isNaN(Number(amt))) setAmount(Number(amt));

    // Apply presets for known plans
    if (plan === "consultation") {
      const baseFee = base ? Number(base) : 999;
      const disc = discount ? Number(discount) : 500;
      const subtotal = Math.max(0, baseFee - disc);
      const taxesAndCharges = Math.round(subtotal * 0.072); // example computation
      const labour = 30;
      const labourGst = Math.ceil(labour * 0.18);
      const total = subtotal + taxesAndCharges + labour + labourGst;
      setAmount(total);
      // store breakdown in notes for display
      setNotes(JSON.stringify({ baseFee, disc, subtotal, taxesAndCharges, labour, labourGst }));
      setSelectedPlan("Consult an expert");
    }

    if (plan === "digital-signature") {
      const baseFee = base ? Number(base) : 1499;
      const disc = discount ? Number(discount) : 0;
      const subtotal = Math.max(0, baseFee - disc);
      const taxesAndCharges = Math.round(subtotal * 0.263); // sample higher taxes to match example
      const labour = 105;
      const labourGst = Math.ceil(labour * 0.18);
      const total = subtotal + taxesAndCharges + labour + labourGst;
      setAmount(total);
      setNotes(JSON.stringify({ baseFee, disc, subtotal, taxesAndCharges, labour, labourGst }));
      setSelectedPlan("Digital Signature Consultation");
    }

    try {
      if (svc) {
        const saved = JSON.parse(
          sessionStorage.getItem(`onboarding.${svc}`) || "{}",
        );
        if (saved.email && !savedEmail) setEmail(saved.email);
        if (saved.companyName && !savedName) setName(saved.companyName);
        if (saved.phone) setPhone(saved.phone);
      }
    } catch {}
  }, [location.search]);

  async function loadRazorpay() {
    if ((window as any).Razorpay) return true;
    return new Promise<boolean>((resolve) => {
      const s = document.createElement("script");
      s.src = "https://checkout.razorpay.com/v1/checkout.js";
      s.onload = () => resolve(true);
      s.onerror = () => resolve(false);
      document.body.appendChild(s);
    });
  }

  const mutation = useMutation({
    mutationFn: async () => {
      // ensure user is logged in before creating order
      const me = await fetch('/api/auth/me', { credentials: 'include' })
        .then((r) => (r.ok ? r.json() : null))
        .catch(() => null);
      if (!me) {
        navigate(`/login?redirect=${encodeURIComponent(location.pathname + location.search)}`);
        throw new Error('login required');
      }

      const ok = await loadRazorpay();
      if (!ok) throw new Error("Razorpay SDK failed to load");
      const keyRes = await fetch("/api/payments/key");
      const { keyId } = await keyRes.json();
      const create = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amount || 0,
          service_id: serviceId || undefined,
          user_email: email,
          user_name: name,
          phone,
        }),
      });
      const { order } = await create.json();

      return new Promise<void>((resolve, reject) => {
        const rz = new (window as any).Razorpay({
          key: keyId,
          amount: order.amount,
          currency: order.currency,
          name: "BizSuite",
          description: "Service Payment",
          order_id: order.id,
          prefill: { name, email, contact: phone },
          handler: async (response: any) => {
            try {
              await fetch("/api/payments/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              });
              resolve();
            } catch (e) {
              reject(e);
            }
          },
        });
        rz.open();
      });
    },
    onSuccess: () => {
      toast.success("Payment successful. Thank you!");
      localStorage.setItem("bizsuite_user_email", email);
      localStorage.setItem("bizsuite_user_name", name);
      setServiceId("");
      setAmount("");
      setNotes("");
    },
  });

  const disabled = useMemo(
    () => !name || !email || mutation.isPending || (!serviceId && !amount),
    [name, email, serviceId, amount, mutation.isPending],
  );

  return (
    <div>
      <SEO
        title="Checkout | BizSuite"
        description="Securely request a service and receive payment instructions via email."
        keywords={["checkout", "payment", "services"]}
      />
      <header className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold">Checkout</h1>
          <p className="mt-2 text-white/80">
            Select a service and submit your request. We'll send payment
            options.
          </p>
        </div>
      </header>
      <div className="container py-10 grid md:grid-cols-2 gap-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutation.mutate();
          }}
          className="rounded-xl border bg-white p-6 space-y-4"
        >
          {selectedPlan ? (
            <div className="rounded-md border p-3 bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">Selected Plan</div>
                  <div className="font-semibold">{selectedPlan}</div>
                </div>
                {amount ? (
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Payable Now</div>
                    <div className="font-semibold">{formatINR(amount)}</div>
                  </div>
                ) : null}
              </div>

              {/* Payment method tabs */}
              <div className="mt-4">
                <div className="flex gap-2">
                  <button type="button" onClick={() => setPaymentTab("upi")} className={`px-3 py-2 rounded-md ${paymentTab==="upi"?"bg-black text-white":"border"}`}>UPI</button>
                  <button type="button" onClick={() => setPaymentTab("card")} className={`px-3 py-2 rounded-md ${paymentTab==="card"?"bg-black text-white":"border"}`}>CARD</button>
                  <button type="button" onClick={() => setPaymentTab("bank")} className={`px-3 py-2 rounded-md ${paymentTab==="bank"?"bg-black text-white":"border"}`}>NETBANKING</button>
                </div>

                <div className="mt-3">
                  {paymentTab === "upi" && (
                    <div className="space-y-2">
                      <div className="text-sm text-gray-600">Select UPI App</div>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => setSelectedUpiApp("gpay")} className={`px-3 py-2 rounded-md ${selectedUpiApp==="gpay"?"bg-black text-white":"border"}`}>GPay</button>
                        <button type="button" onClick={() => setSelectedUpiApp("phonepe")} className={`px-3 py-2 rounded-md ${selectedUpiApp==="phonepe"?"bg-black text-white":"border"}`}>PhonePe</button>
                        <button type="button" onClick={() => setSelectedUpiApp("paytm")} className={`px-3 py-2 rounded-md ${selectedUpiApp==="paytm"?"bg-black text-white":"border"}`}>Paytm</button>
                        <button type="button" onClick={() => setSelectedUpiApp("other")} className={`px-3 py-2 rounded-md ${selectedUpiApp==="other"?"bg-black text-white":"border"}`}>Other UPI</button>
                      </div>
                    </div>
                  )}

                  {paymentTab === "card" && (
                    <div className="text-sm text-gray-600">Pay with Credit/Debit/ATM Card (Visa, MasterCard, Rupay)</div>
                  )}

                  {paymentTab === "bank" && (
                    <div className="text-sm text-gray-600">Pay using Netbanking (all Indian banks)</div>
                  )}
                </div>

                <div className="mt-4 border-t pt-3 text-sm space-y-2">
                  {/* Breakdown */}
                  {notes ? (() => {
                    try {
                      const b = JSON.parse(notes);
                      return (
                        <div>
                          <div className="flex justify-between"><span>Consultation Fee (GST incl)</span><span>{formatINR(b.baseFee)}</span></div>
                          <div className="flex justify-between text-emerald-600"><span>Discount</span><span>-{formatINR(b.disc)}</span></div>
                          <div className="flex justify-between"><span>Sub Total Amount</span><span>{formatINR(b.subtotal)}</span></div>
                          <div className="flex justify-between"><span>Taxes &amp; Charges</span><span>{formatINR(b.taxesAndCharges)}</span></div>
                          <div className="flex justify-between"><span>Labour Welfare</span><span>{formatINR(b.labour)}</span></div>
                          <div className="flex justify-between"><span>GST on labour welfare (18%)</span><span>{formatINR(b.labourGst)}</span></div>
                          <div className="flex justify-between font-bold text-lg mt-2"><span>Total Amount</span><span>{formatINR(amount)}</span></div>
                        </div>
                      );
                    } catch {
                      return null;
                    }
                  })() : (
                    <div className="flex justify-between"><span>Amount</span><span>{formatINR(amount)}</span></div>
                  )}
                </div>

                <div className="mt-4">
                  <button
                    disabled={mutation.isPending}
                    className="w-full rounded-md bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700"
                    onClick={(e) => { e.preventDefault(); mutation.mutate(); }}
                  >
                    {paymentTab === "upi" ? `PAY ${formatINR(amount)}` : `PAY ${formatINR(amount)}`}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <select
              className="w-full rounded-md border px-3 py-2"
              value={serviceId}
              onChange={(e) =>
                setServiceId(e.target.value ? Number(e.target.value) : "")
              }
              required
            >
              <option value="">Select a service</option>
              {services?.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} — {formatINR(s.price)}
                </option>
              ))}
            </select>
          )}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="rounded-md border px-3 py-2"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="rounded-md border px-3 py-2"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <input
            className="rounded-md border px-3 py-2 w-full"
            placeholder="Phone (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="rounded-md border px-3 py-2"
              type="number"
              step="0.01"
              placeholder="Amount (optional)"
              value={amount as any}
              onChange={(e) =>
                setAmount(e.target.value ? Number(e.target.value) : "")
              }
            />
            <select className="rounded-md border px-3 py-2" defaultValue="upi">
              <option value="upi">UPI</option>
              <option value="bank">Bank Transfer</option>
              <option value="card">Card</option>
            </select>
          </div>
          <textarea
            className="rounded-md border px-3 py-2 h-28"
            placeholder="Notes or requirements"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <button
            disabled={disabled}
            className="w-full rounded-md bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700"
          >
            {mutation.isPending ? "Submitting..." : "Submit Request"}
          </button>
          <p className="text-xs text-muted-foreground">
            For live payments with cards/UPI, connect Stripe or Razorpay later.
          </p>
        </form>
        <aside className="space-y-4">
          <div className="rounded-xl border p-6 bg-white">
            <h2 className="font-semibold">Need help?</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Have questions about pricing or scope? Submit the form and our
              experts will reach out with a custom quote.
            </p>
            <Link
              to="/faq"
              className="mt-4 inline-block text-indigo-600 hover:underline text-sm"
            >
              Read FAQs →
            </Link>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <h2 className="font-semibold">Track your requests</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Use your email to view submissions and status.
            </p>
            <Link
              to="/my-requests"
              className="mt-4 inline-block text-indigo-600 hover:underline text-sm"
            >
              My Requests →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
