import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com',
    viewportHeight: 1920,
    viewportWidth: 1080,
    chromeWebSecurity: false,
  },
});
