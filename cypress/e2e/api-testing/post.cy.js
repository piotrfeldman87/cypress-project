/// <reference types="cypress" />



describe("Get Request", () => {

  let randomName = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1);
  let randomId = '1' + Math.random().toString().substr(2, 9)

  it("Validate status code of the /posts api", () => {

    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet",
      body:

      {
        "id": randomId,
        "category": {
          "id": randomId,
          "name": randomName
        },
        "name": randomName,
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": randomId,
            "name": "string"
          }
        ],
        "status": "available"
      }

    }).then(response => {
      expect(response.status).to.eql(200)
    }).then(() => {
      cy.log(randomId)
      cy.request({
        method: "GET",
        url: "https://petstore.swagger.io/v2/pet/" + randomId,
        headers: {
          accept: "application/json"
        }
      }).then(response => {
        let body = JSON.parse(JSON.stringify(response.body))

        expect(body[0]).has.property("name", randomName);

        cy.log(body);
        body.forEach(function (item) {
          result.push(item["body"]);
        })
      })


    })


  })