import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: 'https://www.saucedemo.com',
        viewportHeight: 576,
        viewportWidth: 960,
        chromeWebSecurity: false,
    },
});