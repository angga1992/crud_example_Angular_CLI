import { TryPage } from './app.po';

describe('try App', () => {
  let page: TryPage;

  beforeEach(() => {
    page = new TryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
