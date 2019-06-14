import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CenterComponent } from './center/center.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';


const appRoutes: Routes = [
  {
  path: '',
  component: TopBarComponent
  },
  {
  path: "",
  component: CenterComponent,
  outlet: "center"
  },
  {
    path: "",
    component: BottomBarComponent,
    outlet: "bottom"
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
