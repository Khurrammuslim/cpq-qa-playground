import BasePage from "./BasePage";

class ProductsPage extends BasePage {
  productItems = ".inventory_item";
  productNames = ".inventory_item_name";
  productPrices = ".inventory_item_price";
  sortDropdown = '[data-test="product-sort-container"]';
  cartBadge = ".shopping_cart_badge";
  cartLink = ".shopping_cart_link";

  verifyProductsPage() {
    this.verifyText('[data-test="title"]', "Products");
  }

  verifyProductCount(count: number) {
    this.getElement(this.productItems)
      .should("have.length", count);
  }

  sortBy(value: string) {
    this.getElement(this.sortDropdown)
      .select(value);
  }

  addProduct(productName: string) {
    cy.contains(this.productItems, productName)
      .find("button")
      .click();
  }

  removeProduct(productName: string) {
    cy.contains(this.productItems, productName)
      .find("button")
      .click();
  }

  verifyCartCount(count: number) {
  if (count === 0) {
    cy.get(this.cartBadge).should("not.exist");
  } else {
    cy.get(this.cartBadge)
      .should("be.visible")
      .and("have.text", count.toString());
  }
}

  openCart() {
    this.click(this.cartLink);
  }
}

export default new ProductsPage();