describe('Try to open hamburger menu', () => {
    it('Navigates to oglasnik.hr', () => {

//Visit oglasnik.hr web page
cy.visit('https://oglasnik.hr/')

//Set resolution to 1170x2532
cy.viewport(1170, 2532);

//Check if hamburger menu works
cy.get('.site-header > :nth-child(1) > .mobile-nav-trigger > .fa').click()
cy.get('.mm-navbar > .homer').click()


    });
})