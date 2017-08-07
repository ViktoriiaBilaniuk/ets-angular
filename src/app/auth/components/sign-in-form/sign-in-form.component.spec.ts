import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignInFormComponent } from './sign-in-form.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {InputComponent} from '../../../shared/components/input/input.component';
import {Authenticate} from '../../../models/Authenticate.model';

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

  it('form invalid when empty', () => {
    expect(component.signInForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let email = component.signInForm.controls['email'];
    expect(email.valid).toBeFalsy();

    email.setValue('test@test.com');
    expect(email.valid).toBeTruthy();
  });

  it('password field validity', () => {
    let password = component.signInForm.controls['password'];
    expect(password.valid).toBeFalsy();

    password.setValue('1');
    expect(password.valid).toBeTruthy();
  });

  it('submitting a form emits a user', () => {
    expect(component.signInForm.valid).toBeFalsy();
    component.signInForm.controls['email'].setValue('test@test.com');
    component.signInForm.controls['password'].setValue('123456789');
    expect(component.signInForm.valid).toBeTruthy();

    let user: Authenticate;
    // Subscribe to the Observable and store the user in a local variable.
    component.loggedIn.subscribe((value) => user = value);

    // Trigger the login function
    component.submit(component.signInForm);

    // Now we can check to make sure the emitted value is correct
    expect(user.email).toBe('test@test.com');
    expect(user.password).toBe('123456789');
  });


});
