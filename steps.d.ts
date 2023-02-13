/// <reference types='codeceptjs' />
// type Login = import('./login_helper.js');

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: unknown;
    login: (I: CodeceptJS.I) => void;
    SignIn: (userStr: string) => void;
  }
  interface Methods extends Playwright {}
  export interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
