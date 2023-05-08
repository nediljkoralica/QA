describe('Try to open Dropbox Facebook page', () => {
  it('Navigates to Drobox', () => {

//Visit Dropbox webpage in Google Chrome
cy.visit('https://dropbox.com/')

//Click on Dropbox Facebook link
cy.get('.dwg-footer-plank__social > :nth-child(2) > .dwg-icon-button').click()

  });
})
