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

  @Input() type = 'primary';

  @Input() size = 'sm';

  @Input() disabled = false;

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
      'btn-primary': this.type === 'primary',
      'btn-secondary': this.type === 'secondary',
      'btn-tertiary': this.type === 'tertiary',
      'btn-success': this.type === 'success',
      'btn-danger': this.type === 'danger',
      'btn-warning': this.type === 'warning',
      'btn-info': this.type === 'info',
      'btn-sm': this.size === 'sm',
      'btn-md': this.size === 'md',
      'btn-lg': this.size === 'lg',
    };
  }
}
