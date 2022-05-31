//const{ PlaywrightTestConfig} = require('@playwright/test');
const config  = {
  use:{
          storageState: './auth.json',
          browserName: 'firefox',
          //channel: 'firefox',
          reporter: [ ['allure-playwright', { outputFolder: 'my-allure-results' }] ],
        }

  // use:{
  //   trace: 'retain-on-failure'
  // },
  // projects: [
  //   // {
  //   //   name: 'login',
  //   //   testmatch: 'Login.spec.js',
  //   //   use:{
  //   //    // storageState: './storageState.json',
  //   //     browserName: 'chromium',
  //   //     channel: 'chrome'
  //   //   } 
  //   // },
  //   // {
  //   //   name: 'task',
  //   //   testmatch: 'Task.spec.js',
  //   //   testIgnore: 'Login.spec.js',
  //   //   use:{
  //   //     storageState: './storageState.json',
  //   //     browserName: 'chromium',
  //   //     channel: 'chrome'
  //   //   } 
  //   // },
  //   {
  //     name: 'test',
  //     // testmatch: 'Project.spec.js',
  //     // testIgnore: 'Login.spec.js',
  //     use:{
  //       storageState: './auth.json',
  //       browserName: 'firefox',
  //       channel: 'firefox'
  //     }  
  //   }
  //   // {
  //   //   name: 'smoke',
  //   //   //testmatch: 
  //   //   //testIgnore: /Login.spec.js/,
  //   //   use:{
  //   //     storageState: './storageState.json',
  //   //     browserName: 'chromium',
  //   //     channel: 'chrome'
  //   //   } 
  //   // }
  // ]
  };
  module.exports = config;