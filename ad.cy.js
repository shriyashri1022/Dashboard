describe('Verify the Admin Module', () => {

    beforeEach('To visit login page', () =>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click();
      cy.url().should('be.equal','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
    })

    it('Check if "Admin" button is clickable.', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
        cy.url().should('be.equal','https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
      })

    it('Check if "Add" button is clickable.', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
        cy.get('.oxd-button > .oxd-icon').click();
        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser')
      })

     it('Check that an admin can add user.', () => {
         cy.get('.orangehrm-header-container > .oxd-button').click();
         cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
         cy.get('.oxd-select-dropdown > :nth-child(2)').click();
         cy.get('.oxd-autocomplete-text-input > input').type('Ranga Akunuri')
         cy.get('.oxd-autocomplete-option > span').click();
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
         cy.get('.oxd-select-dropdown > :nth-child(2)').click();
         cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Shriyaa')
         cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('ababshjdfjd')
          cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('ababshjdfjd')
          cy.get('.oxd-button--secondary').click();
       })

    it('Check if admin can add any user name.', () => {
        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Shriyaa')
        cy.get('.oxd-input-group > .oxd-text').should('have.text','Should be at least 5 characters')

       })

    it.skip('Check that an admin can edit user.' , () => {
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click();
        cy.get(':nth-child(2) > .oxd-input').clear();
        cy.get(':nth-child(2) > .oxd-input').type('Shriiya');
        cy.get('.oxd-button--secondary').click();
        cy.url().should('be.equal','https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
      })

    it('Check that an admin can delete user.' , () => {
        cy.get(':nth-child(4) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click();
        cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Are you Sure?')
        cy.get('.oxd-button--label-danger').click();
      })

    it.skip('Check that an admin can edit admin.' , () => {
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click();
        cy.get(':nth-child(2) > .oxd-input').clear();
        cy.get(':nth-child(2) > .oxd-input').type('hello')
        cy.get('.oxd-button--secondary').click();
        cy.get('.oxd-text--toast-title').should('have.text', 'Success')
      })


      // SEARCH 

      it('Check that admin can search users.' , () => {
        cy.get(':nth-child(2) > .oxd-input').type('Admin');
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('have.text', '(1) Record Found')
      })

      it('Check that admin can search users that does not exist.' , () => {
        cy.get(':nth-child(2) > .oxd-input').type('abbb');
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('have.text', 'No Records Found')
      })

        // JOB
      it('Check if admin can click on "Job" dropdown.' , () => {
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click();
      })

      it('Check if admin can click on "Job Titles".' , () => {
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
        cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();
        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')
      })

      it('Check if admin can click on "Add" button.' , () => {
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
        cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();
        cy.get('.oxd-button').click();
        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle')

      })

      it('Check that admin can add job titles.', () => {
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
        cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();
        cy.get('.oxd-button').click();
        cy.get(':nth-child(2) > .oxd-input').type('QA Testerss')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Testing softwares')
        cy.get('.oxd-button--secondary').click();
       })

       it('Check that admin can add job titles without title.' , () => {
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
        cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();
        cy.get('.oxd-button').click();
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Testing softwares')
        cy.get('.oxd-button--secondary').click();
        cy.get('.oxd-input-group > .oxd-text').should('have.text','Required')
      })

      it('Check that an admin can edit jobs.' , () => {
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
        cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();
        cy.get(':nth-child(1) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click();
        cy.get(':nth-child(2) > .oxd-input').clear()
        cy.get(':nth-child(2) > .oxd-input').type('Accountant')
        cy.get('.oxd-button--secondary').click();
        cy.get('.oxd-text--toast-title').should('have.text','Success')
      })

      it('Check that an admin can delete jobs.' , () => {
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
        cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();
        cy.get(':nth-child(2) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click();
        cy.get('.orangehrm-modal-header > .oxd-text').should('have.text','Are you Sure?')
        cy.get('.oxd-button--label-danger').click();
        cy.get('.oxd-text--toast-title').should('have.text','Success')
      })

      it('Check if admin can click on "Work Titles".' , () => {
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
        cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-link').click();
        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/workShift')
      })

      it('Check if admin can click on "Add" button.' , () => {
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
        cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-link').click();
        cy.get('.oxd-button').click();
        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveWorkShifts')
      })

      it('Check that an admin can add work shifts.' , () => {
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
        cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-link').click();
        cy.get('.oxd-button').click();
        cy.get(':nth-child(2) > .oxd-input').type('morning')
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-time-wrapper > .oxd-time-input > .oxd-icon').click();
        cy.get('.oxd-time-hour-input > .oxd-input').type('6')
        cy.get('.oxd-time-minute-input > .oxd-input').type('30')
        cy.get('.oxd-time-period-input > :nth-child(1) > input').click();
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-time-wrapper > .oxd-time-input > .oxd-icon').click();
        cy.get('.oxd-time-hour-input > .oxd-input').type('7')
        cy.get('.oxd-time-minute-input > .oxd-input').type('30')
        cy.get('.oxd-time-period-input > :nth-child(2) > input').click();
        cy.get('.oxd-button--secondary').click();
      })

      it('Check that an admin can add work shifts without shift name.' , () => {
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
        cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-link').click();
        cy.get('.oxd-button').click();
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-time-wrapper > .oxd-time-input > .oxd-icon').click();
        cy.get('.oxd-time-hour-input > .oxd-input').type('6')
        cy.get('.oxd-time-minute-input > .oxd-input').type('30')
        cy.get('.oxd-time-period-input > :nth-child(1) > input').click();
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-time-wrapper > .oxd-time-input > .oxd-icon').click();
        cy.get('.oxd-time-hour-input > .oxd-input').type('7')
        cy.get('.oxd-time-minute-input > .oxd-input').type('30')
        cy.get('.oxd-time-period-input > :nth-child(2) > input').click();
        cy.get('.oxd-button--secondary').click();
        cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Required')
        
      })

      it('Check that an admin can edit work shifts.' , () => {
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
        cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-link').click();
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click();
        cy.get(':nth-child(2) > .oxd-input').clear()
        cy.get(':nth-child(2) > .oxd-input').type('Night')
        cy.get('.oxd-button--secondary').click();
      })

      it('Check that an admin can delete work shifts.' , () => {
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
        cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-link').click();
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click();
        cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Are you Sure?')
        cy.get('.oxd-button--text').click();
      })
})