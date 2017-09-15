import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: 'app/auth/auth.module#AuthModule',
  },
  {
    path: 'calendar',
    loadChildren: 'app/auth/auth.module#AuthModule',
  },
  {
    path: 'map',
    loadChildren: 'app/map-dev/map-dev.module#MapDevModule',
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
