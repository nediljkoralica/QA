describe('Check if hamburger menu works', () => {
    it('Navigates to Drobox', () => {

//Visit Dropbox webpage in Google Chrome
cy.visit('https://dropbox.com/')

//Check if Hamburger Menu button works
cy.get('.dwg-nav__hamburger-button > .dwg-lazy-icon--large > .dig-UIIcon').click()

//Close the "Hamburger Menu"
cy.get('.dwg-nav__hamburger-button > .dwg-lazy-icon--large > .dig-UIIcon').click()

    });
})