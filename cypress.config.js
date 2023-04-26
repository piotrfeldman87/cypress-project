const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://www.webdriveruniversity.com",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}" ,
    screenshotOnRunFailure: true,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },
    retries: {
      runMode:0,
      openMode:0
    },

  },
});
