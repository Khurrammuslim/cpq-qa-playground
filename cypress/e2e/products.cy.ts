import ProductsPage from '../pages/ProductsPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Products', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');

    cy.login('standard_user', 'secret_sauce');

    ProductsPage.verifyProductsPage();
  });

  it('should display all products', () => {
    ProductsPage.verifyProductCount(6);
  });

  it('should display correct product names', () => {
    const expectedProducts = [
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light',
        'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Fleece Jacket',
        'Sauce Labs Onesie',
        'Test.allTheThings() T-Shirt (Red)'
    ];

    cy.get(ProductsPage.productNames)
        .should('have.length', expectedProducts.length)
        .then(($products) => {
        const actualProducts = [...$products].map(
            (product) => product.textContent?.trim()
        );

        expect(actualProducts).to.deep.equal(expectedProducts);
        });
  });

  it('should display correct product prices', () => {
    const expectedPrices = [
        '$29.99',
        '$9.99',
        '$15.99',
        '$49.99',
        '$7.99',
        '$15.99'
    ];

    cy.get(ProductsPage.productPrices)
        .should('have.length', expectedPrices.length)
        .then(($prices) => {
        const actualPrices = [...$prices].map(
            (price) => price.textContent?.trim()
        );

        expect(actualPrices).to.deep.equal(expectedPrices);
        });
  });

  it('should sort products A to Z', () => {
  ProductsPage.sortBy('az');

  const expectedNames = [
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Fleece Jacket',
    'Sauce Labs Onesie',
    'Test.allTheThings() T-Shirt (Red)'
  ];

  cy.get(ProductsPage.productNames).then(($products) => {
    const actualNames = [...$products].map(
      (product) => product.textContent?.trim()
    );

    expect(actualNames).to.deep.equal(expectedNames);
  });
});

it('should sort products Z to A', () => {
  ProductsPage.sortBy('za');

  const expectedNames = [
    'Test.allTheThings() T-Shirt (Red)',
    'Sauce Labs Onesie',
    'Sauce Labs Fleece Jacket',
    'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Bike Light',
    'Sauce Labs Backpack'
  ];

  cy.get(ProductsPage.productNames).then(($products) => {
    const actualNames = [...$products].map(
      (product) => product.textContent?.trim()
    );

    expect(actualNames).to.deep.equal(expectedNames);
  });
});

it('should sort products by price low to high', () => {
  ProductsPage.sortBy('lohi');

  const expectedPrices = [
    '$7.99',
    '$9.99',
    '$15.99',
    '$15.99',
    '$29.99',
    '$49.99'
  ];

  cy.get(ProductsPage.productPrices).then(($prices) => {
    const actualPrices = [...$prices].map(
      (price) => price.textContent?.trim()
    );

    expect(actualPrices).to.deep.equal(expectedPrices);
  });
});

it('should sort products by price high to low', () => {
    ProductsPage.sortBy('hilo');

    const expectedPrices = [
        '$49.99',
        '$29.99',
        '$15.99',
        '$15.99',
        '$9.99',
        '$7.99'
    ];

    cy.get(ProductsPage.productPrices).then(($prices) => {
        const actualPrices = [...$prices].map(
        (price) => price.textContent?.trim()
        );

        expect(actualPrices).to.deep.equal(expectedPrices);
    });
});

it('should add products to cart', () => {
  ProductsPage.addProduct('Sauce Labs Backpack');
  ProductsPage.addProduct('Sauce Labs Bike Light');

  ProductsPage.verifyCartCount(2);
});

it('should remove a product from the cart', () => {
  ProductsPage.addProduct('Sauce Labs Backpack');
  ProductsPage.addProduct('Sauce Labs Bike Light');

  ProductsPage.verifyCartCount(2);

  ProductsPage.removeProduct('Sauce Labs Backpack');

  ProductsPage.verifyCartCount(1);
});

it('should add product and verify it in cart', () => {
  ProductsPage.addProduct('Sauce Labs Backpack');

  ProductsPage.verifyCartCount(1);

  ProductsPage.openCart();

  cy.get('.inventory_item_name')
    .should('be.visible')
    .and('have.text', 'Sauce Labs Backpack');
});

it('should complete a checkout successfully', () => {
  ProductsPage.addProduct('Sauce Labs Backpack');

  ProductsPage.openCart();

  CheckoutPage.clickCheckout();

  CheckoutPage.enterCustomerDetails(
    'Khurram',
    'Muslim',
    '3431'
  );

  CheckoutPage.clickContinue();

  cy.get('[data-test="title"]')
    .should('be.visible')
    .and('have.text', 'Checkout: Overview');

  CheckoutPage.finishOrder();

  CheckoutPage.verifyOrderComplete();
});

});