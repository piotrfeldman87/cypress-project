/// <reference types="cypress" />

describe('Nav Menus', () => {

  beforeEach(() => {
    cy.visit('https://www.cypress.io')
    cy.get('.osano-cm-accept-all').scrollIntoView()
    cy.clickOnElementIfPresent('.osano-cm-accept-all')
  })

  context('1280 x 720px resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
    })

    it('verify desktop menu bar is present and click onlogin page', () => {
      cy.get('.bg-transparent').should('be.visible')
      cy.get('astro-island:nth-of-type(2) .icon-dark').should('not.be.visible')
      cy.openLinkInSameWindow("[data-cy='header-login']")
      cy.get('legend').should('contain', 'Log in')
    })
  })

  context('iphone-6 resolution', () => {
    beforeEach(() => {
      cy.viewport('iphone-6')
    })

    it('verify hamburger menu is present, expand it and click on login page', () => {
      cy.get('astro-island:nth-of-type(2) .icon-dark')
        .should('be.visible')
        .click()
      cy.get('.nav-bar').should('be.visible')
      cy.openLinkInSameWindow("[data-cy='header-login']")
      cy.get('legend').should('contain', 'Log in')
    })
  })
})