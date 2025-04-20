import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [{
    path:'',
    component: LandingComponent
},
{
    path:'contact',
    component:FormComponent
}
];
