import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services';

@Component({
  selector: 'app-confirm-quote',
  templateUrl: './confirm-quote.component.html',
  styleUrls: ['./confirm-quote.component.css']
})
export class ConfirmQuoteComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  confirmQuote() {
    // let currentQuote = Object.assign({}, this.quoteService.quoteForm);
    // this.quoteService.quoteForms.push(currentQuote);
    this.quoteService.quoteForms.push(this.quoteService.quoteForm);
    this.quoteService.initQuote();
  }

  ngOnInit() {
  }

}
