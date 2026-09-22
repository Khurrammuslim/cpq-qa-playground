class LoginPage {

  usernameInput = '[data-test="username"]';
  passwordInput = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';
  errorMessage = '[data-test="error"]';

  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  enterUsername(username: string) {
    cy.get(this.usernameInput)
      .type(username);
  }

  enterPassword(password: string) {
    cy.get(this.passwordInput)
      .type(password);
  }

  clickLogin() {
    cy.get(this.loginButton)
      .click();
  }

  login(username: string, password: string) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  verifyError(message: string) {
    cy.get(this.errorMessage)
      .should('be.visible')
      .and('contain.text', message);
  }
}

export default new LoginPage();