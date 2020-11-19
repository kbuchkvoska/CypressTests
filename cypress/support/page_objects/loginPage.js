
class LoginPage{

    login(email, incorrectPassword){
        cy.get('#email').type(email)
        cy.get('#password').type(incorrectPassword)
        this.submitLogin()
    }

    submitLogin(){
        cy.get('#log-in').click()
    }
}

export const loginPage = new LoginPage()