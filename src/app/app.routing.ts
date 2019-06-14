import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';


const appRoutes: Routes = [
  {
  path: '',
  component: TopBarComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
