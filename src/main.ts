import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routerProviders } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [routerProviders]
})
.catch(err => console.error(err));
