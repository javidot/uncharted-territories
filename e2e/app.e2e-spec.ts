import { UnchartedTerritoriesPage } from './app.po';

describe('uncharted-territories App', () => {
  let page: UnchartedTerritoriesPage;

  beforeEach(() => {
    page = new UnchartedTerritoriesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
