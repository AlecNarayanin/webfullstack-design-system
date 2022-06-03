import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flex-div',
  templateUrl: './flex-div.component.html',
  styleUrls: ['./flex-div.component.scss'],
})
export class FlexDivComponent implements OnInit {
  @Input() fullWidth = false;
  @Input() fullHeight = false;
  @Input() justifyContent: string = 'start';
  @Input() direction: string = 'row';
  @Input() alignItems: string = 'start';
  @Input() wrap: string = 'nowrap';

  constructor() {}

  getClass() {
    const fullWidthClass = 'flex-div--full-width';
    const fullHeightClass = 'flex-div--full-height';

    if (this.fullWidth && this.fullHeight) {
      return `${fullWidthClass} ${fullHeightClass}`;
    }

    if (this.fullWidth) {
      return fullWidthClass;
    }

    if (this.fullHeight) {
      return fullHeightClass;
    }

    return '';
  }

  ngOnInit(): void {}
}
