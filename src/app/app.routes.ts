import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { FormComponent } from './components/form/form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AgreementComponent } from './components/landing/agreement/agreement.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'contact',
    component: FormComponent,
  },
  {
    path: 'agreement',
    component: AgreementComponent,
  },
  { 
    path: '404',
    component: NotFoundComponent 
  }, // Додайте явний маршрут
  { 
    path: '**',
    redirectTo: '404' 
  },
];
