import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: true,

  // video: true,
  // videoCompression: true,
  env: {
    apiBaseUrl: "https://jsonplaceholder.typicode.com",
    uiBaseUrl: "https://www.saucedemo.com",
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.ts",
    supportFile: "cypress/support/e2e.ts",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});