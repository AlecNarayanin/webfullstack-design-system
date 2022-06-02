import {Component, EventEmitter, forwardRef, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {AbstractControl, ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
})
export class InputComponent implements ControlValueAccessor,OnInit {

  @Input() type : 'text' | 'password' | 'email' | 'tel' | 'search' | 'number' = 'text';

  @Input() placeholder = 'Veuillez saisir une valeur';

  @Input() disabled = false;

  @Input() value = '';

  @Input() minLength = 0;

  @Input() maxLength = 10;

  @Input() formControlName = '';

  control!: AbstractControl;

  @Output() valueChange = new EventEmitter<string>();

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {

    if(this.controlContainer && this.formControlName){
      // this.control = this.controlContainer.control.get(this.formControlName);
    }

  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.valueChange.emit();
    console.log(changes);
  }


  writeValue(obj: any) {
    debugger
    this.value = obj;
  }

  registerOnChange(fn: any) {
    debugger
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    debugger
    // this.valueChange.subscribe(fn);
  }

}
