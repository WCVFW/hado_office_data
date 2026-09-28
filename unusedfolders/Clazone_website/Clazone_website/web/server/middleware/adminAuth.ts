import { RequestHandler } from "express";

export const adminAuth: RequestHandler = (req, res, next) => {
  const header = req.headers["authorization"] || "";
  const token = header.toString().startsWith("Bearer ")
    ? header.toString().slice(7)
    : null;
  const expected = process.env.ADMIN_TOKEN;
  if (!expected) {
    // Allow all in development if no token set, but warn
    console.warn(
      "ADMIN_TOKEN not set - allowing all requests to admin endpoints in dev mode",
    );
    return next();
  }
  if (token && token === expected) return next();
  return res.status(401).json({ error: "Unauthorized" });
};
