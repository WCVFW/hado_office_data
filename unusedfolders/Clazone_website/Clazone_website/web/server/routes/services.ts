import { RequestHandler } from "express";
import { db } from "../db";
import type { Service } from "@shared/api";

let memServices: Service[] = [
  {
    id: 1,
    name: "Company Registration",
    description:
      "Register your business as Pvt Ltd, LLP, or OPC with expert help.",
    price: 199.0,
    active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "GST Filing",
    description: "Monthly and quarterly GST return filing by certified CAs.",
    price: 49.0,
    active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];
let memNextId = memServices.length + 1;
export const getMemServices = () => memServices;

export const listServices: RequestHandler = async (_req, res) => {
  if (!db.enabled || !db.pool) return res.json(memServices);
  const [rows] = await db.pool.query(
    "SELECT id, name, description, price, active, created_at, updated_at FROM services WHERE active = 1 ORDER BY id DESC",
  );
  res.json(rows);
};

export const adminListServices: RequestHandler = async (_req, res) => {
  if (!db.enabled || !db.pool) return res.json(memServices);
  const [rows] = await db.pool.query(
    "SELECT id, name, description, price, active, created_at, updated_at FROM services ORDER BY id DESC",
  );
  res.json(rows);
};

export const createService: RequestHandler = async (req, res) => {
  const { name, description, price, active } = req.body as Partial<Service>;
  if (!name || !description)
    return res.status(400).json({ error: "name and description are required" });
  const p = Number(price ?? 0);
  const a = active === false ? 0 : 1;
  if (!db.enabled || !db.pool) {
    const s: Service = {
      id: memNextId++,
      name,
      description,
      price: p,
      active: !!a,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    memServices.unshift(s);
    return res.status(201).json(s);
  }
  const [result] = await db.pool.query(
    "INSERT INTO services (name, description, price, active) VALUES (?, ?, ?, ?)",
    [name, description, p, a],
  );
  // @ts-ignore
  const id = result.insertId as number;
  const [rows] = await db.pool.query(
    "SELECT id, name, description, price, active, created_at, updated_at FROM services WHERE id = ?",
    [id],
  );
  const row = Array.isArray(rows) ? rows[0] : rows;
  res.status(201).json(row);
};

export const updateService: RequestHandler = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) return res.status(400).json({ error: "invalid id" });
  const { name, description, price, active } = req.body as Partial<Service>;
  if (!db.enabled || !db.pool) {
    const idx = memServices.findIndex((s) => s.id === id);
    if (idx === -1) return res.status(404).json({ error: "not found" });
    memServices[idx] = {
      ...memServices[idx],
      name: name ?? memServices[idx].name,
      description: description ?? memServices[idx].description,
      price: price ?? memServices[idx].price,
      active: typeof active === "boolean" ? active : memServices[idx].active,
      updated_at: new Date().toISOString(),
    };
    return res.json(memServices[idx]);
  }
  const fields: string[] = [];
  const values: any[] = [];
  if (name !== undefined) {
    fields.push("name = ?");
    values.push(name);
  }
  if (description !== undefined) {
    fields.push("description = ?");
    values.push(description);
  }
  if (price !== undefined) {
    fields.push("price = ?");
    values.push(Number(price));
  }
  if (active !== undefined) {
    fields.push("active = ?");
    values.push(active ? 1 : 0);
  }
  if (!fields.length) return res.status(400).json({ error: "no fields" });
  values.push(id);
  await db.pool.query(
    `UPDATE services SET ${fields.join(", ")} WHERE id = ?`,
    values,
  );
  const [rows] = await db.pool.query(
    "SELECT id, name, description, price, active, created_at, updated_at FROM services WHERE id = ?",
    [id],
  );
  const row = Array.isArray(rows) ? rows[0] : rows;
  if (!row) return res.status(404).json({ error: "not found" });
  res.json(row);
};

export const deleteService: RequestHandler = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) return res.status(400).json({ error: "invalid id" });
  if (!db.enabled || !db.pool) {
    const idx = memServices.findIndex((s) => s.id === id);
    if (idx === -1) return res.status(404).json({ error: "not found" });
    const deleted = memServices.splice(idx, 1)[0];
    return res.json(deleted);
  }
  await db.pool.query("DELETE FROM services WHERE id = ?", [id]);
  res.json({ ok: true });
};
