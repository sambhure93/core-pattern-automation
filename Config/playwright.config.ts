import { PlaywrightTestConfig } from '@playwright/test';
require('dotenv').config({path: './Config/.env'});

const config: PlaywrightTestConfig = {
  testDir: '../AcceptanceTest/Applications',
  timeout: 40000,
  use: {
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    javaScriptEnabled: true,
    screenshot: 'only-on-failure'
  },
  workers: parseInt(process.env.WROKERS),
  reporter: [ ['html', { outputFolder: '../PatternPlaywrightLogs/Html' }],['allure-playwright']],
  outputDir:'../PatternPlaywrightLogs/Screenshots'  
};
export default config;