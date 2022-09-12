import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: 'https://www.saucedemo.com',
        viewportWidth: 820,
        viewportHeight: 1180,
        chromeWebSecurity: false,
    },
});