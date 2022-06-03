import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

/**
 * Composant permettant de créer des buttons personnalisés
 *
 * ## Usage
 *
 * ```ts
 * <lib-button [type]="'success'" [size]="'lg'" [disabled]="false">MonButton</lib-button>
 * ```
 */
@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: 'submit' | 'reset' | 'button' = 'button';

  @Input() buttonType : 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'warning' | 'info' = 'primary';

  @Input() size : 'sm' | 'md' | 'lg' = 'sm';

  @Input() disabled = false;

  @Input() label = '';

  @Output() handleClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Fonction permettant de déclencher l'événement click
   */
  handleClickEvent() {
    this.handleClick.emit();
  }

  /**
   * Fonction permettant de définir les caractéristiques du bouton
   */
  getCssClasses() {
    return {
      'btn': true,
      'btn--primary': this.buttonType === 'primary',
      'btn--secondary': this.buttonType === 'secondary',
      'btn--tertiary': this.buttonType === 'tertiary',
      'btn--success': this.buttonType === 'success',
      'btn--danger': this.buttonType === 'danger',
      'btn--warning': this.buttonType === 'warning',
      'btn--info': this.buttonType === 'info',
      'btn--sm': this.size === 'sm',
      'btn--md': this.size === 'md',
      'btn--lg': this.size === 'lg',
    };
  }
}
