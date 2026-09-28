import React, { useEffect, useMemo, useState } from "react";
import SEO from "@/components/SEO";
import { useNavigate, Link } from "react-router-dom";
import { formatINR } from "@/lib/currency";

type CartItem = { service: string; plan: string; amount: number; name?: string };

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const raw = localStorage.getItem("bizsuite_cart") || "[]";
      const parsed = JSON.parse(raw) as CartItem[];
      setItems(Array.isArray(parsed) ? parsed : []);
    } catch (err) {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    // update storage when items change
    try {
      localStorage.setItem("bizsuite_cart", JSON.stringify(items));
      window.dispatchEvent(new Event('cart_updated'));
    } catch {}
  }, [items]);

  const total = useMemo(() => items.reduce((s, i) => s + (i.amount || 0), 0), [items]);

  function removeAt(idx: number) {
    const copy = items.slice();
    copy.splice(idx, 1);
    setItems(copy);
  }

  function proceedToCheckout() {
    if (items.length === 0) return;
    const q = new URLSearchParams({ amount: String(total) });
    navigate(`/checkout?${q.toString()}`);
  }

  return (
    <div>
      <SEO title="Cart | BizSuite" description="Your selected plans" />
      <header className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-12">
        <div className="container">
          <h1 className="text-3xl font-bold">Cart</h1>
          <p className="mt-2 text-white/80">Review your selected plans before checkout.</p>
        </div>
      </header>
      <div className="container py-10">
        <div className="max-w-3xl mx-auto">
          {items.length === 0 ? (
            <div className="rounded-xl border bg-white p-6 text-center">
              <p className="text-muted-foreground">Your cart is empty.</p>
              <Link to="/plans/plc" className="mt-4 inline-block text-indigo-600">Browse plans</Link>
            </div>
          ) : (
            <div className="rounded-xl border bg-white p-6">
              <ul className="divide-y">
                {items.map((it, i) => (
                  <li key={i} className="py-4 flex justify-between items-center">
                    <div>
                      <div className="font-medium">{it.plan} — {it.service}</div>
                      <div className="text-sm text-muted-foreground">{it.name || ''}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{formatINR(it.amount)}</div>
                      <button className="text-sm text-destructive mt-2" onClick={() => removeAt(i)}>Remove</button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-lg font-semibold">Total</div>
                <div className="text-2xl font-extrabold">{formatINR(total)}</div>
              </div>

              <div className="mt-6 flex gap-3">
                <button onClick={proceedToCheckout} className="flex-1 rounded-md bg-emerald-600 text-white px-4 py-2">Proceed to Checkout</button>
                <Link to="/plans/plc" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2">Continue shopping</Link>
              </div>
            </div>
          )}
          {error && <p className="text-destructive mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
}
