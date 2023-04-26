import homePage from '../../support/pageObjects/webdriver-uni/homePagePO.cy.js';

/// <reference types="cypress" />

describe('Veryfing dropdowns', () => {

    const homePagePO = new homePage();
    const dropdown1 = ['JAVA','Python','C#','SQL']
    const dropdown2 =['Eclipse', 'Maven', 'TestNG','JUnit']
    const dropdown3 =['HTML', 'CSS', 'JavaScript', 'JQuery']

    beforeEach(() => {
        cy.visit("/");
        homePagePO.clickOnDropdownsCheckboxesRadioButtonsPage()
    })

    it('Check and validate drop downs', () => {
      function selectFromDropDown(selector, verify)  {
        cy.get(selector + ' option').each(($el, index, $list) => {
            const text = $el.text()
            cy.get(selector).select(text)
            expect(text).to.be.a('string')
            expect(verify).to.include(text)
        })
      }

      selectFromDropDown('#dropdowm-menu-1', dropdown1)
      selectFromDropDown('#dropdowm-menu-2', dropdown2)
      selectFromDropDown('#dropdowm-menu-3', dropdown3)
    })

    it('Choose radio buttons', () => {
        cy.get('#radio-buttons').then(elements => {
                cy.get(elements).find('input').each(($el, index, $list) => {
                    cy.get($el).click().should('be.checked')
                        cy.log(index)
                })
        })
    })

    it('Check all and validate checkboxes', () => {
        cy.get("[id='checkboxes'] input").each(($el, index, $list) => {
            cy.get($el).check().should('be.checked')
        })

    })

    it('Uncheck all and validate checkboxes', () => {
        cy.get("[id='checkboxes'] input").each(($el, index, $list) => {
            cy.get($el).check()
            cy.get($el).uncheck().should('not.be.checked')          
        })
    })

    it('Check and validate checkbox', () => {
        cy.get('#checkboxes > :nth-child(3) > input').check().should('be.checked')
    })
    
    it('Uncheck and validate checkbox', () => {
        cy.get('#checkboxes > :nth-child(5) > input').uncheck().should('not.be.checked')
    })

    it('Check multiple checkboxes and validate checkbox', () => {
        cy.get('input[type="checkbox"]').each(($el, index, $list) => {
            cy.wrap($el).check().should('be.checked')
        })
    })

    it('Check checkbox if certain collection includes  and validate checkbox', () => {
        cy.get('input[type="checkbox"]').each(($el, index, $list) => {
            const value = $el.attr('value')

            if (value.includes('option-4') || value.includes('option-1')) {
                cy.wrap($el).check().should('be.checked')
            }

            if (value.includes('option-3')) {
                cy.wrap($el).uncheck().should('not.be.checked')
            }
        })


    })
})