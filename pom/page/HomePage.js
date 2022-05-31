const { URLS } = require("../data/Constants.js");


exports.HomePage = class HomePage{

    constructor(page){
        this.page = page;
        this.loginLink = page.locator('text=Log in').first();
    }

    async goToLoginPage(){
        await this.page.goto(URLS.TODOIST_URL);
        await this.loginLink.click()
    }

}