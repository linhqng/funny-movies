import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import UserContext from 'src/app/data/schemas/login-user';
import { CredentialsService } from '../../core/authentication/credentials.service';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  formLogin: FormGroup;
  isLogin: boolean;
  isLoading: boolean;

  constructor(private fb: FormBuilder,
              private auth: AuthenticationService,
              public credential: CredentialsService,
              private router: Router) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.isLogin = this.credential.isAuthenticated();
  }

  onLogin() {
    const self = this;
    this.isLoading = true;
    const user: UserContext = this.formLogin.value;
    this.auth.login(user).subscribe(res => {
      if (res) {
        this.isLogin = true;
      }
      self.isLoading = false;
    });
  }

  onLogout() {
    const self = this;
    this.auth.logout().subscribe(res => {
      self.isLogin = false;
      self.router.navigateByUrl('');
    });
  }

  navigateToShare() {
    this.router.navigateByUrl('/share');
  }

  navigateToHome() {
    this.router.navigateByUrl('/');
  }
}
