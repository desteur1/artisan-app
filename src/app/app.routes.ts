import { Routes } from '@angular/router';
import { FabricationComponent } from './fabrication/fabrication.component';
import { HomeComponent } from './home/home.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { ServiceComponent } from './service/service.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'fabrication', component: FabricationComponent },
  { path: 'alimentation', component: AlimentationComponent },
  { path: 'service', component: ServiceComponent },
];
