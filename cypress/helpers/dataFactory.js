// @ts-check
const { faker } = require("@faker-js/faker");

/**
 * Test Data Factory — Dynamic test data generation using Faker.js
 * QA Pulse by SK - www.skakarh.com
 *
 * Usage:
 *   const { DataFactory } = require("../helpers/dataFactory.js");
 *   const user = DataFactory.createUser();
 */

class DataFactory {
  static createUser(overrides = {}) {
    const firstName = faker.person.firstName();
    const lastName  = faker.person.lastName();
    return {
      firstName,
      lastName,
      fullName:  `${firstName} ${lastName}`,
      email:     faker.internet.email({ firstName, lastName }).toLowerCase(),
      username:  faker.internet.username({ firstName, lastName }).toLowerCase(),
      password:  faker.internet.password({ length: 12, memorable: false }),
      phone:     faker.phone.number(),
      avatar:    faker.image.avatar(),
      ...overrides,
    };
  }

  /** @param {number} count */
  static createUsers(count, overrides = {}) {
    return Array.from({ length: count }, () => DataFactory.createUser(overrides));
  }

  static createPost(overrides = {}) {
    return {
      title:  faker.lorem.sentence(),
      body:   faker.lorem.paragraphs(2),
      userId: faker.number.int({ min: 1, max: 10 }),
      tags:   faker.helpers.arrayElements(["tech", "qa", "automation", "testing", "cypress", "javascript"], 3),
      ...overrides,
    };
  }

  static createAddress(overrides = {}) {
    const street  = faker.location.streetAddress();
    const city    = faker.location.city();
    const state   = faker.location.state();
    const country = faker.location.country();
    const zipCode = faker.location.zipCode();
    return {
      street, city, state, country, zipCode,
      fullAddress: `${street}, ${city}, ${state} ${zipCode}, ${country}`,
      ...overrides,
    };
  }

  static createProduct(overrides = {}) {
    return {
      name:        faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price:       parseFloat(faker.commerce.price({ min: 1, max: 1000 })),
      category:    faker.commerce.department(),
      sku:         faker.string.alphanumeric(8).toUpperCase(),
      ...overrides,
    };
  }

  static createCard(overrides = {}) {
    return {
      number:     faker.finance.creditCardNumber(),
      cvv:        faker.finance.creditCardCVV(),
      expiry:     faker.date.future().toLocaleDateString("en-US", { month: "2-digit", year: "2-digit" }),
      cardHolder: faker.person.fullName(),
      ...overrides,
    };
  }

  static randomEmail()                    { return faker.internet.email().toLowerCase(); }
  static randomUsername()                 { return faker.internet.username().toLowerCase(); }
  static randomPassword(len = 12)         { return faker.internet.password({ length: len }); }
  static randomPhone()                    { return faker.phone.number(); }
  static randomUrl()                      { return faker.internet.url(); }
  static randomSentence()                 { return faker.lorem.sentence(); }
  static randomParagraph()                { return faker.lorem.paragraph(); }
  static randomNumber(min = 1, max = 100) { return faker.number.int({ min, max }); }
  static randomUUID()                     { return faker.string.uuid(); }
  static randomDate()                     { return faker.date.recent(); }
  static randomPastDate()                 { return faker.date.past(); }
  static randomFutureDate()               { return faker.date.future(); }
  static randomBoolean()                  { return faker.datatype.boolean(); }
  static randomAlpha(len = 8)             { return faker.string.alpha(len); }
  static randomAlphaNumeric(len = 8)      { return faker.string.alphanumeric(len); }

  /** @param {number} value */
  static seed(value) { faker.seed(value); }
}

module.exports = { DataFactory };
