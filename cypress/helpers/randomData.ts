/**
 * Random Data Helpers
 * QA Pulse by SK - www.skakarh.com
 */

export function randomString(length = 8): string {
  return Math.random().toString(36).substring(2, length + 2);
}

export function randomEmail(): string {
  return `test.${randomString(6)}@qapulse.dev`;
}

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomName(): string {
  const first = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
  const last = ["Smith", "Jones", "Khan", "Lee", "Brown"];
  return `${first[randomInt(0, 4)]} ${last[randomInt(0, 4)]}`;
}

export function timestamp(): string {
  return new Date().toISOString().replace(/[:.]/g, "-");
}
