// @ts-check
/**
 * Data Factory Tests — JavaScript
 * QA Pulse by SK - www.skakarh.com
 * Tags: @smoke @regression @e2e
 */
const { DataFactory } = require("../../helpers/dataFactory.js");
const { ApiHelper }   = require("../../helpers/apiHelper.js");

describe("Data Factory — Dynamic Test Data @e2e @regression", () => {
  it("should generate unique user data @smoke @e2e", () => {
    const user = DataFactory.createUser();
    cy.log(`👤 User: ${user.fullName}`);
    cy.log(`📧 Email: ${user.email}`);
    expect(user.firstName).to.be.a("string").and.not.be.empty;
    expect(user.email).to.include("@");
    expect(user.password.length).to.be.gte(12);
  });

  it("should generate multiple unique users @regression @e2e", () => {
    const users  = DataFactory.createUsers(5);
    const emails = users.map((u) => u.email);
    expect(users).to.have.length(5);
    expect(new Set(emails).size).to.eq(5);
  });

  it("should generate post data @regression @e2e", () => {
    const post = DataFactory.createPost();
    expect(post.title).to.be.a("string").and.not.be.empty;
    expect(post.userId).to.be.a("number").and.be.gt(0);
    expect(post.tags).to.have.length(3);
  });

  it("should generate address data @regression @e2e", () => {
    const address = DataFactory.createAddress();
    cy.log(`🏠 Address: ${address.fullAddress}`);
    expect(address.street).to.not.be.empty;
    expect(address.fullAddress).to.include(address.city);
  });

  it("should generate product data @regression @e2e", () => {
    const product = DataFactory.createProduct();
    cy.log(`🛍️ Product: ${product.name} — $${product.price}`);
    expect(product.name).to.not.be.empty;
    expect(product.price).to.be.gt(0);
    expect(product.sku).to.have.length(8);
  });

  it("should produce reproducible data with seed @regression @e2e", () => {
    DataFactory.seed(42);
    const user1 = DataFactory.createUser();
    DataFactory.seed(42);
    const user2 = DataFactory.createUser();
    cy.log(`🌱 Seeded user: ${user1.fullName} — ${user1.email}`);
    expect(user1.email).to.eq(user2.email);
    expect(user1.firstName).to.eq(user2.firstName);
  });

  it("should allow overriding specific fields @regression @e2e", () => {
    const user = DataFactory.createUser({ email: "qa.pulse@skakarh.com", firstName: "QA", lastName: "Pulse" });
    expect(user.email).to.eq("qa.pulse@skakarh.com");
    expect(user.firstName).to.eq("QA");
    expect(user.phone).to.not.be.empty;
  });

  it("create post via API with factory data @smoke @api", () => {
    const api  = new ApiHelper();
    const post = DataFactory.createPost({ userId: 1 });
    cy.logStep(`Creating post: ${post.title}`);
    api.post("/posts", { userId: post.userId, title: post.title, body: post.body })
      .then((res) => {
        expect(res.status).to.eq(201);
        expect(res.body).to.have.property("id");
        cy.log(`✅ Created post id: ${res.body.id}`);
      });
  });
});
