class TimePage {

    openTimesheetTab(){
        cy.contains('a', 'Timesheet').click()
    }

    addNewEntry(notes, time){
        cy.contains('div', 'New Entry').click()
        cy.get('#modal-time-entry-title').then(() => {
            cy.get('textarea[name="notes"]').click().type(notes)
            cy.get('input[name="hours"]').click().type(time)
            cy.contains('Save Entry').click()
        })
    }

    deleteEntry(notes){
        cy.get('.day-view-entry').contains(notes).then(() => {
            cy.get('.edit-button > .hui-button').click()
            cy.get('.js-delete-entry').click()
            cy.get('.js-confirm-delete-entry').click()
        })
    }

}

export const timePage = new TimePage()