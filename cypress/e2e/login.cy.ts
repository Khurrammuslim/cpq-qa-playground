import LoginPage from '../pages/LoginPage';

describe('Login functionality', () => {

    let users: any;

    before(() => {
        cy.fixture('users').then((data) => {
            users = data;
        });
    });

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('should login successfully with valid credentials', () => {
        
        LoginPage.login(users.standardUser.username,users.standardUser.password);
        cy.url().should('include', '/inventory.html');
        cy.get('[data-test="title"]').should('be.visible').and('have.text','Products');
    });

    it('should show error for invalid credentials', () => {

        LoginPage.login(users.invalidUser.username,users.invalidUser.password);

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and(
            'contain.text',
            'Username and password do not match'
        );
    });

    it('should prevent locked out user from logging in', () => {

        LoginPage.login(users.lockedUser.username,users.lockedUser.password);

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain.text', 'locked out');
    });

    it('should logout successfully', () => {

        LoginPage.login(users.standardUser.username,users.standardUser.password);

        cy.get('#react-burger-menu-btn')
            .click();

        cy.get('[data-test="logout-sidebar-link"]')
            .click();

        cy.url()
            .should('eq', 'https://www.saucedemo.com/');
    });
});