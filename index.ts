import createApplicationUtil from './src/createApplication.util';
import createComponentFiles from './src/createComponentFiles.util';
import applicationConfig from './src/applicationConfig';

createApplicationUtil(
  {path: process.cwd(), 
    appName: 'exported_preducks_app', 
    genOption: 1, 
    storeConfig: applicationConfig.storeConfig});

createComponentFiles(
  applicationConfig.components, 
  process.cwd(), 
  'exported_preducks_app', 
  true);