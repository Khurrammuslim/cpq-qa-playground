# CPQ QA Playground

A portfolio project demonstrating a **Senior QA / SDET approach to testing a SaaS-style CPQ/eCommerce workflow** with Cypress, TypeScript, API testing, performance testing, CI/CD, and visual regression testing.

> **Portfolio note:** The UI under test is [SauceDemo](https://www.saucedemo.com/) and the API is [JSONPlaceholder](https://jsonplaceholder.typicode.com/). The project uses these public test systems to demonstrate QA engineering practices; it is not an implementation of the Experlogix product.

## What this project demonstrates

- Cypress + TypeScript UI automation
- Page Object Model and reusable BasePage abstractions
- Custom Cypress commands and fixtures
- Functional, negative, boundary, regression, and end-to-end testing
- API testing with `cy.request()`
- Typed API models and test-data factories
- UI + API integration workflow testing
- k6 load/performance testing
- GitHub Actions CI/CD
- Percy visual regression testing
- Test plans, test strategy, test cases, defect documentation, and release-quality thinking

## Tech Stack

| Area | Tool / Technology |
|---|---|
| UI automation | Cypress 15 |
| Language | TypeScript |
| API testing | Cypress `cy.request()` |
| API test data | TypeScript factory + fixtures |
| Performance | k6 |
| Visual testing | Percy |
| CI/CD | GitHub Actions |
| Browsers | Chrome / Electron |
| Application under test | SauceDemo |
| API under test | JSONPlaceholder |

## Project Structure

```text
cpq-qa-playground/
├── .github/workflows/       # CI/CD pipeline
├── cypress/
│   ├── e2e/                 # UI, API, and visual tests
│   ├── factories/            # Reusable generated test data
│   ├── fixtures/             # Static test data
│   ├── pages/                # Page Object Model
│   ├── service/              # API service abstraction
│   ├── support/              # Commands and Cypress setup
│   └── types/                # TypeScript domain models
├── docs/
│   ├── test-plan.md
│   ├── test-strategy.md
│   ├── test-cases.md
│   └── bugs.md
├── performance/
│   └── api-load-test.js
├── cypress.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Test Coverage

### UI

- Valid, invalid, and locked-user authentication
- Logout
- Product count, names, and prices
- Product sorting A→Z, Z→A, low→high, and high→low
- Add/remove products from cart
- Cart verification
- Checkout happy path
- Checkout validation and boundary-style input

### API

- GET users
- User response structure and data types
- POST user
- Response-header validation
- Invalid endpoint / non-existing resource handling
- UI + API workflow

### Performance

The k6 scenario exercises the users endpoint with staged load and thresholds for:

- HTTP error rate
- p95 response duration
- Increasing virtual-user load

### Visual Regression

Percy snapshots cover:

- Products page
- Cart page

## CI/CD

GitHub Actions runs three quality activities:

1. **Cypress UI + API tests**
2. **k6 performance test**
3. **Percy visual regression test**

Cypress screenshots are uploaded as workflow artifacts when the Cypress job fails.

Percy requires a repository secret named `PERCY_TOKEN`.

## Running Locally

Install dependencies:

```bash
npm ci
```

Run the full Cypress suite:

```bash
npm run cypress:run
```

Open Cypress interactively:

```bash
npx cypress open
```

Run the visual suite with Percy:

```bash
npx percy exec -- npx cypress run --spec "cypress/e2e/visual.cy.ts"
```

Run the k6 performance test:

```bash
k6 run performance/api-load-test.js
```

## QA Documentation

- [Test Plan](docs/test-plan.md)
- [Test Strategy](docs/test-strategy.md)
- [Test Cases](docs/test-cases.md)
- [Bug Report Example](docs/bugs.md)

## QA Engineering Approach

The project follows an **automation-first, risk-based testing approach** rather than attempting to automate every scenario.

- Stable, repeatable, business-critical regression scenarios are automated.
- API/service checks are kept fast and independent where practical.
- UI automation focuses on critical user journeys.
- Manual testing remains important for exploratory testing, usability, new functionality, and scenarios where automation has limited value.
- CI/CD provides repeatable quality gates and fast feedback.
- Performance and visual testing are treated as complementary quality signals rather than replacements for functional testing.

## Interview Talking Points

This project is intentionally structured to demonstrate senior-level QA concepts such as:

- Test pyramid and automation strategy
- Page Object Model and maintainability
- Test data management
- API/UI integration testing
- Negative and boundary-value testing
- Performance thresholds and p95
- CI/CD quality gates
- Visual regression testing
- Defect severity vs. priority
- Risk-based test planning
- Release readiness and stakeholder communication

## Disclaimer

This is a personal QA portfolio project. Test results and example defects documented here are specific to the public test systems used by the project and should not be interpreted as claims about a production CPQ platform.
