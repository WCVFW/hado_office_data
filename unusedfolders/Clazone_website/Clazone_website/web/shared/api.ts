/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  active: boolean;
  created_at: string; // ISO for in-memory, string for MySQL timestamp
  updated_at: string;
}

export interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  service_id: number | null;
  created_at: string;
}
