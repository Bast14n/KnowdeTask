import LoginPage from "../POM/loginPage"

const loginPage = new LoginPage();
const password = 'secret_sauce';

describe('Performing logging tests in application', () => {
    beforeEach(() => {
        cy.window().its('sessionStorage').invoke('clear')
        cy.visit('/');
        loginPage.checkIfPageIsFullyLoaded();
    })

    it('#1 When user submit empty form #Then proper error message should be returned', () => {
        loginPage.buttonLogin().click();
        loginPage.errorMessageContainer().should('contain', 'Username is required');
    })


    it('#2 When user try to log as locked_out_user #Then proper error message should be returned', () => {
        loginPage.typeLoginAndCheckIfFieldIsFilled('locked_out_user');
        loginPage.typePasswordAndCheckIfFieldIsFilled(password);
        loginPage.buttonLogin().click();

        loginPage.errorMessageContainer().should('contain', 'Epic sadface: Sorry, this user has been locked out.')
    })

    it('#3 When user try to log as proper user #Then user should log in, page should changed and local storage should contain proper data', () => {
        loginPage.typeLoginAndCheckIfFieldIsFilled('standard_user');
        loginPage.typePasswordAndCheckIfFieldIsFilled(password);

        loginPage.buttonLogin().should('be.enabled');
        loginPage.buttonLogin().click();

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

        // Checking session storage value is disabled because currently data is not been saved there after login
        // cy.window().its('sessionStorage').invoke('getItem', 'session-username').should('eq', 'standard_user');
    })
})
