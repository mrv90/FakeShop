describe('User Registration', () => {
  const fixedUrlPart = 'http://localhost:3000';

  it('Should register a new user successfully', () => {
    cy.visit(`${fixedUrlPart}/account/register`); 
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('input[name="confirm-password"]').type('password123');
    
    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', '/dashboard');
  });
});