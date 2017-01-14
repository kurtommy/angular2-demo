import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-missing-function-level-access-control',
  templateUrl: './missing-function-level-access-control.component.html',
  styleUrls: ['./missing-function-level-access-control.component.scss']
})
export class MissingFunctionLevelAccessControlComponent implements OnInit {
  disableInput = true;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('/get-secret-data').subscribe();
  }

}
