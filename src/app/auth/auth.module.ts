import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';
import {
  SignInComponent,
  SignInFormComponent,
  JwtService,
  AuthEffects
} from './index';
import {reducers} from './reducers/index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [
    SignInComponent,
    SignInFormComponent
  ],
  providers: [
    JwtService
  ]
})
export class AuthModule { }
