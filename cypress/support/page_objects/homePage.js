
export class HomePage{

    openUserDropDown(){
        cy.get('#user-dropdown-toggle').click()
    }

    openProfilePage(){
        cy.contains('a', 'My Profile').click()
    }


}

export const homePage = new HomePage()