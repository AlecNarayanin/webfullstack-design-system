import {Component, Input, OnInit} from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {

  }

  // onChange(event) {
  //   console.log(event);
  // }

}
