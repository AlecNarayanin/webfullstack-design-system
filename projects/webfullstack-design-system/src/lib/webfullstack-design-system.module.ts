import { NgModule } from '@angular/core';
import { WebfullstackDesignSystemComponent } from './webfullstack-design-system.component';
import { FlexDivComponent } from './flex-div/flex-div.component';
import { DividerComponent } from './divider/divider.component';



@NgModule({
  declarations: [
    WebfullstackDesignSystemComponent,
    FlexDivComponent,
    DividerComponent
  ],
  imports: [
  ],
  exports: [
    WebfullstackDesignSystemComponent
  ]
})
export class WebfullstackDesignSystemModule { }
