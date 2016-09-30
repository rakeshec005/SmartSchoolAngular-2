import { SmartSchoolAngular2Page } from './app.po';

describe('smart-school-angular-2 App', function() {
  let page: SmartSchoolAngular2Page;

  beforeEach(() => {
    page = new SmartSchoolAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
