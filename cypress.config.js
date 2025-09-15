module.exports = {
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "spec, mocha-junit-reporter, mochawesome",
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/results/results-[hash].xml", // ✅ XML for Jenkins
      toConsole: false,
    },
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      overwrite: false,
      html: true,
      json: true,
    },
  },

  projectId: "xds656",
  fixturesFolder: "cypress/fixtures",
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      // add event listeners if needed
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    env: {
      username: "Admin",
      password: "admin123",
    },
    specPattern: ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", "cypress/e2e/**/*.js"],
    supportFile: "cypress/support/e2e.js",
  },
};
