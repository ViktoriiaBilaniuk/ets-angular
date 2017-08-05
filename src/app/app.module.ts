import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {JwtService} from './shared';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([])
  ],
  providers: [
    JwtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
