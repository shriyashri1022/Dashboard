describe('Verify the login functionality', () => {
    beforeEach('to visit login page', () =>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
  
    it('login button should not be clickable with null data', () => {
      cy.wait(4000)
      cy.get('.oxd-button').click();
    })
  
    it('Check the login functionality with invalid data' , () => {
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('shriyaaaa')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('abc@12')
      cy.get('.oxd-button').click();
      cy.get('.oxd-alert-content').should('have.text','Invalid credentials')
      cy.wait(4000)
    })
    
      it('Check with valid Username only', () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get('.oxd-button').click();
        cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Required')
      })
  
      it('Check with Wrong Format of Password ', () => {
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('@@ad1_min123')
        cy.get('.oxd-button').click();
        cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Required')
      })
  
      it('Check the Forget Password field', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
        cy.get('.oxd-input').type('admin')
        cy.get('.oxd-button--secondary').click();
        cy.wait(4000) 
      })
  
      it('Check with valid Username and valid Password', () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click();
        //cy.get(':nth-child(1) > .oxd-main-menu-item').click();
        //cy.get('.orangehrm-header-container > .oxd-button').click();
        //cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click('');
        //cy.get(':nth-child(3) > .oxd-main-menu-item').click();
        //cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').click()
        cy.wait(4000) 
  
  
      })
  })
  
  