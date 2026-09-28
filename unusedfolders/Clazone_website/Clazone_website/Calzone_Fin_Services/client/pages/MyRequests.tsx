import SEO from "@/components/SEO";
import type { Inquiry } from "@shared/api";
import React, { useEffect, useState } from "react";
import { formatINR } from "@/lib/currency";
import { Link } from "react-router-dom";

interface Order {
  id: number;
  user_email: string;
  user_name: string;
  phone: string | null;
  service_id: number | null;
  amount: number;
  status: string;
  created_at: string;
}
interface Profile {
  email: string;
  name: string;
  phone: string | null;
  created_at: string;
}
interface Certificate {
  id: number;
  user_email: string;
  title: string;
  issued_at: string;
  reference: string | null;
  file_url: string | null;
}

export default function MyRequests() {
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState<Profile | null>(null);
  const [items, setItems] = useState<Inquiry[] | null>(null);
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [certs, setCerts] = useState<Certificate[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const r = await fetch("/api/auth/me", { credentials: "include" });
        if (!mounted) return;
        const user = r.ok ? await r.json() : null;
        const e =
          (user && user.email) ||
          localStorage.getItem("bizsuite_user_email") ||
          "";
        setEmail(e);
        if (e) {
          try {
            const p = await fetch(
              `/api/user/profile?email=${encodeURIComponent(e)}`,
            );
            if (p.ok) setProfile(await p.json());
          } catch (err) {
            setError(String(err));
          }
          try {
            const q = await fetch(
              `/api/inquiries/self?email=${encodeURIComponent(e)}`,
            );
            if (q.ok) setItems(await q.json());
          } catch (err) {
            setError(String(err));
          }
          try {
            const o = await fetch(
              `/api/orders/self?email=${encodeURIComponent(e)}`,
            );
            if (o.ok) setOrders(await o.json());
          } catch (err) {
            setError(String(err));
          }
          try {
            const c = await fetch(
              `/api/certificates/self?email=${encodeURIComponent(e)}`,
            );
            if (c.ok) setCerts(await c.json());
          } catch (err) {
            setError(String(err));
          }
        }
      } catch (err) {
        const e = localStorage.getItem("bizsuite_user_email") || "";
        setEmail(e);
        if (e) {
          try {
            const p = await fetch(
              `/api/user/profile?email=${encodeURIComponent(e)}`,
            );
            if (p.ok) setProfile(await p.json());
          } catch (err) {
            setError(String(err));
          }
          try {
            const q = await fetch(
              `/api/inquiries/self?email=${encodeURIComponent(e)}`,
            );
            if (q.ok) setItems(await q.json());
          } catch (err) {
            setError(String(err));
          }
          try {
            const o = await fetch(
              `/api/orders/self?email=${encodeURIComponent(e)}`,
            );
            if (o.ok) setOrders(await o.json());
          } catch (err) {
            setError(String(err));
          }
          try {
            const c = await fetch(
              `/api/certificates/self?email=${encodeURIComponent(e)}`,
            );
            if (c.ok) setCerts(await c.json());
          } catch (err) {
            setError(String(err));
          }
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <SEO
        title="My Requests | BizSuite"
        description="View requests submitted with your email."
      />
      <header className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold">My Requests</h1>
          <p className="mt-2 text-white/80">
            Tracking email: {email || "Not set"}
          </p>
        </div>
      </header>
      <div className="container py-10 grid md:grid-cols-2 gap-8">
        <section className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-3">Account Details</h2>
          {!email ? (
            <p className="text-muted-foreground">
              Please{" "}
              <Link className="text-indigo-600 hover:underline" to="/login">
                login
              </Link>{" "}
              with your email.
            </p>
          ) : !profile ? (
            <p className="text-muted-foreground">
              No profile yet. Save details on the{" "}
              <Link className="text-indigo-600 hover:underline" to="/login">
                Login
              </Link>{" "}
              page.
            </p>
          ) : (
            <div className="rounded-xl border bg-white p-4 grid md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Name</span>
                <p className="font-medium">{profile.name}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Email</span>
                <p className="font-medium">{profile.email}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Phone</span>
                <p className="font-medium">{profile.phone || "—"}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Registration Date</span>
                <p className="font-medium">
                  {new Date(profile.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          )}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Enquiry History</h2>
          {!email ? (
            <p className="text-muted-foreground">
              Please{" "}
              <Link className="text-indigo-600 hover:underline" to="/login">
                login
              </Link>{" "}
              with your email.
            </p>
          ) : !items ? (
            <p>Loading...</p>
          ) : items.length === 0 ? (
            <p className="text-muted-foreground">No requests found.</p>
          ) : error ? (
            <p className="text-destructive">{error}</p>
          ) : (
            <ul className="divide-y rounded-xl border bg-white">
              {items.map((q) => (
                <li key={q.id} className="p-4">
                  <p className="font-medium">
                    Service ID: {q.service_id ?? "—"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(q.created_at).toLocaleString()}
                  </p>
                  <p className="mt-2 text-sm">{q.message}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-3">Certificates</h2>
          {!email ? (
            <p className="text-muted-foreground">
              Please{" "}
              <Link className="text-indigo-600 hover:underline" to="/login">
                login
              </Link>
              .
            </p>
          ) : !certs ? (
            <p>Loading...</p>
          ) : certs.length === 0 ? (
            <p className="text-muted-foreground">No certificates found.</p>
          ) : (
            <ul className="divide-y rounded-xl border bg-white">
              {certs.map((c) => (
                <li key={c.id} className="p-4">
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-muted-foreground">
                    Issued: {new Date(c.issued_at).toLocaleDateString()}{" "}
                    {c.reference ? `• Ref: ${c.reference}` : ""}
                  </p>
                  {c.file_url && (
                    <a
                      className="text-indigo-600 hover:underline text-sm"
                      href={c.file_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-3">Orders & Payments</h2>
          {!email ? (
            <p className="text-muted-foreground">
              Please{" "}
              <Link className="text-indigo-600 hover:underline" to="/login">
                login
              </Link>{" "}
              with your email.
            </p>
          ) : !orders ? (
            <p>Loading...</p>
          ) : orders.length === 0 ? (
            <p className="text-muted-foreground">No orders found.</p>
          ) : (
            <ul className="divide-y rounded-xl border bg-white">
              {orders.map((o) => (
                <li key={o.id} className="p-4">
                  <p className="font-medium">
                    Service ID: {o.service_id ?? "—"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(o.created_at).toLocaleString()}
                  </p>
                  <p className="mt-1 text-sm">
                    Amount: {formatINR(o.amount)} • Status: {o.status}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
