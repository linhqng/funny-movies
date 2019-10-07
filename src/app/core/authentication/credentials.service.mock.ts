import { Credentials } from 'src/app/data/schemas/credentials';


export class MockCredentialsService {

  credentials: Credentials | null = {
    username: 'test',
    token: '123'
  };

  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  setCredentials(credentials?: Credentials) {
    this.credentials = credentials || null;
  }

}
