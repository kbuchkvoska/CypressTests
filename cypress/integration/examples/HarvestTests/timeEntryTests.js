const { homePage } = require("../../../support/page_objects/homePage")
const { loginPage } = require("../../../support/page_objects/loginPage")
const { timePage } = require("../../../support/page_objects/timePage")


describe('Timesheet tests', () => {

    let credentials = {}
    let newEntryData = {}

    before(() => {
        cy.fixture('login').then((login) => {
            credentials = login;
        })
        cy.fixture('newEntry').then((newEntry) => {
            newEntryData = newEntry;
        })
    })

    beforeEach('Open Harvest', () => {
        cy.visit('/')
        loginPage.login(credentials.email, credentials.password)
        homePage.openTimePage()
    })

    it('Add new entry', () => {
        timePage.addNewEntry(newEntryData.notes, newEntryData.time)
        cy.get('.entry-info').contains(newEntryData.notes).should('be.visible')
    })

    it('Delete entry', () => {
        timePage.deleteEntry(newEntryData.notes)
        cy.get('#status-message').should('have.text', '\n   Timer deleted.\n')
    })

})