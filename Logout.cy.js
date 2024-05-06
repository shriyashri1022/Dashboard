describe('Verify the logout functionality', () => {
    it('Check if user can logout.', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click();
        cy.url().should('be.equal','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
      })

})