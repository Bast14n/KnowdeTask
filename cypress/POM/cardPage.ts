class CardPage {

    productName(): Cypress.Chainable<JQuery> {
        return cy.get('.inventory_item_name');
    }

    productPrice(): Cypress.Chainable<JQuery> {
        return cy.get('.inventory_item_price');
    }

    buttonCheckout(): Cypress.Chainable<JQuery> {
        return cy.get('#checkout');
    }
}

export default CardPage;