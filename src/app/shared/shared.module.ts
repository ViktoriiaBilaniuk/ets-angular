import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {
  HeaderComponent,
  InputMaterialDirective,
  InputComponent
} from './index';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    InputMaterialDirective,
    InputComponent
  ],
  exports: [
    HeaderComponent,
    InputMaterialDirective,
    InputComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
