import { chromium } from "@playwright/test";
import { writeFileSync, mkdirSync } from "fs";

const BASE = "http://localhost:3001";
const OUT = "./scripts/screenshots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await ctx.newPage();

async function shot(name, url, setup) {
  console.log(`→ ${name}`);
  await page.goto(url, { waitUntil: "networkidle" });
  if (setup) await setup(page);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });
  console.log(`  saved ${OUT}/${name}.png`);
}

// Landing
await shot("01-landing", `${BASE}/`);

// Landing scrolled
await shot("02-landing-features", `${BASE}/`, async (p) => {
  await p.evaluate(() => window.scrollTo(0, 600));
});

// Chat
await shot("03-chat", `${BASE}/chat`);

// Admin login
await shot("04-admin-login", `${BASE}/admin/login`);

// Admin login with wrong creds
await shot("05-admin-login-error", `${BASE}/admin/login`, async (p) => {
  await p.fill('[type="email"]', "wrong@test.com");
  await p.fill('[type="password"]', "bad");
  await p.click('[type="submit"]');
  await p.waitForTimeout(1200);
});

// Do login
await page.goto(`${BASE}/admin/login`);
await page.fill('[type="email"]', "barbero@test.com");
await page.fill('[type="password"]', "123");
await page.click('[type="submit"]');
await page.waitForURL("**/admin/dashboard", { timeout: 5000 });

// Dashboard
await shot("06-dashboard", `${BASE}/admin/dashboard`);

// Calendar
await shot("07-calendar", `${BASE}/admin/calendar`);

// Clients
await shot("08-clients", `${BASE}/admin/clients`);

// Clients search
await shot("09-clients-search", `${BASE}/admin/clients`, async (p) => {
  await p.fill('[type="text"]', "carlos");
  await p.waitForTimeout(300);
});

// Barbers
await shot("10-barbers", `${BASE}/admin/barbers`);

// Settings
await shot("11-settings", `${BASE}/admin/settings`);

// Settings assistant tab
await shot("12-settings-assistant", `${BASE}/admin/settings`, async (p) => {
  await p.getByText("Asistente IA").click();
  await p.waitForTimeout(300);
});

await browser.close();
console.log("\nDone.");
