import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignInFormComponent } from './sign-in-form.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {InputComponent} from "../../../shared/components/input/input.component";

describe('SignInFormComponent', () => {
  let component: SignInFormComponent;
  let fixture: ComponentFixture<SignInFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        StoreModule.forRoot([]),
        EffectsModule.forRoot([])
      ],
      declarations: [ SignInFormComponent, InputComponent ],
      providers: [
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  // it('form invalid when empty', () => {
  //   console.log(component.signInForm.valid);
  //   expect(component.signInForm.valid).toBeFalsy();
  // });
});
