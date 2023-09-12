describe('Find specific car', () => {
    it('Find specifi car with specific price', () => {

//Visit oglasnik.hr web page
cy.visit('https://oglasnik.hr/')

//Set resolution to 1170x2532
cy.viewport(1170, 2532)

//Open 'Auto Moto Nautika' category
cy.get('.section-auto-moto-nautika > .section-box > a > .bg-box > .background').click()

        //Open 'Automobili' category
        cy.get(':nth-child(1) > .section-box > a > .bg-box > .background').click()

            //Click on 'Filtriraj oglase'
            cy.get('p > .hidden-lg').click()

                //Choose 'VW' from drop-down menu in 'Marka' filter
                cy.get('#parameter_7_level_1_box > .bootstrap-select > .dropdown-toggle > .filter-option').click()
                cy.contains('VW').click()

                    //Click on 'Potvrdi odabir'
                    cy.get('#parameter_7_level_1_box > .bootstrap-select > .open > .bs-actionsbox > .btn-group > .bs-confirm-selection').click()

                //Choose 'Passat' from drop-down menu in 'Model' filter
                cy.get('#parameter_7_level_2_box > .bootstrap-select > .dropdown-toggle > .filter-option').click()
                cy.contains('Passat').click()

                    //Click on 'Potvrdi odabir'
                    cy.get('#parameter_7_level_2_box > .bootstrap-select > .open > .bs-actionsbox > .btn-group > .bs-confirm-selection').click()

                //Type price range between 7000€ and 8500€
                cy.get('#parameter_price_from').type('7000')
                cy.get('#parameter_price_to').type('8500')

                //Click on 'Pretraži' button
                cy.get('.filters-main-buttons > [type="submit"]').click()


    });
})