describe('Visual regression tests', () => {
  it('Should match previous screenshot "about Page" When "1920, 1080" resolution', () => {
    cy.setResolution([1920, 1080]);
    cy.visit('/#about');
    cy.matchImageSnapshot();
  });
});
