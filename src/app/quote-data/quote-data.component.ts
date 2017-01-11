import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuoteService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-data',
  templateUrl: './quote-data.component.html',
  styleUrls: ['./quote-data.component.css']
})
export class QuoteDataComponent implements OnInit {
  quoteDataForm: FormGroup;
  forzaVendita: FormControl;
  veicleType: FormControl;

  constructor(builder: FormBuilder, private quoteService: QuoteService, private router: Router) {
    this.forzaVendita = new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]);
    this.veicleType = new FormControl('', []);

    this.quoteDataForm = builder.group({
      forzaVendita: this.forzaVendita,
      veicleType: this.veicleType
    });
  }

  ngOnInit() {
    this.quoteDataForm.setValue(this.quoteService.quoteForm.quoteData);
  }

  submitQuoteData() {
    console.log(this.forzaVendita);
    console.log(this.quoteDataForm.valid);
    this.quoteService.quoteForm.quoteData = this.quoteDataForm.value;
    this.router.navigate(['/preventivo/dati-finanziamento']);
  }

  canDeactivate() {
    return this.quoteService.quoteForm.quoteData.forzaVendita;
  }
}
