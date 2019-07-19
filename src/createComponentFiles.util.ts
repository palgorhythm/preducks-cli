const fs = require('fs');
import {format} from 'prettier';
import componentRender from './componentRender.util';

const createComponentFiles = (
  components: any,
  storeConfig: any,
  path: string,
  appName: string,
  exportAppBool: boolean
) => {
  let dir = path;
  if (exportAppBool === false) {
    if (!dir.match(/components|\*$/)) {
      if (fs.existsSync(`${dir}/src`)) {
        dir = `${dir}/src`;
      }
      dir = `${dir}/components`;
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
    }
  } else if (exportAppBool) {
    if (!dir.match(/${appName}|\*$/)) {
      dir = `${dir}/${appName}/src/components`;
    }
  }

  const promises: Array<any> = [];
  components.forEach((component: any) => {
    const newPromise = new Promise((resolve, reject) => {
      // console.log('about to write file ', `${dir}/${component.title}.tsx`);
      fs.writeFileSync(
        `${dir}/${component.title}.tsx`,
        format(componentRender(component, components, storeConfig.reducers), {
          singleQuote: true,
          trailingComma: 'es5',
          bracketSpacing: true,
          jsxBracketSameLine: true,
          parser: 'typescript'
        })
      );
    });

    promises.push(newPromise);
  });

  return Promise.all(promises);
};

export default createComponentFiles;
