describe("Tester le login Orange", () => {
  it("login avec les mauvais identifiants", () => {
    cy.loginOrange("Admin", "fauxmdp");
    cy.get(".oxd-alert-content-text").should(
      "be.visible",
      "invalid credentials"
    );
  });

  it("login avec les bons identifiants", () => {
    cy.loginOrange("Admin", "admin123");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });
});
