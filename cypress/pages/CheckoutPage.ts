class CheckoutPage {
  checkoutButton = '[data-test="checkout"]';
  firstNameInput = '[data-test="firstName"]';
  lastNameInput = '[data-test="lastName"]';
  postalCodeInput = '[data-test="postalCode"]';
  continueButton = '[data-test="continue"]';
  finishButton = '[data-test="finish"]';
  completeMessage = '[data-test="complete-header"]';

  clickCheckout() {
    cy.get(this.checkoutButton).click();
  }

  enterCustomerDetails(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    cy.get(this.firstNameInput).type(firstName);
    cy.get(this.lastNameInput).type(lastName);
    cy.get(this.postalCodeInput).type(postalCode);
  }

  clickContinue() {
    cy.get(this.continueButton).click();
  }

  finishOrder() {
    cy.get(this.finishButton).click();
  }

  verifyOrderComplete() {
    cy.get(this.completeMessage)
      .should('be.visible')
      .and('have.text', 'Thank you for your order!');
  }
}

export default new CheckoutPage();