const { test, expect } = require('@playwright/test');
const { CommonPage } = require('../page/CommonPage.js');
const { ProjectPage } = require('../page/ProjectPage.js');
const { PROJECTS,URLS} = require("../data/Constants.js");

let commonPage;
let projectPage;

test.beforeEach(async ({ page }) => {
 await page.goto(URLS.TODAY_URL)
 commonPage = new CommonPage(page);
 projectPage = new ProjectPage(page);  
  })

  test.afterEach(async () => {
   await projectPage.deleteProject()   
   await commonPage.waitForAPIResponse();    
     })

test('As a logged in user I should be able to create a new project,select a color and add it to \'Favorites\'@smoke', async ()=>{
    await projectPage.createProject( PROJECTS.PROJECT_NAME,PROJECTS.PROJECT_COLOR);
    await commonPage.waitForAPIResponse();
    await expect(projectPage.favoriteProjectCreated).toHaveText(PROJECTS.PROJECT_NAME);
    await expect(projectPage.favoriteSwitchTrue).toBeVisible();
    await expect(projectPage.colorName).toHaveText(PROJECTS.PROJECT_COLOR); 
});