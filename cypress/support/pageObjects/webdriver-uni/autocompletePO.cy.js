class autocompletePO {
    selectWordFromAutocompleteList(firstLetter, fullWord) {
        cy.get('#myInput').type(firstLetter)
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const product = $el.text()
            const productToSelect = fullWord
            if (product === productToSelect) {
                cy.wrap($el).click()
                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        })
    }
}

export default autocompletePO;