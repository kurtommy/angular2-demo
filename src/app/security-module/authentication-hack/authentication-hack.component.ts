import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-authentication-hack',
  templateUrl: './authentication-hack.component.html',
  styleUrls: ['./authentication-hack.component.scss']
})
export class AuthenticationHackComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('/get-secret-data').subscribe();
  }
}
