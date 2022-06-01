import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ChartComponent } from './chart/chart.component';
import { DividerComponent } from './divider/divider.component';
import { FlexDivComponent } from './flex-div/flex-div.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ButtonComponent } from './button/button.component';
import { DatatableComponent } from './datatable/datatable.component';
import { BrowserModule } from '@angular/platform-browser';
import { InputComponent } from "./input/input.component";

const COMPONENTS = [
  CardComponent,
  ChartComponent,
  FlexDivComponent,
  DividerComponent,
  DatatableComponent,
  SnackbarComponent,
  ButtonComponent,
  InputComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [BrowserModule],
  exports: [...COMPONENTS],
})
export class WebfullstackDesignSystemModule {}
