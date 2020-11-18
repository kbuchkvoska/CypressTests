

export class LoginPage{

    fillEmail(email){
        cy.get('#email').type(email)
    }

    fillPassword(incorrectPassword){
        cy.get('#password').type(incorrectPassword)
    }

    login(email, password){
        this.fillEmail(email)
        this.fillPassword(password)
        this.submitLogin()
    }

    submitLogin(){
        cy.get('#log-in').click()
    }
}

export const loginPage = new LoginPage()