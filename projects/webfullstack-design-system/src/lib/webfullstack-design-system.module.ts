import { NgModule } from '@angular/core';
import { WebfullstackDesignSystemComponent} from "./webfullstack-design-system.component";
import { CardComponent } from "./card/card.component";
import { ChartComponent } from './chart/chart.component';
import { DatatableComponent } from './datatable/datatable.component';

const COMPONENTS = [WebfullstackDesignSystemComponent, CardComponent, ChartComponent , DatatableComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class WebfullstackDesignSystemModule { }
