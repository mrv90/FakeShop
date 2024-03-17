describe('Verify Code', () => {
  const fixedUrlPart = 'http://localhost:3000';
  
  it('Should be abe to enter proper code and be redirected to reset password', () => {
    cy.visit(`${fixedUrlPart}/account/verify-code`); 
    cy.get('input[name="code"]').type('testuser@example.com');
    
    cy.get('button[type="submit"]').click();
    
    cy.contains('verification succeeded').should('be.visible');
    cy.url().should('include', '/account/reset-password'); 
  });
});
