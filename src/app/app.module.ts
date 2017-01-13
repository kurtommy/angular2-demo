import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { QuoteFormDeactivateGuard } from './shared';
import { LoginGuard, UsernamePipe } from './shared';


import { Angular2DemoRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { QuoteComponent } from './quote/quote.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { QuoteDataComponent } from './quote-data/quote-data.component';
import { FinancingDataComponent } from './financing-data/financing-data.component';
import { ConfirmQuoteComponent } from './confirm-quote/confirm-quote.component';

import { QuoteService } from './services';
import { UserService } from './services';

import { QuotesTableComponent } from './quotes-table/quotes-table.component';
import { LoginComponent } from './login/login.component';
import { ReservedAreaComponent } from './reserved-area/reserved-area.component';

import { SecurityModule } from './security-module/security.module';


// Leasing Module
// import { LeasingModule } from './leasing/leasing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule,
    Angular2DemoRoutingModule,
    SecurityModule
    // LeasingModule
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    QuoteComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    QuoteDataComponent,
    FinancingDataComponent,
    ConfirmQuoteComponent,
    QuotesTableComponent,
    LoginComponent,
    ReservedAreaComponent,
    UsernamePipe
  ],
  providers: [
    QuoteService,
    UserService,
    QuoteFormDeactivateGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
