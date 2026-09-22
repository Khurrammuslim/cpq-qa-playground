# CPQ QA Playground — Test Plan

## 1. Objective

The objective of this test plan is to validate the quality, reliability,
functionality, usability, and core workflows of the CPQ SaaS application.

## 2. Scope

### In Scope

- User login and logout
- Product listing
- Product sorting
- Product selection
- Cart management
- Checkout workflow
- Checkout validation
- API functionality
- UI/API integration
- Regression testing
- Smoke testing
- Basic performance testing

### Out of Scope

- Production infrastructure testing
- Third-party payment gateway certification
- Security penetration testing
- Cross-region infrastructure testing

## 3. Test Types

- Functional testing
- UI automation
- API testing
- Integration testing
- End-to-end testing
- Negative testing
- Boundary testing
- Regression testing
- Smoke testing
- Exploratory testing
- Performance testing
- Usability testing

## 4. Test Environment

- Application: SauceDemo / CPQ QA Playground
- Browser: Chrome / Electron
- Automation: Cypress + TypeScript
- API automation: Cypress cy.request()
- CI/CD: GitHub Actions
- Performance: k6

## 5. Entry Criteria

Testing can begin when:

- Test environment is available
- Application build is deployed
- Required test data is available
- Critical requirements are understood
- Application is accessible

## 6. Exit Criteria

Testing can be considered complete when:

- Planned critical scenarios are executed
- Critical and high-severity defects are resolved or accepted
- Regression suite passes
- Smoke tests pass
- Test results are communicated to stakeholders
- Known risks are documented

## 7. Risk Areas

High-risk areas include:

- Authentication
- Product configuration
- Pricing
- Cart calculations
- Checkout
- API integrations
- Third-party integrations
- Performance under load

## 8. Defect Management

Defects will be reported with:

- Clear title
- Environment
- Preconditions
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority
- Evidence
- Relevant logs

## 9. Reporting

Testing progress will be communicated through:

- Test execution results
- Defect reports
- Automation results
- CI/CD pipeline status
- Regression status
- Release readiness updates