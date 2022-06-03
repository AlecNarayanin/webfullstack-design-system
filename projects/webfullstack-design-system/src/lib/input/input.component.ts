import {Component, Input, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type : 'text' | 'password' | 'email' | 'tel' | 'search' | 'number' = 'text';

  @Input() placeholder = 'Veuillez saisir une valeur';

  @Input() disabled = false;

  @Input() value = '';

  @Input() formControlName? = '';
  @Input() formGroup? : FormGroup;

  constructor() { }

  ngOnInit(): void {

  }


}
