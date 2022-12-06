const { HomePage } = require('../page/HomePage')
const { chromium } = require('@playwright/test');


exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.email = page.getByLabel('Email');
        this.password = page.getByLabel('Password');
        this.submitButton = page.getByRole('button', { name: 'Log in' });
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