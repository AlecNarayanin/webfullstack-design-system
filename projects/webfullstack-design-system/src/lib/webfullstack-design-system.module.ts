import { NgModule } from '@angular/core';
import { WebfullstackDesignSystemComponent } from './webfullstack-design-system.component';
import { CardComponent } from './card/card.component';
import { ChartComponent } from './chart/chart.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DividerComponent } from './divider/divider.component';
import { FlexDivComponent } from './flex-div/flex-div.component';

const COMPONENTS = [
  WebfullstackDesignSystemComponent,
  CardComponent,
  ChartComponent,
  FlexDivComponent,
  DividerComponent,
  DatatableComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [],
  exports: [...COMPONENTS],
})
export class WebfullstackDesignSystemModule {}
