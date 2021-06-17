describe('Form', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:1234/')
    })

const nameInput = () => cy.get('input[name="text"]')
const emailInput = () => cy.get('input[name="email"]')
const passwordInput = () => cy.get('input[name="password"]')


it('Sanity checks',()=>{
    nameInput().should('exist')
    emailInput().should('exist')
    passwordInput().should('exist')
})

it('fields have the right values', () =>{
    nameInput().type('Fernando')
    emailInput().type('email@email.com')
    passwordInput().type('Password')
    nameInput().should('have.value', 'Fernando')
    emailInput().should('have.value', 'email@email.com')
})
