class Login {
  static abLogin({
    I,
    page,
    username,
    password,
    submitSelector,
    checkSelector,
    sleep,
  }: {
    I: CodeceptJS.I;
    page: string;
    username: string;
    password: string;
    submitSelector: string;
    checkSelector: string;
    sleep: number;
  }) {
    I.amOnPage(page);
    I.fillField('input[name="user-name"]', username);
    I.fillField('input[name="password"]', password);
    I.click(submitSelector);
    I.waitForElement(checkSelector, sleep);
  }
}

export default Login;
