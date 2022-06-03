import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "./form.interface";
import { InputComponent } from "../input/input.component";
import { ButtonComponent } from "../button/button.component";

const componentMapper :any = {
  input: InputComponent,
  button: ButtonComponent,
};

@Directive({
  selector: "[dynamicField]"
})
export class FormDirective implements OnInit {
  @Input() field!: FieldConfig;
  @Input() group!: FormGroup;
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    if(this.field.type === 'input'){
      this.componentRef.instance.formGroup = this.group;
      this.componentRef.instance.formControlName = this.field.name;
    }else if(this.field.type === 'button'){
      this.componentRef.instance.label = this.field.label;
      this.componentRef.instance.type = 'submit';
    }

    if(this.field.collections){
      this.field.collections.forEach(x=>{
        this.componentRef.instance[x.key] = x.value;
      });
    }

  }
}
