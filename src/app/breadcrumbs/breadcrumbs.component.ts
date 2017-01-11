import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

}
