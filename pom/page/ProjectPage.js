const { CommonPage } = require('../page/CommonPage.js');
const { test, expect } = require('@playwright/test');
const { URLS,PROJECTS } = require("../data/Constants.js");

exports.ProjectPage = class ProjectPage extends CommonPage{
    constructor(page){
        super(page);
        this.projectNameInput = page.locator('#edit_project_modal_field_name')
        this.addtoFavoriteSwitch = page.locator('.reactist_switch')
        this.projectColorDropdown = page.locator('.color_dropdown_toggle')
        this.colorName = page.locator('.color_dropdown_select__name')
        this.favoriteSwitchTrue = page.locator('.reactist_switch--checked')
        this.addProjectConfirmButton = page.locator('.ist_button_red >> text="Add"')
        this.cancelButtonModal = page.locator('.ist_button >> text="Cancel"')
        this.projectOptionsButton = page.locator('[aria-label="Project options menu"]')
        //this.addProjectButton = new CommonPage(page).addProjectButton
    }

    async createProject(projectName, projectColor){
        await this.addProjectButton.click();
        await this.projectNameInput.type(projectName,{delay: 100})
        await this.projectColorDropdown.click();
        await this.colorName.locator('text='+ projectColor ).click()
        await this.addtoFavoriteSwitch.click();
        await this.addProjectConfirmButton.click();
        await this.projectOptionsButton.click();
        await this.editProjectOption.click();
        
    }

    async deleteProject(){
        await this.cancelButtonModal.click();
        await this.projectOptionsButton.click();
        await this.deleteProjectOption.click()
        await this.deleteConfirmButton.click();
    }

    async verifyProject(){
        await expect(this.favoriteProjectCreated).toHaveText(PROJECTS.PROJECT_NAME);
        await expect(this.favoriteSwitchTrue).toBeVisible();
        await expect(this.colorName).toHaveText(PROJECTS.PROJECT_COLOR); 
    }
}