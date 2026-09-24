import { User } from "../types/User";

class UsersApi {
  private baseUrl = Cypress.env("apiBaseUrl");

  getUsers() {
    return cy.request<User[]>({
      method: "GET",
      url: `${this.baseUrl}/users`,
    });
  }

  getUser(userId: number) {
    return cy.request<User>({
      method: "GET",
      url: `${this.baseUrl}/users/${userId}`,
    });
  }

  createUser(user: User) {
    return cy.request({
      method: "POST",
      url: `${this.baseUrl}/users`,
      headers: {
      "Content-Type": "application/json",
      },
      body: user,
    });
  }

  getUserWithError(userId: number) {
  return cy.request<User>({
    method: "GET",
    url: `${this.baseUrl}/users/${userId}`,
    failOnStatusCode: false,
  });
}

getInvalidEndpoint() {
  return cy.request({
    method: "GET",
    url: `${this.baseUrl}/invalid-users`,
    failOnStatusCode: false,
  });
}
}

export default new UsersApi();