import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { ButtonModule } from './button/button.module';
import { CardModule } from './card/card.module';

export * from './header/header.module';
export * from './button/button.module';
export * from './card/card.module';

const COMPONENT_MODULES = [HeaderModule, ButtonModule, CardModule];

@NgModule({
  declarations: [],
  imports: [...COMPONENT_MODULES],
  exports: [...COMPONENT_MODULES],
})
export class ComponentsModule {}
