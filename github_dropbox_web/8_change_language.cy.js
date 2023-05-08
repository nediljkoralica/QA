describe('Try to change language in Italian', () => {
    it('Navigates to Drobox', () => {

//Visit Dropbox webpage in Google Chrome
cy.visit('https://dropbox.com/')

//Scroll down till the end of the page
cy.scrollTo('bottom');

//Click on languages settings
cy.get('.dwg-text > .dwg-align-items--center > .dwg-box').click()

//Choose Italian language
cy.get(':nth-child(10) > .locale-option').click()

    });
})