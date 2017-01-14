import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityComponent } from './security/security.component';
import { XsrfLandingComponent } from './xsrf-landing/xsrf-landing.component';

const routes: Routes = [
  { path: 'security', component: SecurityComponent },
  { path: 'xsrf-landing', component: XsrfLandingComponent },
  // { path: 'leasing', component: 'LeasingComponent' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
