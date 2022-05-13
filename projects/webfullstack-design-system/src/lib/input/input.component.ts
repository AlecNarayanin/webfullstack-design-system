import {Component, Input, OnInit} from '@angular/core';
enum enumType { text, password , email, number, tel, url, search, color, date, datetime, datetimeLocal, month, range, time, week }
@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type = enumType;
  @Input() placeholder = 'Veuillez saisir une valeur';
  constructor() { }

  ngOnInit(): void {
  }

}
