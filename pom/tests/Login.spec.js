/* eslint-disable no-undef */
const{ test,expect } = require('@playwright/test');
const { LoginPage } = require('../page/LoginPage');
const { CREDENTIALS,URLS } = require("../data/Constants.js");

test.describe.parallel('Login Suite', () => {
let loginPage;

test.use({storageState: './storageState.json'})

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
         
     });
    


test('As a user I should be able to login with valid credentials @smoke', async ({ page }) => {
    await loginPage.login(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD);
    await expect(page).toHaveURL(URLS.TODAY_URL)
});

test('As a user I should not be able to login with incorrect email', async () => {
    await loginPage.login(CREDENTIALS.STANDARD_USER.INVALID_USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD);
    await expect(loginPage.errorMessage).toHaveText('Wrong email or password.');
})

test('As a user I should not be able to login with incorrect password', async () => {
    await loginPage.login(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.INVALID_PASSWORD);
    await expect(loginPage.errorMessage).toHaveText('Wrong email or password.');
})

});