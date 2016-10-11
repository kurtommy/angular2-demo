import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { QuoteFormDeactivateGuard } from './shared';
import { LoginGuard } from './shared';

import { Angular2DemoRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { QuoteComponent } from './quote/quote.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LeasingComponent } from './leasing/leasing.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { QuoteDataComponent } from './quote-data/quote-data.component';
import { FinancingDataComponent } from './financing-data/financing-data.component';
import { ConfirmQuoteComponent } from './confirm-quote/confirm-quote.component';

import { QuoteService } from './services';
import { UserService } from './services';

import { ProtectedAreaComponent } from './protected-area/protected-area.component';
import { QuotesTableComponent } from './quotes-table/quotes-table.component';
import { LoginComponent } from './login/login.component';
import { ReservedAreaComponent } from './reserved-area/reserved-area.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    QuoteComponent,
    SidebarComponent,
    LeasingComponent,
    BreadcrumbsComponent,
    QuoteDataComponent,
    FinancingDataComponent,
    ConfirmQuoteComponent,
    ProtectedAreaComponent,
    QuotesTableComponent,
    LoginComponent,
    ReservedAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule,
    Angular2DemoRoutingModule
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
