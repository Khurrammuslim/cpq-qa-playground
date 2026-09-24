import LoginPage from '../pages/LoginPage';

describe('Visual Regression Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
    cy.loginAsStandardUser();

    cy.get('[data-test="title"]')
      .should('be.visible')
      .and('have.text', 'Products');
  });

  it('should capture Products page visually', () => {
    cy.percySnapshot('Products Page');
  });

  it('should capture cart page visually', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();

    cy.get('.shopping_cart_link')
      .click();

    cy.get('[data-test="title"]')
      .should('have.text', 'Your Cart');

    cy.percySnapshot('Cart Page');
  });
});