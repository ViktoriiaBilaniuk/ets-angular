import {
  Directive, ElementRef, Input, OnInit, Renderer2, TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[etsInputMaterial]'
})
export class InputMaterialDirective implements OnInit {

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {}

  ngOnInit() {
    this.hostElement.nativeElement.addEventListener('focusin', (e) => {
      e.preventDefault();
      this.renderer.addClass(
        this.hostElement.nativeElement.parentElement,
        'is-focused'
      );
    });

    this.hostElement.nativeElement.addEventListener('focusout', () => {
      this.renderer.removeClass(
        this.hostElement.nativeElement.parentElement,
        'is-focused'
      );
    })
  }
}
