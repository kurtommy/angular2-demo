import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  constructor( private quoteService: QuoteService) { }

  ngOnInit() {
  }

}
