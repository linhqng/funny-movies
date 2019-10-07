import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/data/services/movie.service';
import { Movie } from 'src/app/data/schemas/movie';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listMovie: Array<Movie>;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    const self = this;
    this.movieService.findAll().subscribe((res: Array<Movie>) => {
      if (res) {
        self.listMovie = res;
      }
    });
  }

}
