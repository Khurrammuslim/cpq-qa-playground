import BasePage from "./BasePage";

class LoginPage extends BasePage {
  usernameInput = '[data-test="username"]';
  passwordInput = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';
  errorMessage = '[data-test="error"]';

  visit() {
    super.visit(Cypress.env("uiBaseUrl"));
  }

  login(username: string, password: string) {
    this.type(this.usernameInput, username);
    this.type(this.passwordInput, password);
    this.click(this.loginButton);
  }

  verifyError(message: string) {
    this.getElement(this.errorMessage)
      .should("be.visible")
      .and("contain.text", message);
  }
}

export default new LoginPage();