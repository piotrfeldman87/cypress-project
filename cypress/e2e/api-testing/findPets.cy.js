/// <reference types="cypress" />

describe("Get Request", () => {
    var result = new Array();
    const statuses = ["available", "pending", "sold"]
    statuses.forEach(status => {
        it.only('Find pets by status ${status}', ()=> {
            cy.request({
                method: "GET",
                url: "https://petstore.swagger.io/v2/pet/findByStatus?status=" + status,
                headers: {
                    accept: "application/json"
                }
            }).then(response => {
                let body = JSON.parse(JSON.stringify(response.body))
                cy.log(body);
                body.forEach(function(item) {
                    result.push(item["body"]);
                    cy.log(item)
                })
                body.forEach(function(item) {
                    expect(item).has.property("status", status);
                })
            })

    })

    it("Find pets by all statuses", () => {
        cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/pet/findByStatus?status=available",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body);
            body.forEach(function(item) {
                result.push(item["body"]);
            })
            expect(body[0]).has.property("status", "available");
            console.log(body[0].id);
            body.forEach(function(item) {
                console.log(item);
                expect(item).has.property("status", "available");
            })

        })
    })
})
})