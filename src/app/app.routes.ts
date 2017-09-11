import { RouterModule, Routes } from '@angular/router';

import {
	AboutComponent,
	HomeComponent,
	WebItemComponent
} from './components/index.paginas';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'producto', component: WebItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
