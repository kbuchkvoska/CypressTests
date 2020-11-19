const { homePage } = require("../../../support/page_objects/homePage")
const { loginPage } = require("../../../support/page_objects/loginPage")
const { profilePage } = require("../../../support/page_objects/profilePage")

describe('Prfile page test', () => {

    let data = {}

    beforeEach('Open Harvest', () => {
        cy.visit('/')
        loginPage.login(data.email, data.password)
        homePage.openProfilePage()
    })

    before(() => {
        cy.fixture('login').then((login) => {
            data = login;
        })
    })

    it("Edit  user's first name", () => {
        profilePage.openBasicInfoTab()
        profilePage.fillFirstNameFiled('123')
        profilePage.updateInfo()
        cy.contains('Changes to your basic info were saved.').should('be.visible')
    })

    it('Add new role', () => {
        profilePage.openBasicInfoTab()
        profilePage.addNewRole('newRole')
        cy.contains('[class="search-choice"]', 'newRole').should('be.visible')
    })

})