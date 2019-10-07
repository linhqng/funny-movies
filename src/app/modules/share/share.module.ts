import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './pages/share/share.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [ShareComponent],
  imports: [
    CommonModule,
    ShareRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ]
})
export class ShareModule { }
