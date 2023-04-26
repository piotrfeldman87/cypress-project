class datePickerPO {

    clickOnCalendar() {
        cy.get('#datepicker').click();
    }

    selectMonthYearAndDay(futureYear, futureMonth, futureDay) {

        function switchDateUntilIsCorrect(futureDate) {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureDate)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            })
        }

        function selectMonthAndYear() {
            switchDateUntilIsCorrect(futureYear)
            switchDateUntilIsCorrect(futureMonth)
        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click();
        }
        selectMonthAndYear();
        selectFutureDay();
    }
}

export default datePickerPO;