
exports.UpcomingPage = class UpcomingPage{
    constructor(page){
        this.page = page;
        this.tomorrowTasks = page.locator('a >> text= Tomorrow')
    }
}