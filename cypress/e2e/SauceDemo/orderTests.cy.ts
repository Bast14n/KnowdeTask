import CardPage from "../../POM/cardPage";
import CheckoutCompletePage from "../../POM/checkoutCompletePage";
import CheckoutStepOnePage from "../../POM/checkoutStepOnePage";
import CheckoutStepTwoPage from "../../POM/checkoutStepTwoPage";
import LoginPage from "../../POM/loginPage";
import ProductsPage from "../../POM/productsPage";

const loginPage = new LoginPage();
const productPage = new ProductsPage();
const cardPage = new CardPage();
const checkoutStepOnePage = new CheckoutStepOnePage();
const checkoutStepTwoPage = new CheckoutStepTwoPage();
const checkoutCompletePage = new CheckoutCompletePage();

const properUsername = 'standard_user';
const password = 'secret_sauce';

describe('Perform order tets', () => {
    beforeEach(() => {
        cy.clearSessionStorageAndVisitPage();
    })

    it('#1 When user successfully order a product #Then proper communicate should be displayed - TC3', () => {
        loginPage.typeLoginAndCheckIfFieldIsFilled(properUsername);
        loginPage.typePasswordAndCheckIfFieldIsFilled(password);

        loginPage.buttonLogin().click();

        productPage.checkIfUrlIsCorrect();

        // Checking session storage value is disabled because currently data is not been saved there after login
        //cy.assertSessionStorageData('session-username', properUsername);

        productPage.checkIfPageIsCorrectlyDisplayed();
        productPage.buttonAddBackpack().click();

        productPage.buttonRemoveBackpack().should('exist');
        productPage.buttonAddBackpack().should('not.exist');
        productPage.iconCardItemQuantity().should('have.text', '1');

        productPage.cardButton().click();

        cardPage.productName().should('have.text', 'Sauce Labs Backpack');
        cardPage.productPrice().should('have.text', '$29.99');

        cardPage.buttonCheckout().click();
        checkoutStepOnePage.checkIfUrlIsCorrect();

        checkoutStepOnePage.inputFirstName().type('fist');
        checkoutStepOnePage.inputLastName().type('last');
        checkoutStepOnePage.inputZipPostalCode().type('000');

        checkoutStepOnePage.buttonContinue().click();
        checkoutStepTwoPage.checkIfUrlIsCorrect();

        checkoutStepTwoPage.buttonFinish().click();
        checkoutCompletePage.checkIfUrlIsCorrect();

        checkoutCompletePage.headerOrderState().should('have.text', 'THANK YOU FOR YOUR ORDER');
    })
})