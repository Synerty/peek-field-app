import { PeekClientFePage } from './app.po';

describe('peek-client-fe App', function() {
  let page: PeekClientFePage;

  beforeEach(() => {
    page = new PeekClientFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
