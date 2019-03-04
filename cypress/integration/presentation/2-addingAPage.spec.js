describe('Visual regression tests', () => {
  it('Should match previous screenshot "about Page"', () => {
    cy.setResolution([1920, 1080]);
    cy.visit('/#about');
    cy.matchImageSnapshot();
  });
  it('Should match previous screenshot "skills Page"', () => {
    cy.setResolution([1920, 1080]);
    cy.visit('/#skills');
    cy.matchImageSnapshot();
  });
});
