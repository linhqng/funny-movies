import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './components/card/card.component';

const SHARED_COMPONENT = [
  CardComponent
];
@NgModule({
  declarations: [
    ...SHARED_COMPONENT
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    ...SHARED_COMPONENT
  ]
})
export class SharedModule { }
