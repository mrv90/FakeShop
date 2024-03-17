describe('Password Reset', () => {
  const fixedUrlPart = 'http://localhost:3000';

  it('Should reset user password successfully', () => {
    cy.visit(`${fixedUrlPart}/reset-password`); // Assuming /forgot-password is your forgot password page
    cy.get('input[password="email"]').type('12345');
    cy.get('input[password="email"]').type('12345');

    cy.get('button[type="submit"]').click();

    cy.contains('password reset email sent').should('be.visible');
    cy.url().should('include', '/dahsboard'); 
    // Check email inbox for password reset instructions or mock email server response
  });
});
  