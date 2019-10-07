import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layouts/header/header.component';
import { FooterComponent } from '../layouts/footer/footer.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TypicodeInterceptor } from './interceptors/typicode.interceptors';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CredentialsService } from './authentication/credentials.service';
import { AuthenticationService } from './authentication/authentication.service';
import { MovieService } from '../data/services/movie.service';
import { MatIconModule } from '@angular/material/icon';

const CORE_COMPONENT = [
  HeaderComponent,
  FooterComponent
];
@NgModule({
  declarations: [...CORE_COMPONENT],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [...CORE_COMPONENT],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TypicodeInterceptor,
      multi: true
    },
    CredentialsService,
    AuthenticationService,
    MovieService
  ]
})
export class CoreModule { }
