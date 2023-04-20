describe("Tester la page Home de Orange", () => {
  beforeEach("", () => {
    cy.loginOrange("Admin", "admin123");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });
  it("Aller sur le Dashboard", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
    cy.get(".oxd-topbar-header-breadcrumb-module").should("be.visible");
    cy.get(".oxd-topbar-header-breadcrumb-module").should(
      "have.text",
      "Dashboard"
    );
    cy.get(".orangehrm-dashboard-widget-name").should("have.length", 7);
  });
});
