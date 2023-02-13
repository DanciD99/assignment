class SignInCheck {
  static signIn({
    I,
    SignIn,
    user,
    checkSelector,
    sleep,
  }: {
    I: CodeceptJS.I;
    SignIn: { (userStr: string): void };
    user: string;
    checkSelector: string;
    sleep: number;
  }) {
    SignIn(user);
    I.waitForElement(checkSelector, sleep);
  }
}

export default SignInCheck;
