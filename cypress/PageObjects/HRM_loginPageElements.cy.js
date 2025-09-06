require("cypress-xpath");
//prettier-ignore

class HRM_loginPageElements {
  userName = () =>cy.xpath("//input[@name='username']", { timeout: 1000 }).should("be.visible");
  password = () =>cy.xpath("//input[@name='password']", { timeout: 1000 }).should("be.visible");
  loginButton = () => cy.xpath("//button[@type='submit']").should("be.visible");
  userProfileDropdown=()=>cy.xpath("//li/span/i[contains(@class,'userdropdown')]",{timeout:2000}).should('be.visible')
  userProfileMenuList=()=>cy.xpath("//ul[contains(@class,'dropdown')]/li/a",{timeout:2000}).should('be.visible')
}
export const userProfileList = [
  "About",
  "Support",
  "Change Password",
  "Logout",
];
export default new HRM_loginPageElements();
