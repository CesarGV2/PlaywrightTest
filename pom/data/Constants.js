const dotenv = require('dotenv')
dotenv.config()

  const CREDENTIALS = {
    STANDARD_USER : {
        
        INVALID_PASSWORD: 'thisisnotapassword',
        INVALID_USERNAME: 'notaemail@test.com',
        PASSWORD : process.env.STANDARD_USER_PASSWORD,
        USERNAME : process.env.STANDARD_USER_USERNAME
    }
}
const URLS = {
    TODOIST_URL : 'https://todoist.com/',
    LOGIN_URL : 'https://todoist.com/users/showlogin',
    TODAY_URL : 'https://todoist.com/app/today'
}

const TASKS = {
    TODAY_TASK_DATE : 'Today',
    TODAY_TASK_NAME : 'TaskToday',
    

    TOMORROW_TASK_DATE: 'Tomorrow',
    TOMORROW_TASK_NAME: 'TaskTomorrow',

    DYNAMIC_TASK_NAME: 'Task_',
    
    NUMBER_OF_TASK : 3

}

 const PROJECTS = {
    PROJECT_NAME : 'ProjectTest',
    PROJECT_COLOR: 'Teal',
    FAVORITE_SWITCH: true

}

exports.CREDENTIALS = CREDENTIALS;
exports.URLS = URLS;
exports.TASKS =TASKS;
exports.PROJECTS = PROJECTS;
