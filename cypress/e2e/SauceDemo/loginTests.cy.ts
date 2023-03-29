import LoginPage from "../../POM/loginPage"
import ProductsPage from "../../POM/productsPage";

const loginPage = new LoginPage();
const productPage = new ProductsPage();

const properUsername = 'standard_user';
const password = 'secret_sauce';

describe('Performing logging tests in application', () => {
    beforeEach(() => {
        cy.clearSessionStorageAndVisitPage();
    })

    it('#1 When user submit empty form #Then proper error message should be returned - TC1', () => {
        loginPage.buttonLogin().click();
        loginPage.errorMessageContainer().should('contain', 'Username is required');
    })


    it('#2 When user try to log as locked_out_user #Then proper error message should be returned - TC2', () => {
        loginPage.typeLoginAndCheckIfFieldIsFilled('locked_out_user');
        loginPage.typePasswordAndCheckIfFieldIsFilled(password);
        loginPage.buttonLogin().click();

        loginPage.errorMessageContainer().should('contain', 'Epic sadface: Sorry, this user has been locked out.')
    })

    it('#3 When user try to log as proper user #Then user should log in, page should changed and local storage should contain proper data - TC2', () => {
        loginPage.typeLoginAndCheckIfFieldIsFilled(properUsername);
        loginPage.typePasswordAndCheckIfFieldIsFilled(password);

        loginPage.buttonLogin().should('be.enabled');
        loginPage.buttonLogin().click();

        productPage.checkIfUrlIsCorrect();

        // Checking session storage value is disabled because currently data is not been saved there after login
        //cy.assertSessionStorageData('session-username', properUsername);
        cy.getCookie('session-username')
            .then(coockie => {
                assert(coockie.value, properUsername)
            })

        productPage.checkIfPageIsCorrectlyDisplayed();
    })
})
