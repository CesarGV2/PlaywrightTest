const { TASKS } = require("../data/Constants.js");
const { CommonPage } = require('./CommonPage.js');

exports.TodayPage = class TodayPage extends CommonPage{

    constructor(page){
        super(page);
        this.addTaskButton = page.locator('.plus_add_button');
        this.taskNameInput = page.locator('.public-DraftStyleDefault-block')
        this.createTaskButton = page.locator('button >> text=Add task')
        this.taskNameCreated = page.locator('.markdown_content').last()
        this.tasksCreated = page.locator('.markdown_content')
        this.moreActionsButton = page.locator('button[aria-label="More actions"]')
        this.deleteTaskButton = page.locator('button >> text="Delete task…"')
        this.taskDateOption = page.locator('.item_due_selector >> text=Today')
        this.taskDateTomorrow = page.locator('.scheduler-suggestions-item-label >> text=Tomorrow')
        }

        async addTask(taskName,date){
            await this.addTaskButton.click();
            await this.taskNameInput.fill(taskName,{delay: 500})
            if(date==='Tomorrow'){
                await this.taskDateOption.click();
                await this.taskDateTomorrow.click();
                 } 
            await this.createTaskButton.click();
        }

        async addMultipleTasks(numberOfTasks){
            await this.addTaskButton.click();
            for(let i=1; i<=numberOfTasks; i++){
            await this.taskNameInput.fill(TASKS.DYNAMIC_TASK_NAME + i,{delay: 300})
            await this.createTaskButton.click();
            }
            
        }

        async deleteTask(){
            while(await this.taskNameCreated.count()!==0){
            await this.taskNameCreated.click();
            await this.moreActionsButton.click();
            await this.deleteTaskButton.click();
            await this.deleteConfirmButton.click();
            }
        }

        async validateTasks(){   
            var result
            const numberOfTasks = await this.tasksCreated.count(); 
            for (let i = 1; i < numberOfTasks; i++) {
            var content = await this.tasksCreated.nth(i-1).textContent();
            if (content == TASKS.DYNAMIC_TASK_NAME + i){
                result = true;
              }else{
                  result= false;
                }
            }
           return result;
        }

    }

