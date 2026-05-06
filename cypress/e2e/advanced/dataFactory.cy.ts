/**
 * Data Factory Tests — Demonstrates Faker.js integration
 * QA Pulse by SK - www.skakarh.com
 * Tags: @smoke @regression @e2e
 */
import { DataFactory } from "../../helpers/dataFactory";

describe("Data Factory — Dynamic Test Data @e2e @regression", () => {
  it("should generate unique user data on every run @smoke @e2e", () => {
    const user = DataFactory.createUser();

    cy.log(`👤 User: ${user.fullName}`);
    cy.log(`📧 Email: ${user.email}`);
    cy.log(`🔑 Password: ${user.password}`);

    expect(user.firstName).to.be.a("string").and.not.be.empty;
    expect(user.lastName).to.be.a("string").and.not.be.empty;
    expect(user.email).to.include("@");
    expect(user.password.length).to.be.gte(12);
  });

  it("should generate multiple users @regression @e2e", () => {
    const users = DataFactory.createUsers(5);
    expect(users).to.have.length(5);

    // All emails should be unique
    const emails = users.map((u) => u.email);
    const uniqueEmails = new Set(emails);
    expect(uniqueEmails.size).to.eq(5);
  });

  it("should generate post data @regression @e2e", () => {
    const post = DataFactory.createPost();

    cy.log(`📝 Post: ${post.title}`);
    expect(post.title).to.be.a("string").and.not.be.empty;
    expect(post.body).to.be.a("string").and.not.be.empty;
    expect(post.userId).to.be.a("number").and.be.gt(0);
    expect(post.tags).to.be.an("array").with.length(3);
  });

  it("should create post via API with factory data @smoke @api", () => {
    const post = DataFactory.createPost({ userId: 1 });

    cy.apiPost("/posts", { userId: post.userId, title: post.title, body: post.body })
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("id");
        cy.log(`✅ Created post with title: ${post.title}`);
      });
  });

  it("should generate address data @regression @e2e", () => {
    const address = DataFactory.createAddress();

    cy.log(`🏠 Address: ${address.fullAddress}`);
    expect(address.street).to.be.a("string").and.not.be.empty;
    expect(address.city).to.be.a("string").and.not.be.empty;
    expect(address.fullAddress).to.include(address.city);
  });

  it("should generate reproducible data with seed @regression @e2e", () => {
    DataFactory.seed(42);
    const user1 = DataFactory.createUser();

    DataFactory.seed(42);
    const user2 = DataFactory.createUser();

    // Same seed = same data
    expect(user1.email).to.eq(user2.email);
    expect(user1.firstName).to.eq(user2.firstName);
    cy.log(`🌱 Seeded user: ${user1.fullName} — ${user1.email}`);
  });

  it("should override factory data with specific values @regression @e2e", () => {
    const user = DataFactory.createUser({
      email: "qa.pulse@skakarh.com",
      firstName: "QA",
      lastName: "Pulse",
    });

    expect(user.email).to.eq("qa.pulse@skakarh.com");
    expect(user.firstName).to.eq("QA");
    expect(user.lastName).to.eq("Pulse");
    // Other fields still random
    expect(user.phone).to.be.a("string").and.not.be.empty;
  });
});
