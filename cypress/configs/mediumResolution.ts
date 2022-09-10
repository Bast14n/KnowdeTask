import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: 'https://www.saucedemo.com',
        viewportHeight: 820,
        viewportWidth: 1180,
        chromeWebSecurity: false,
    },
});