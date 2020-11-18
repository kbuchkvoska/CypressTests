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

    it('Open my profile page', () => {
        loginPage.login(data.email, data.password)
        homePage.openUserDropDown()
        cy.get('#popover-user').should('be.visible')
    })

    it.only('Update first name in profile', () => {
        loginPage.login(data.email, data.password)
        homePage.openUserDropDown()
        homePage.openProfilePage()
        
    })

    it('Open My Profile', () => {
        homePage.openProfilePage()
    })

})