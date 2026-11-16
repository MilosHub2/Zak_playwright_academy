import { Locator, Page } from "@playwright/test";
import { RegistrationPage } from "./registration_page.ts";

export class HomePage {
  readonly page: Page;
  readonly myAccountButton: Locator;
  readonly registerButton: Locator;
  private readonly url = "https://tredgate.com/eshop/";

  constructor(page: Page) {
    this.page = page;
    this.myAccountButton = page.locator("#top-links a i.fa-user");
    this.registerButton = page.locator(
      `.dropdown-menu a[href="https://tredgate.com/eshop/index.php?route=account/register"]`,
    );
  }

  async openHomePage() {
    await this.page.goto(this.url);
    return this;
  }

  async clickMyAccount() {
    await this.myAccountButton.click();
    return this;
  }

  async selectRegistrationFromDropdown() {
    await this.registerButton.click();
    return new RegistrationPage(this.page);
  }
}
