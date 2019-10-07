import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const LAYOUT_COMPONENT = [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: [...LAYOUT_COMPONENT],
  imports: [
    CommonModule
  ],
  exports: [...LAYOUT_COMPONENT]
})
export class LayoutsModule { }
