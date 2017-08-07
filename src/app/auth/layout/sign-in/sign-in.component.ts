import { Component, OnInit } from '@angular/core';
import {Authenticate} from '../../../models/Authenticate.model';
import {Store} from '@ngrx/store';
import * as Auth from '../../actions/auth.action';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(public store: Store<any>) { }

  ngOnInit() {
  }

  login(user: Authenticate) {
    this.store.dispatch(new Auth.Login(user));
  }

}
