import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Set the font size to 20px
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '20px');
  }

}

