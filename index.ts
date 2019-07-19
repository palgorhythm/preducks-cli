#!/usr/bin/env node

import createApplicationUtil from './src/createApplication.util';
import createComponentFiles from './src/createComponentFiles.util';
import applicationConfig from './src/applicationConfig';
const ora = require('ora');
const fs = require('fs');

fs.readFile(`${process.cwd()}/preducksConfig.json`, (err, data) => {
  if (err){
    console.log('error reading preducksConfig: ',err);
  }
  else{
    const preducksConfig = JSON.parse(data);
    createPreducksApp(preducksConfig.appName, preducksConfig);
  }
})

function createPreducksApp(appName, preducksConfig){
  createApplicationUtil(
    {path: process.cwd(), 
      appName: appName, 
      genOption: 1, 
      storeConfig: preducksConfig});
  createComponentFiles(
    applicationConfig.components,
    preducksConfig,
    process.cwd(), 
    appName, 
    true);
}
// console.log('🦆 building preducks app 🦆');


const throbber = ora({
  text: 'building preducks app',
  spinner: {
    frames: ['  🥚  ','  🐣  ','  🐤  ','  🐥  '],
    interval: 250, // Optional
  },
}).start();

setTimeout(() => {
  throbber.stopAndPersist({
    symbol: '  🦆  ',
    text: 'finished building preducks app',
  });
}, 1000);