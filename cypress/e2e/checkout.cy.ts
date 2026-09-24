import ProductsPage from '../pages/ProductsPage';
import CheckoutPage from '../pages/CheckoutPage';
import LoginPage from '../pages/LoginPage';

describe('Checkout', () => {

  beforeEach(() => {
    LoginPage.visit();
    cy.loginAsStandardUser();

    ProductsPage.addProduct('Sauce Labs Backpack');
    ProductsPage.openCart();

    CheckoutPage.clickCheckout();
  });

  it('should show validation error when checkout fields are empty', () => {
    CheckoutPage.clickContinue();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'First Name is required');
  });

  it('should validate missing last name', () => {
  cy.get('[data-test="firstName"]')
    .type('Khurram');

  cy.get('[data-test="postalCode"]')
    .type('3431');

  CheckoutPage.clickContinue();

  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain.text', 'Last Name is required');
});

it('should validate missing postal code', () => {
  cy.get('[data-test="firstName"]')
    .type('Khurram');

  cy.get('[data-test="lastName"]')
    .type('Muslim');

  CheckoutPage.clickContinue();

  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain.text', 'Postal Code is required');
});

it('should accept valid boundary-style customer data', () => {
  cy.fixture("checkoutData").then((data) => {
  CheckoutPage.enterCustomerDetails(
    data.minimumCustomer.firstName,
    data.minimumCustomer.lastName,
    data.minimumCustomer.postalCode
  );
});

  CheckoutPage.clickContinue();

  cy.get('[data-test="title"]')
    .should('be.visible')
    .and('have.text', 'Checkout: Overview');
});
});