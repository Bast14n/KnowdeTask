class CheckoutStepTwoPage {

    buttonFinish(): Cypress.Chainable<JQuery> {
        return cy.get('#finish');
    }

    checkIfUrlIsCorrect(): void {
        cy.url().should('contain', '/checkout-step-two.html');
    }
}

export default CheckoutStepTwoPage;