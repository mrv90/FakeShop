describe('Send Code', () => {
  const fixedUrlPart = 'http://localhost:3000';

  it('Should be able send email to emailbox', () => {
    cy.visit(`${fixedUrlPart}/account/send-code`); 
    cy.get('input[name="email"]').type('testuser@example.com');
    
    cy.get('button[type="submit"]').click();
    
    cy.contains('verification code just send to your mailbox').should('be.visible');
    cy.url().should('include', '/account/verify-code'); 
  });
});