import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from './card/card.component';
import { ChartComponent } from './chart/chart.component';
import { DividerComponent } from './divider/divider.component';
import { FlexDivComponent } from './flex-div/flex-div.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ButtonComponent } from './button/button.component';
import { DatatableComponent } from './datatable/datatable.component';
import { InputComponent } from "./input/input.component";
import {CommonModule} from "@angular/common";
import { FormComponent } from './form/form.component';
import {FormDirective} from "./form/form.directive";

const COMPONENTS = [
  CardComponent,
  ChartComponent,
  FlexDivComponent,
  DividerComponent,
  DatatableComponent,
  SnackbarComponent,
  ButtonComponent,
  InputComponent,
  FormComponent,
  FormDirective
];

@NgModule({
  declarations: [...COMPONENTS , ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [...COMPONENTS],
})
export class WebfullstackDesignSystemModule {}
