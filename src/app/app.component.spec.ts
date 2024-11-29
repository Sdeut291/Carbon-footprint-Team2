import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  it('should instantiate the component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'carbon-footprint-team2'`, () => {
    expect(component.title).toBe('carbon-footprint-team2');
  });
});
