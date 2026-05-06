// @ts-check
/**
 * Logger - Structured test logging utility
 * QA Pulse by SK - www.skakarh.com
 */

const PREFIX = "🎯 [QA Pulse]";

const ICONS = {
  info:    "ℹ️ ",
  warn:    "⚠️ ",
  error:   "❌",
  success: "✅",
  step:    "▶️ ",
  debug:   "🔍",
};

/**
 * @param {"info"|"warn"|"error"|"success"|"step"|"debug"} level
 * @param {string} message
 * @param {unknown} [data]
 */
function log(level, message, data) {
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

const logger = {
  info:    (msg, data) => log("info",    msg, data),
  warn:    (msg, data) => log("warn",    msg, data),
  error:   (msg, data) => log("error",   msg, data),
  success: (msg, data) => log("success", msg, data),
  step:    (msg, data) => log("step",    msg, data),
  debug:   (msg, data) => log("debug",   msg, data),
};

module.exports = { logger };
