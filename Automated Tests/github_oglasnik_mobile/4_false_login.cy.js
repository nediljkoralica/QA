describe('Try to login with wrong credentials', () => {
    it('Navigates to oglasnik.hr', () => {

//Visit oglasnik.hr web page
cy.visit('https://oglasnik.hr/')

//Set resolution to 1170x2532
cy.viewport(1170, 2532);

//Open Menu
cy.get('.site-header > :nth-child(1) > .mobile-nav-trigger > .fa').click()

//Click on 'Prijava'
cy.get(':nth-child(4) > .text-primary').click()

//Type 'netko1111' in 'Username' field
cy.get('#username').type('netko1111')

//Type 'netko1111' in 'Password' field
cy.get('#password').type('netko1111')

//Click on 'Prijavi se' button
cy.get('.width-full').click()

    });
})