/// <reference types ="cypress"/>

const { loginPage } = require("../../../support/page_objects/loginPage")

describe('login form', () => {

    let data = {}

    beforeEach('Open Harvest', () => {
        cy.visit('/')
    })

    before(() => {
        cy.fixture('login').then((login) => {
            data = login;
        })
    })

    it('sign in', () => {
        loginPage.login(data.email, data.password)
        cy.url().should('eq', 'https://kbuchkovska.harvestapp.com/welcome')
    })

    it('sign in with incorrect password', () => {
        loginPage.login(data.email, data.incorrectPassword)
        cy.get('[class="alert"]').should('be.visible')
    })

})