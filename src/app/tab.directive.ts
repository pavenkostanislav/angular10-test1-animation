import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNextTab]',
})
export class TabNextDirective {
  @Input() appNextTab: HTMLElement;

  @HostListener('keyup.enter', [])
  onNavigate() {
    if (!this.appNextTab) {
      return;
    }
    this.appNextTab.focus({ preventScroll: false });
    this.appNextTab.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  constructor() {}
}
