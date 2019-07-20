#!/usr/bin/env node

import createApplicationUtil from './src/createApplication.util';
import createComponentFiles from './src/createComponentFiles.util';
import applicationConfig from './src/applicationConfig';
const ora = require('ora');
const fs = require('fs');

let [,,configFilePath] = process.argv;

const defaultPreducksConfig = {
  interfaces: {},
  reducers: {
    DEFAULT: {
      store: {},
      actions: {},
    },
  },
};

if(configFilePath){
  configFilePath = configFilePath[0] ==='.' ? configFilePath.slice(2) : configFilePath;
}
const configPath = configFilePath ? `${process.cwd()}/` + configFilePath : `${process.cwd()}/preducksConfig.json`;

if(fs.existsSync(configPath)){
  fs.readFile(configPath, (err, data) => {
    if (err){
      console.log("\x1b[31m",'error reading preducksConfig: ',err);
    }
    else{
      const preducksConfig = JSON.parse(data);
      createPreducksApp(preducksConfig.appName, preducksConfig);
    }
  })
} else {
  console.log("\x1b[35m",'  ❗️   no preducksConfig.json found. cooking up a default preducks app ✨', "\x1b[0m")
  createPreducksApp('preducksApp', defaultPreducksConfig);
}

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
  text: "\x1b[36m" +'building preducks app',
  spinner: {
    frames: ['   🥚  ','   🐣  ','   🐤  ','   🐥  '],
    interval: 250, // Optional
  },
}).start();

setTimeout(() => {
  throbber.stopAndPersist({
    symbol: '   🦆  ',
    text: "\x1b[42m" + "\x1b[30m" + 'finished building preducks app' + "\x1b[0m" + '  🦆  ',
  });
}, 1000);