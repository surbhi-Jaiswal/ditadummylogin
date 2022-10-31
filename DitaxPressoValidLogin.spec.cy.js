describe('LogInTest',()=>{
    it('LogInSucess',()=>{
        cy.visit('http://localhost:3000')
        cy.visit('localhost:3000')
        cy.title().should('eq', 'http://localhost:3000')
        cy.get('input:first').should('have.attr', 'placeholder', 'Username')
        .type(surbhi.j.com)
        
        


        })


    })

