import {TestBed, async, tick, fakeAsync} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppRoutingModule} from './app-routing.module';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        StoreModule.forRoot([]),
        EffectsModule.forRoot([])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('navigate to "" redirects you to /auth', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/auth');
  }));
});
