const { chromium } = require('@playwright/test');
// const { CREDENTIALS } = require("./Constants");
// const { LoginPage } = require('..Playwright/LoginPage');


// module.exports = async config => {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//   await page.goto('https://todoist.com/users/showlogin');
//   await page.fill('#email', 'cesar.guzman@wizeline.com');
//   await page.fill('#password', 'writetypping');
//   await page.click('.submit_btn');
// //   const loginPage = new LoginPage(page);
// //   await loginPage.login(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
//   // Save signed-in state to 'storageState.json'.
//   await page.context().storageState({ path: 'storageState.json' });
//   await browser.close();
// };