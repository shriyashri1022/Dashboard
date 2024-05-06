describe('Verify the Dashboard functionality', () => {
beforeEach('To visit login page', () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click();
    cy.url().should('be.equal','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})
    it('Check the functionalities of the Dashboard', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click();
    cy.get('.orangehrm-header-container > .oxd-button').click();
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
    cy.get(':nth-child(3) > .oxd-main-menu-item').click();
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').click();
    cy.get(':nth-child(4) > .oxd-main-menu-item').click();
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click();
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();
    cy.get('.oxd-autocomplete-text-input > input').click();
    cy.get('.oxd-autocomplete-text-input > input').type('The Coca-Cola Company - Coke - Phase 1')
    cy.get('.oxd-button')
    cy.get(':nth-child(11) > .oxd-main-menu-item > .oxd-text').click();
    cy.get(':nth-child(11) > .oxd-main-menu-item')
    cy.get('.orangehrm-header-container > .oxd-button').click();
    cy.wait(4000) 
})
})

