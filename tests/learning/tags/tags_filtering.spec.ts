import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

test("Tag test", { tag: "@mujTag" }, async ({ page }) => {
  const logiPage = new LoginPage(page);
  await logiPage.open();
});

test("Without tag", async ({ page }) => {
  const logiPage = new LoginPage(page);
  await logiPage.open();
});
