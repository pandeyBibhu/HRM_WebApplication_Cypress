require("cypress-xpath");
//prettier-ignore
class HRM_AdminPageElements {
    adminLink=()=>cy.xpath("//span[normalize-space()='Admin']",{timeout:2000}).should('be.visible');
    adminBreadcumPath=()=>cy.xpath("//span[contains(@class,'header-breadcrumb')]//h6",{timeout:2000}).should('be.visible');
    job_MenuDropdown=(menuname)=>cy.xpath("//ul/li/span[contains(text(),'"+menuname+"')]")
    job_MenuItemList=()=>cy.xpath("//ul[@role='menu']/li/a")
    addSkillsButton=()=>cy.xpath("//button[contains(@class,'oxd-button') and .//i[contains(@class,'bi-plus')]]",{timeout:1000}).should('be.visible')
    enterSkillsName=()=>cy.xpath("//div//label[contains(text(),'Name')]/../following-sibling::div/input[contains(@class,'oxd-input')]",{timeout:2000}).should('be.visible')
    enterSkillsDescription=()=>cy.xpath("//div//label[contains(text(),'Description')]/../following-sibling::div/textarea[contains(@placeholder,'Type description here')]")
    adddSkillSubmitBUtton=()=>cy.xpath("//button[@type='submit' and contains(@class,'oxd-button')]",{timeout:1000}).should('be.visible')
    skillsTableRow=()=>cy.xpath("//div[@class='oxd-table-card']",{timeout:1000}).should('be.visible')
    skillCheckBox=()=>cy.xpath("//div[contains(@class,'oxd-table-card-cell-checkbox')]//input",{timeout:1000}).should('be.visible')
    yesDeleteSkillDialogue=()=>cy.xpath("//div[@role='document']//button[normalize-space()='Yes, Delete']").should('be.visible')
    NoDeleteSkillDialogue=()=>cy.xpath("//div[@role='document']//button[normalize-space()='No, Cancel']").should('be.visible')
    
}

export default new HRM_AdminPageElements();
