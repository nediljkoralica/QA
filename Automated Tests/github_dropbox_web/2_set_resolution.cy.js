describe('Try to change resolution', () => {
    it('Navigates to Drobox', () => {

//Visit Dropbox webpage in Google Chrome
cy.visit('https://dropbox.com/')

//Set resolution to 1920x1080
cy.viewport(1920, 1080);

    });
})