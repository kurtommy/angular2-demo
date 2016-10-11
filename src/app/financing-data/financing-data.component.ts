import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuoteService } from '../services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-financing-data',
  templateUrl: './financing-data.component.html',
  styleUrls: ['./financing-data.component.css']
})
export class FinancingDataComponent implements OnInit {
  financingDataForm: FormGroup;
  financingType: FormControl;
  financingTypes: Array<any> = ['Finanziamento 1', 'Finanziamento 2', 'Finanziamento 3'];
  materialType: FormControl;
  materialTypes: Array<any> = ['Veicolo multiuso nuovo', 'Veicolo nuovo'];
  contractType: FormControl;

  constructor(builder: FormBuilder, private quoteService: QuoteService, private router: Router) {
    this.financingType = new FormControl('', [Validators.required]);
    this.materialType = new FormControl('', [Validators.required]);
    this.contractType = new FormControl('', [Validators.required]);

    this.financingDataForm = builder.group({
      financingType: this.financingType,
      contractType: this.contractType,
      material: builder.group({
        materialType: this.materialType
      })
    });
  }

  ngOnInit() {
    this.financingDataForm.setValue(this.quoteService.quoteForm.financingData);
  }

  submitFinancingData() {
    // console.log(this.financingDataForm.value);
    this.quoteService.quoteForm.financingData = this.financingDataForm.value;
    this.router.navigate(['/preventivo/conferma-preventivo']);
  }
}
