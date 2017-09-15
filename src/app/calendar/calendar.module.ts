import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {components} from "./components";
import {containers} from "./containers";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...containers,
    ...components
  ],
  exports: [
    ...containers,
    ...components
  ]
})
export class CalendarModule { }
