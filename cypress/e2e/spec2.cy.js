describe('order_troove', () => {
    beforeEach(() => {
        cy.login("mtruem001@gmail.com","manman184")
      }
    )
    it('passes', () => {
        cy.visit('/build.php?newdid=32328&gid=19')
        cy.wait(10000)
        cy.reload()
        cy.wait(10000)
        cy.get('input[name=t1]').type('20')
        cy.wait(10000)
        cy.get("#s1").click()
        cy.wait(10000)
      })
  })