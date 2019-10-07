import { TestBed, async } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';

describe('MovieService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule],
      providers: [AuthenticationService]
    })
      .compileComponents();
  }));
  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });
});
