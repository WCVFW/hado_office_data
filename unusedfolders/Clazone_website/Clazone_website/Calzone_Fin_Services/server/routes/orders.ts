import { RequestHandler } from "express";
import { db } from "../db";

export type Order = {
  id: number;
  user_email: string;
  user_name: string;
  phone: string | null;
  service_id: number | null;
  amount: number;
  status: string;
  created_at: string;
};

let memOrders: Order[] = [];
let memNextOrderId = 1;
export const getMemOrders = () => memOrders;

export const createOrder: RequestHandler = async (req, res) => {
  const { user_email, user_name, phone, service_id, amount } =
    req.body as Partial<Order>;
  if (!user_email || !user_name)
    return res
      .status(400)
      .json({ error: "user_email and user_name are required" });
  const amt = Number(amount ?? 0);
  const status = "pending";
  if (!db.enabled || !db.pool) {
    const order: Order = {
      id: memNextOrderId++,
      user_email,
      user_name,
      phone: phone ?? null,
      service_id: service_id ?? null,
      amount: isFinite(amt) ? amt : 0,
      status,
      created_at: new Date().toISOString(),
    };
    memOrders.unshift(order);
    return res.status(201).json(order);
  }
  const [result] = await db.pool.query(
    "INSERT INTO orders (user_email, user_name, phone, service_id, amount, status) VALUES (?, ?, ?, ?, ?, ?)",
    [
      user_email,
      user_name,
      phone ?? null,
      service_id ?? null,
      isFinite(amt) ? amt : 0,
      status,
    ],
  );
  // @ts-ignore
  const id = result.insertId as number;
  const [rows] = await db.pool.query(
    "SELECT id, user_email, user_name, phone, service_id, amount, status, created_at FROM orders WHERE id = ?",
    [id],
  );
  // @ts-ignore
  const row = Array.isArray(rows) ? rows[0] : rows;
  res.status(201).json(row);
};

export const listSelfOrders: RequestHandler = async (req, res) => {
  const email = (req.query.email as string | undefined)?.trim().toLowerCase();
  if (!email) return res.status(400).json({ error: "email is required" });
  if (!db.enabled || !db.pool) {
    const filtered = memOrders.filter(
      (o) => o.user_email.toLowerCase() === email,
    );
    return res.json(filtered);
  }
  const [rows] = await db.pool.query(
    "SELECT id, user_email, user_name, phone, service_id, amount, status, created_at FROM orders WHERE LOWER(user_email) = LOWER(?) ORDER BY id DESC",
    [email],
  );
  res.json(rows);
};
