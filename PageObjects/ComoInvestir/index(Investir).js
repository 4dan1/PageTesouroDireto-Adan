const el = require('./elements(investir)').Elementos
class acessar {
    visitarpagina(){
        cy.visit(el.SITE)
        cy.get(el.COOKIE).click()
    }
    AcessoMenu(){
        cy.get(el.MENU).click()
        cy.get(el.INVEST).click()
        cy.get(el.INVEST2).click()    
}
    AcessoVideo(){
        cy.get(el.VIDEO).click({force:true})
}
}

export default new acessar 



// /// <reference types='cypress' />

// describe('Acessar como investir',() => {
//     it('Validar como investir',() => {
//         /// <reference types="cypress" />



// describe('validate Tests', () =>{
//     Cypress.on('uncaught:exception', (err, runnable) => {
//           return false
//      })
//     it('Descubra Seu Perfil',() =>{

//       cy.visit('https://www.tesourodireto.com.br/')

//       cy.get('#onetrust-accept-btn-handler').click()

//       cy.get('.td-menu-trigger').click()

//       cy.get(':nth-child(2) > .td-nav__list-item__link').click()

//       cy.get(':nth-child(2) > .td-nav__sublist > :nth-child(1) > .td-nav__sublist__link').click()

//       cy.get('[href="videos/impostos-e-taxas-tesouro-direto.htm"]').click()



//     })

// })
// })

// })
