const { test, expect } = require('@playwright/test');
const { TodayPage } = require('../page/TodayPage.js');
const { CommonPage } = require('../page/CommonPage.js');
const { TASKS,URLS } = require("../data/Constants.js");
const { UpcomingPage } = require('../page/UpcomingPage.js');

test.describe.parallel('Tasks creation Suite', () => {

let todayPage;
let commonPage;
let upcomingPage;

test.beforeEach(async ({ page }) => {
 await page.goto(URLS.TODAY_URL)
 todayPage = new TodayPage(page);
 commonPage = new CommonPage(page);
 upcomingPage = new UpcomingPage(page);
      
  })


test.afterEach(async () => {
    await todayPage.deleteTask();
    await expect(todayPage.taskNameCreated).not.toBeVisible();
    await commonPage.syncPage();
    await commonPage.waitForAPIResponse();
    
})

test('As a logged in user I should be able to create a task with today as due date @smoke', async() => {
    await todayPage.addTask(TASKS.TODAY_TASK_NAME,TASKS.TODAY_TASK_DATE);
    await expect(todayPage.taskNameCreated).toContainText(TASKS.TODAY_TASK_NAME);
    commonPage.waitForAPIResponse();
}) 

test('As a logged in user I should be able to create a task with tomorrow as due date', async() => {
    await todayPage.addTask(TASKS.TOMORROW_TASK_NAME,TASKS.TOMORROW_TASK_DATE);
    await commonPage.upcomingFilter.click();
    await upcomingPage.tomorrowTasks.click();
    await expect(todayPage.taskNameCreated).toContainText(TASKS.TOMORROW_TASK_NAME);
    await commonPage.waitForAPIResponse();
}) 

test('As a logged in user I should be able to create 10 tasks with today as due date', async() => {
    await todayPage.addMultipleTasks(TASKS.NUMBER_OF_TASK);
    await expect(await todayPage.tasksCreated.count()).toBe(TASKS.NUMBER_OF_TASK)
    await expect(await todayPage.validateTasks()).toBe(true)
    await commonPage.waitForAPIResponse();
}) 

});