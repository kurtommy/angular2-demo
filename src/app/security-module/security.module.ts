import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './security.routing';
import { SecurityComponent } from './security/security.component';
import { InsecureLoginComponent } from './insecure-login/insecure-login.component';
import { XssComponent } from './xss/xss.component';
import { SensitiveDataExposureComponent } from './sensitive-data-exposure/sensitive-data-exposure.component';
import { MissingFunctionLevelAccessControlComponent } from 
    './missing-function-level-access-control/missing-function-level-access-control.component';
import { XsrfComponent } from './xsrf/xsrf.component';
import { XsrfLandingComponent } from './xsrf-landing/xsrf-landing.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SecurityComponent,
    InsecureLoginComponent,
    XssComponent,
    SensitiveDataExposureComponent,
    MissingFunctionLevelAccessControlComponent,
    XsrfComponent,
    XsrfLandingComponent
  ],
  providers: [],
  exports: [SecurityComponent]
})
export class SecurityModule { }
