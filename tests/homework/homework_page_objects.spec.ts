import { test } from "@playwright/test";
import { HomePage } from "../../src/pages/tredgate-eshop/home_page.ts";

test("Fill registration form", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage
    .openHomePage()
    .then((homePage) => homePage.clickMyAccount())
    .then((homePage) => homePage.selectRegistrationFromDropdown())
    .then((registrationPage) =>
      registrationPage.fillRegistrationForm(
        "Jozef",
        "Riško",
        "jozef@gmail.com",
        "+420778999654",
        "TopSecurity",
        "TopSecurity",
      ),
    )
    .then((registrationPage) => registrationPage.submitRegistrationForm());
});
