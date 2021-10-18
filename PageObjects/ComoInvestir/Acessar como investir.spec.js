import acessar from "./index(Investir)"
const el = require ("./elements(investir)").Elementos

it('Visitar o site',() => {
  acessar.visitarpagina()
})

it('Acessar Menu',() => {
  acessar.AcessoMenu()
  })

it('Acessar Vídeo',() => {
  acessar.AcessoVideo()
 }) 














// describe('Acessar como investir',() => {
//     it('Visitar o site',() => {
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
