import { getGreeting } from '../support/app.po';

describe('inventory-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to inventory-app!');
  });
});
