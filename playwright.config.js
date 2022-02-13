const config = {
  projects: [
    {
      name: 'login',
      testmatch: /Login/,
      use:{
       // storageState: './storageState.json',
        browserName: 'chromium',
        channel: 'chrome'
      } 
    },
    {
      name: 'task',
      testmatch: /Task.spec.js/,
      use:{
        storageState: './storageState.json',
        browserName: 'chromium',
        //channel: 'chrome'
      } 
    },
    {
      name: 'project',
      testmatch: /Project/,
      use:{
        storageState: './storageState.json',
        browserName: 'chromium',
        channel: 'chrome'
      }
    }]
  };
  module.exports = config;