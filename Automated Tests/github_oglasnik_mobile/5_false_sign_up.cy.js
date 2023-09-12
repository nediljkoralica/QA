describe('Try to sign-up with wrong credentials', () => {
    it('Navigates to oglasnik.hr', () => {

//Visit oglasnik.hr web page
cy.visit('https://oglasnik.hr/')

//Set resolution to 1000x660
cy.viewport(1000, 660);

//Open Menu
cy.get('.site-header > :nth-child(1) > .mobile-nav-trigger > .fa').click()

//Click on 'Registracija'
cy.get(':nth-child(5) > .text-primary').click()

//Click on 'Registracija fizičke osobe'
cy.get(':nth-child(1) > .btn').click()

//Type 'netko1111' in 'Korisničko ime' field
cy.get('#username').type('netko1111')

//Type 'netko1111' in 'E-mail' field
cy.get('#email').type('netko1111')

//Type 'netko1111' in 'Lozinka' field
cy.get('#password').type('netko1111')

//Type 'netko1111' in 'Ponovljena lozinka' field
cy.get('#repeatPassword').type('netko1111')

//Type 'netko1111' in 'Ime' field
cy.get('#first_name').type('netko1111')

//Type 'netko1111' in 'Prezime' field
cy.get('#last_name').type('netko1111')

//Choose 'Hrvatska' from drop down menu 'Država'
cy.get(':nth-child(1) > .form-group > .btn-group > .dropdown-toggle > .filter-option').click()
cy.contains('Hrvatska').click()

//Choose 'Splitsko-dalmatinska' from drop down menu 'Županija'
cy.get(':nth-child(2) > .form-group > .btn-group > .dropdown-toggle > .filter-option').click()
cy.contains('Splitsko-dalmatinska').click()

//Type 'Split' in 'Grad' field
cy.get('#city').type('Split')

//Choose 1.1.1990. as date of birth
cy.get('.btn-group.day > .dropdown-toggle > .filter-option').click()
cy.contains('01').click()
cy.get('.btn-group.month > .dropdown-toggle > .filter-option').click()
cy.contains('Siječanj').click()
cy.get('.btn-group.year > .dropdown-toggle > .filter-option').click()
cy.contains('1990').click()

//Check 'Pročitao sam i slažem se s uvjetima korištenja' box
cy.get(':nth-child(10) > :nth-child(1) > .form-group > label[for="terms"]').click()

//Click on 'Završi registraciju' button
cy.get('#submitBtn').click()

    });
})