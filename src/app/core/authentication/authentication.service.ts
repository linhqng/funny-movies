import { Injectable } from '@angular/core';
import { Observable, of, Observer } from 'rxjs';

import { CredentialsService } from './credentials.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import UserContext from 'src/app/data/schemas/login-user';
import { Credentials } from 'src/app/data/schemas/credentials';

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private uri = '/authenticate';

  constructor(private credentialsService: CredentialsService, private httpClient: HttpClient) { }

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: UserContext): Observable<Credentials> {
    const self = this;
    // tslint:disable-next-line: deprecation
    return Observable.create((observer: Observer<Credentials>) => {
      self.httpClient.post(environment.serverUrl + this.uri, context)
        .subscribe((data: Credentials) => {
          if (data) {
            self.credentialsService.setCredentials({ ...data, username: context.username });
            observer.next(data);
          }
        });
    });
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }

}
