import { chromium } from "@playwright/test";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto("http://localhost:3001/admin/login", { waitUntil: "networkidle" });

// Check computed style of the submit button
const btn = await page.$('[type="submit"]');
const styles = await btn.evaluate((el) => {
  const s = getComputedStyle(el);
  return {
    backgroundColor: s.backgroundColor,
    color: s.color,
    display: s.display,
    opacity: s.opacity,
  };
});
console.log("Login button computed styles:", JSON.stringify(styles, null, 2));

// Check if --color-gold CSS var is set
const goldVar = await page.evaluate(() =>
  getComputedStyle(document.documentElement).getPropertyValue("--color-gold")
);
console.log("--color-gold CSS var:", JSON.stringify(goldVar));

// Check a bg-gold element on landing
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
const goldEl = await page.$(".bg-gold");
if (goldEl) {
  const s = await goldEl.evaluate((el) => ({
    backgroundColor: getComputedStyle(el).backgroundColor,
    text: el.textContent?.trim().slice(0, 40),
  }));
  console.log("First .bg-gold element:", JSON.stringify(s, null, 2));
} else {
  console.log(".bg-gold element: NOT FOUND in DOM");
}

await browser.close();
