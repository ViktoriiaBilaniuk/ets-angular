import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {LoginUser} from '../../../models';

@Component({
  selector: 'ets-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
  public signInForm: FormGroup;
  @Output() loggedIn: EventEmitter<LoginUser> = new EventEmitter<LoginUser>();

  constructor(private fb: FormBuilder,
              private store: Store<any>) {
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.signInForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required
      ]]
    });
  }

  public submit(form: FormGroup) {
    if (form.valid) {
      this.loggedIn.emit(new LoginUser(
        form.value.email,
        form.value.password
      ));
    }
    return false;
  }

}
