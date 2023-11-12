

describe("Sanity Test", () => {
    it("visits the app root url", () => {
        cy.visit("/");
        cy.contains("header div section h1", "Assessify");
    });
});