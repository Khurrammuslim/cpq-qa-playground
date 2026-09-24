import BasePage from "./BasePage";

class CheckoutPage extends BasePage {
  checkoutButton = '[data-test="checkout"]';
  firstNameInput = '[data-test="firstName"]';
  lastNameInput = '[data-test="lastName"]';
  postalCodeInput = '[data-test="postalCode"]';
  continueButton = '[data-test="continue"]';
  finishButton = '[data-test="finish"]';
  completeMessage = '[data-test="complete-header"]';

  clickCheckout() {
    this.click(this.checkoutButton);
  }

  enterCustomerDetails(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    this.type(this.firstNameInput, firstName);
    this.type(this.lastNameInput, lastName);
    this.type(this.postalCodeInput, postalCode);
  }

  clickContinue() {
    this.click(this.continueButton);
  }

  finishOrder() {
    this.click(this.finishButton);
  }

  verifyOrderComplete() {
    this.verifyText(
      this.completeMessage,
      "Thank you for your order!"
    );
  }
}

export default new CheckoutPage();