import { Component, OnInit,} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-insecure-login',
  templateUrl: './insecure-login.component.html',
  styleUrls: ['./insecure-login.component.scss'] 
})
export class InsecureLoginComponent implements OnInit {

  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;
  secureLoginForm: FormGroup;
  secureUsername: FormControl;
  securePassword: FormControl;

  constructor(private builder: FormBuilder, private http: Http) {
    this.username = new FormControl('', []);
    this.password = new FormControl('', []);

    this.loginForm = builder.group({
      username: this.username,
      password: this.password
    });

    this.secureUsername = new FormControl('', [Validators.required, Validators.pattern('[a-zA-z]*')]);
    this.securePassword = new FormControl('', [Validators.required]);

    this.secureLoginForm = builder.group({
      secureUsername: this.secureUsername,
      securePassword: this.securePassword
    });
  }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value);
    this.http.post('login', this.loginForm.value).subscribe();
  }

  secureLogin() {
    console.log(this.secureLoginForm.value);
    this.http.post('login', this.loginForm.value).subscribe();
  }
}
