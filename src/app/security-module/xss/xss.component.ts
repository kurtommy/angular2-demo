import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrls: ['./xss.component.scss']
})
export class XssComponent implements OnInit {
  response: any;
  trustedUrl: SafeUrl;
  trustedResourceUrl: SafeResourceUrl;

  constructor(private http: Http, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.http.get('http://w5bpr2hc8mjekzbdf-mock.stoplight-proxy.io/api/v1/xss')
      .subscribe(val => {
        this.response = val.json();
        this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.response.url);
        this.trustedResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.response.resourceUrl);
      });
  }
}
