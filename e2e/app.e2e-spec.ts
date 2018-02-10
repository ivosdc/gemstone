import { GemstonePage } from './app.po';

describe('gemstone App', () => {
  let page: GemstonePage;

  beforeEach(() => {
    page = new GemstonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
