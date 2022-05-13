import { NgModule } from '@angular/core';
import { WebfullstackDesignSystemComponent } from './webfullstack-design-system.component';
import { CardComponent } from './card/card.component';
import { ChartComponent } from './chart/chart.component';
import { DividerComponent } from './divider/divider.component';
import { FlexDivComponent } from './flex-div/flex-div.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

const COMPONENTS = [
  WebfullstackDesignSystemComponent,
  CardComponent,
  ChartComponent,
  FlexDivComponent,
  DividerComponent,
  SnackbarComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [],
  exports: [...COMPONENTS],
})
export class WebfullstackDesignSystemModule {}
