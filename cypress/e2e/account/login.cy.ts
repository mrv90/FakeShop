describe('User Login', () => {
  const fixedUrlPart = 'http://localhost:3000';

  it('Should log in a user successfully', () => {
    cy.visit(`${fixedUrlPart}/account/login`); 
    cy.get('input[name="username_or_email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('password123');
    
    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', '/dashboard'); 
  });
});
  