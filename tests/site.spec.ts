import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const locale of ["pt", "en"]) {
  for (const suffix of ["", "/cv"]) {
    const path = `/${locale}${suffix}`;
    test(`${path}: server HTML, metadata, layout and accessibility in both themes`, async ({ page, request, browser }) => {
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      const response = await request.get(path);
      expect(response.status()).toBe(200);
      const html = await response.text();
      expect(html).toContain(`<html lang="${locale === "pt" ? "pt-BR" : "en"}"`);
      expect(html).toContain(`rel="canonical" href="https://leandcesar.vercel.app${path}"`);
      expect(html).toContain(`hrefLang="x-default" href="https://leandcesar.vercel.app/pt${suffix}"`);
      await page.goto(path);
      await expect(page.locator("h1")).toHaveText("Leandro César");
      const structured = await page.locator('script[type="application/ld+json"]').textContent();
      const graph = JSON.parse(structured!)["@graph"];
      expect(graph.map((entity: { "@type": string }) => entity["@type"])).toEqual(["Person", "WebSite", "ProfilePage"]);
      expect(graph[2].mainEntity["@id"]).toBe(graph[0]["@id"]);
      expect(graph[0].sameAs).toContain("https://github.com/leandcesar");
      for (const width of [320, 375, 768, 1366, 1920]) {
        await page.setViewportSize({ width, height: 900 });
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      }
      for (const theme of ["light", "dark"]) {
        await page.evaluate((value) => localStorage.setItem("cv-theme", value), theme);
        await page.reload();
        await page.setViewportSize({ width: 375, height: 812 });
        await expect(page.locator("html")).toHaveClass(theme === "dark" ? /dark/ : /light/);
        const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
        expect(results.violations).toEqual([]);
      }
      // 200% text size exercises reflow independently of viewport-only emulation.
      await page.evaluate(() => { document.documentElement.style.fontSize = "200%"; });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      expect(errors).toEqual([]);
      const context = await browser.newContext({ javaScriptEnabled: false });
      const staticPage = await context.newPage();
      await staticPage.goto(new URL(path, page.url()).href);
      await expect(staticPage.getByRole("heading", { name: "Leandro César", exact: true })).toBeVisible();
      if (suffix) {
        for (const name of ["Cloudia", "BASF", "PeakDetection", "themoviedb"]) {
          await expect(staticPage.getByRole("heading", { name, exact: true })).toBeVisible();
        }
        await expect(staticPage.locator("#skills")).toContainText("RabbitMQ");
        await expect(staticPage.locator("#education")).toContainText("UNIFEI");
      }
      await context.close();
    });
  }
}

test("keyboard navigation, palette search, modal containment and focus restoration", async ({ page }) => {
  await page.goto("/pt");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Pular para o conteúdo" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  const trigger = page.getByRole("button", { name: "Comandos" });
  await trigger.focus();
  await page.keyboard.press("Enter");
  const dialog = page.getByRole("dialog", { name: "Comandos" });
  const input = page.getByRole("combobox");
  await expect(input).toBeFocused();
  await expect(dialog).toBeVisible();
  await input.fill("CURRICULO");
  await expect(page.getByRole("option")).toHaveCount(1);
  await input.fill("not-a-command");
  await expect(page.getByRole("status")).toContainText("Nenhum comando");
  await input.fill("");
  await page.keyboard.press("ArrowDown");
  const selectedId = await input.getAttribute("aria-activedescendant");
  await expect(page.locator(`#${selectedId}`)).toHaveAttribute("aria-selected", "true");
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press("Tab");
    expect(await dialog.evaluate((element) => element.contains(document.activeElement))).toBe(true);
  }
  expect((await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze()).violations).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await page.keyboard.press("Control+k");
  await expect(input).toBeFocused();
  await page.keyboard.press("Control+k");
  await expect(dialog).not.toBeVisible();
  await page.keyboard.press("Meta+k");
  await expect(input).toBeFocused();
  await page.keyboard.press("Escape");
  const portrait = page.getByRole("button", { name: "Ampliar foto de Leandro César" });
  await portrait.focus();
  await page.keyboard.press("Enter");
  const photo = page.getByRole("dialog", { name: "Foto de Leandro César" });
  await expect(photo).toBeVisible();
  await expect(photo.getByRole("button", { name: "Fechar" })).toBeFocused();
  await page.keyboard.press("Control+k");
  await expect(dialog).not.toBeVisible();
  await page.keyboard.press("Escape");
  await expect(portrait).toBeFocused();
});

test("portrait follows the pointer direction", async ({ page }) => {
  await page.goto("/pt");
  const portrait = page.locator(".portrait");
  const box = await portrait.boundingBox();
  expect(box).not.toBeNull();
  if (!box) return;

  const points = [
    [box.x + box.width / 2, box.y - 120, "/0.webp"],
    [box.x + box.width + 120, box.y + box.height / 2, "/90.webp"],
    [box.x + box.width / 2, box.y + box.height + 120, "/180.webp"],
    [box.x - 120, box.y + box.height / 2, "/270.webp"],
  ] as const;

  for (const [x, y, source] of points) {
    await page.mouse.move(x, y);
    await expect.poll(async () => portrait.locator("img").getAttribute("src")).toContain(encodeURIComponent(source));
  }

  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await expect.poll(async () => portrait.locator("img").getAttribute("src")).toContain(encodeURIComponent("/favicon-2560x2560.png"));
});

test("language equivalents, theme persistence, print action and valid links", async ({ page, request }) => {
  await page.goto("/pt/cv");
  await page.getByRole("link", { name: "English", exact: true }).click();
  await expect(page).toHaveURL(/\/en\/cv$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.getByRole("link", { name: "Português", exact: true }).click();
  await expect(page).toHaveURL(/\/pt\/cv$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  await page.evaluate(() => localStorage.setItem("cv-theme", "light"));
  await page.reload();
  await page.getByRole("button", { name: "Tema", exact: true }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.evaluate(() => { window.print = () => { document.body.dataset.printCalled = "true"; }; });
  await page.getByRole("button", { name: "Salvar PDF" }).click();
  await expect(page.locator("body")).toHaveAttribute("data-print-called", "true");
  await page.emulateMedia({ media: "print" });
  await expect(page.locator(".site-header")).not.toBeVisible();
  await expect(page.locator("#pdf")).not.toBeVisible();
  await expect(page.locator("#experience")).toBeVisible();
  await page.pdf({ path: "test-results/leandro-cesar-pt.pdf", format: "A4", preferCSSPageSize: true, tagged: true });
  const links = await page.locator("a[href]").evaluateAll((elements) => elements.map((element) => element.getAttribute("href")!));
  for (const href of links) {
    expect(href).not.toMatch(/^javascript:|^#$/);
    if (href.startsWith("#")) expect(await page.locator(href).count()).toBe(1);
    else expect(new URL(href, page.url()).protocol).toMatch(/^https?:|mailto:$/);
  }
  expect((await request.get("/", { maxRedirects: 0 })).status()).toBe(308);
  expect((await request.get("/fr")).status()).toBe(404);
  expect((await request.get("/pt/missing")).status()).toBe(404);
  expect(await (await request.get("/robots.txt")).text()).toContain("Sitemap: https://leandcesar.vercel.app/sitemap.xml");
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect((sitemap.match(/<loc>/g) ?? []).length).toBe(4);
  for (const locale of ["pt", "en"]) {
    const social = await request.get(`/${locale}/opengraph-image`);
    expect(social.status()).toBe(200);
    expect(social.headers()["content-type"]).toContain("image/png");
  }
});
