import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
import { URL_TEST, QA_USERNAME, QA_PASSWORD } from './utils/consts/user';
import { SleepDuration } from './utils/consts/wait.enum';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/**/**_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      keepCookies: true,
      restart: 'session',
    },
  },
  plugins: {
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'SignIn',
      users: {
        qaUser: {
          login: (I: CodeceptJS.I) => {
            I.amOnPage(URL_TEST as string);
            I.fillField('input[name="user-name"]', QA_USERNAME as string);
            I.fillField('input[name="password"]', QA_PASSWORD as string);
            I.click('input[type="submit"]');
          },
          check: (I: CodeceptJS.I) => {
            I.waitForElement('#inventory_container', SleepDuration.SLEEP_VERY_SHORT);
          },
        },
      },
    },
  },
  include: {
    I: './steps_file',
  },
  name: 'gamanza_test',
  fullPromiseBased: false,
};
