import { Locator, Page } from "@playwright/test";

export class RegistrationPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator("#input-firstname");
    this.lastNameInput = page.locator("#input-lastname");
    this.emailInput = page.locator("#input-email");
    this.telephoneInput = page.locator("#input-telephone");
    this.passwordInput = page.locator("#input-password");
    this.confirmPasswordInput = page.locator("#input-confirm");
    this.continueButton = page.locator(`input[type="submit"]`);
  }

  async fillRegistrationForm(
    firstName: string,
    lastName: string,
    email: string,
    telephone: string,
    password: string,
    confirmPassword: string,
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.telephoneInput.fill(telephone);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(confirmPassword);
    return this;
  }

  async submitRegistrationForm() {
    await this.continueButton.click();
  }
}
