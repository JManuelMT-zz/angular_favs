import { ClienteAngular2Page } from './app.po';

describe('cliente-angular2 App', () => {
  let page: ClienteAngular2Page;

  beforeEach(() => {
    page = new ClienteAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
