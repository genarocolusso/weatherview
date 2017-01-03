import { WeatherviewAppPage } from './app.po';

describe('weatherview-app App', function() {
  let page: WeatherviewAppPage;

  beforeEach(() => {
    page = new WeatherviewAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
