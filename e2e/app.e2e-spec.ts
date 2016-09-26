import { Angular2EmojiPage } from './app.po';

describe('angular2-emoji App', function() {
  let page: Angular2EmojiPage;

  beforeEach(() => {
    page = new Angular2EmojiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
