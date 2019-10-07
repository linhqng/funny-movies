import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CredentialsService } from '../authentication/credentials.service';
import { Credentials } from 'src/app/data/schemas/credentials';

@Injectable()
export class TypicodeInterceptor implements HttpInterceptor {
    credentialsKey = 'credentials';

    constructor(private credentialsService: CredentialsService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req.clone({
            headers: req.headers.set('Content-Type', 'application/json')
        });
        if (this.credentialsService.isAuthenticated()) {
            const credential: Credentials = this.credentialsService.credentials;
            authReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + credential.token)
            });
        }

        return next.handle(authReq);
    }
}
