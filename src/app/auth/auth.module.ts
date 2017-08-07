import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';
import {
  SignInComponent,
  SignInFormComponent
} from './index';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './effects/auth.effect';
import {reducer} from './reducers/auth.reducer';
import {JwtService} from './services';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducer),
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
