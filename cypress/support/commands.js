import loginPageActions from "../PageActions/HRM_loginPageActions.cy";
//prettier-ignore
Cypress.Commands.add('Login', (username, password) => {
  loginPageActions.enterUserName(username);
  loginPageActions.enterPassword(password);
  loginPageActions.submitLoginButton();
});
