class buttonClicksPO {

    clickOnEveryButton() {
    var i = 1
        cy.get("[data-toggle='modal']").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
            cy.get($el).focus()

            cy.get($el).blur()
            cy.get($el).click({force :true});

        })

    }

    clickOnEveryButton2() {
        cy.get('div#myModalClick > .modal-dialog.modal-sm p').then(element => {
            cy.log(element.text())
        })
        cy.get('#button1').click();
        cy.get('div#myModalClick > .modal-dialog.modal-sm p').then(element => {
            cy.log(element.text())
        })
        cy.get("div#myModalClick > .modal-dialog.modal-sm .close").invoke("removeAttr", "target").click();
        cy.get('div#myModalClick > .modal-dialog.modal-sm p').then(element => {
            cy.log(element.text())
        })
        cy.get('#button1').click();
    }
  

}

export default buttonClicksPO;