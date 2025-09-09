import hrm_AdminPageActions from "../PageActions/HRM_AdminPageActions.cy";
import loginPageActions from "../PageActions/HRM_loginPageActions.cy";
//prettier-ignore
describe("Admin Dashboard", () => {
  beforeEach(() => {
    cy.visit("/web/index.php/auth/login").wait(2000);
    cy.Login(Cypress.env("username"), Cypress.env("password"));
  });
  afterEach(() => {
    loginPageActions.verifyUserProfile();
    loginPageActions.selectLogoutButton();
  });
  it("Navigate to Admin Dashboard", () => {
    cy.wait(5000);
    hrm_AdminPageActions.clickOnAdminDashboard();
    // hrm_AdminPageActions.checkBreadCumPathAtAdmin();
  });
  it("Verify Admin/UserManagement breadcum path", () => {
    cy.wait(5000);
    hrm_AdminPageActions.clickOnAdminDashboard();
    hrm_AdminPageActions.checkBreadCumPathAtAdmin();
  });
  it("Verify job Dropdown item list", () => {
    cy.wait(5000);
    hrm_AdminPageActions.clickOnAdminDashboard();
    hrm_AdminPageActions.checkBreadCumPathAtAdmin();
    hrm_AdminPageActions.checkJobMenuDropDownList("Pay Grades");
  });
  it("Verify Admin Organisaton Dropdown item list", () => {
    cy.wait(5000);
    hrm_AdminPageActions.clickOnAdminDashboard();
    hrm_AdminPageActions.checkBreadCumPathAtAdmin();
    hrm_AdminPageActions.checkOrganisationMenuDropDownList("Locations");
  });
  it("Verify Admin Qualifications Dropdown item list", () => {
    cy.wait(5000);
    hrm_AdminPageActions.clickOnAdminDashboard();
    hrm_AdminPageActions.checkBreadCumPathAtAdmin();
    hrm_AdminPageActions.checkQualificationMenuDropdownList("Languages");
  });
  it("Verify Add Skills", () => {
    hrm_AdminPageActions.clickOnAdminDashboard();
    hrm_AdminPageActions.checkQualificationMenuDropdownList("Skills");
    hrm_AdminPageActions.addSkills("CypressAutomatioadfdfdfsdasdn","Automation with Cypress");
    hrm_AdminPageActions.verifyToastORSuccessfullAlert();
  });
  it.skip("Verify delete skills",()=>{

    hrm_AdminPageActions.clickOnAdminDashboard();
    hrm_AdminPageActions.checkQualificationMenuDropdownList("Skills");
    let rendonCharacter=hrm_AdminPageActions.generateRandomAlphaNumeric(6);
    hrm_AdminPageActions.addSkills(`Automation+${rendonCharacter}`,"Automation with Cypress");
    hrm_AdminPageActions.verifyToastORSuccessfullAlert();
    hrm_AdminPageActions.deleteSkills("sdsdsdsdsdsdsdsdsdsd")
    hrm_AdminPageActions.verifyDeletedSuccessfully();
  })
});
