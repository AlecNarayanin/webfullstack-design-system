import { NgModule } from '@angular/core';
import { WebfullstackDesignSystemComponent} from "./webfullstack-design-system.component";
import { CardComponent } from "./card/card.component";

const COMPONENTS = [WebfullstackDesignSystemComponent, CardComponent];

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
