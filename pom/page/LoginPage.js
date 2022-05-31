const { HomePage } = require('../page/HomePage')
const { chromium } = require('@playwright/test');


exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.email = page.locator('label >> text="Email"');
        this.password = page.locator('label >> text="Password"');
        this.submitButton = page.locator('button >> text="Log in"');
        this.errorMessage = page.locator('#todoist_app >> text="Wrong email or password."');
        this.homePage = new HomePage(page);
    }

      async login(username, password) {
        await this.homePage.goToLoginPage();
        await this.email.fill(username);
        await this.password.fill(password);
        await this.submitButton.click();
        await this.page.context().storageState({ path: 'storageState.json' });
      }
}