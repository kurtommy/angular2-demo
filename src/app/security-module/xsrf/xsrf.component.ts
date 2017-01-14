import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-xsrf',
  templateUrl: './xsrf.component.html',
  styleUrls: ['./xsrf.component.scss']
})
export class XsrfComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit() {
    this.http.get('http://localhost:4200/xsrf-landing').subscribe();
  }
}
