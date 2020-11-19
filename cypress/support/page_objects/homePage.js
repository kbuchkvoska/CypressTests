
class HomePage{

    openProfilePage(){
        cy.get('#user-dropdown-toggle').click()
        cy.contains('a', 'My Profile').click()
    }

    openTimePage(){
        cy.contains('Time').click()
    }

}

export const homePage = new HomePage()