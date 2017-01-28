import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensitive-data-exposure',
  templateUrl: './sensitive-data-exposure.component.html',
  styleUrls: ['./sensitive-data-exposure.component.scss']
})
export class SensitiveDataExposureComponent implements OnInit {
  private privateKey = 'THIS-IS-A-PRIVATE-KEY';
  constructor() {}

  ngOnInit() {
  }

}
