// @ts-check
const { test, expect } = require("@playwright/test");

test("test for header ", async ({ page }) => {
  await page.goto("http://localhost:3000/loanApp");

  const loanDetailsButton = page.getByText("Loan Details");

  await loanDetailsButton.click();

  await expect(page).toHaveURL(/loandetails/);

  const applyLoanButton = page.getByText("Apply Loan");

  await applyLoanButton.click();

  await expect(page).toHaveURL(/loanApp/);

  const signOutButton = page.getByText("Sign out");

  await signOutButton.click();

  await expect(page).toHaveURL(/login/);
});
