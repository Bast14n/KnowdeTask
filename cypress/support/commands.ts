/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add('clearSessionStorageAndVisitPage', () => {
    sessionStorage.clear();
    cy.visit('/');
});

Cypress.Commands.add('assertSessionStorageData', (key, expectedValue) => {
    const result = sessionStorage.getItem(key);
    assert(result === expectedValue, `Expected: ${result} to equal: ${expectedValue}, for key: ${key}`)
})

declare namespace Cypress {
    interface Chainable {
        clearSessionStorageAndVisitPage(): Chainable<any>;
        assertSessionStorageData(key: string, expectedValue: string): Chainable<any>;
    }
}