# Saucelab testing (CodeceptJS)

### CodecepJS installation commands for first time users

#### Install CodeceptJS using npm:
- npx create-codeceptjs .

### Running automated test using CodeceptJS locally
- To be able to run tests locally, you have to be in folder `Gamanza_QA`. Do `npm install before first test run`
- To run all tests execute: `npx codeceptjs run <tests/Folder in which test is located/specific test>` (Example: npx codeceptjs run tests/login/login_test.ts)
- To run all tests execute: `npx codeceptjs run`, by default all tests are executed, in codecept.cong.ts you can change the configuration to a specific test in ‘/tests' (Example: ./tests/**/*_test.ts)

### Before writing tests
- Get familiar with contents of `/tests` to know what `/utils` are available

How to write tests:
- Inspect `/utils` for helpers
- Inspect `checkout_test.ts` for examples of use

### The test environment
- The test environment (url) in written in the user.const.ts file, that is where is has to be changed if you want to run is on stage or prod


