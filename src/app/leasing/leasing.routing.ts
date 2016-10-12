import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeasingComponent } from './leasing.component';

const routes: Routes = [
  { path: '', component: LeasingComponent },
  // { path: 'leasing', component: 'LeasingComponent' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
