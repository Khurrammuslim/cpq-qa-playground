import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  // video: true,
  // videoCompression: true,

  e2e: {
    specPattern: "cypress/e2e/**/*.cy.ts",
    supportFile: "cypress/support/e2e.ts",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});