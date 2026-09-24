class BasePage {
  visit(url: string) {
    cy.visit(url);
  }

  getElement(selector: string) {
    return cy.get(selector);
  }

  click(selector: string) {
    cy.get(selector).click();
  }

  type(selector: string, value: string) {
    cy.get(selector).clear().type(value);
  }

  verifyVisible(selector: string) {
    cy.get(selector).should("be.visible");
  }

  verifyText(selector: string, text: string) {
    cy.get(selector)
      .should("be.visible")
      .and("have.text", text);
  }
}

export default BasePage;