# Bug Report

## BUG-001 — Checkout allows order completion with invalid postal code

### Summary

Checkout accepts an invalid postal code and allows the user to proceed with the order.

### Environment

* Application: CPQ QA Playground
* Browser: Chrome
* Environment: QA
* OS: macOS
* Test Type: Functional / Negative Testing

### Preconditions

* User is logged in.
* At least one product is added to the cart.
* User is on the checkout information page.

### Steps to Reproduce

1. Log in with valid credentials.
2. Add a product to the cart.
3. Open the cart.
4. Click Checkout.
5. Enter a valid first name.
6. Enter a valid last name.
7. Enter an invalid postal code such as `ABC`.
8. Click Continue.

### Expected Result

The application should validate the postal code and display an appropriate validation message.

The user should not be allowed to continue until the postal code satisfies the defined format.

### Actual Result

The application accepts the invalid postal code and allows the user to continue to the checkout overview.

### Severity

**Medium**

The issue affects input validation, but the core checkout workflow remains available.

### Priority

**High**

Checkout is a business-critical workflow, so the issue should be addressed before release if the postal-code validation is a business requirement.

### Reproducibility

**100%**

### Evidence

Attach:

* Screenshot
* Cypress test result
* Browser console/logs if relevant

### Suggested Automation Coverage

Add a Cypress negative test that verifies invalid postal-code input cannot proceed to the checkout overview.

## Severity vs Priority

### Severity

Severity describes the technical or functional impact of the defect.

Typical categories:

* Critical
* High
* Medium
* Low

### Priority

Priority describes how urgently the business wants the defect addressed.

Typical categories:

* P0 — Immediate
* P1 — High
* P2 — Medium
* P3 — Low

Severity and priority do not always have to be the same.

### Example

A minor visual issue on the homepage could have:

* Low severity
* High priority

if the affected area is highly visible during an important marketing campaign.

Conversely, a serious issue in a rarely used internal feature could potentially have:

* High severity
* Lower immediate priority

depending on business impact and release context.
