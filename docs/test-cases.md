# CPQ QA Playground — Test Cases

## Authentication

| ID     | Scenario                       | Expected Result                                  | Priority |
| ------ | ------------------------------ | ------------------------------------------------ | -------- |
| TC-001 | Login with valid credentials   | User is logged in and Products page is displayed | High     |
| TC-002 | Login with invalid credentials | Appropriate error message is displayed           | High     |
| TC-003 | Login with locked user         | User cannot access the application               | High     |
| TC-004 | Logout                         | User is returned to login page                   | Medium   |

## Products

| ID     | Scenario            | Expected Result                                  | Priority |
| ------ | ------------------- | ------------------------------------------------ | -------- |
| TC-005 | Verify product list | All expected products are displayed              | High     |
| TC-006 | Sort products A-Z   | Products appear in ascending alphabetical order  | Medium   |
| TC-007 | Sort products Z-A   | Products appear in descending alphabetical order | Medium   |
| TC-008 | Sort price low-high | Products appear from lowest to highest price     | Medium   |
| TC-009 | Sort price high-low | Products appear from highest to lowest price     | Medium   |
| TC-010 | Add product to cart | Product is added and cart count increases        | High     |
| TC-011 | Remove product      | Product is removed and cart count decreases      | High     |

## Checkout

| ID     | Scenario                          | Expected Result                              | Priority |
| ------ | --------------------------------- | -------------------------------------------- | -------- |
| TC-012 | Complete checkout with valid data | Order is successfully completed              | Critical |
| TC-013 | Submit empty checkout form        | First required field validation is displayed | High     |
| TC-014 | Missing last name                 | Last Name validation is displayed            | High     |
| TC-015 | Missing postal code               | Postal Code validation is displayed          | High     |
| TC-016 | Minimum valid customer input      | Checkout accepts valid boundary input        | Medium   |

## API

| ID     | Scenario                         | Expected Result                             | Priority |
| ------ | -------------------------------- | ------------------------------------------- | -------- |
| TC-017 | GET users                        | HTTP 200 and valid user collection returned | High     |
| TC-018 | Validate user response structure | Required fields and data types are correct  | High     |
| TC-019 | POST user                        | HTTP 201 and created user returned          | High     |
| TC-020 | Validate response headers        | Correct content type is returned            | Medium   |
| TC-021 | Invalid API endpoint             | HTTP 404 is returned                        | Medium   |

## Risk-Based Testing

Testing priority should be influenced by business impact and probability of failure.

### Critical Risk

* Checkout
* Pricing
* Product configuration
* Authentication
* Critical integrations

### High Risk

* Cart
* Product selection
* API integrations
* User permissions

### Medium Risk

* Sorting
* Non-critical validation
* Secondary workflows

### Low Risk

* Static content
* Cosmetic changes
* Non-critical UI text

## Test Design Techniques

The following techniques are used:

### Positive Testing

Verify that valid inputs and expected workflows work correctly.

### Negative Testing

Verify that invalid inputs and unexpected actions are handled correctly.

### Boundary Value Analysis

Test values at and around defined limits.

For example, if a field allows 1–50 characters:

* 0 characters
* 1 character
* 2 characters
* 49 characters
* 50 characters
* 51 characters

### Equivalence Partitioning

Divide input data into valid and invalid groups and select representative values from each group.

### Exploratory Testing

Explore the application without relying exclusively on predefined test cases to discover unexpected behaviour, usability problems, and edge cases.
