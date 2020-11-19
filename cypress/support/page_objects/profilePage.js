 

class ProfilePage{

    openProjectsTab(){
        cy.contains('Projects').click()
    }

    openBasicInfoTab(){
        cy.contains('Basic Info').click()
    }

    fillFirstNameFiled(firstName){
        cy.get('#user_first_name').click().type(firstName)
    }

    updateInfo(){
        cy.scrollTo('bottom')
        cy.get('[value="Update Info"]').click()
    }

    addNewRole(roleName){
        cy.get('#user_roles_chosen').click().type(roleName + '{enter}')
    }

 }

 export const profilePage = new ProfilePage()