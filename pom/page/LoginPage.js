const { HomePage } = require('../page/HomePage')


exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.email = page.locator('#email');
        this.password = page.locator('#password');
        this.submitButton = page.locator('.submit_btn');
        this.errorMessage = page.locator('.error_msg');
        this.homePage = new HomePage(page);
    }

      async login(username, password) {
        
        await this.homePage.goToLoginPage();
        await this.email.fill(username);
        await this.password.fill(password);
        await this.submitButton.click();
      }
}