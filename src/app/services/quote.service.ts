import { Injectable } from '@angular/core';
import { QuoteForm } from '../shared';
import { Headers, Http } from '@angular/http';

@Injectable()
export class QuoteService {
  quoteForm: QuoteForm;
  quoteForms: Array<QuoteForm> = [];

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
    this.initQuote();
  }

  initQuote() {
    this.quoteForm = new QuoteForm();
    // console.log(this.quoteForm);
  }

  saveQuotes() {
    const url = `www.lol.it`;
    return this.http
      .post(url, JSON.stringify(this.quoteForms), {headers: this.headers})
      .toPromise()
      .then()
      .catch(() => {
        console.error('Api error management');
      });
  }

}
