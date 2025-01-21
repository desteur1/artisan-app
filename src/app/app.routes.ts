import { Routes } from '@angular/router';
import { FabricationComponent } from './fabrication/fabrication.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'fabrication', component: FabricationComponent },
];
