// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("contactFormSubmission", (firstName, lastName, email, comment, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email)
    cy.get('textarea.feedback-input').type(comment)
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate, { timeout: 60000 })
})


Cypress.Commands.add("forceClick", selector => {
    cy.get(selector).click({ force: true });
})


Cypress.Commands.add("openLinkInSameWindow", selector => {
    cy.get(selector).invoke('removeAttr', 'target').click({ force: true }, { timeout: 6000 })
})

Cypress.Commands.add("validatePresenceOfElement", (selector, textToLocate, timeoutLength) => {
    cy.get(selector).contains(textToLocate, { timeout: timeoutLength })

})

Cypress.Commands.add("iterateClickOnEveryElement", (listOfElementsSelector, elementToClick) => {
    cy.get(listOfElementsSelector).each(($el, index, $list) => {
        cy.get($el).find(elementToClick).each(($el, index, $list) => {
            cy.get($el).click()
        })

    })

})

Cypress.Commands.add("clickEveryElementOnTheList", (listSelector) => {
    cy.get(listSelector).each(($el, index, $list) => {
        cy.get($el).click();
    })
})
Cypress.Commands.add("fetchTextFromElement", (cssSelector) => {
    cy.get(cssSelector).invoke('text')

})


Cypress.Commands.add("fetchTextFromFirstElementFromList", (cssSelector) => {
    cy.get(cssSelector).first().then((element) => {
        cy.fetchTextFromElement(element)
    })
})

Cypress.Commands.add("returnParentSelector", (childSelector, parentSelector) => {
    cy.wrap(childSelector).parents(parentSelector)

})


Cypress.Commands.add("clickOnElementIfPresent", (elementToClick) => {
    cy.get('body').then(($a) => { 
        if ($a.text().includes(elementToClick)) {
            cy.contains(elementToClick)
            .click({force:true})
        } 
    })

})

