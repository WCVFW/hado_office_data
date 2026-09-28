import { RequestHandler } from "express";
import Razorpay from "razorpay";
import crypto from "crypto";
import { db } from "../db";

function getKeys() {
  return {
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
    webhook_secret: process.env.RAZORPAY_WEBHOOK_SECRET,
  } as const;
}

function getRazorpayClient() {
  const { key_id, key_secret } = getKeys();
  if (!key_id || !key_secret) return null;
  try {
    return new Razorpay({ key_id, key_secret });
  } catch {
    return null;
  }
}

export const getPublicKey: RequestHandler = (_req, res) => {
  const { key_id } = getKeys();
  res.json({ keyId: key_id ?? "" });
};

export const createRazorpayOrder: RequestHandler = async (req, res) => {
  const client = getRazorpayClient();
  if (!client)
    return res.status(503).json({ error: "Razorpay not configured" });

  const {
    amount,
    currency = "INR",
    service_id,
    user_email,
    user_name,
    phone,
  } = req.body as any;
  const amt = Number(amount);
  if (!amt || !isFinite(amt))
    return res.status(400).json({ error: "amount required" });
  const receipt = `order_${Date.now()}`;
  const order = await client.orders.create({
    amount: Math.round(amt * 100),
    currency,
    receipt,
  });

  // Create local order record
  if (!db.enabled || !db.pool) {
    return res.json({ order });
  }
  await db.pool.query(
    "INSERT INTO orders (user_email, user_name, phone, service_id, amount, status, razorpay_order_id) VALUES (?, ?, ?, ?, ?, 'created', ?)",
    [
      user_email ?? null,
      user_name ?? null,
      phone ?? null,
      service_id ?? null,
      amt,
      order.id,
    ],
  );
  res.json({ order });
};

export const verifyPayment: RequestHandler = async (req, res) => {
  const { key_secret } = getKeys();
  if (!key_secret)
    return res.status(503).json({ error: "Razorpay not configured" });

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body as any;
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature)
    return res.status(400).json({ error: "missing params" });
  const hmac = crypto
    .createHmac("sha256", key_secret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");
  const valid = hmac === razorpay_signature;
  if (!valid) return res.status(400).json({ error: "invalid signature" });

  if (db.enabled && db.pool) {
    const [rows] = await db.pool.query(
      "SELECT id, amount FROM orders WHERE razorpay_order_id = ?",
      [razorpay_order_id],
    );
    const arr: any[] = Array.isArray(rows) ? (rows as any[]) : [];
    const row: any = arr[0];
    if (row) {
      await db.pool.query("UPDATE orders SET status = 'paid' WHERE id = ?", [
        row.id,
      ]);
      await db.pool.query(
        "INSERT INTO payments (order_id, amount, method, status, gateway_order_id, gateway_payment_id) VALUES (?, ?, 'razorpay', 'paid', ?, ?)",
        [row.id, row.amount, razorpay_order_id, razorpay_payment_id],
      );
    }
  }
  res.json({ ok: true });
};

export const webhook: RequestHandler = async (req, res) => {
  const { webhook_secret } = getKeys();
  if (!webhook_secret)
    return res.status(503).json({ error: "Razorpay not configured" });

  const signature = req.headers["x-razorpay-signature"]; // @ts-ignore
  const payload = JSON.stringify(req.body);
  const expected = crypto
    .createHmac("sha256", webhook_secret)
    .update(payload)
    .digest("hex");
  if (signature !== expected) return res.status(400).json({ error: "invalid" });
  // Handle events as needed
  res.json({ ok: true });
};
