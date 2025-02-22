const cypress = require('cypress')
//setInterval(() => {
    cypress.run({
        headed: true,
        spec: "./cypress/e2e/spec2.cy.js",
        browser: 'chrome',
        config: {
          baseUrl: 'https://ts100.x10.asia.travian.com/',
          video: false,
        },
        env: {
          
        },
      })
    console.log("hello")
//}, 30000)



