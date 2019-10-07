import { Observable, of } from 'rxjs';
import UserContext from 'src/app/data/schemas/login-user';
import { Credentials } from 'src/app/data/schemas/credentials';


export class MockAuthenticationService {

  credentials: Credentials | null = {
    username: 'test',
    token: '123'
  };

  login(context: UserContext): Observable<Credentials> {
    return of({
      username: context.username,
      token: '123456'
    });
  }

  logout(): Observable<boolean> {
    this.credentials = null;
    return of(true);
  }

}
