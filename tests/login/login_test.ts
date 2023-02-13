import { SleepDuration } from '../../utils/consts/wait.enum';
import { URL_TEST, QA_WRONG_USERNAME, QA_PASSWORD, QA_USERNAME, QA_WRONG_PASSWORD } from '../../utils/consts/user';
import Login from '../../utils/helpers/login.helper';

const loginCheckTestVariables = {
  logInButton: 'input[type="submit"]',
  loginPageCheck: 'section.login-panel',
  emailInput: 'input[name="user-name"]',
  passwordInput: 'input[name="password"]',
  error: '.error-message-container.error',
};

Feature('Login');

/**
 * This will cover if user gets proper error message if invalid password is entered
 * */

Scenario('Invalid password', async ({ I }) => {
  I.clearCookie();

  Login.abLogin({
    I,
    page: URL_TEST as string,
    username: QA_USERNAME as string,
    password: QA_WRONG_PASSWORD as string,
    submitSelector: loginCheckTestVariables.logInButton,
    checkSelector: loginCheckTestVariables.error,
    sleep: SleepDuration.SLEEP_VERY_SHORT,
  });
});

/**
 * This will cover if user gets proper error message if invalid email is entered
 * */

Scenario('Invalid email', async ({ I }) => {
  I.clearCookie();

  Login.abLogin({
    I,
    page: URL_TEST as string,
    username: QA_WRONG_USERNAME as string,
    password: QA_PASSWORD as string,
    submitSelector: loginCheckTestVariables.logInButton,
    checkSelector: loginCheckTestVariables.error,
    sleep: SleepDuration.SLEEP_VERY_SHORT,
  });
});

/**
 * This will cover if user can successfully login
 * */

Scenario('Valid credentials', async ({ I }) => {
  I.clearCookie();

  Login.abLogin({
    I,
    page: URL_TEST as string,
    username: QA_USERNAME as string,
    password: QA_PASSWORD as string,
    submitSelector: loginCheckTestVariables.logInButton,
    checkSelector: '#inventory_container',
    sleep: SleepDuration.SLEEP_VERY_SHORT,
  });
});
