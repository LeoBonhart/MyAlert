import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSmoothHeight]'
})
export class SmoothHeightDirective {

  @Input() appSmoothHeight;

  @Input() right: boolean;

  @Input() reverse: boolean;

  constructor(private element: ElementRef<HTMLElement>) {
  }

  @HostBinding('@alert') get alert() {
    const el = this.element.nativeElement.children[0] as HTMLElement;
    const maxHeight = el.offsetHeight + 20;
    const right = this.right === false ? '-' : '';
    const reverse = this.reverse === true ? -maxHeight : 0;
    return { value: 'flyIn', params: { maxHeight, right, reverse} };
  }

}
