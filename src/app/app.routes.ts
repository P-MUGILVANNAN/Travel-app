import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DestinationComponent } from './pages/destination/destination/destination.component';
import { CustomComponent } from './pages/customized tour/custom/custom.component';
import { GroupComponent } from './pages/Group tour/group/group.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'custom', component: CustomComponent },
  { path: 'group', component: GroupComponent }
];

export const routerProviders = [
  provideRouter(routes)
];
