
const {Given, When, Then} = require('@cucumber/cucumber')

const { expect } = require("@playwright/test")

const url = 'http://localhost:3000/loan-application/loanApp'

// Scenario: valid inputs
Given('a user has navigated to the Loan page', async function () {
   await page.goto(url)

   const accountnumber = page.getByTestId("account-number");
   const accountType = page.getByTestId("AccType-test1");
   const incomeInput = page.getByTestId("income-test");
   const loanAmountInput = page.getByTestId("loan-amount");
   const durationInput = page.getByTestId("duration-test");
   const purposeInput = page.getByTestId("purpose-test");

   expect(accountnumber).toBeVisible();
   expect(accountType).toBeVisible()
   expect(incomeInput).toBeVisible()
   expect(loanAmountInput).toBeVisible()
   expect(durationInput).toBeVisible()
   expect(purposeInput).toBeVisible()

})

When('the user provides valid values and clicks on apply',async function () {
   await  page.getByTestId("account-number").fill("1111-1111-1111");
   await page.getByTestId("AccType-test1").check();
   await page.getByTestId("income-test").fill("2000");
   await page.getByTestId("loan-amount").fill("5000");
   await page.getByTestId("duration-test").selectOption("10");
   await page.getByTestId("purpose-test").selectOption("Car Loan");
   const applyLoanInput = page.getByTestId("btn-loan");
   await applyLoanInput.click();
})

Then('user should be directed to Loan details page',async function () {
   await expect(page).toHaveURL(/loandetails/);
})



//  Scenario: invalid inputs
Given('a user has navigated to the Loan page but entered incorrect values', async function () {
   await page.goto(url)
   const accountnumber = page.getByTestId("account-number");
   expect(accountnumber).toBeVisible()
})

When('the user provides invalid value for account number and clicks on apply',async function () {
   await page.getByTestId("account-number").fill("2222222222");
   const applyLoanInput = page.getByTestId("btn-loan");
   await applyLoanInput.click();
})

Then('message {string} should be displayed on the Loan page',async function (item) {
   expect(item).toBeVisible()
})
