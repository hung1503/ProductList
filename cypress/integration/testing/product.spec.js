describe('Search Product', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000')
      })
    it('frontpage has select box', function() {
        cy.contains('Product List')
        cy.get('select').should('have.length', 1)
    })

    it.only("search for details", function() {
        cy.get('select').select('Swash')
        cy.contains('Swash')
        cy.contains('Owner:')
        cy.contains('Category:')
        cy.contains('Updated date:')
    })
  })