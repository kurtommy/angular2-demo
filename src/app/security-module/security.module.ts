import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { routing } from './security.routing';
import { SecurityComponent } from './security/security.component';
import { InsecureLoginComponent } from './insecure-login/insecure-login.component';
import { AuthenticationHackComponent } from './authentication-hack/authentication-hack.component';
import { XssComponent } from './xss/xss.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ReactiveFormsModule
  ],
  declarations: [
    SecurityComponent,
    InsecureLoginComponent,
    AuthenticationHackComponent,
    XssComponent
  ],
  providers: [],
  exports: [SecurityComponent]
})
export class SecurityModule { }
