require("cypress-xpath");
import loginPageActions from "../PageActions/HRM_loginPageActions.cy";
// prettier-ignore
describe("HRM login Test", () => {
  beforeEach(() => {cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.wait(1000);
  });
  it("Perform login using UN and Pwd", () => {
    loginPageActions.enterUserName(Cypress.env("username"));
    loginPageActions.enterPassword(Cypress.env("password"));
    loginPageActions.submitLoginButton();

    cy.title().then((pageTitle) => {
    cy.log("Title of HomePage is:: " + pageTitle);
    expect(pageTitle).to.equal("OrangeHRM")

});
it("Verify UserProfile",()=>{
  loginPageActions.verifyUserProfile();

})
it("logout from the application",()=>{
  loginPageActions.selectLogoutButton();
})

});

});
