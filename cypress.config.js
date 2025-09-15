module.exports = {
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: true,
    html: true,
    json: true,
    reporterEnabled: "spec, mocha-junit-reporter",
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/results/results-[hash].xml", // Jenkins will read these
      toConsole: false,
    },
  },
  projectId: "xds656",
  fixturesFolder: "cypress/fixtures",
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    env: {
      username: "Admin",
      password: "admin123",
    },
    specPattern: ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", "cypress/e2e/**/*.js"],
    // Add this line to include .js files

    supportFile: "cypress/support/e2e.js",
  },
};
