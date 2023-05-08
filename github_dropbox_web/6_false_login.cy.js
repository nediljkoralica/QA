describe('Try to login with wrong username and wrong password', () => {
    it('Navigates to Drobox', () => {

//Visit Dropbox webpage in Google Chrome
cy.visit('https://dropbox.com/')

//Click on 'Login' button
cy.get('.dwg-bg-color--standard > :nth-child(4) > .dwg-nav-item-button > .dwg-text').click()

//Type 'netko@gmail.com' in 'E-mail' field
cy.get('.text-input-wrapper').type('netko@gmail.com')

//Click on 'Continue' button
cy.get('.sso-container--dwg-refresh > .dwg-stack').click()

//Type 'netko1111' in 'Password' field
cy.get('.credentials-form__fields > .text-input > .text-input-wrapper').type('netko1111')

//Uncheck 'Remember me' checkbox
cy.get('.login-submit-container--dwg-refresh > .auth__checkbox-row > .dig-FormRow input[type="checkbox"]').uncheck();

//Click on 'Continue' button
cy.get('.login-submit-container--dwg-refresh > .dwg-stack').click()

    });
})