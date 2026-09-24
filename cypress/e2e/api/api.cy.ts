const apiBaseUrl = Cypress.env("apiBaseUrl");
import UsersApi from "cypress/service/UsersApi.ts";
import { User } from "cypress/types/User.ts";
import { createUser } from "cypress/factories/userFactory.ts";

describe('API Testing', () => {

  it('should get a list of users', () => {
    UsersApi.getUsers().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it('should return valid user data', () => {
  cy.request(`${apiBaseUrl}/users`)
    .then((response) => {

      expect(response.status).to.eq(200);

      const user = response.body[0];

      expect(user).to.have.property('id');
      expect(user).to.have.property('name');
      expect(user).to.have.property('email');

      expect(user.id).to.be.a('number');
      expect(user.name).to.be.a('string');
      expect(user.email).to.be.a('string');
    });
});

it('should create a new user', () => {
  const newUser = createUser();

  UsersApi.createUser(newUser).then((response) => {
    expect(response.status).to.eq(201);
    expect(response.body.name).to.eq(newUser.name);
    expect(response.body.username).to.eq(newUser.username);
    expect(response.body.email).to.eq(newUser.email);
    expect(response.body).to.have.property("id");
  });
});

it('should create a user with correct request headers', () => {
  const newUser: User= {
    name: 'QA Automation User',
    username: 'qa_user',
    email: 'qa@example.com'
  };

    UsersApi.createUser(newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq(newUser.name);
      expect(response.headers).to.have.property('content-type');
    });
});

it('should get a specific user', () => {
  UsersApi.getUser(1).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property("id");
    expect(response.body).to.have.property("name");
    expect(response.body).to.have.property("email");
  });
});

it('should combine API validation with UI validation', () => {
  UsersApi.getUser(1).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property("id", 1);
    expect(response.body).to.have.property("name");
    expect(response.body).to.have.property("email");
  });

    // Continue with UI validation
    cy.visit('https://www.saucedemo.com/');

    cy.login('standard_user', 'secret_sauce');

    cy.get('[data-test="title"]')
      .should('be.visible')
      .and('have.text', 'Products');
  });

  it("should create a user with custom test data", () => {
    const newUser = createUser({
      name: "Senior QA Engineer",
      username: "seniorqa",
      email: "seniorqa@example.com",
    });

    UsersApi.createUser(newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq(newUser.name);
      expect(response.body.email).to.eq(newUser.email);
    });
  });

  it("should return 404 for a non-existing user", () => {
  UsersApi.getUserWithError(9999).then((response) => {
    expect(response.status).to.eq(404);
  });
});

it("should return 404 for an invalid endpoint", () => {
  UsersApi.getInvalidEndpoint().then((response) => {
    expect(response.status).to.eq(404);
  });
});

it("should return users matching the expected contract", () => {
  UsersApi.getUsers().then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.be.an("array");

    response.body.forEach((user) => {
      expect(user).to.have.all.keys(
        "id",
        "name",
        "username",
        "email",
        "address",
        "phone",
        "website",
        "company"
      );

      expect(user.id).to.be.a("number");
      expect(user.name).to.be.a("string");
      expect(user.username).to.be.a("string");
      expect(user.email).to.be.a("string");
    });
  });
});

it("should return a user with the expected data types", () => {
  UsersApi.getUser(1).then((response) => {
    expect(response.status).to.eq(200);

    expect(response.body).to.have.property("id");
    expect(response.body).to.have.property("name");
    expect(response.body).to.have.property("username");
    expect(response.body).to.have.property("email");

    expect(response.body.id).to.be.a("number");
    expect(response.body.name).to.be.a("string");
    expect(response.body.username).to.be.a("string");
    expect(response.body.email).to.be.a("string");
  });
});
});
