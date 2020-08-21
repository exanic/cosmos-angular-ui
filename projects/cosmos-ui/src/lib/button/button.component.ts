import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor(private readonly elementRef: ElementRef) {
    for (const attr of ['btn btn-primary']) {
      if (this._hasHostAttributes(attr)) {
        (this._getHostElement() as HTMLElement).classList.add(attr);
        var i = 3;
      }
    }
  }

  ngOnInit() {}

  _getHostElement() {
    return this.elementRef.nativeElement;
  }

  /** Gets whether the button has one of the given attributes. */
  _hasHostAttributes(...attributes: string[]) {    return attributes.some((attribute) =>       this._getHostElement().hasAttribute(attribute)     );
  }
}
