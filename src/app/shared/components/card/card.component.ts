import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../data/schemas/movie';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movie: Movie;
  html: any;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.html = this.domSanitizer.bypassSecurityTrustHtml(this.movie.html);
  }

}
