import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(builder: FormBuilder, private router: Router, private userService: UserService) {
    this.username = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);

    this.loginForm = builder.group({
      username: this.username,
      password: this.password
    });
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.loginForm.value);
    this.router.navigate(['/area-riservata']);
  }

  logout() {
    this.userService.logout();
  }

}
