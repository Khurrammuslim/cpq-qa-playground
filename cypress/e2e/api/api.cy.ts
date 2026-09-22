describe('API Testing', () => {

  it('should get a list of users', () => {
    cy.request('https://jsonplaceholder.typicode.com/users')
      .then((response) => {

        expect(response.status).to.eq(200);

        expect(response.body)
          .to.be.an('array')
          .and.have.length.greaterThan(0);

      });
  });

  it('should return valid user data', () => {
  cy.request('https://jsonplaceholder.typicode.com/users')
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
  const newUser = {
    name: 'Khurram Muslim',
    username: 'khurram',
    email: 'khurram@example.com'
  };

  cy.request({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/users',
    body: newUser
  }).then((response) => {

    expect(response.status).to.eq(201);

    expect(response.body)
      .to.have.property('name', newUser.name);

    expect(response.body)
      .to.have.property('username', newUser.username);

    expect(response.body)
      .to.have.property('email', newUser.email);

    expect(response.body)
      .to.have.property('id');

  });
});

it('should create a user with correct request headers', () => {
  const newUser = {
    name: 'QA Automation User',
    username: 'qa_user',
    email: 'qa@example.com'
  };

  cy.request({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/users',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newUser
  }).then((response) => {

    expect(response.status).to.eq(201);

    expect(response.headers)
      .to.have.property('content-type');

    expect(response.body.name)
      .to.eq(newUser.name);

  });
});

it('should get a specific user', () => {
  const userId = 1;

  cy.request(
    'GET',
    `https://jsonplaceholder.typicode.com/users/${userId}`
  ).then((response) => {

    expect(response.status).to.eq(200);

    expect(response.body)
      .to.have.property('id', userId);

    expect(response.body)
      .to.have.property('name');

    expect(response.body)
      .to.have.property('email');

  });
});

it('should combine API validation with UI validation', () => {
  cy.request({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users/1'
  }).then((response) => {

    expect(response.status).to.eq(200);

    const user = response.body;

    expect(user).to.have.property('name');
    expect(user).to.have.property('email');

    // Continue with UI validation
    cy.visit('https://www.saucedemo.com/');

    cy.login('standard_user', 'secret_sauce');

    cy.get('[data-test="title"]')
      .should('be.visible')
      .and('have.text', 'Products');
  });
});

});