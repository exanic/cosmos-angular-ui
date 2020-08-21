import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { CardModule } from './card/card.module';

export * from './button/button.module';
export * from './card/card.module';

const COMPONENT_MODULES = [ButtonModule, CardModule];

@NgModule({
  declarations: [],
  imports: [...COMPONENT_MODULES],
  exports: [...COMPONENT_MODULES],
})
export class ComponentsModule {}
