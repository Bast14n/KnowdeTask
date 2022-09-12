class CheckoutStepOnePage {

    inputFirstName(): Cypress.Chainable<JQuery> {
        return cy.get('input[placeholder="First Name"]');
    }

    inputLastName(): Cypress.Chainable<JQuery> {
        return cy.get('input[placeholder="Last Name"]');
    }

    inputZipPostalCode(): Cypress.Chainable<JQuery> {
        return cy.get('input[placeholder="Zip/Postal Code"]');
    }

    buttonContinue(): Cypress.Chainable<JQuery> {
        return cy.get('#continue');
    }

    checkIfUrlIsCorrect(): void {
        cy.url().should('contain', '/checkout-step-one.html');
    }
}

export default CheckoutStepOnePage;