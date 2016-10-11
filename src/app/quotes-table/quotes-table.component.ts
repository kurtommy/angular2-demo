import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services';

@Component({
  selector: 'app-quotes-table',
  templateUrl: './quotes-table.component.html',
  styleUrls: ['./quotes-table.component.css']
})
export class QuotesTableComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

}
