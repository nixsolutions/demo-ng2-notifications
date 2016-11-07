import { NgStartPage } from './app.po';

describe('ng-start App', function() {
  let page: NgStartPage;

  beforeEach(() => {
    page = new NgStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
