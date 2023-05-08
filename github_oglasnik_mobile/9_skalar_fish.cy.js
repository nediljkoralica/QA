describe('Find specific fishes', () => {
    it('Navigates to oglasnik.hr', () => {

//Visit oglasnik.hr web page
cy.visit('https://oglasnik.hr/')

//Set resolution to 1170x2532
cy.viewport(1170, 2532);

//Click on 'Kućni ljubimci'
cy.get('.section-kućni-ljubimci > .section-box > a > .bg-box > .background').click()

        //Click on 'Ribe'
        cy.get('.nav > :nth-child(4) > a').click()

            //Type 'Pterophyllum Scalare' in searchox and hit Enter
            cy.get('#parameter_title').type('Pterophyllum Scalare')
            cy.get(':nth-child(4) > .input-group > .input-group-btn > .btn > .fa').click()

                //Click on 'Poništi filter'
                cy.get('.btn-reset').click()

    });
})
