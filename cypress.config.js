const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: true,
  chromeWebSecurity: false,
  waitForAnimation: true,
  animationDistanceThreshold: 30,
  defaultCommandTimeout: 12000,
  execTimeout: 90000,
  pageLoadTimeout: 90000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  video: true,
  failOnStatusCode: false,
  reporter: './node_modules/mochawesome/src/mochawesome.js',
  reporterOptions: {
    reportDir: 'cypress/reports/separate-reports',
    overwrite: false,
    html: false,
    json: true,
    charts: true,
  },
  env: {
    TAGS: '@demo',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: ['*.js'],
    specPattern: 'cypress/e2e/**/*.{feature,features}',
    baseUrl:
      'http://localhost:8000/',
  },
})
