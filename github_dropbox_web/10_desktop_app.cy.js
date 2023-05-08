describe('Try to download Dropbox for desktop', () => {
    it('Navigates to Drobox', () => {

//Visit Dropbox webpage in Google Chrome
cy.visit('https://dropbox.com/')

//Click on Desktop app in the 'Dropbox' tab
cy.get(':nth-child(1) > .dwg-pr--3 > :nth-child(1) > .dwg-font-size--14 > .dwg-pb--1_5 > .dwg-footer-plank__link-list > :nth-child(1) > .dwg-text').click()

//Click on 'Download now' button
cy.get('.dwg-hero-l3-plank__cta-group > .dwg-stack > :nth-child(1) > .dwg-button').click()


    });
})
