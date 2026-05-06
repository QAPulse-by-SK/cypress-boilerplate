/**
 * Logger - Structured test logging utility
 * QA Pulse by SK - www.skakarh.com
 */

type LogLevel = "info" | "warn" | "error" | "success" | "step" | "debug";

const PREFIX = "🎯 [QA Pulse]";

const ICONS: Record<LogLevel, string> = {
  info:    "ℹ️ ",
  warn:    "⚠️ ",
  error:   "❌",
  success: "✅",
  step:    "▶️ ",
  debug:   "🔍",
};

function log(level: LogLevel, message: string, data?: unknown): void {
  const icon = ICONS[level];
  const timestamp = new Date().toISOString().split("T")[1].slice(0, 8);
  const msg = `${PREFIX} ${icon} [${timestamp}] ${message}`;
  if (level === "error") {
    console.error(msg, data ?? "");
  } else {
    console.log(msg, data ?? "");
  }
  Cypress.log({ name: level.toUpperCase(), message: `${icon} ${message}` });
}

export const logger = {
  info:    (msg: string, data?: unknown) => log("info",    msg, data),
  warn:    (msg: string, data?: unknown) => log("warn",    msg, data),
  error:   (msg: string, data?: unknown) => log("error",   msg, data),
  success: (msg: string, data?: unknown) => log("success", msg, data),
  step:    (msg: string, data?: unknown) => log("step",    msg, data),
  debug:   (msg: string, data?: unknown) => log("debug",   msg, data),
};
