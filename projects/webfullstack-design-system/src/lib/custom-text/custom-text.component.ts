import { Component, Input, OnInit } from '@angular/core';

import { BODY_VARIANT, H1_VARIANT, H2_VARIANT, H3_VARIANT } from './constants';

@Component({
  selector: 'custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.css'],
})
export class CustomTextComponent implements OnInit {
  @Input() variant: 'body' | 'h1' | 'h2' | 'h3' = BODY_VARIANT;

  get isBody(): boolean {
    return this.variant === BODY_VARIANT;
  }

  get isH1(): boolean {
    return this.variant === H1_VARIANT;
  }

  get isH2(): boolean {
    return this.variant === H2_VARIANT;
  }

  get isH3(): boolean {
    return this.variant === H3_VARIANT;
  }

  constructor() {}

  ngOnInit(): void {}
}
