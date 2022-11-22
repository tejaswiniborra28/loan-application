
const {Given, When, Then} = require('@cucumber/cucumber')

const { expect } = require("@playwright/test")

const url = 'http://localhost:3000/loan-application/update'


//  Scenario: invalid inputs
Given('a user has navigated to the update page', async function () {
   await page.goto(url)
   const update = page.getByTestId("update-btn");
   expect(update).toBeVisible()
})

When('the user provides invalid values and clicks on update without logging in',async function () {
   const update = page.getByTestId("update-btn");
   await update.click();
})

Then('message {string} should be displayed on the update page',async function (item) {
   expect(item).toBeVisible()
})
