const pages = [
  'about',
  'skills',
];

describe('Visual regression tests', () => {
  pages.forEach((page) => {
    it(`Should match previous screenshot '${page} Page' When '1920, 1080' resolution`, () => {
      cy.setResolution([1920, 1080]);
      cy.visit(`/#${page}`);
      cy.matchImageSnapshot();
    });
  });
});
