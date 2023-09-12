describe('Check if Predaj oglas button works', () => {
    it('Navigates to oglasnik.hr', () => {

//Visit oglasnik.hr web page
cy.visit('https://oglasnik.hr/')

//Set resolution to 1170x2532
cy.viewport(1170, 2532);

//Check if 'Predaj oglas' button works
cy.get('.pull-right > .btn').click()

    });
})