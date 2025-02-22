describe('order_troove', () => {
    beforeEach(() => {
        cy.login("mtruem001@gmail.com","manman184")
      }
    )
    it('passes', () => {
        cy.visit('https://ts100.x10.asia.travian.com/dorf1.php')
        cy.wait(1000)
        //cy.get('.villageList > .dropContainer:nth-child(2)')
        //.invoke("attr", "data-sortid").then((text) => {
        //    cy.log(text)
        //})

        //cy.get('.villageList > .dropContainer ').each(($e) => {
        //    cy.log($e)
            //$e.get('div').invoke('attr', 'data-sortid').then((text) => {
            //    cy.log(text)
            //})
        //    cy.wrap($e).invoke('attr', 'data-sortid').then((text) => {
        //            cy.log(text)
        //        })

        //})

        const sortIds = [];
        cy.get('.villageList > .dropContainer').each(($el) => {
            sortIds.push($el.attr('data-sortid'));
        }).then(() => {
            cy.log(JSON.stringify(sortIds)); // Log the collected values

        });



        cy.wait(100000)
      })
  })

