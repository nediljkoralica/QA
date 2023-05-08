describe('Find specific car', () => {
    it('Navigates to oglasnik.hr', () => {

//Visit oglasnik.hr web page
cy.visit('https://oglasnik.hr/')

//Set resolution to 1170x2532
cy.viewport(1170, 2532);

//Open 'Auto Moto Nautika' category
cy.get('.section-auto-moto-nautika > .section-box > a > .bg-box > .background').click()

        //Open 'Automobili' category
        cy.get(':nth-child(1) > .section-box > a > .bg-box > .background').click()

            //Click on 'Filtriraj oglase'
            cy.get('p > .hidden-lg').click()

                //Choose 'Mercedes-Benz' from drop-down menu in 'Marka' filter
                cy.get('#parameter_7_level_1_box > .bootstrap-select > .dropdown-toggle > .filter-option').click()
                cy.contains('Mercedes-Benz').click()

                    //Click on 'Potvrdi odabir'
                    cy.get('#parameter_7_level_1_box > .bootstrap-select > .open > .bs-actionsbox > .btn-group > .bs-confirm-selection').click()

                //Choose 'C-klasa' from drop-down menu in 'Model' filter
                cy.get('#parameter_7_level_2_box > .bootstrap-select > .dropdown-toggle > .filter-option').click()
                cy.contains('C-klasa').click()

                    //Click on 'Potvrdi odabir'
                    cy.get('#parameter_7_level_2_box > .bootstrap-select > .open > .bs-actionsbox > .btn-group > .bs-confirm-selection').click()

                    //Click on 'Pretraži'
                    cy.get('.filters-main-buttons > [type="submit"]').click()

    });
})