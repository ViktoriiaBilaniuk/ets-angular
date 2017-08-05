import {ComponentFixture, TestBed} from '@angular/core/testing';
import {InputMaterialDirective} from './input-material.directive';
import {Component, DebugElement} from '@angular/core';
import {By} from "@angular/platform-browser";


@Component({
  template: `<input type="text" etsInputMaterial>`
})
class TestInputMaterialComponent {
}

describe('Directive: Input Material', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputMaterialDirective]
    });
  });
});

describe('Directive: HoverFocus', () => {

  let component: TestInputMaterialComponent;
  let fixture: ComponentFixture<TestInputMaterialComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestInputMaterialComponent, InputMaterialDirective]
    });
    fixture = TestBed.createComponent(TestInputMaterialComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('focusin over input', () => {
    inputEl.triggerEventHandler('focusin', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.className).toBe('is-focused');
  });
});
