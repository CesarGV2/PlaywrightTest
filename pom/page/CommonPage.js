
exports.CommonPage = class CommonPage{
    constructor(page){
        this.page = page;
        this.upcomingFilter = page.locator('#filter_upcoming');
        this.addProjectButton = page.locator('[aria-label="Add Project"]')
        this.projectName = page.locator('.name').last()
        this.favoriteListProject = page.locator('[aria-label="Favorites"]')
        this.favoriteProjectCreated = this.favoriteListProject.locator('a').last()
        this.editFavoriteProject = page.locator('[aria-label="More project actions"]').last()
        this.editProjectOption = page.locator('.icon_menu_item__content >> text=Edit project')
        this.deleteProjectOption = page.locator('.icon_menu_item__content >> text=Delete project')
        this.deleteConfirmButton = page.locator('button >> text=Delete')
        this.helpButton = page.locator('#help_btn')
        this.syncButton = page.locator('button >> text=Sync')
    }

    async waitForAPIResponse(){
        await this.page.waitForResponse(resp => resp.url().includes('/sync') && resp.status() === 200)
    }

    async syncPage(){
        await this.helpButton.click();
        await this.syncButton.click();
    }
    
}