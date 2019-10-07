import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot, ActivatedRoute, Data, Params } from '@angular/router';

import { CredentialsService } from './credentials.service';
import { MockCredentialsService } from './credentials.service.mock';
import { AuthenticationGuard } from './authentication.guard';

describe('AuthenticationGuard', () => {
  let authenticationGuard: AuthenticationGuard;
  let credentialsService: MockCredentialsService;
  let mockRouter: any;
  let mockSnapshot: any;

  beforeEach(() => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };
    mockSnapshot = {
      provide: ActivatedRoute,
      useValue: {
        data: {
          subscribe: (fn: (value: Data) => void) => fn({
            company: '',
          }),
        },
        params: {
          subscribe: (fn: (value: Params) => void) => fn({
            tab: 0,
          }),
        },
        snapshot: {
          url: [
            {
              path: 'foo',
            },
            {
              path: 'bar',
            },
            {
              path: 'baz',
            },
          ],
        },
      },
    };

    TestBed.configureTestingModule({
      providers: [
        AuthenticationGuard,
        { provide: CredentialsService, useClass: MockCredentialsService },
        { provide: Router, useValue: mockRouter }
      ]
    });

    authenticationGuard = TestBed.get(AuthenticationGuard);
    credentialsService = TestBed.get(CredentialsService);
  });

  it('should have a canActivate method', () => {
    expect(typeof authenticationGuard.canActivate).toBe('function');
  });

  it('should return true if user is authenticated', () => {
    expect(authenticationGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot)).toBe(true);
  });

  it('should return false and redirect to login if user is not authenticated', () => {
    // Arrange
    credentialsService.credentials = null;

    // Act
    const result = authenticationGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot);

    // Assert
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/'], {
      queryParams: { redirect: undefined },
      replaceUrl: true
    });
    expect(result).toBe(false);
  });

  it('should save url as queryParam if user is not authenticated', () => {
    credentialsService.credentials = null;
    mockRouter.url = '/share';
    mockSnapshot.url = '/share';
    authenticationGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/'], {
      queryParams: { redirect: mockRouter.url },
      replaceUrl: true
    });
  });
});
