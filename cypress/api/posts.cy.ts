/**
 * API Tests — Posts Endpoint
 * QA Pulse by SK - www.skakarh.com
 * Tags: @smoke @api @regression
 */
import { ApiHelper } from "../helpers/apiHelper";

describe("Posts API @api", () => {
  let api: ApiHelper;

  before(() => { api = new ApiHelper(); });

  it("GET /posts — should return list of posts @smoke @api", () => {
    cy.logStep("GET all posts");
    api.get("/posts").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
      expect(response.body.length).to.be.gt(0);
    });
  });

  it("GET /posts/:id — should return a single post @smoke @api", () => {
    api.get("/posts/1").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", 1);
      expect(response.body).to.have.property("title");
    });
  });

  it("GET /posts/:id — 404 for non-existent post @regression @api", () => {
    api.get("/posts/99999").then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it("POST /posts — should create a new post @regression @api", () => {
    cy.logStep("Create new post");
    api.post("/posts", {
      userId: 1,
      title: "QA Pulse by SK Test Post",
      body: "Created by QA Pulse by SK automation",
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
      expect(response.body.title).to.eq("QA Pulse by SK Test Post");
    });
  });

  it("PUT /posts/:id — should update a post @regression @api", () => {
    api.put("/posts/1", { id: 1, userId: 1, title: "Updated Title", body: "Updated body" })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq("Updated Title");
      });
  });

  it("DELETE /posts/:id — should delete a post @regression @api", () => {
    api.delete("/posts/1").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("cy.apiGet command — should work @smoke @api", () => {
    cy.apiGet("/posts/1").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", 1);
    });
  });

  it("cy.apiPost command — should work @regression @api", () => {
    cy.apiPost("/posts", { userId: 1, title: "Command Test", body: "Testing cy.apiPost" })
      .then((response) => { expect(response.status).to.eq(201); });
  });
});
