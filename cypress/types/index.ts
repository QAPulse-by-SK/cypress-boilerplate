/**
 * Shared TypeScript Types & Interfaces
 * QA Pulse by SK - www.skakarh.com
 */

export interface User {
  username: string;
  password: string;
}

export interface Post {
  id?: number;
  userId: number;
  title: string;
  body: string;
}

export interface Comment {
  id?: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface ApiResponse<T> {
  body: T;
  status: number;
  headers: Record<string, string>;
}

export type ImpactLevel = "critical" | "serious" | "moderate" | "minor";
export type WcagTag =
  | "wcag2a"
  | "wcag2aa"
  | "wcag21a"
  | "wcag21aa"
  | "wcag22aa"
  | "best-practice"
  | "cat.color";

export interface A11yOptions {
  tags?: WcagTag[];
  includedImpacts?: ImpactLevel[];
  exclude?: string[];
}
