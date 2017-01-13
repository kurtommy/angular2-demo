import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  { path: 'security', component: SecurityComponent },
  // { path: 'leasing', component: 'LeasingComponent' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
