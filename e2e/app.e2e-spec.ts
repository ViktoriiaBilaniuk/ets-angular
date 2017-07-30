import { EtsAngularPage } from './app.po';

describe('ets-angular App', () => {
  let page: EtsAngularPage;

  beforeEach(() => {
    page = new EtsAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
