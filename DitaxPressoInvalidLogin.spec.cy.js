describe('LogInTest',()=>{
    it('LogInSucess',()=>{
        //invalid data
        cy.visit('')
        cy.visit('localhost 3000')
       // cy.title().should('eq', 'http://localhost:3000')
       cy.visit('//http')
       cy.visit ('  http://localhost:3000')
       cy.visit(urltf).should('be.vissible')
       cy.get('urltf').then((inspect)=>{
        if(inspect.has()){
            console.log('open')
        }else{
            console.log("'not open")
        }
        //invalid email text field
        cy.get('username').should(be.vissible)
        if (username.vissible){
            username.click()
       }else{
        console.log('error not vissible')
       }
       cy.get('username').type('invalid')
       cy.get('username').type('invalid')
       if(username.invalid){
        console.log('thorugh an error')
       }else {
        console.log ('accept')
       }
       cy.get('username').type('invalid')
       
        

       })

    })
})