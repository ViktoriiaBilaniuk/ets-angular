import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent, AuthService } from './index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SignInComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
