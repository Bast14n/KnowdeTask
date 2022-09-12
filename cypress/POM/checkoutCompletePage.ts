class CheckoutCompletePage {

    headerOrderState(): Cypress.Chainable<JQuery> {
        return cy.get('.complete-header');
    }

    checkIfUrlIsCorrect(): void {
        cy.url().should('contain', '/checkout-complete.html');
    }
}

export default CheckoutCompletePage;