/// <reference types ="cypress"/>

describe('login form', () => {

    beforeEach('open harvest', () => {
        cy.visit('/')
    })

    it('sign in with incorrect password', () => {
        cy.fixture('login').then((login) => {
            const email = login.email;
            const incorrectPassword = login.incorrectPassword;
            cy.get('#email').type(email)
            cy.get('#password').type(incorrectPassword)
            cy.get('#log-in').click()
            cy.get('[class="alert"]').should('be.visible')
        })
    })

})