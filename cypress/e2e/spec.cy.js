describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://ts100.x10.asia.travian.com/')
    cy.get('#dialogContent > div > label:nth-child(1) > input[type=text]').type('mtruem001@gmail.com')
    cy.get('#dialogContent > div > label:nth-child(2) > input[type=password]').type('manman184')
    cy.get('#dialogContent > div > div.centeredText > button').click()
  })
})