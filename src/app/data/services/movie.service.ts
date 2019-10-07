import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import MovieShare from 'src/app/data/schemas/movie-share';
import { Movie } from '../schemas/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  uri = '/api/movie';
  constructor(private http: HttpClient, private handler: HttpBackend) { }

  findAll(): Observable<Array<Movie>> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get<Array<Movie>>(environment.serverUrl + this.uri, { headers });
  }

  saveMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(environment.serverUrl + this.uri, movie);
  }

  getInfoUrl(key: string): Observable<MovieShare> {
    const httpClient = new HttpClient(this.handler);
    return httpClient.get<MovieShare>
      (`${environment.apiYoutube}?key=${environment.key}&fields=${environment.fields}&part=${environment.part}&id=${key}`);
  }
}
