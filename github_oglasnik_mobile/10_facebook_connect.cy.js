describe('Try to open Oglasnik Facebook page', () => {
    it('Navigates to oglasnik.hr', () => {

//Visit oglasnik.hr web page
cy.visit('https://oglasnik.hr/')

//Set resolution to 1170x2532
cy.viewport(1170, 2532);

//Click on Facebook icon
cy.get('.links > :nth-child(1) > .facebook').click()

    });
})