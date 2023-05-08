describe("Dropbox Website", () => {
    beforeEach(() => {
      // Set the viewport size before visiting Dropbox website
      cy.viewport(1920, 1080);
      cy.visit("https://www.dropbox.com/");
    });
  
    afterEach(() => {
      // Close the browser after each test
      cy.window().then((win) => {
        win.close();
      });
    });
  
    it("should display the Dropbox website", () => {
      // Assert that the URL contains "https://www.dropbox.com/"
      cy.url().should("include", "https://www.dropbox.com/");
    });
  
    it("should have a functional login button and can access Google sign in", () => {
      // Click on the "Login" button
      cy.get(
        ".dwg-bg-color--standard > :nth-child(4) > .dwg-nav-item-button > .dwg-text"
      ).click();
  
      // Check if "Continue with Google" button is visible
      cy.contains("Continue with Google").should("be.visible").click();
  
      // Assert that "Sign in with Google" dialog is visible
      cy.get("#dialog_banner")
        .should("be.visible")
        .contains("Prijava putem Googlea");
    });
  
    it("should allow signing in with Apple account", () => {
      // Click on the "Login" button
      cy.get(
        ".dwg-bg-color--standard > :nth-child(4) > .dwg-nav-item-button > .dwg-text"
      ).click();
  
      // Click on the "Continue with Apple" button
      cy.contains("Continue with Apple").should("be.visible").click();
  
      // Check if "Apple ID" element is visible
      cy.contains("Apple ID").should("be.visible");
    });
  
    it("should allow signing in with incorrect password", () => {
      // Click on the "Login" button
      cy.get(
        ".dwg-bg-color--standard > :nth-child(4) > .dwg-nav-item-button > .dwg-text"
      ).click();
  
      // Type a random email in the "E-mail" field
      cy.get(".text-input-wrapper").type("random_email@example.com");
  
      // Click on the "Continue" button
      cy.get(".sso-container--dwg-refresh > .dwg-stack").click();
  
      // Type an incorrect password in the "Password" field
      cy.get(
        ".credentials-form__fields > .text-input > .text-input-wrapper"
      ).type("incorrect_password");
  
      // Uncheck the "Remember me" checkbox
      cy.get(
        '.login-submit-container--dwg-refresh > .auth__checkbox-row > .dig-FormRow input[type="checkbox"]'
      ).uncheck();
  
      // Click on the "Continue" button
      cy.get(".login-submit-container--dwg-refresh > .dwg-stack").click();
  
      // Assert that the "Welcome back" element is visible
      cy.contains("Welcome back").should("be.visible");
    });
  
    it("should navigate to Dropbox website and change language to Italian", () => {
      // Scroll to the bottom of the page
      cy.scrollTo("bottom");
  
      // Ensure that the language settings button is visible
      cy.get(".dwg-text > .dwg-align-items--center > .dwg-box").should(
        "be.visible"
      );
  
      // Click on the language settings button
      cy.get(".dwg-text > .dwg-align-items--center > .dwg-box").click();
  
      // Choose Italian language
      cy.get(":nth-child(10) > .locale-option").click();
  
      // Ensure that the language has been changed to Italian
      cy.get(".dwg-text > .dwg-align-items--center > .dwg-box").should(
        "contain",
        "Italiano"
      );
  
      // Ensure that the language settings button is still visible
      cy.get(".dwg-text > .dwg-align-items--center > .dwg-box").should(
        "be.visible"
      );
    });
  });
  