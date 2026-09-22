class ProductsPage {
  productItems = '.inventory_item';
  productNames = '.inventory_item_name';
  productPrices = '.inventory_item_price';
  sortDropdown = '[data-test="product-sort-container"]';
  addToCartButtons = 'button[id^="add-to-cart"]';
  cartBadge = '.shopping_cart_badge';
  cartLink = '.shopping_cart_link';

  verifyProductsPage() {
    cy.get('[data-test="title"]')
      .should('be.visible')
      .and('have.text', 'Products');
  }

  verifyProductCount(count: number) {
    cy.get(this.productItems)
      .should('have.length', count);
  }

  sortBy(value: string) {
    cy.get(this.sortDropdown)
      .select(value);
  }

  addProduct(productName: string) {
    cy.contains(this.productItems, productName)
      .find('button')
      .click();
  }

  verifyCartCount(count: number) {
    cy.get(this.cartBadge)
      .should('have.text', count.toString());
  }

  removeProduct(productName: string) {
    cy.contains(this.productItems, productName)
      .find('button')
      .click();
  }

  openCart() {
    cy.get(this.cartLink).click();
  }
}

export default new ProductsPage();