describe('Check if Login button works', () => {
    it('Navigates to Drobox', () => {

//Visit Dropbox webpage in Google Chrome
cy.visit('https://dropbox.com/')

//Check if "Login" button works
cy.get('.dwg-bg-color--standard > :nth-child(4) > .dwg-nav-item-button > .dwg-text').click()

    });
})
