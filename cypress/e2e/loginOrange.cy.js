describe("Tester le login Orange", () => {
  it("authentification", () => {
    cy.fixture("dataLogin").then((data) => {
      cy.loginOrange(data.user.username, data.user.password);
    });
  });

  it("login avec les bons identifiants", () => {
    cy.loginOrange("Admin", "admin123");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });

  it("login avec les mauvais identifiants", () => {
    cy.fixture("dataLogin").then((data) => {
      cy.loginOrange("Admin", "fauxmdp");
      cy.get(".oxd-alert-content-text").should(
        "be.visible",
        "invalid credentials"
      );
    });
  });
});
