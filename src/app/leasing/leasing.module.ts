import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LeasingComponent } from './leasing.component';
import { routing } from './leasing.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    LeasingComponent
  ],
  providers: [],
  exports: [LeasingComponent]
})
export class LeasingModule { }
