import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

test.describe("Test Suite - Login Pmtool", () => {
  const username = "pw_academy";
  const password = "Playwright321!";

  test("Pmtool Login", async ({ page }) => {
    const loginpage = new LoginPage(page);

    await loginpage
      .open()
      .then((login) => login.fillUsername(username))
      .then((login) => login.fillPassword(password))
      .then((login) => login.clickLogin());
  });

  test("Pmtool Login and Logout", async ({ page }) => {
    const loginpage = new LoginPage(page);

    await loginpage
      .open()
      .then((login) => login.login(username, password))
      .then((dashboard) => dashboard.clickProfile())
      .then((dashboard) => dashboard.clickLogout());
  });
});
