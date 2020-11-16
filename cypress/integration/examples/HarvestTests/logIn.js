/// <reference types ="cypress"/>

describe('login form', () => {

    beforeEach('open harvest', () => {
        cy.visit('/')
    })

    it('sign in with incorrect password', () => {
        cy.fixture('login').then((login) => {
            const email = login.email;
            const password = login.password;
            cy.get('#email').type(email)
            cy.get('#password').type(password)
            cy.get('#log-in').click()
            cy.get('[class="alert"]').should('be.visible')
        })
    })

})