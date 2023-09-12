describe("Oglasnik Website", () => {
    // Set the viewport size before visiting the website
    beforeEach(() => {
      cy.viewport(1170, 2532);
      cy.visit("https://www.oglasnik.hr/");
    });
  
    // Close the browser after each test
    afterEach(() => {
      cy.window().then((win) => {
        win.close();
      });
    });
  
    // Check if the Plavi oglasnik website is displayed
    it("Should display the Plavi oglasnik website", () => {
      // Assert that the URL contains "https://www.oglasnik.hr/"
      cy.url().should("include", "https://www.oglasnik.hr/");
    });
  
    // Check if 'Predaj oglas' button works
    it("Check if Predaj oglas button works", () => {
      // Click on 'Predaj oglas' button
      cy.get(".pull-right > .btn").click();
  
      // Assert that 'Prijava korisnika' dialog is opened and contains "Prijavi se" button
      cy.get("#frm_login > div.margin-top-lg > button")
        .should("be.visible")
        .contains("Prijavi se");
    });
  
    // Test to check if hamburger menu works
    it("Check if hamburger menu works", () => {
      // Click on hamburger menu
      cy.get(".site-header > :nth-child(1) > .mobile-nav-trigger > .fa").click();
  
      // Check if "Kategorije" button is visible
      cy.contains("Kategorije").should("be.visible");
  
      // Close the hamburger menu
      cy.get(".mm-navbar > .homer").click();
  
      // Assert that the URL contains "https://www.oglasnik.hr/"
      cy.url().should("include", "https://www.oglasnik.hr/");
    });
  
    // Test to check if logging in with wrong credentials displays an error message
    it("Try to login with wrong credentials", () => {
      // Open menu
      cy.get(".site-header > :nth-child(1) > .mobile-nav-trigger > .fa").click();
  
      // Check if "Kategorije" button is visible
      cy.contains("Kategorije").should("be.visible");
  
      // Click on 'Prijava' button
      cy.get(":nth-child(4) > .text-primary").click();
  
      // Assert that the "Prijavi se" button is visible
      cy.get("#frm_login > div.margin-top-lg > button")
        .should("be.visible")
        .contains("Prijavi se");
  
      // Type 'netko1111' in 'Username' field
      cy.get("#username").type("netko1111");
  
      // Type 'netko1111' in 'Password' field
      cy.get("#password").type("netko1111");
  
      // Click on 'Prijavi se' button
      cy.get(".width-full").click();
  
      // Check if "Greška! Korisničko ime i/ili lozinka nisu ispravni" element is visible
      cy.contains("Greška! Korisničko ime i/ili lozinka nisu ispravni").should(
        "be.visible"
      );
    });
  
    it("Try to sign-up with wrong credentials", () => {
      // Open menu
      cy.get(".site-header > :nth-child(1) > .mobile-nav-trigger > .fa").click();
  
      // Check if 'Kategorije' button is visible
      cy.contains("Kategorije").should("be.visible");
  
      // Click on 'Registracija'
      cy.get(":nth-child(5) > .text-primary").click();
  
      // Assert that the URL contains "https://www.oglasnik.hr/user/signup"
      cy.url().should("include", "https://www.oglasnik.hr/user/signup");
  
      // Click on 'Registracija fizičke osobe'
      cy.get(":nth-child(1) > .btn").click();
  
      // Check if 'Registracija fizičke osobe' element is visible
      cy.contains("Registracija fizičke osobe").should("be.visible");
  
      // Type 'netko1111' in 'Korisničko ime' field
      cy.get("#username").type("netko1111");
  
      // Type 'netko1111' in 'E-mail' field
      cy.get("#email").type("netko1111");
  
      // Type 'netko1111' in 'Lozinka' field
      cy.get("#password").type("netko1111");
  
      // Type 'netko1111' in 'Ponovljena lozinka' field
      cy.get("#repeatPassword").type("netko1111");
  
      // Type 'netko1111' in 'Ime' field
      cy.get("#first_name").type("netko1111");
  
      // Type 'netko1111' in 'Prezime' field
      cy.get("#last_name").type("netko1111");
  
      // Choose 'Hrvatska' from drop down menu 'Država'
      cy.get(
        ":nth-child(1) > .form-group > .btn-group > .dropdown-toggle > .filter-option"
      ).click();
      cy.contains("Hrvatska").click();
  
      // Choose 'Splitsko-dalmatinska' from drop down menu 'Županija'
      cy.get(
        ":nth-child(2) > .form-group > .btn-group > .dropdown-toggle > .filter-option"
      ).click();
      cy.contains("Splitsko-dalmatinska").click();
  
      // Type 'Split' in 'Grad' field
      cy.get("#city").type("Split");
  
      // Choose 1.1.1990. as date of birth
      cy.get(".btn-group.day > .dropdown-toggle > .filter-option").click();
      cy.contains("01").click();
      cy.get(".btn-group.month > .dropdown-toggle > .filter-option").click();
      cy.contains("Siječanj").click();
      cy.get(".btn-group.year > .dropdown-toggle > .filter-option").click();
      cy.contains("1990").click();
  
      // Check 'Pročitao sam i slažem se s uvjetima korištenja' box
      cy.get(
        ':nth-child(10) > :nth-child(1) > .form-group > label[for="terms"]'
      ).click();
  
      // Click on 'Završi registraciju' button
      cy.get("#submitBtn").click();
  
      // Assert that the 'Registracija' windows opens again
      cy.url().should("include", "https://www.oglasnik.hr/user/signup?personal");
    });
  
    it("Should find a specific car", () => {
      // Open 'Auto Moto Nautika' category
      cy.get(
        ".section-auto-moto-nautika > .section-box > a > .bg-box > .background"
      ).click();
  
      // Assert that the URL contains "https://www.oglasnik.hr/auto-moto-i-nautika"
      cy.url().should("include", "https://www.oglasnik.hr/auto-moto-i-nautika");
  
      // Open 'Automobili' category
      cy.get(":nth-child(1) > .section-box > a > .bg-box > .background").click();
  
      // Assert that the URL contains "https://www.oglasnik.hr/prodaja-automobila"
      cy.url().should("include", "https://www.oglasnik.hr/prodaja-automobila");
  
      // Click on 'Filtriraj oglase'
      cy.get("p > .hidden-lg").click();
  
      // Check if 'Pretraži' button is visible
      cy.get(
        "#filters-anchor > div.filters-main-buttons > button.btn.btn-primary.width-full.text-bold.margin-bottom-10px"
      )
        .should("be.visible")
        .contains("Pretraži");
  
      // Choose 'Mercedes-Benz' from drop-down menu in 'Marka' filter
      cy.get(
        "#parameter_7_level_1_box > .bootstrap-select > .dropdown-toggle > .filter-option"
      ).click();
      cy.contains("Mercedes-Benz").click();
  
      // Click on 'Potvrdi odabir'
      cy.get(
        "#parameter_7_level_1_box > .bootstrap-select > .open > .bs-actionsbox > .btn-group > .bs-confirm-selection"
      ).click();
  
      // Choose 'C-klasa' from drop-down menu in 'Model' filter
      cy.get(
        "#parameter_7_level_2_box > .bootstrap-select > .dropdown-toggle > .filter-option"
      ).click();
      cy.contains("C-klasa").click();
  
      // Click on 'Potvrdi odabir'
      cy.get(
        "#parameter_7_level_2_box > .bootstrap-select > .open > .bs-actionsbox > .btn-group > .bs-confirm-selection"
      ).click();
  
      // Click on 'Pretraži'
      cy.get('.filters-main-buttons > [type="submit"]').click();
  
      // Check if given filters are visible on the page
      cy.get("#filterBitsContainer > div > div.col-md-6.filterBits")
        .should("contain", "Proizvođač: Mercedes-Benz")
        .should("contain", "Model: C-klasa");
    });
  
    it("Should find a specific car with specific price", () => {
      // Open 'Auto Moto Nautika' category
      cy.get(
        ".section-auto-moto-nautika > .section-box > a > .bg-box > .background"
      ).click();
  
      // Assert that the URL contains "https://www.oglasnik.hr/auto-moto-i-nautika"
      cy.url().should("include", "https://www.oglasnik.hr/auto-moto-i-nautika");
  
      // Open 'Automobili' category
      cy.get(":nth-child(1) > .section-box > a > .bg-box > .background").click();
  
      // Assert that the URL contains "https://www.oglasnik.hr/prodaja-automobila"
      cy.url().should("include", "https://www.oglasnik.hr/prodaja-automobila");
  
      // Click on 'Filtriraj oglase'
      cy.get("p > .hidden-lg").click();
  
      // Check if 'Pretraži' button is visible and contains text 'Pretraži'
      cy.get(
        "#filters-anchor > div.filters-main-buttons > button.btn.btn-primary.width-full.text-bold.margin-bottom-10px"
      )
        .should("be.visible")
        .contains("Pretraži");
  
      // Choose 'VW' from drop-down menu in 'Marka' filter
      cy.get(
        "#parameter_7_level_1_box > .bootstrap-select > .dropdown-toggle > .filter-option"
      ).click();
      cy.contains("VW").click();
  
      // Click on 'Potvrdi odabir'
      cy.get(
        "#parameter_7_level_1_box > .bootstrap-select > .open > .bs-actionsbox > .btn-group > .bs-confirm-selection"
      ).click();
  
      // Choose 'Passat' from drop-down menu in 'Model' filter
      cy.get(
        "#parameter_7_level_2_box > .bootstrap-select > .dropdown-toggle > .filter-option"
      ).click();
      cy.contains("Passat").click();
  
      // Click on 'Potvrdi odabir'
      cy.get(
        "#parameter_7_level_2_box > .bootstrap-select > .open > .bs-actionsbox > .btn-group > .bs-confirm-selection"
      ).click();
  
      // Type price range between 7000€ and 8500€
      cy.get("#parameter_price_from").type("7000");
      cy.get("#parameter_price_to").type("8500");
  
      // Click on 'Pretraži' button
      cy.get('.filters-main-buttons > [type="submit"]').click();
  
      // Check if given filters are visible on the page
      cy.get("#filterBitsContainer > div > div.col-md-6.filterBits")
        .should("contain", "Proizvođač: VW")
        .should("contain", "Model: Passat")
        .should("contain", "Cijena od: 7.000")
        .should("contain", "Cijena do: 8.500");
    });
  
    it("Should find specific mobile phones and sort the results", () => {
      // Click on 'Mobiteli i oprema'
      cy.get(
        ".section-mobiteli-i-oprema > .section-box > a > .bg-box > .background"
      ).click();
  
      // Assert that the URL contains "https://www.oglasnik.hr/mobiteli-i-oprema"
      cy.url().should("include", "https://www.oglasnik.hr/mobiteli-i-oprema");
  
      // Click on 'Mobiteli'
      cy.get(".xs-margin-offset-minus-10px > :nth-child(1) > a").click();
  
      // Check if 'Mobiteli' page is opened
      cy.get(
        "#page-mm-container > div.container.no-padding-xs > div > h1"
      ).should("contain", "Mobiteli");
  
      // Click on 'Apple Iphone'
      cy.get(".xs-margin-offset-minus-10px > :nth-child(2) > a").click();
  
      // Check if 'Apple iPhone' element is visible
      cy.get(
        "#page-mm-container > div.container.no-padding-xs > div > h1"
      ).should("contain", "Apple iPhone");
  
      // Sort by max price
      cy.get(
        ".col-sm-5 > .btn-group > .dropdown-toggle > .filter-option"
      ).click();
      cy.contains("Cijena - najviša").click();
  
      // Assert that the URL contains "https://www.oglasnik.hr/apple-iphone?sort=expensive"
      cy.url().should(
        "include",
        "https://www.oglasnik.hr/apple-iphone?sort=expensive"
      );
    });
  
    it("Should find specific pet fish", () => {
      //Click on 'Kućni ljubimci'
      cy.get(
        ".section-kućni-ljubimci > .section-box > a > .bg-box > .background"
      ).click();
  
      // Assert that the URL contains "https://www.oglasnik.hr/kucni-ljubimci"
      cy.url().should("include", "https://www.oglasnik.hr/kucni-ljubimci");
  
      //Click on 'Ribe'
      cy.get(".nav > :nth-child(4) > a").click();
  
      // Check if 'Ribe' element is visible
      cy.contains("Ribe").should("be.visible");
  
      //Type 'Pterophyllum Scalare' in search box and hit Enter
      cy.get("#parameter_title").type("Pterophyllum Scalare");
      cy.get(
        ":nth-child(4) > .input-group > .input-group-btn > .btn > .fa"
      ).click();
  
      // Check if given filter is visible on the page
      cy.get("#filterBitsContainer > div > div.col-md-6.filterBits").should(
        "contain",
        "Pojam: Pterophyllum Scalare"
      );
  
      //Click on 'Poništi filter'
      cy.get(".btn-reset").click();
  
      //Check if given filter is still visible on the page - it shouldn't be
      cy.get("#filterBitsContainer > div > div.col-md-6.filterBits").should(
        "not.contain",
        "Pojam: Pterophyllum Scalare"
      );
    });
  });
  