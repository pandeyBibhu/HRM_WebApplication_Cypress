//prettier-ignore
import loginPageElements, {userProfileList} from "../PageObjects/HRM_loginPageElements.cy.js";

class HRM_loginPageActions {
  enterUserName(userName) {
    loginPageElements
      .userName()
      .should("have.attr", "placeholder", "Username")
      .type(userName, { force: true });
    return this;
  }
  enterPassword(password) {
    loginPageElements
      .password()
      .should("have.attr", "placeholder", "Password")
      .type(password);
    return this;
  }

  submitLoginButton() {
    loginPageElements.loginButton().click({ force: true });
    return this;
  }

  verifyUserProfile() {
    loginPageElements.userProfileDropdown().click({ force: true });
    loginPageElements.userProfileMenuList().each(($el, index) => {
      const actualText = $el.text();
      const expectedText = userProfileList[index];
      expect(actualText).to.equal(expectedText);
    });
  }
  selectLogoutButton() {
    loginPageElements.userProfileDropdown().click({ force: true });
    loginPageElements.userProfileMenuList().each(($el, index) => {
      if ($el.text() === "Logout") {
        cy.wrap($el).focus().wait(1000).click({ force: true });
      }
    });
  }
}
export default new HRM_loginPageActions();
