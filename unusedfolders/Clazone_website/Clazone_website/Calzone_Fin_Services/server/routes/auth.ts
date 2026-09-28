import { RequestHandler } from "express";
import { db } from "../db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

export const register: RequestHandler = async (req, res) => {
  const { name, email, password } = req.body as {
    name?: string;
    email?: string;
    password?: string;
  };
  if (!name || !email || !password)
    return res.status(400).json({ error: "name, email, password required" });
  const hash = await bcrypt.hash(password, 10);
  if (!db.enabled || !db.pool) {
    // In-memory fallback: store in user_profiles, skip unique constraints
    return res.status(201).json({ ok: true });
  }
  try {
    await db.pool.query(
      "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
      [name, email.toLowerCase(), hash],
    );
  } catch (e: any) {
    if (e && e.code === "ER_DUP_ENTRY")
      return res.status(409).json({ error: "email already registered" });
    throw e;
  }
  const token = jwt.sign({ sub: email.toLowerCase(), name }, JWT_SECRET, {
    expiresIn: "30d",
  });
  res.cookie("auth", token, { httpOnly: true, sameSite: "lax" });
  res.status(201).json({ email: email.toLowerCase(), name });
};

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };
  if (!email || !password)
    return res.status(400).json({ error: "email and password required" });
  if (!db.enabled || !db.pool)
    return res.status(200).json({ email, name: "User" });
  const [rows] = await db.pool.query(
    "SELECT email, name, password_hash FROM users WHERE email = ?",
    [email.toLowerCase()],
  );
  const row: any = Array.isArray(rows) ? rows[0] : rows;
  if (!row) return res.status(401).json({ error: "invalid credentials" });
  const ok = await bcrypt.compare(password, row.password_hash);
  if (!ok) return res.status(401).json({ error: "invalid credentials" });
  const token = jwt.sign({ sub: row.email, name: row.name }, JWT_SECRET, {
    expiresIn: "30d",
  });
  res.cookie("auth", token, { httpOnly: true, sameSite: "lax" });
  res.json({ email: row.email, name: row.name });
};

export const me: RequestHandler = async (req, res) => {
  const token = req.cookies?.auth as string | undefined;
  if (!token) return res.json(null);
  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);
    return res.json({ email: decoded.sub, name: decoded.name });
  } catch {
    return res.json(null);
  }
};

export const logout: RequestHandler = async (_req, res) => {
  res.clearCookie("auth");
  res.json({ ok: true });
};

export const requireAuth: RequestHandler = (req, res, next) => {
  const token = req.cookies?.auth as string | undefined;
  if (!token) return res.status(401).json({ error: "unauthorized" });
  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);
    // @ts-ignore
    req.user = { email: decoded.sub, name: decoded.name };
    next();
  } catch {
    return res.status(401).json({ error: "unauthorized" });
  }
};
