import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';

const APP_ROUTE = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: 'app/auth/auth.module#AuthModule'
  }
];



export const AppRoutingModule: ModuleWithProviders = RouterModule
  .forRoot(APP_ROUTE, {useHash: true});
