// @ts-check
/**
 * API Tests — Posts
 * QA Pulse by SK - www.skakarh.com
 * Tags: @smoke @api @regression
 */
const { ApiHelper } = require("../helpers/apiHelper.js");

describe("Posts API @api", () => {
  let api;
  before(() => { api = new ApiHelper(); });

  it("GET /posts — should return list @smoke @api", () => {
    cy.logStep("GET all posts");
    api.get("/posts").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an("array");
      expect(res.body.length).to.be.gt(0);
    });
  });

  it("GET /posts/:id — should return single post @smoke @api", () => {
    api.get("/posts/1").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("id", 1);
    });
  });

  it("GET /posts/:id — 404 for missing post @regression @api", () => {
    api.get("/posts/99999").then((res) => expect(res.status).to.eq(404));
  });

  it("POST /posts — should create post @regression @api", () => {
    api.post("/posts", { userId: 1, title: "QA Pulse by SK", body: "Test" }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property("id");
    });
  });

  it("PUT /posts/:id — should update post @regression @api", () => {
    api.put("/posts/1", { id: 1, userId: 1, title: "Updated", body: "Updated body" }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.title).to.eq("Updated");
    });
  });

  it("DELETE /posts/:id — should delete post @regression @api", () => {
    api.delete("/posts/1").then((res) => expect(res.status).to.eq(200));
  });

  it("cy.apiGet command works @smoke @api", () => {
    cy.apiGet("/posts/1").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("id", 1);
    });
  });
});
