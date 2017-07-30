import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';
import {
  SignInComponent,
  SignInFormComponent
} from './index';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [
    SignInComponent,
    SignInFormComponent
  ]
})
export class AuthModule { }
