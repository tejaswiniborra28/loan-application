const { test, expect } = require("@playwright/test");
test("Test for registration page", async ({ page }) => {
  await page.goto("http://localhost:3000/register");

  const firstNameInput = page.getByTestId("first name");
  await firstNameInput.fill("AAAAAA");
  await expect(firstNameInput).toHaveValue("AAAAAA");

  const lastNameInput = page.getByTestId("last name");
  await lastNameInput.fill("kkkk");
  await expect(lastNameInput).toHaveValue("kkkk");

  const userNameInput = page.getByTestId("username-test");
  await userNameInput.fill("any");
  await expect(userNameInput).toHaveValue("any");

  const mobilenoInput = page.getByTestId("mobileno");
  await mobilenoInput.fill("+912222222222");
  await expect(mobilenoInput).toHaveValue("+912222222222");

  const regEmailInput = page.getByTestId("reg-email");
  await regEmailInput.fill("gk@gmail.com");
  await expect(regEmailInput).toHaveValue("gk@gmail.com");

  const regpwdInput = page.getByTestId("reg-pwd");
  await regpwdInput.fill("ggggg@1");
  await expect(regpwdInput).toHaveValue("ggggg@1");

  const regpwdInput2 = page.getByTestId("reg-pwd2");
  await regpwdInput2.fill("ggggg@1");
  await expect(regpwdInput2).toHaveValue("ggggg@1");

  const regpanInput = page.getByTestId("reg-pan");
  await regpanInput.fill("AAAAA1111A");
  await expect(regpanInput).toHaveValue("AAAAA1111A");
});
