// Base path the app is served from ("/" locally, "/<repo>/" on GitHub Pages).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

// Absolute URL of the app root, used for auth redirects and invite links.
export const APP_URL = `${window.location.origin}${BASE}`;

// Current pathname with the base path removed, so routes match in any deployment.
export function appPathname() {
  const p = window.location.pathname;
  return BASE && p.startsWith(BASE) ? p.slice(BASE.length) || "/" : p;
}
