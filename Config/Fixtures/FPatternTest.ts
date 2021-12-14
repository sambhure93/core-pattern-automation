import { test as dataTest, Browser,BrowserContext, chromium, ViewportSize} from '@playwright/test';
const path = require('path');
let toBoolean = require('to-boolean');

type TestFixtures = {
  dataProvider:string;
  browser:Browser;
  context:BrowserContext;
  contextClose:BrowserContext;
  viewport:ViewportSize;
};

const PatternTest = dataTest.extend<TestFixtures>({

   dataProvider: async({},use, info) => {
     var file_path = info.file;
     var file_name = path.basename(file_path);
     file_path =  "../../Data/" + file_path.slice(file_path.search('Applications'),file_path.length).replace(file_name,'').replace(/\\/g,'/');
     file_path = file_path + file_name.replace('test.ts','data.json');
     await use(require(file_path));
  },
  context:async ({browser, context,viewport}, use) => {
      browser = await chromium.launch({
                      channel:'chrome',
                      headless: toBoolean(process.env.HEADLESS),
                    });
      context = await browser.newContext({viewport: {width:1920,height:937}});
      await use(context);
  }
});

export const test = PatternTest;


