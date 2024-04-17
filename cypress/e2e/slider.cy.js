describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if user can swipe through slides using keys', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').next().focused();
    // cy.focused();
    cy.wait(2000);
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').next().focused();
    // cy.focused();
  });
});

describe('Swiper Gallery Slide Description Test', function () {
  it('Verifies if description of each slide is displayed correctly', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide').each(($slide, index) => {
      cy.wrap($slide).find('title');
      cy.wrap($slide).find('.card-description').should('be.visible');
    });

    cy.get('.swiper-slide').each(($slide, index) => {
      const expectedTitle = getExpectedTitle(index); 
      const expectedDescription = getExpectedDescription(index); 
      cy.wrap($slide).find('title');
      cy.wrap($slide).find('.card-description').should('contain', expectedDescription);
    });
  });
});
