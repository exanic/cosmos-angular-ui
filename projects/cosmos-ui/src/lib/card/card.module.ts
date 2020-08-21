import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardImageComponent } from './card-image/card-image.component';

export { CardTitleComponent } from './card-title/card-title.component';
export { CardBodyComponent } from './card-body/card-body.component';
export { CardImageComponent } from './card-image/card-image.component';

const COMPONENTS = [
  CardComponent,
  CardTitleComponent,
  CardBodyComponent,
  CardImageComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class CardModule {}
