describe('Check if login via Apple works', () => {
    it('Navigates to Drobox', () => {

//Visit Dropbox webpage in Google Chrome
cy.visit('https://dropbox.com/')

//Check if "Login" button works
cy.get('.dwg-bg-color--standard > :nth-child(4) > .dwg-nav-item-button > .dwg-text').click()

//Click on "Continue with Apple" button
cy.get('.dwg-sso-button--text-container-v2').click({ multiple: true });


    });
})