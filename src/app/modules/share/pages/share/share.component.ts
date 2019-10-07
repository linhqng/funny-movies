import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/data/services/movie.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CredentialsService } from 'src/app/core/authentication/credentials.service';
import { Movie } from 'src/app/data/schemas/movie';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  formShare: FormGroup;

  constructor(private fb: FormBuilder, private movieService: MovieService, private credential: CredentialsService) { }

  ngOnInit() {
    this.formShare = this.fb.group({
      url: ['', [Validators.required]]
    });
  }

  onShare() {
    const { url } = this.formShare.value;
    const self = this;
    if (url.split('?') && url.split('?')[1]) {
      const searchParam = new URLSearchParams(url.split('?')[1]);
      this.movieService.getInfoUrl(searchParam.get('v')).subscribe((data) => {
        if (data && data.items && data.items.length) {
          const [item] = data.items;
          const movie: Movie = {
            description: item.snippet.description,
            html: item.player.embedHtml,
            title: item.snippet.title,
            username: this.credential.credentials.username
          };
          self.movieService.saveMovie(movie).subscribe(rs => {
            console.log(rs);
          });
        }
      });
    }
  }
}
