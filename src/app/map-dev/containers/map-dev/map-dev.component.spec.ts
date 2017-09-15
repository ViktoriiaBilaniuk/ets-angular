import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDevComponent } from './map-dev.component';

describe('MapDevComponent', () => {
  let component: MapDevComponent;
  let fixture: ComponentFixture<MapDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
