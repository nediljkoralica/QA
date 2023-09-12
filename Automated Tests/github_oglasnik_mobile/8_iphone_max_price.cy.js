describe('Find Iphones and sort them', () => {
    it('Navigates to oglasnik.hr', () => {

//Visit oglasnik.hr web page
cy.visit('https://oglasnik.hr/')

//Set resolution to 1170x2532
cy.viewport(1170, 2532);

//Click on 'Mobiteli i oprema'
cy.get('.section-mobiteli-i-oprema > .section-box > a > .bg-box > .background').click()

        //Click on 'Mobiteli'
        cy.get('.xs-margin-offset-minus-10px > :nth-child(1) > a').click()

            //Click on 'Apple Iphone'
            cy.get('.xs-margin-offset-minus-10px > :nth-child(2) > a').click()

                //Sort by max price
                cy.get('.col-sm-5 > .btn-group > .dropdown-toggle > .filter-option').click()
                cy.contains('Cijena - najviša').click()

    });
})