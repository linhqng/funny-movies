import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from './services/movie.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    MovieService
  ]
})
export class DataModule { }
