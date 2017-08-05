import {
  Directive, HostBinding, HostListener
} from '@angular/core';

@Directive({
  selector: '[etsInputMaterial]'
})
export class InputMaterialDirective {

  constructor() {}

  @HostBinding('class.is-focused') focusedClass: boolean;

  @HostListener('focusin') onFocus() {
    this.focusedClass = true;
  }

  @HostListener('focusout') onFocusOut() {
    this.focusedClass = false;
  }
}
