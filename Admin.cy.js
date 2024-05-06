describe('Verify the Dashboard functionality', () => {
    beforeEach('To visit login page', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click();
        cy.url().should('be.equal','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    })
        it('Verify Admin page', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click();
        cy.get(':nth-child(1) > .oxd-main-menu-item').click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
        })

        it('Verify the Leave functionality',()=> {
            cy.get(':nth-child(3) > .oxd-main-menu-item').click();
            cy.get('.oxd-topbar-body-nav > ul > :nth-child(1)').click();
 
        })

        it('Verify the Time/Report functionality',()=> {
            cy.get(':nth-child(4) > .oxd-main-menu-item').click();
            //cy.get('.--active > .oxd-topbar-body-nav-tab-item').click();
            //cy.get(':nth-child(4) > .oxd-main-menu-item').click();
            cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click();
            cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();
        })

        it('Verify the Claim functionality',()=> {
            cy.get(':nth-child(11) > .oxd-main-menu-item').click();  
            cy.get('.orangehrm-header-container > .oxd-button').click();
            cy.get('.oxd-autocomplete-text-input > input').type('Ravi MB')
            cy.get('.oxd-button--secondary').click();
        })
    })    