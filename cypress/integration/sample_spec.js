describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})

describe('My Second Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')
    })
})

describe('My Third Test', () => {
    it('Visit Lucom', () => {
        cy.visit('https://lucom.com')
    })
})

describe('My Fourth Test', () => {
    it('Click on customers page', () => {
        cy.contains('Kunden').click()
        //cy.get('Kunden').click()
    })
})