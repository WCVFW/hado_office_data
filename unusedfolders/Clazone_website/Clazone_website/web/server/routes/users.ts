import { RequestHandler } from "express";
import { db } from "../db";

export type UserProfile = {
  email: string;
  name: string;
  phone: string | null;
  created_at: string;
};

let memProfiles: UserProfile[] = [];
export const getMemProfiles = () => memProfiles;

export const upsertProfile: RequestHandler = async (req, res) => {
  const { email, name, phone } = req.body as Partial<UserProfile>;
  if (!email || !name)
    return res.status(400).json({ error: "email and name are required" });
  if (!db.enabled || !db.pool) {
    const existing = memProfiles.find(
      (p) => p.email.toLowerCase() === email.toLowerCase(),
    );
    if (existing) {
      existing.name = name;
      existing.phone = phone ?? existing.phone;
      return res.json(existing);
    }
    const profile: UserProfile = {
      email,
      name,
      phone: phone ?? null,
      created_at: new Date().toISOString(),
    };
    memProfiles.unshift(profile);
    return res.status(201).json(profile);
  }
  await db.pool.query(
    "INSERT INTO user_profiles (email, name, phone) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE name = VALUES(name), phone = VALUES(phone)",
    [email, name, phone ?? null],
  );
  const [rows] = await db.pool.query(
    "SELECT email, name, phone, created_at FROM user_profiles WHERE email = ?",
    [email],
  );
  // @ts-ignore
  const row = Array.isArray(rows) ? rows[0] : rows;
  res.json(row);
};

export const getProfile: RequestHandler = async (req, res) => {
  const email = (req.query.email as string | undefined)?.trim();
  if (!email) return res.status(400).json({ error: "email is required" });
  if (!db.enabled || !db.pool) {
    const profile = memProfiles.find(
      (p) => p.email.toLowerCase() === email.toLowerCase(),
    );
    return res.json(profile ?? null);
  }
  const [rows] = await db.pool.query(
    "SELECT email, name, phone, created_at FROM user_profiles WHERE email = ?",
    [email],
  );
  // @ts-ignore
  const row = Array.isArray(rows) ? rows[0] : rows;
  res.json(row ?? null);
};
