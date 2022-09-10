const expectedVisibilityCondition = 'be.visible';

export class LoginPage {

    loginLogo(): Cypress.Chainable<JQuery> {
        return cy.get('.login_logo')
    }

    inputUsername(): Cypress.Chainable<JQuery> {
        return cy.get('#user-name');
    }

    inputPassword(): Cypress.Chainable<JQuery> {
        return cy.get('#password');
    }

    buttonLogin(): Cypress.Chainable<JQuery> {
        return cy.get('#login-button');
    }

    image(): Cypress.Chainable<JQuery> {
        return cy.get('.bot_column');
    }

    errorMessageContainer(): Cypress.Chainable<JQuery> {
        return cy.get('.error-message-container');
    }

    loginCredentials(): Cypress.Chainable<JQuery> {
        return cy.get('.login_credentials_wrap-inner');
    }

    typeLoginAndCheckIfFieldIsFilled(login: string) {
        this.inputUsername().type(login);
        this.inputUsername().should('have.value', login);
    }

    typePasswordAndCheckIfFieldIsFilled(password: string) {
        this.inputPassword().type(password);
        this.inputPassword().should('have.value', password);
    }
}

export default LoginPage;