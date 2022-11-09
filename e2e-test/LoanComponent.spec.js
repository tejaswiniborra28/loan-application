const { getBaseUrl } = require("./utils");
const { test, expect } = require("@playwright/test");

test("test for apply loan page", async ({ page }) => {
  // await page.goto("http://localhost:3000/loanApp");
  await page.goto(`${getBaseUrl()}/loan-application/loanApp`);


  const firstNameInput = page.getByTestId("account-number");
  await firstNameInput.fill("1111-1111-1111");
  await expect(firstNameInput).toHaveValue("1111-1111-1111");

  const accountType = page.getByTestId("AccType-test1");
  await accountType.check();

  const incomeInput = page.getByTestId("income-test");
  await incomeInput.fill("2000");
  await expect(incomeInput).toHaveValue("2000");

  const loanAmountInput = page.getByTestId("loan-amount");
  await loanAmountInput.fill("5000");
  await expect(loanAmountInput).toHaveValue("5000");

  const durationInput = page.getByTestId("duration-test");
  await durationInput.selectOption("10");

  const purposeInput = page.getByTestId("purpose-test");
  await purposeInput.selectOption("Car Loan");

  const applyLoanInput = page.getByTestId("btn-loan");

  await applyLoanInput.click();

  await expect(page).toHaveURL(/loandetails/);
});
