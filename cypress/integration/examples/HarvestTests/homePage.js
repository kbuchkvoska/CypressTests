const { homePage } = require("../../../support/page_objects/homePage")
const { loginPage } = require("../../../support/page_objects/loginPage")

describe ('profile page', () => {

    let data = {}

    beforeEach('Open Harvest', () => {
        cy.visit('/')
    })

    before(() => {
        cy.fixture('login').then((login) => {
            data = login;
        })
    })

})