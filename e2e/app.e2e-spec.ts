import { CollatePage } from './app.po';

describe('collate App', function() {
  let page: CollatePage;

  beforeEach(() => {
    page = new CollatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
