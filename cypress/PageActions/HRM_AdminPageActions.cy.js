import adminPageElements from "../PageObjects/HRM_AdminPageElements.cy";
// prettier - ignore;
const expectedJobDropdownItems = [
  "Job Titles",
  "Pay Grades",
  "Employment Status",
  "Job Categories",
  "Work Shifts",
];
const expectedOrganizationDropdownItems = [
  "General Information",
  "Locations",
  "Structure",
];
const expectedQualificationsDropdownItems = [
  "Skills",
  "Education",
  "Licenses",
  "Languages",
  "Memberships",
];
class HRM_AdminPageActions {
  clickOnAdminDashboard() {
    adminPageElements.adminLink().click({ force: true });
  }
  checkBreadCumPathAtAdmin() {
    let texts = [];
    adminPageElements
      .adminBreadcumPath()
      .each(($el) => {
        texts.push($el.text().trim());
      })
      .then(() => {
        const breadcum = texts.join("/");
        cy.log("BreadCumPath is::" + breadcum);
        expect(breadcum).to.equal("Admin/User Management");
      });
  }

  checkJobMenuDropDownList(itemName) {
    let items = [];
    adminPageElements.job_MenuDropdown("Job").click({ force: true });
    adminPageElements
      .job_MenuItemList()
      .each(($el) => {
        items.push($el.text().trim());
      })
      .then(() => {
        items.forEach((actual, index) => {
          const expected = expectedJobDropdownItems[index];
          cy.log(`Index ${index} → Actual: ${actual}, Expected: ${expected}`);
          expect(actual).to.eq(expected);
        });
      })
      .then(() => {
        adminPageElements.job_MenuItemList().each(($el) => {
          if ($el.text() == itemName) {
            cy.wrap($el).focus().wait(2000).click({ force: true });
          }
        });
      });
  }
  checkOrganisationMenuDropDownList(itemName) {
    let items = [];
    adminPageElements.job_MenuDropdown("Organization").click({ force: true });
    adminPageElements
      .job_MenuItemList()
      .each(($el) => {
        items.push($el.text().trim());
      })
      .then(() => {
        items.forEach((actual, index) => {
          const expected = expectedOrganizationDropdownItems[index];
          cy.log(`Index ${index} → Actual: ${actual}, Expected: ${expected}`);
          expect(actual).to.eq(expected);
        });
      })
      .then(() => {
        adminPageElements.job_MenuItemList().each(($el) => {
          if ($el.text() == itemName) {
            cy.wrap($el).focus().wait(2000).click({ force: true });
          }
        });
      });
  }

  checkQualificationMenuDropdownList(itemName) {
    let items = [];
    adminPageElements.job_MenuDropdown("Qualifications").click({ force: true });

    adminPageElements
      .job_MenuItemList()
      .each(($el) => {
        items.push($el.text().trim());
      })
      .then(() => {
        items.forEach((actual, index) => {
          const expected = expectedQualificationsDropdownItems[index];
          cy.log(`Index ${index} → Actual: ${actual}, Expected: ${expected}`);
          expect(actual).to.deep.equal(expected);
        });
      })
      .then(() => {
        adminPageElements.job_MenuItemList().each(($el) => {
          if ($el.text() == itemName) {
            cy.wrap($el).focus().wait(2000).click({ force: true });
            cy.log("clicked on Itename:::" + itemName);
          }
        });
      });
  }

  addSkills(skillname, skillDescription) {
    adminPageElements.job_MenuDropdown("Qualifications").click({ force: true });
    adminPageElements.job_MenuItemList().each(($el) => {
      if ($el.text() === "Skills") {
        cy.wrap($el).focus().click({ force: true });

        adminPageElements.addSkillsButton().click({ force: true });
        adminPageElements.enterSkillsName().type(skillname, { force: true });
        adminPageElements
          .enterSkillsDescription()
          .type(skillDescription, { force: true });
        adminPageElements.adddSkillSubmitBUtton().click({ force: true });
      }
    });
  }
  verifyToastORSuccessfullAlert() {
    cy.get(".oxd-toast", { timeout: 5000 }) // replace with correct locator

      .should("be.visible")
      .and("contain.text", "Successfully Saved");
  }
  deleteSkills(skillName) {
    adminPageElements.skillsTableRow().each(($row) => {
      if ($row.text().includes(skillName)) {
        cy.wrap($row).within(() => {
          adminPageElements.skillCheckBox().check({ force: true });
        });
      }
    });
    adminPageElements.yesDeleteSkillDialogue().click({ force: true });
  }
  verifyDeletedSuccessfully() {
    cy.get(".oxd-toast", { timeout: 5000 }) // replace with correct locator

      .should("be.visible")
      .and("contain.text", "Successfully Deleted");
  }
}
export default new HRM_AdminPageActions();
