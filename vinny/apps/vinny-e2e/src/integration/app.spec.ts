import { getGreeting } from '../support/app.po';

describe('vinny', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Vinny - The future of crypto marketplaces.');
  });
});
