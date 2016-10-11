import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
import { LoginComponent } from './login/login.component';
import { ReservedAreaComponent } from './reserved-area/reserved-area.component';
import { QuotesTableComponent } from './quotes-table/quotes-table.component';
import { QuoteDataComponent } from './quote-data/quote-data.component';
import { FinancingDataComponent } from './financing-data/financing-data.component';
import { ConfirmQuoteComponent } from './confirm-quote/confirm-quote.component';

import { QuoteFormDeactivateGuard } from './shared';
import { LoginGuard } from './shared';

const routes: Routes = [
  { path: '', redirectTo: 'preventivo', pathMatch: 'full' },
  { path: 'preventivo', component: QuoteComponent,
    children: [
      { path: '', redirectTo: 'dati-preventivo', pathMatch: 'full' },
      { path: 'dati-preventivo', component: QuoteDataComponent, canDeactivate: [QuoteFormDeactivateGuard]},
      { path: 'dati-finanziamento', component: FinancingDataComponent },
      { path: 'conferma-preventivo', component: ConfirmQuoteComponent }
    ]
  },
  { path: 'elenco-preventivi', component: QuotesTableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'area-riservata', component: ReservedAreaComponent , canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Angular2DemoRoutingModule { }
