const { getBaseUrl } = require("./utils");
// @ts-check
const { test, expect } = require("@playwright/test");
//  let screenshotPath= './screenshots/loginpage'
//  let screenshotPath2= './screenshots/Registerpage'
test("test for Log in Page", async ({ page }) => {
  await page.goto(`${getBaseUrl()}/loan-application`);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Loan Application/);

  const emailInput = page.getByTestId("email-input");
  await emailInput.fill("gk@gmail.com");
  await expect(emailInput).toHaveValue("gk@gmail.com");

  const pwdInput = page.getByTestId("password-test");
  await pwdInput.fill("Gautam@2");
  await expect(pwdInput).toHaveValue("Gautam@2");

  const LoginButton = page.getByTestId("btn");
  await LoginButton.click();
  // await page.screenshot({
  //   path:`${screenshotPath}.png`,
  //   fullPage: true
  // })

  const getRegister = page.getByText("Register here");

  // Click the get started link.
  await getRegister.click();
  // await page.screenshot({
  //   path:`${screenshotPath2}.png`,
  //   fullPage: true
  // })

  await expect(page).toHaveURL(/register/);
});
