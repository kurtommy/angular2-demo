import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
})
export class SecurityComponent implements OnInit {
  isLogged = false;
  showAttack = 1;
  constructor() {
    // document.cookie = 'secure-key=this is a secure key';
    document.cookie = 'XSRF-TOKEN=!@#!@; secure-key=this is a secure key';
    console.log(document.cookie);
  }

  ngOnInit() { }

}
