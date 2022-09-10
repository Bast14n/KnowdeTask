const expectedVisibilityCondition = 'be.visible';
const expectedItemsQuantity = 6

class ProductsPage {

    appLogo(): Cypress.Chainable<JQuery> {
        return cy.get('.app_logo');
    }

    title(): Cypress.Chainable<JQuery> {
        return cy.get('.header_secondary_container > .title');
    }

    burgerMenu(): Cypress.Chainable<JQuery> {
        return cy.get('#react-burger-menu-btn');
    }

    image(): Cypress.Chainable<JQuery> {
        return cy.get('.peek');
    }

    filterProducts(): Cypress.Chainable<JQuery> {
        return cy.get('.product_sort_container');
    }

    basketButton(): Cypress.Chainable<JQuery> {
        return cy.get('.shopping_cart_link');
    }

    buttonAddBackpack(): Cypress.Chainable<JQuery> {
        return cy.get('#add-to-cart-sauce-labs-backpack');
    }

    footer(): Cypress.Chainable<JQuery> {
        return cy.get('.footer');
    }

    itemContainers(): Cypress.Chainable<JQuery> {
        return cy.get('.inventory_item');
    }

    checkIfPageIsCorrectlyDisplayed(): void {
        this.appLogo().should(expectedVisibilityCondition);
        this.basketButton().should(expectedVisibilityCondition);
        this.burgerMenu().should(expectedVisibilityCondition);
        this.title().should(expectedVisibilityCondition);
        this.filterProducts().should(expectedVisibilityCondition);
        this.itemContainers().should('have.length', expectedItemsQuantity).and(expectedVisibilityCondition);
        this.footer().should(expectedVisibilityCondition);
    }

    checkIfUrlIsCorrect(): void {
        cy.url().should('contain', 'inventory.html');
    }
}

export default ProductsPage;